import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-gray-900">RMax</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-500">Home</Link>
            <div className="relative group">
              <Link to="/features" className="text-gray-700 hover:text-red-500">Features</Link>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-red-500">Pricing</Link>
            <div className="relative group">
              <Link to="/support" className="text-gray-700 hover:text-red-500">Support</Link>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-red-500">Login</Link>
            <Link 
              to="/try-free" 
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
            >
              Try For Free
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};