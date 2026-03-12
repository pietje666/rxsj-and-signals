import { ChangeDetectionStrategy, Component, ViewEncapsulation, effect, input, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'example-code',
  templateUrl: './example-code.html',
  styleUrl: './example-code.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ExampleCode {
  public readonly title = input<string>('Code');
  public readonly templatePath = input<string>('');
  public readonly componentPath = input<string>('');

  public readonly templateCode = signal('');
  public readonly componentCode = signal('');
  public readonly templateCodeHtml = signal<SafeHtml>('');
  public readonly componentCodeHtml = signal<SafeHtml>('');
  public readonly isLoading = signal(false);
  public readonly loadError = signal('');

  constructor(private sanitizer: DomSanitizer) {
    effect(() => {
      const templatePath = this.templatePath();
      const componentPath = this.componentPath();

      if (!templatePath || !componentPath) {
        return;
      }

      void this.loadCode(templatePath, componentPath);
    });
  }

  private async loadCode(templatePath: string, componentPath: string): Promise<void> {
    this.isLoading.set(true);
    this.loadError.set('');

    try {
      const [templateResponse, componentResponse] = await Promise.all([
        fetch(templatePath),
        fetch(componentPath)
      ]);

      if (!templateResponse.ok || !componentResponse.ok) {
        throw new Error('Code fetch failed');
      }

      const [templateText, componentText] = await Promise.all([
        templateResponse.text(),
        componentResponse.text()
      ]);

      this.templateCode.set(templateText);
      this.componentCode.set(this.stripImports(componentText));
      this.templateCodeHtml.set(
        this.sanitizer.bypassSecurityTrustHtml(this.highlightHtml(templateText))
      );
      this.componentCodeHtml.set(
        this.sanitizer.bypassSecurityTrustHtml(this.highlightTs(this.stripImports(componentText)))
      );
    } catch {
      this.loadError.set('Unable to load the example code.');
      this.templateCode.set('');
      this.componentCode.set('');
      this.templateCodeHtml.set('');
      this.componentCodeHtml.set('');
    } finally {
      this.isLoading.set(false);
    }
  }

  private stripImports(componentText: string): string {
    return componentText
      .split('\n')
      .filter(line => !line.trimStart().startsWith('import '))
      .join('\n')
      .trimStart();
  }

  private highlightHtml(source: string): string {
    const escaped = this.escapeHtml(source);

    const withComments = escaped.replace(
      /(&lt;!--[\s\S]*?--&gt;)/g,
      '<span class="tok-comment">$1</span>'
    );

    return withComments.replace(
      /(&lt;\/?)([a-zA-Z0-9-]+)([^&]*?)(\/?&gt;)/g,
      (_match, open, tag, attrs, close) => {
        const highlightedAttrs = attrs.replace(
          /([\w:-]+)(=)(&quot;[^&]*?&quot;|'[^']*?'|[^\s&]+)?/g,
          (_attrMatch: string, name: string, eq: string, value?: string) => {
            const highlightedValue = value
              ? value.replace(/(&quot;[^&]*?&quot;|'[^']*?')/g, '<span class="tok-string">$1</span>')
              : '';
            return `<span class="tok-attr">${name}</span>${eq}${highlightedValue}`;
          }
        );

        return `${open}<span class="tok-tag">${tag}</span>${highlightedAttrs}${close}`;
      }
    );
  }

  private highlightTs(source: string): string {
    const escaped = this.escapeHtml(source);
    const tokenRegex = /(\/\*[\s\S]*?\*\/|\/\/[^\n]*|&quot;[^&]*?&quot;|'[^']*?'|`[^`]*?`|\b\d+(?:\.\d+)?\b|\b(class|const|let|var|function|return|public|private|protected|readonly|async|await|if|else|for|while|switch|case|break|new|extends|implements|interface|type|export)\b|\b(true|false|null|undefined)\b|@[A-Za-z0-9_]+)/g;

    return escaped.replace(tokenRegex, (match) => {
      if (match.startsWith('/*') || match.startsWith('//')) {
        return `<span class="tok-comment">${match}</span>`;
      }
      if (match.startsWith('&quot;') || match.startsWith('&#39;') || match.startsWith('`')) {
        return `<span class="tok-string">${match}</span>`;
      }
      if (match.startsWith('@')) {
        return `<span class="tok-decorator">${match}</span>`;
      }
      if (/^\b\d/.test(match)) {
        return `<span class="tok-number">${match}</span>`;
      }
      if (/^(true|false|null|undefined)$/.test(match)) {
        return `<span class="tok-literal">${match}</span>`;
      }
      return `<span class="tok-keyword">${match}</span>`;
    });
  }

  private escapeHtml(source: string): string {
    return source
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
}
