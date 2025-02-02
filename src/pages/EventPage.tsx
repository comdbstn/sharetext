import React from 'react';
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
      <main className="min-h-screen bg-black text-white">
        {/* 히어로 섹션 */}
        <section className="relative min-h-[80vh] flex items-center pt-20">
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
                앱 설치하고<br />
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
                공유문자 앱 설치 영업으로<br />
                매월 안정적인 수익을 만들어보세요
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
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 수익 설명 섹션 */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-8">
                실제 수익 사례
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-purple-400 mb-4">600만원</p>
                  <p className="text-gray-300">시나*** 회원님의<br />월 평균 수익</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-indigo-400 mb-4">450만원</p>
                  <p className="text-gray-300">sang*** 회원님의<br />월 평균 수익</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="py-24 relative overflow-hidden">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-500 to-indigo-500 bg-clip-text text-transparent"
              >
                지금 바로 시작하세요
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12"
              >
                앱 설치 영업 아르바이트로<br />
                쉽고 빠르게 수익을 만들어보세요
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex justify-center"
              >
                <a
                  href="http://pf.kakao.com/_CYGdn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-10 py-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-bold text-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center">
                    카카오톡으로 지원하기
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 