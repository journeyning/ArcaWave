'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="relative h-10 w-32">
          {/* 실제 로고 이미지가 준비되면 이미지로 교체 */}
          <div className="font-playfair text-xl font-bold">ArcaWave</div>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">
            소개
          </Link>
          <Link href="/tech" className="text-sm font-medium hover:text-blue-500 transition-colors">
            기술
          </Link>
          <Link href="/gallery" className="text-sm font-medium hover:text-blue-500 transition-colors">
            갤러리
          </Link>
          <Link href="/artists" className="text-sm font-medium hover:text-blue-500 transition-colors">
            작가참여
          </Link>
          <Link href="/partners" className="text-sm font-medium hover:text-blue-500 transition-colors">
            파트너/IR
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-500 transition-colors">
            연락처
          </Link>
          <Button variant="outline" size="sm" className="ml-4">
            앱 다운로드
          </Button>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/about" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              소개
            </Link>
            <Link 
              href="/tech" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              기술
            </Link>
            <Link 
              href="/gallery" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              갤러리
            </Link>
            <Link 
              href="/artists" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              작가참여
            </Link>
            <Link 
              href="/partners" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              파트너/IR
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium hover:text-blue-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              연락처
            </Link>
            <Button variant="outline" size="sm" className="w-full">
              앱 다운로드
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header