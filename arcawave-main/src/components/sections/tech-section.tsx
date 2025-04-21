'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const TechSection = () => {
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
            예술과 기술의 융합
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            ArcaWave는 최첨단 AR 기술과 AI 알고리즘을 통해 작품의 가치를 극대화하고, 
            새로운 예술 감상 경험을 창조합니다.
          </motion.p>
        </div>
        
        <Tabs defaultValue="ai" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ai">AI 큐레이터</TabsTrigger>
            <TabsTrigger value="ar">AR 배치 기술</TabsTrigger>
            <TabsTrigger value="spatial">공간 인식</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">개인 맞춤형 AI 큐레이터</h3>
                <p className="text-slate-600 mb-6">
                  사용자의 취향, 공간 스타일, 컬러 팔레트를 딥러닝 기반으로 분석하여 
                  개인에게 가장 적합한 작품을 추천합니다. 구매 이력과 선호도를 학습하여 
                  시간이 지날수록 더 정확한 추천이 가능합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>공간 컨텍스트 인식 알고리즘</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>사용자 선호도 학습 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>컬러 하모니 분석 엔진</span>
                  </li>
                </ul>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">관련 특허 출원</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                {/* AI 알고리즘 시각화 이미지 - 추후 교체 */}
                <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-slate-400">AI 큐레이터 알고리즘 시각화</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="ar" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">고정밀 AR 배치 기술</h3>
                <p className="text-slate-600 mb-6">
                  정확한 공간 인식과 조명 분석을 통해 작품을 실제 벽면에 걸어둔 것과 같은 
                  사실적인 AR 경험을 제공합니다. 그림자, 반사, 조명 효과까지 고려하여 
                  실제감 있는 시각화가 가능합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>실시간 그림자 렌더링</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>조명 환경 인식 기술</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>표면 재질 분석 시스템</span>
                  </li>
                </ul>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">관련 논문 발표</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                {/* AR 배치 시연 이미지 - 추후 교체 */}
                <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-slate-400">AR 배치 기술 시연</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="spatial" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">지능형 공간 인식 기술</h3>
                <p className="text-slate-600 mb-6">
                  카메라만으로 공간의 구조, 크기, 배치를 자동으로 분석하여 작품 배치에 
                  최적화된 위치를 제안합니다. 인테리어 스타일까지 파악하여 공간에 
                  어울리는 작품을 추천합니다.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>3D 공간 맵핑 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>인테리어 스타일 분석</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>최적 배치 위치 추천 알고리즘</span>
                  </li>
                </ul>
                <div className="flex items-center text-sm text-blue-600">
                  <span className="mr-2">기술 특허 등록</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-lg">
                {/* 공간 인식 기술 시각화 - 추후 교체 */}
                <div className="bg-slate-100 h-64 rounded-lg flex items-center justify-center">
                  <p className="text-slate-400">공간 인식 기술 시각화</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="mx-auto">
            기술 백서 다운로드
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TechSection