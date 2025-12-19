"use client";

import { motion } from 'framer-motion';
import { useEffect, useState, CSSProperties } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownRendererProps {
  slug: string;
}

const MarkdownRenderer = ({ slug }: MarkdownRendererProps) => {
  // console.log('Rendering MarkdownRenderer for slug:', slug);  
  const [markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');

  useEffect(() => {
    // console.log(`Fetching markdown for slug: ${slug}`);
    if (!slug) return;
    fetch(`/${slug}.md`)
      .then(res => res.text())
      .then(text => {
        // console.log(`Loaded markdown for ${slug}:`, text);
        setMarkdown(text);
        const match = text.match(/^#\s(.+)/);
        if (match) {
          setTitle(match[1]);
        } else {
          const fallbackTitle = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          setTitle(fallbackTitle);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(`Error loading markdown for ${slug}:`, err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#16f2b3]"></div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-sm sm:prose-base md:prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h1:text-2xl sm:prose-h1:text-3xl
            prose-h2:text-xl sm:prose-h2:text-2xl
            prose-h3:text-lg sm:prose-h3:text-xl
            prose-p:text-gray-300 prose-p:leading-relaxed
            prose-a:text-[#16f2b3] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-pink-400 prose-code:bg-[#1a1a2e] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs sm:prose-code:text-sm
            prose-pre:bg-[#1a1a2e] prose-pre:border prose-pre:border-[#1b2c68a0] prose-pre:text-xs sm:prose-pre:text-sm
            prose-blockquote:border-l-[#16f2b3] prose-blockquote:text-gray-400
            prose-ul:text-gray-300 prose-ol:text-gray-300
            prose-li:text-gray-300"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    style={{ ...vscDarkPlus } as { [key: string]: CSSProperties }}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {markdown}
          </ReactMarkdown>
        </motion.article>
      </motion.div>
    </div>
  );
};

export default MarkdownRenderer;