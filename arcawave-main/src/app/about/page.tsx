export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            About ArcaWave
          </h1>
          <div className="max-w-3xl mx-auto text-lg text-slate-700 space-y-6">
            <p>
              ArcaWave는 "예술, 더 이상 소수의 전유물이 아닌 모두의 일상으로"라는 비전 아래, 
              AR, XR과 공간 기반 AI 큐레이터를 통해 누구나 예술을 일상에서 즐길 수 있는 플랫폼입니다.
            </p>
            <p>
              예술 작품을 구매하려면 갤러리를 방문하거나 작가를 직접 만나야 했던 기존 방식과 달리, 
              내 공간에 어울리는지 AR 피팅 해보고, 완벽하게 어울리는지 확인한 후 소장할 수 있습니다. 
              스마트폰으로 단순한 낙서가 생동감 넘치는 예술로 변모하는 XR 경험을 통해, 예술 감상의 경계를 허물어보세요.
            </p>
            <p>
              또한 개인의 취향과 공간 특성을 분석하는 AI 큐레이터 기술로 사용자에게 딱 맞는 작품을 
              추천하여, 예술 입문자도 쉽게 자신만의 컬렉션을 시작할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </div>
      
      {/* 비전 및 미션 */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">비전</h2>
              <p className="text-lg text-slate-700 mb-6">
                예술, 더 이상 소수의 전유물이 아닌 모두의 일상으로
              </p>
              <p className="text-slate-600">
                ArcaWave는 기술의 힘으로 예술과 일상의 경계를 허물고, 더 많은 사람들이 예술의 아름다움과 
                가치를 경험할 수 있는 세상을 만들어 갑니다. 우리는 예술이 특별한 장소에서만 향유되는 것이 아닌, 
                일상 속에서 자연스럽게 함께하는 문화를 만들어가고자 합니다.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">미션</h2>
              <p className="text-lg text-slate-700 mb-6">
                기술로 연결하는 예술과 일상
              </p>
              <p className="text-slate-600">
                최첨단 AR 기술과 AI 알고리즘을 활용하여 예술 작품과 일상 공간을 자연스럽게 연결하고, 
                작가와 컬렉터 간의 새로운 관계를 형성합니다. 우리는 신진 작가들에게 더 넓은 무대를, 
                예술 애호가들에게는 더 다양한 작품 경험을 제공하여 예술 생태계의 건강한 성장에 기여합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 히스토리 */}
      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">히스토리</h2>
          
          <div className="max-w-3xl mx-auto relative">
            {/* 중앙 라인 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            {/* 타임라인 아이템 */}
            <div className="mb-16 relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 h-4 w-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <span className="font-bold text-blue-500">2025년 4월</span>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-bold text-lg">ArcaWave 설립</h3>
                  <p className="text-slate-600">
                    ArcaWave 설립
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16 relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 h-4 w-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-bold text-lg">시드 투자 유치</h3>
                  <p className="text-slate-600">
                    초기 투자자들로부터 시드 투자 유치
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <span className="font-bold text-blue-500">2025년 7월</span>
                </div>
              </div>
            </div>
            
            <div className="mb-16 relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 h-4 w-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <span className="font-bold text-blue-500">2025년 8월</span>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-bold text-lg">베타 서비스 출시</h3>
                  <p className="text-slate-600">
                    베타 서비스 출시 및 테스트
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-16 relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 h-4 w-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="font-bold text-lg">서비스 정식 출시</h3>
                  <p className="text-slate-600">
                    Fluxrs 앱 정식 출시
                  </p>
                </div>
                <div className="w-1/2 pl-8">
                  <span className="font-bold text-blue-500">2025년 9월</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 h-4 w-4 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10"></div>
                <div className="w-1/2 pr-8 text-right">
                  <span className="font-bold text-blue-500">2026년 10월</span>
                </div>
                <div className="w-1/2 pl-8">
                  <h3 className="font-bold text-lg">시리즈 A 투자 유치</h3>
                  <p className="text-slate-600">
                    시리즈 A 투자 유치 및 아시아 시장 확장 준비
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 팀 소개 섹션 - 직접 컴포넌트로 대체 */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">팀 소개</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            기술과 예술의 경계를 허무는 전문가들이 모여 ArcaWave를 만들어 갑니다.
          </p>
          
          {/* 팀 구성원 목록 - 간소화된 버전 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 추후 실제 팀원 정보로 대체 */}
            <div className="bg-slate-50 rounded-xl overflow-hidden shadow-sm">
              <div className="h-64 bg-slate-200 flex items-center justify-center">
                <p className="text-slate-400">CEO 사진</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Jieon Du</h3>
                <p className="text-blue-600 text-sm mb-3">CEO / Founder</p>
                <p className="text-slate-600 text-sm">KAIST 메타버스대학원 박사과정.</p>
              </div>
            </div>
            
            {/* 추가 팀원들 */}
          </div>
        </div>
      </div>
    </div>
  )
}
