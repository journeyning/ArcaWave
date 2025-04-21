'use client'

import { motion } from 'framer-motion'

const businessModels = [
  {
    icon: (
      <svg className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '작품 판매 커미션',
    description: '작가와 갤러리의 작품을 판매하고 수수료를 수취하는 전통적인 마켓플레이스 모델',
    percentage: '15-25%'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
    title: '브랜드 스폰서십',
    description: '브랜드와 기업의 AR 아트 스폰서십을 통한 마케팅 파트너십 및 브랜딩 수익',
    percentage: '20-30%'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    title: '구독형 서비스',
    description: '프리미엄 작품 대여 및 AI 큐레이션 서비스를 제공하는 월정액 구독 모델',
    percentage: '25-35%'
  },
  {
    icon: (
      <svg className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'B2B 공간 컨설팅',
    description: '기업 및 호텔 등 상업 공간을 위한 맞춤형 아트 컬렉션 구성 및 배치 컨설팅',
    percentage: '30-40%'
  }
]

const BusinessSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              비즈니스 모델
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              작가와 컬렉터, 기업 모두에게 가치를 제공하는 다각화된 수익 구조
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessModels.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm flex"
            >
              <div className="mr-6 flex-shrink-0">
                {model.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{model.title}</h3>
                <p className="text-slate-600 mb-4">{model.description}</p>
                <div className="flex items-center">
                  <span className="text-sm font-medium">매출 기여도:</span>
                  <div className="ml-2 bg-slate-100 h-6 w-36 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        index === 0 ? 'bg-blue-500' : 
                        index === 1 ? 'bg-purple-500' : 
                        index === 2 ? 'bg-pink-500' : 'bg-amber-500'
                      }`}
                      style={{ width: model.percentage.split('-')[1] }}
                    ></div>
                  </div>
                  <span className="ml-2 text-sm text-slate-500">{model.percentage}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 수익 전망 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white rounded-xl shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold mb-4 text-center">수익 전망</h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-500 mb-2">+175%</div>
              <p className="text-sm text-slate-600">연간 매출 성장률</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500 mb-2">32%</div>
              <p className="text-sm text-slate-600">영업이익률</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-500 mb-2">18개월</div>
              <p className="text-sm text-slate-600">BEP 도달 예상</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <span className="text-xs text-slate-500">
              * 위 수치는 시장 조사 및 내부 분석 기반 추정치입니다
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BusinessSection