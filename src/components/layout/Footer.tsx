export function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">공유문자</h3>
            <p className="text-gray-400">
              안쓰는 문자를 공유하고<br />
              매월 현금으로 돌려받으세요
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">문의</h4>
            <a
              href="http://pf.kakao.com/_CYGdn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              카카오톡 채널
            </a>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white mb-4">법적 고지</h4>
            <p className="text-gray-400">
              © 2024 공유문자. All rights reserved.<br />
              관련법령을 준수합니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 
