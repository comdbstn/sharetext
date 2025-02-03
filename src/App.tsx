import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Share2, DollarSign, Clock, MapPin, Star, Shield, CheckCircle2, ArrowRight } from 'lucide-react'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/layout/Footer'
import { EventPage } from './pages/EventPage'
import { Analytics } from '@vercel/analytics/react'

function MainPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[80vh] flex items-center pt-20 bg-gradient-to-b from-primary-50 to-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,195,0,0.15),transparent_70%)]" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-primary-200/20 via-primary-300/20 to-transparent blur-3xl"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                시간과 장소 무관<br />
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  앱 설치 알바
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-8"
              >
                주변 지인에게 앱을 소개하고<br />
                설치 건당 10,000원의 수익을 만드세요
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="https://open.kakao.com/o/g2RM7Ybh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
                >
                  지금 시작하기
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 후킹 섹션 */}
        <section className="py-24 bg-primary-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  앱 설치 홍보 활동으로<br />부수입 만들기
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-4xl font-bold text-primary-500 mb-2">10,000원</p>
                  <p className="text-gray-600">앱 설치 1건당<br />활동비</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-4xl font-bold text-primary-500 mb-2">25일</p>
                  <p className="text-gray-600">다음달<br />정산</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <p className="text-4xl font-bold text-primary-500 mb-2">자유</p>
                  <p className="text-gray-600">시간/장소<br />무관</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-50 p-8 rounded-2xl"
              >
                <Share2 className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">간편한 홍보</h3>
                <p className="text-gray-600">주변 지인들에게 앱을 소개하고 설치하도록 안내하세요</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-50 p-8 rounded-2xl"
              >
                <DollarSign className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">높은 수익</h3>
                <p className="text-gray-600">설치 1건당 10,000원, 100건 설치시 100만원의 수익</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-50 p-8 rounded-2xl"
              >
                <Clock className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">자유로운 시간</h3>
                <p className="text-gray-600">원하는 시간에 자유롭게 활동하세요</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary-50 p-8 rounded-2xl"
              >
                <MapPin className="w-12 h-12 text-primary-500 mb-6" />
                <h3 className="text-xl font-bold mb-4">장소 무관</h3>
                <p className="text-gray-600">어디서든 활동할 수 있는 자유로운 알바</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 신뢰도 섹션 */}
        <section className="py-24 bg-gradient-to-b from-white to-primary-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  안전한 활동 보장
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start mb-6">
                    <Shield className="w-12 h-12 text-primary-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">투명한 정산 시스템</h3>
                      <p className="text-gray-600">
                        앱 설치 현황을 실시간으로 확인할 수 있으며,<br />
                        매월 25일에 정산됩니다.
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2" />
                      실시간 설치 현황 확인
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2" />
                      안전한 계좌 입금 시스템
                    </li>
                    <li className="flex items-center text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 mr-2" />
                      1:1 전담 매니저 배정
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl shadow-lg"
                >
                  <div className="flex items-start mb-6">
                    <Star className="w-12 h-12 text-primary-500 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">파트너 이야기</h3>
                      <p className="text-gray-600">
                        실제 활동 중인 파트너들의<br />
                        경험담을 들어보세요.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-600 mb-2">
                        "평소 SNS 활동이 많아 지인들에게 앱을 소개하기 좋았어요. 틈틈이 활동하면서 용돈벌이로 딱이에요!"
                      </p>
                      <p className="text-sm text-primary-600 font-semibold">대학생 김** 파트너</p>
                    </div>
                    <div className="p-4 bg-primary-50 rounded-lg">
                      <p className="text-gray-600 mb-2">
                        "육아로 바빠서 시간이 불규칙한데, 자유롭게 활동할 수 있어서 좋아요."
                      </p>
                      <p className="text-sm text-primary-600 font-semibold">주부 이** 파트너</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 활동 방법 섹션 */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-16">
                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                  이렇게 진행됩니다
                </span>
              </h2>
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8"
                >
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1 bg-primary-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-2">카카오톡으로 문의하기</h3>
                    <p className="text-gray-600">
                      카카오톡 채널로 문의하시면 상세한 활동 방법과 수익 창출 노하우를 안내해드립니다.<br />
                      실시간 상담을 통해 궁금하신 점을 바로 해결해드립니다.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8"
                >
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1 bg-primary-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-2">앱 설치 안내하기</h3>
                    <p className="text-gray-600">
                      주변 지인들에게 앱을 소개하고 설치를 도와드립니다.<br />
                      SNS나 오프라인에서 자유롭게 홍보 활동을 진행하세요.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8"
                >
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1 bg-primary-50 p-6 rounded-2xl">
                    <h3 className="text-xl font-bold mb-2">매월 25일 정산</h3>
                    <p className="text-gray-600">
                      설치 건당 10,000원의 활동비가 지급됩니다.<br />
                      다음달 25일에 정산되어 안정적인 수익을 얻을 수 있습니다.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="py-24 bg-primary-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-center mb-16">자주 묻는 질문</h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-3">Q. 정산은 어떻게 이루어지나요?</h3>
                  <p className="text-gray-600">
                    매월 25일에 정산이 이루어집니다. 앱 설치 건당 활동비가 지급되며,
                    등록하신 계좌로 안전하게 입금됩니다.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-3">Q. 활동 시간은 자유롭게 선택할 수 있나요?</h3>
                  <p className="text-gray-600">
                    네, 자유롭게 활동하실 수 있습니다. 본인의 일정에 맞춰
                    원하는 시간에 활동이 가능합니다.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-3">Q. 특별한 자격요건이 필요한가요?</h3>
                  <p className="text-gray-600">
                    만 18세 이상이라면 참여하실 수 있습니다. 스마트폰 사용에 익숙하고
                    주변 지인들과 소통하는 것을 좋아하시는 분이라면 더욱 좋습니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,195,0,0.15),transparent_70%)]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                지금 시작해보세요
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                앱 설치 홍보 활동으로<br />
                부수입을 만들어보세요
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <a
                  href="https://open.kakao.com/o/g2RM7Ybh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors group"
                >
                  카카오톡으로 문의하기
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 이벤트 섹션 */}
        <section className="py-24 bg-primary-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                앱 설치 홍보 이벤트
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="aspect-video mb-8"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/cPEXIWyJY5M"
                  title="앱 설치 홍보 활동 소개 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-2xl shadow-lg"
                ></iframe>
              </motion.div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">앱 설치 홍보 활동</h3>
                <p className="text-gray-600 mb-6">
                  주변 지인들에게 앱을 소개하고<br />
                  설치를 안내하는 활동입니다.<br />
                  시간과 장소에 구애받지 않고 자유롭게 활동하세요!
                </p>
                <div className="flex justify-center">
                  <a
                    href="https://open.kakao.com/o/g2RM7Ybh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors"
                  >
                    상세 내용 문의하기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <Analytics />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/event" element={<EventPage />} />
      </Routes>
    </Router>
  )
}

export default App 