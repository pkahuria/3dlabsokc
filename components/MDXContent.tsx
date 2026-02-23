import Link from "next/link";
import Image from "next/image";

interface MDXContentProps {
  content: string;
}

// Simple markdown to HTML converter for basic blog posts
// This handles common markdown patterns without requiring full MDX compilation
function parseMarkdown(content: string): string {
  let html = content;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-serif text-text-primary mt-8 mb-4">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-serif text-text-primary mt-10 mb-4">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-serif text-text-primary mt-8 mb-6">$1</h1>');

  // Bold and Italic
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/gim,
    '<a href="$2" class="text-accent hover:underline">$1</a>'
  );

  // Unordered Lists
  html = html.replace(/^\- (.*$)/gim, '<li class="ml-6 list-disc text-text-secondary">$1</li>');

  // Tables (basic support)
  html = html.replace(/\|(.+)\|/gim, (match) => {
    const cells = match.split('|').filter(cell => cell.trim());
    const isHeader = match.includes('---');
    if (isHeader) return '';

    const cellHtml = cells.map(cell =>
      `<td class="px-4 py-2 border border-border">${cell.trim()}</td>`
    ).join('');
    return `<tr>${cellHtml}</tr>`;
  });

  // Code blocks (inline)
  html = html.replace(/`([^`]+)`/gim, '<code class="px-1.5 py-0.5 bg-slate-100 rounded text-sm font-mono">$1</code>');

  // Paragraphs - wrap non-tagged content
  const lines = html.split('\n');
  const processedLines = lines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<')) return line;
    if (trimmed.startsWith('-')) return line;
    return `<p class="text-text-secondary leading-relaxed mb-4">${trimmed}</p>`;
  });

  html = processedLines.join('\n');

  // Wrap consecutive list items
  html = html.replace(
    /(<li[^>]*>.*<\/li>\n?)+/gim,
    '<ul class="my-4 space-y-2">$&</ul>'
  );

  return html;
}

export default function MDXContent({ content }: MDXContentProps) {
  const htmlContent = parseMarkdown(content);

  return (
    <div
      className="prose prose-slate max-w-none"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
