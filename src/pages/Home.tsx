import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center px-4">
      <h1 className="font-title text-4xl md:text-6xl mb-12 tracking-widest uppercase pointer-events-none">
        <img src='image.svg' alt='Muzaffar' className='w-[480px] h-auto mx-auto mb-4' /> 
      </h1>

      <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full max-w-md justify-center">
        <Link
          to="/about"
          className="px-6 py-3 text-xl md:text-2xl font-title lowercase hover:bg-black hover:text-white transition-colors w-full sm:w-auto text-center"
        >
          About
        </Link>
        <Link
          to="/blog"
          className="px-6 py-3 text-xl md:text-2xl font-title lowercase hover:bg-black hover:text-white transition-colors w-full sm:w-auto text-center"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
