'use client'

import { motion } from 'framer-motion'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'

// 샘플 데이터 - 실제 데이터로 교체 필요
const marketSizeData = [
  { year: '2022', value: 24 },
  { year: '2023', value: 35 },
  { year: '2024', value: 47 },
  { year: '2025', value: 65 },
  { year: '2026', value: 85 },
  { year: '2027', value: 110 },
  { year: '2028', value: 142 },
]

const mzTrendData = [
  { category: '오프라인 갤러리', value: 22 },
  { category: '온라인 쇼핑몰', value: 38 },
  { category: 'SNS 구매', value: 45 },
  { category: 'AR 가상 체험', value: 72 },
  { category: '구독 서비스', value: 65 },
]

const MarketSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              시장 기회
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              디지털 기술의 발전과 MZ세대의 새로운 예술 소비 트렌드는 
              미술 시장의 혁신적 변화를 이끌고 있습니다.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* 시장 규모 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6">글로벌 디지털 아트 시장 규모</h3>
            <p className="text-slate-600 mb-6">
              디지털 아트 시장은 연평균 30% 이상 성장하며, 2028년까지 142억 달러 규모로 
              성장할 것으로 예상됩니다.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={marketSizeData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value: any) => [`${value}억 달러`, '시장 규모']} />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center mt-4 text-slate-500">
              출처: Art Basel Global Market Report 2023
            </p>
          </motion.div>

          {/* MZ세대 트렌드 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold mb-6">MZ세대 아트 구매 선호도</h3>
            <p className="text-slate-600 mb-6">
              MZ세대 컬렉터의 72%는 구매 전 AR을 통한 가상 체험을 중요시하며, 
              온라인/모바일 플랫폼을 통한 예술 작품 구매를 선호합니다.
            </p>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mzTrendData} layout="vertical">
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" width={100} />
                  <Tooltip formatter={(value: any) => [`${value}%`, '선호도']} />
                  <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-center mt-4 text-slate-500">
              출처: Hiscox Online Art Trade Report 2024
            </p>
          </motion.div>
        </div>

        {/* Why Now 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6">Why Now?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 border border-slate-200 rounded-lg">
              <div className="bg-blue-100 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">가격 장벽 완화</h4>
              <p className="text-sm text-slate-600">
                온라인 플랫폼을 통한 유통 효율화로 작품 가격 접근성 향상
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-lg">
              <div className="bg-purple-100 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">AR 기술 대중화</h4>
              <p className="text-sm text-slate-600">
                스마트폰 기반 AR 기술의 보편화로 가상 체험 접근성 확대
              </p>
            </div>
            <div className="p-5 border border-slate-200 rounded-lg">
              <div className="bg-pink-100 h-12 w-12 flex items-center justify-center rounded-full mx-auto mb-4">
                <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-medium mb-2">MZ세대 소비 변화</h4>
              <p className="text-sm text-slate-600">
                경험과 디지털 자산을 중시하는 MZ세대의 소비 패턴 변화
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MarketSection