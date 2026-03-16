import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col max-w-5xl mx-auto p-4 md:p-8">
      {/* Hide navbar on home path */}
      {!isHomePage && (
        <nav className="flex justify-end items-center mb-12 pb-4">
        <div className="flex gap-4 md:gap-8 text-lg md:text-xl font-title text-sm">
          <Link to="/" className="hover:bg-black hover:text-white px-2 py-1 lowercase transition-colors">Home</Link>
          <Link to="/about" className="hover:bg-black hover:text-white px-2 py-1 lowercase transition-colors">About</Link>
          <Link to="/blog" className="hover:bg-black hover:text-white px-2 py-1 lowercase transition-colors">Blog</Link>
        </div>
        </nav>
      )}

        <main className={`flex-grow ${isHomePage ? 'flex' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </main>
{/* 
        <footer className="mt-16 pt-6 pb-4 text-center text-lg">
          <p>&copy; {new Date().getFullYear()} Muzaffar. All rights reserved.</p>
        </footer> */}
      </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
