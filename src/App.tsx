import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Share2, DollarSign, Shield } from 'lucide-react'
import { Navbar } from './components/navigation/Navbar'
import { Footer } from './components/layout/Footer'
import { EventPage } from './pages/EventPage'
import { Analytics } from '@vercel/analytics/react'

function MainPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-20">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.2),transparent_70%)]" />
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
              className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-indigo-600/20 to-transparent blur-3xl"
            />
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-bold mb-6"
              >
                안 쓰는 문자로<br />
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  수익 창출
                </span>하세요
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-300 mb-8"
              >
                버려지는 문자를 재활용하고<br />
                매월 현금으로 돌려받으세요
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href="http://pf.kakao.com/_CYGdn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-colors"
                >
                  지금 시작하기
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 특징 섹션 */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <Share2 className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">간편한 공유</h3>
                <p className="text-gray-300">앱만 설치하면 자동으로 문자가 공유됩니다</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <DollarSign className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">현금 페이백</h3>
                <p className="text-gray-300">공유된 문자 수만큼 포인트가 쌓이고 현금으로 전환</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
              >
                <Shield className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">안전한 사용</h3>
                <p className="text-gray-300">정보통신망법과 개인정보보호법을 준수합니다</p>
              </motion.div>
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