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
  
  // This regex will split the string by $...$ and $$...$$ delimiters
  const regex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|[^$]+)/g;
  const parts = content.match(regex) || [];

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math for $$...$$
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math for $...$
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        // Regular text, handling newline characters
        return <span key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br/>') }} />;
      })}
    </>
  );
}
