import TechSection from '@/components/sections/tech-section'
import { Button } from '@/components/ui/button'

export default function TechPage() {
  return (
    <div className="pt-24">
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            ArcaWave 기술
          </h1>
          <div className="max-w-3xl mx-auto text-lg text-slate-700 space-y-6">
            <p>
              ArcaWave는 최첨단 AR 기술과 AI 알고리즘을 결합하여, 예술 작품과 일상 공간을 
              자연스럽게 연결하는 혁신적인 경험을 제공합니다. 실감형 기술을 통해 작품을 더 
              가깝게 경험하고, 구매 전 내 공간에 어울리는지 미리 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* 기술 섹션 포함 */}
      <TechSection />
      
      {/* 추가 기술 상세 */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">핵심 특허 기술</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">공간 인식 기반 AR 배치 기술</h3>
              </div>
              <p className="text-slate-600 mb-4">
                일반 스마트폰 카메라만으로 공간의 깊이, 구조, 조명 환경을 자동으로 분석하여 
                작품을 실제 크기와 비율로 정확하게 배치하는 기술입니다. 그림자와 반사를 실시간으로 
                시뮬레이션하여 높은 현실감을 제공합니다.
              </p>
              <div className="text-sm text-blue-600">
                특허 출원번호: 10-2023-0123456
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">컨텍스트 인식 AI 큐레이션</h3>
              </div>
              <p className="text-slate-600 mb-4">
                사용자의
                구매 이력, 탐색 패턴, 공간 스타일은 물론 컬러 팔레트까지 분석하여 
                사용자에게 가장 적합한 작품을 추천하는 딥러닝 기반 알고리즘입니다.
                사용할수록 더 정확한 추천이 가능합니다.
              </p>
              <div className="text-sm text-blue-600">
                특허 출원번호: 10-2023-0789012
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold">2D-3D 자동 변환</h3>
              </div>
              <p className="text-slate-600 text-sm">
                평면 작품 이미지를 자동으로 3D 모델로 변환하여 AR 환경에 최적화하는 기술
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold">컬러 하모니 분석</h3>
              </div>
              <p className="text-slate-600 text-sm">
                작품과 공간의 색상 조화를 분석하여 최적의 배치 위치를 추천하는 알고리즘
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold">블록체인 인증</h3>
              </div>
              <p className="text-slate-600 text-sm">
                작품의 진위와 소유권을 블록체인으로 안전하게 보증하는 인증 시스템
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 논문 및 발표 자료 */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">연구 및 발표</h2>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            ArcaWave 팀의 기술 연구 결과와 관련 논문 및 발표 자료를 확인하세요.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <span className="text-xs font-medium text-blue-600 mb-2 block">XR 학회 2023</span>
              <h3 className="text-lg font-bold mb-3">
                "공간 인식 기반 AR 아트 배치 알고리즘의 사용자 경험 향상 연구"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                일반 스마트폰 환경에서 효율적인 공간 인식과 작품 배치 최적화를 통한 
                사용자 경험 향상 방안을 제시한 연구 논문
              </p>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  초록 보기
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <span className="text-xs font-medium text-blue-600 mb-2 block">SIGGRAPH ASIA 2024</span>
              <h3 className="text-lg font-bold mb-3">
                "Enhancing Art Perception through AI-Driven AR: A Real-time Rendering Approach"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                AI와 AR을 결합한 실시간 렌더링 기술을 통해 예술 작품의 인지 경험을 향상시키는 
                방법을 제시한 국제 컨퍼런스 발표 논문
              </p>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  초록 보기
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <span className="text-xs font-medium text-blue-600 mb-2 block">디지털 아트 테크 포럼 2024</span>
              <h3 className="text-lg font-bold mb-3">
                "컨텍스트 인식 AI 큐레이션을 통한 개인화된 아트 추천 시스템"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                사용자 컨텍스트와 작품 특성을 딥러닝으로 분석하여 개인화된 예술 작품 추천 
                정확도를 높이는 알고리즘 연구
              </p>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  초록 보기
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <span className="text-xs font-medium text-blue-600 mb-2 block">특허 등록</span>
              <h3 className="text-lg font-bold mb-3">
                "모바일 AR 환경에서의 공간 인식 및 작품 배치 최적화 방법"
              </h3>
              <p className="text-slate-600 text-sm mb-4">
                모바일 기기의 제한된 계산 능력 내에서도 효율적인 공간 인식과 작품 배치를 
                구현할 수 있는 기술 특허
              </p>
              <div className="flex justify-end">
                <Button variant="outline" size="sm">
                  특허 정보
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button>
              기술 백서 다운로드
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}