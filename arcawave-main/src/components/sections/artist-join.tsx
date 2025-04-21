'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const benefits = [
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '수수료 0%',
    description: '첫 6개월간 작품 판매 수수료 0%, 이후 업계 최저 수준의 수수료 적용'
  },
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: '글로벌 노출',
    description: '전 세계 컬렉터와 갤러리에 작품을 소개하고 글로벌 아트 마켓에 진출할 기회'
  },
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '작품 보호',
    description: '블록체인 기반 작품 인증 시스템으로 저작권을 보호하고 작품의 진위 여부 보장'
  },
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
      </svg>
    ),
    title: '간편한 업로드',
    description: '작품 사진만 업로드하면 AI가 자동으로 3D 모델링 및 AR 최적화를 진행'
  },
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '실시간 통계',
    description: '작품별 조회수, 구매 전환율, 고객 반응 등을 실시간으로 확인할 수 있는 대시보드'
  },
  {
    icon: (
      <svg className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '커뮤니티',
    description: '동료 작가들과 네트워킹하고 협업할 수 있는 아티스트 전용 커뮤니티 제공'
  }
]

const ArtistJoin = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            작가 참여
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            ArcaWave와 함께 더 넓은 예술 세계로 나아가세요.
            신진 작가부터 경력 작가까지, 누구나 쉽게 참여할 수 있습니다.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
          <div>
            {/* 작가 참여 이미지 - 추후 실제 이미지로 교체 */}
            <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden shadow-lg">
              {/* 실제 이미지가 준비되면 아래 주석 해제 */}
              {/* <Image
                src="/images/artist-showcase.jpg"
                alt="Artist showcase"
                fill
                className="object-cover"
              /> */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl font-medium text-slate-500">작가 쇼케이스 이미지</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">작가님을 위한 혜택</h3>
            <div className="space-y-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="flex-shrink-0 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 추가 혜택 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-slate-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* 참여 CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6">지금 바로 참여하세요</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            간단한 작가 등록 절차를 통해 ArcaWave의 혁신적인 플랫폼에 참여하고,
            당신의 작품을 전 세계 컬렉터들에게 소개하세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="px-8">
              작가 등록하기
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              자세히 알아보기
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ArtistJoin