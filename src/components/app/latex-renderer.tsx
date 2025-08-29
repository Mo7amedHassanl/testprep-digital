"use client";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexRendererProps {
  content: string;
}

export function LatexRenderer({ content }: LatexRendererProps) {
  if (!content) {
    return null;
  }
  
  // This regex is designed to capture three types of segments:
  // 1. Block math environments: $$...$$
  // 2. LaTeX environments: \begin{...}...\end{...}
  // 3. Inline math: $...$
  // 4. Any other text (including newlines) that is not one of the above.
  const regex = /(\$\$[\s\S]*?\$\$|\\begin\{[\s\S]*?\\end\{[\s\S]*?\}|\$[\s\S]*?\$|[\s\S]+?(?=\$\$|\\begin\{|\$|$))/g;

  const parts = content.match(regex) || [];

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math: $$...$$
          return <BlockMath key={index} math={part.slice(2, -2).trim()} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math: $...$
          return <InlineMath key={index} math={part.slice(1, -1).trim()} />;
        }
        if (part.startsWith('\\begin{')) {
            // LaTeX environments like tabular
            return <BlockMath key={index} math={part.trim()} />;
        }
        // Regular text
        return <span key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br/>') }} />;
      })}
    </>
  );
}
