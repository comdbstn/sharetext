import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            공유문자
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/event" className="text-gray-600 hover:text-primary-500">
              이벤트
            </Link>
            <a
              href="http://pf.kakao.com/_CYGdn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
            >
              시작하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 
