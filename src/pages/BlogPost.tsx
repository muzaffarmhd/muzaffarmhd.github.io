import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { blogs } from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const blogMeta = blogs.find(b => b.id === id);

  useEffect(() => {
    if (blogMeta) {
      fetch(blogMeta.file)
        .then(res => {
          if (!res.ok) throw new Error('Failed to load blog post');
          return res.text();
        })
        .then(text => {
          setContent(text);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError('Blog post not found');
      setLoading(false);
    }
  }, [blogMeta]);

  if (loading) return <div className="text-3xl animate-pulse font-title text-center mt-20">Loading...</div>;
  if (error) return <div className="text-3xl text-red-900 font-title text-center mt-20">Error: {error}</div>;

  return (
    <article className="max-w-4xl mx-auto px-4">
      <Link to="/blog" className="inline-block mb-10 hover:bg-black hover:text-white lowercase font-title text-lg pb-1 px-2 transition-colors">
        &lt; Back
      </Link>
      <div className="mb-12 pb-6">
        <h1 className="font-title text-2xl md:text-4xl mb-6 leading-tight">{blogMeta?.title}</h1>
        <div className="text-xl opacity-80 font-title">{blogMeta?.date}</div>
      </div>
      <div className="markdown-body text-xl leading-relaxed">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}
