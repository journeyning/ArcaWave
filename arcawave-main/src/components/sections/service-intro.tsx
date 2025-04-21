'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI 큐레이터',
    description: '사용자의 취향과 공간을 분석하여 최적의 작품을 추천하는 AI 큐레이터 시스템'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'AR 배치 시각화',
    description: '실제 공간에 작품을 배치해볼 수 있는 AR 기술로 구매 전 시각화 경험 제공'
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '원클릭 쇼핑',
    description: '복잡한 과정 없이 마음에 드는 작품을 바로 구매할 수 있는 심플한 쇼핑 경험'
  }
]

const ServiceIntro = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            AR 기반 XR 아트 쇼핑 플랫폼
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ArcaWave는 실감형 기술을 통해 예술 작품과 일상 공간의 경계를 허물고, 누구나 쉽게 예술을 소유할 수 있는 혁신적인 플랫폼입니다.
          </p>
        </div>

        {/* 특징 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 앱 미리보기 이미지 */}
        <div className="mt-20 text-center">
          <div className="relative h-[500px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            {/* 실제 앱 스크린샷이나 AR 데모 이미지로 교체 필요 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
              <p className="text-xl font-medium text-slate-500">AR 아트 쇼핑 경험 미리보기</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-slate-500">AR 기능을 활용한 실제 공간 속 작품 배치 시뮬레이션</p>
        </div>
      </div>
    </section>
  )
}

export default ServiceIntro