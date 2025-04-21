'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 배경 이미지 - 추후 실제 이미지로 교체 */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900 opacity-90">
        {/* 배경에 AR 관련 패턴이나 그래픽 효과 추가 가능 */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-20"></div>
      </div>

      {/* 히어로 콘텐츠 */}
      <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto md:mx-0"
        >
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            예술, 더 이상 소수의 전유물이 아닌{' '}
            <span className="text-blue-300">모두의 일상으로</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            AR과 AI 큐레이터 기술을 통해 누구나 예술작품을 일상 공간에서 즐기고 
            구매할 수 있는 XR 아트 커머스 플랫폼
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
              서비스 알아보기
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              앱 다운로드
            </Button>
          </div>
        </motion.div>
      </div>

      {/* 추후 AR 기기에서 앱 구동 모습을 보여주는 이미지/모형 추가 가능 */}
      <div className="hidden lg:block absolute bottom-0 right-0 w-1/3 h-2/3">
        {/* AR 시연 이미지 또는 3D 모델 */}
      </div>
    </section>
  )
}

export default Hero