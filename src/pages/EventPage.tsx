import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

export function EventPage() {
  return (
    <>
      <Analytics />
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        <section className="relative min-h-[60vh] flex items-center pt-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,195,0,0.15),transparent_70%)]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-bold mb-6"
              >
                앱 설치 알바 이벤트
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                시간과 장소에 구애받지 않고<br />
                자유롭게 수익을 만드세요
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video mb-12">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cPEXIWyJY5M"
                  title="공유문자 소개 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-lg"
                ></iframe>
              </div>

              <div className="bg-primary-50 p-8 rounded-2xl mb-12">
                <h2 className="text-3xl font-bold mb-6">이벤트 상세 내용</h2>
                <div className="space-y-4 text-gray-600">
                  <p>• 기간: 상시 모집</p>
                  <p>• 대상: 만 18세 이상 누구나</p>
                  <p>• 수익: 앱 설치 1건당 10,000원</p>
                  <p>• 정산: 매주 금요일 일괄 정산</p>
                  <p>• 활동 방법:</p>
                  <ul className="list-disc pl-8 space-y-2">
                    <li>주변 지인들에게 앱 설치 안내</li>
                    <li>SNS를 통한 앱 홍보</li>
                    <li>오프라인 홍보 활동</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h3>
                <p className="text-gray-600 mb-6">
                  카카오톡 채널로 문의하시면<br />
                  상세한 활동 방법과 수익 창출 노하우를 안내해드립니다.
                </p>
                <div className="flex justify-center">
                  <a
                    href="http://pf.kakao.com/_CYGdn/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
                  >
                    카카오톡으로 문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 
