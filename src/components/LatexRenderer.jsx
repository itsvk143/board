import React, { useMemo } from 'react';
import katex from 'katex';

/**
 * Parses a string containing LaTeX markers ($...$ for inline, $$...$$ for display)
 * and renders clean HTML using KaTeX.
 */
export default function LatexRenderer({ content = '', className = '', inline = false }) {
  const renderedElements = useMemo(() => {
    if (!content || typeof content !== 'string') return null;

    if (!content.includes('$')) {
      return <span>{content}</span>;
    }

    const elements = [];
    let lastIndex = 0;
    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
    let match;
    let keyCounter = 0;

    while ((match = regex.exec(content)) !== null) {
      const matchIndex = match.index;
      if (matchIndex > lastIndex) {
        const textBefore = content.substring(lastIndex, matchIndex);
        elements.push(<span key={`txt-${keyCounter++}`}>{textBefore}</span>);
      }

      const rawFormula = match[0];
      const isDisplay = rawFormula.startsWith('$$');
      const formula = isDisplay
        ? rawFormula.slice(2, -2).trim()
        : rawFormula.slice(1, -1).trim();

      try {
        const html = katex.renderToString(formula, {
          displayMode: isDisplay,
          throwOnError: false,
          output: 'htmlAndMathml',
        });
        elements.push(
          <span
            key={`math-${keyCounter++}`}
            className={isDisplay ? 'katex-display-wrapper' : 'katex-inline-wrapper'}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch (err) {
        elements.push(
          <code key={`err-${keyCounter++}`} className="katex-fallback">
            {rawFormula}
          </code>
        );
      }

      lastIndex = matchIndex + rawFormula.length;
    }

    if (lastIndex < content.length) {
      elements.push(<span key={`txt-end`}>{content.substring(lastIndex)}</span>);
    }

    return elements;
  }, [content]);

  if (inline) {
    return <span className={`latex-inline-container ${className}`}>{renderedElements}</span>;
  }

  return <div className={`latex-container ${className}`}>{renderedElements}</div>;
}
