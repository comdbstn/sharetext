import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            공유문자
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/event" className="text-gray-300 hover:text-white transition-colors">
              이벤트
            </Link>
            <a
              href="http://pf.kakao.com/_CYGdn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 
