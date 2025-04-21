'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// 샘플 파트너 로고 - 추후 실제 로고로 교체 필요
const partners = [
  { name: "Seoul Art Museum", logo: "/images/partners/placeholder-1.png" },
  { name: "Contemporary Gallery", logo: "/images/partners/placeholder-2.png" },
  { name: "Digital Art Foundation", logo: "/images/partners/placeholder-3.png" },
  { name: "Modern Art Center", logo: "/images/partners/placeholder-4.png" },
  { name: "Innovation Hub", logo: "/images/partners/placeholder-5.png" },
  { name: "Creative Studios", logo: "/images/partners/placeholder-6.png" },
]

const faqItems = [
  {
    question: "ArcaWave의 비즈니스 모델은 무엇인가요?",
    answer: "ArcaWave는 작품 판매 커미션, 브랜드 스폰서십, 구독형 서비스, B2B 공간 컨설팅 등 다양한 수익 모델을 갖고 있습니다. 특히 AR 기술과 AI 큐레이션을 활용한 차별화된 서비스로 기존 아트 플랫폼과 차별화된 가치를 제공합니다."
  },
  {
    question: "현재까지의 성과는 어떤가요?",
    answer: "2025년 출시 후 6개월 만에 월간 활성 사용자 5만 명, 누적 작품 등록 2천 점, 작가 등록 300명을 달성했습니다. 평균 거래액은 월 1억 원으로 지속적인 성장세를 보이고 있습니다."
  },
  {
    question: "투자 유치 현황은 어떻게 되나요?",
    answer: "시드 라운드에서 5억 원 규모의 투자를 유치했으며, 현재 시리즈 A 투자를 준비 중입니다. 주요 투자자로는 벤처캐피탈과 아트테크 전문 엔젤 투자자들이 참여하고 있습니다."
  },
  {
    question: "향후 확장 계획은 무엇인가요?",
    answer: "국내 시장 안정화 후 2025년부터 아시아 주요 도시(도쿄, 싱가포르, 홍콩)로 서비스를 확장할 예정이며, 메타버스 갤러리 및 NFT 연동 기능을 추가하여 디지털 아트 시장으로의 확장을 계획하고 있습니다."
  },
  {
    question: "기술적 경쟁력은 무엇인가요?",
    answer: "공간 인식 기반 AR 기술과 개인화 AI 큐레이션 알고리즘은 특허 출원 중이며, 이를 통해 사용자에게 차별화된 예술 경험을 제공합니다. 자체 개발한 작품 디지털화 기술로 2D 작품을 3D/AR 환경에 최적화하는 프로세스를 자동화했습니다."
  }
]

const PartnersIR = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-playfair mb-4"
          >
            파트너 & IR
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            ArcaWave와 함께 예술의 미래를 만들어 나갈 파트너를 찾고 있습니다.
            갤러리, 미술관, 기업, 투자자 모두 환영합니다.
          </motion.p>
        </div>

        {/* 파트너십 섹션 */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">파트너십</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-12">
            <div>
              <h4 className="text-xl font-semibold mb-4">파트너십 제안</h4>
              <p className="text-slate-600 mb-6">
                ArcaWave는 다양한 분야의 파트너와 함께 예술의 새로운 가능성을 모색합니다.
                갤러리, 미술관, 호텔, 인테리어 회사 등 다양한 분야의 파트너십을 환영합니다.
              </p>
              
              <h5 className="font-medium mb-3">파트너십 유형</h5>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>갤러리 및 미술관 협업</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>호텔 및 상업 공간 아트워크 제공</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>브랜드 콜라보레이션</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>기술 API 제공 및 통합</span>
                </li>
              </ul>
              
              <Button className="mt-4">
                파트너십 문의하기
              </Button>
            </div>
            
            <div>
              {/* 현재 파트너 로고 그리드 */}
              <h4 className="text-xl font-semibold mb-6 text-center">함께하는 파트너</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 h-24 rounded-lg flex items-center justify-center p-4"
                  >
                    {/* 실제 파트너 로고로 교체 필요 */}
                    {/* <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={100}
                      height={50}
                      className="object-contain"
                    /> */}
                    <p className="text-sm text-slate-500">{partner.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* IR 섹션 */}
        <div id="investors">
          <h3 className="text-2xl font-bold mb-8 text-center">IR 정보</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-6">투자 하이라이트</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    성장하는 시장
                  </h5>
                  <p className="text-slate-600 text-sm">
                    글로벌 디지털 아트 시장은 연간 30% 이상 성장 중이며, AR/VR 아트 시장은 2028년까지 142억 달러 규모로 성장 예상
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    혁신적인 기술
                  </h5>
                  <p className="text-slate-600 text-sm">
                    특허 출원 중인 AR 공간 인식 기술과 AI 큐레이션 알고리즘으로 차별화된 경쟁력 확보
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    검증된 팀
                  </h5>
                  <p className="text-slate-600 text-sm">
                    AR/VR, AI, 아트 비즈니스 분야의 전문가로 구성된 창업팀과 국내 유명 갤러리 출신 큐레이터 참여
                  </p>
                </div>
                
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    검증된 비즈니스 모델
                  </h5>
                  <p className="text-slate-600 text-sm">
                    다양한 수익원(커미션, 구독, B2B)을 통한 안정적인 수익 구조와 높은 재구매율(68%)
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-6">투자자 FAQ</h4>
              
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <div className="mt-8 flex gap-4">
                <Button>
                  IR 자료 다운로드
                </Button>
                <Button variant="outline">
                  투자 문의하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersIR
