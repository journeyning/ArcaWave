import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 간단한 설명 */}
          <div className="col-span-1 md:col-span-1">
            <div className="font-playfair text-xl font-bold mb-4">ArcaWave</div>
            <p className="text-sm text-slate-600 mb-4">
              예술, 더 이상 소수의 전유물이 아닌 모두의 일상으로
            </p>
            <div className="flex space-x-4">
              {/* 소셜 미디어 아이콘 */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg className="h-5 w-5 text-slate-600 hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg className="h-5 w-5 text-slate-600 hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg className="h-5 w-5 text-slate-600 hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 사이트맵 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">ArcaWave</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  소개
                </Link>
              </li>
              <li>
                <Link href="/tech" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  기술
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  갤러리
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  팀 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 참여 및 문의 */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold mb-4">참여하기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  작가 등록
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  파트너십
                </Link>
              </li>
              <li>
                <Link href="/partners#investors" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  IR 정보
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-blue-500 transition-colors">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 뉴스레터 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-sm font-semibold mb-4">뉴스레터 구독</h3>
            <p className="text-sm text-slate-600 mb-4">
              ArcaWave의 최신 소식을 이메일로 받아보세요
            </p>
            <div className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button>구독하기</Button>
            </div>
          </div>
        </div>

        {/* 카피라이트 */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-500">
              &copy; 2025 ArcaWave. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-blue-500 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-blue-500 transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer