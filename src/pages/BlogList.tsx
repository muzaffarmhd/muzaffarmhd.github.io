import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

export default function BlogList() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="font-title text-2xl md:text-4xl mb-10 lowercase inline-block pb-2">
        articles
      </h1>
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <article key={blog.id} className="border-4 border-black p-5 md:p-8 hover:bg-black hover:text-white group transition-colors cursor-pointer relative">
            <Link to={`/blog/${blog.id}`} className="block absolute inset-0 z-10">
              <span className="sr-only">Read {blog.title}</span>
            </Link>
            <h2 className="font-title text-xl md:text-2xl mb-3 leading-tight">{blog.title}</h2>
            <div className="text-lg mb-4 opacity-80 group-hover:opacity-100 font-title text-sm">{blog.date}</div>
            <p className="text-xl leading-relaxed">{blog.description}</p>
            <div className="mt-6 font-title text-sm uppercase border-t-2 border-current pt-4 inline-block">
              Read More &gt;
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
