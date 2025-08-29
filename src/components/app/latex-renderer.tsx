"use client";

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

interface LatexRendererProps {
  content: string;
}

export function LatexRenderer({ content }: LatexRendererProps) {
  // Regex to find content enclosed in $...$ for inline math
  // or $$...$$ for block math. It handles nested delimiters.
  const regex = /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g;
  const parts = content.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math: $$...$$
          return <BlockMath key={index} math={part.slice(2, -2)} />;
        }
        if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math: $...$
          return <InlineMath key={index} math={part.slice(1, -1)} />;
        }
        // Regular text
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}
