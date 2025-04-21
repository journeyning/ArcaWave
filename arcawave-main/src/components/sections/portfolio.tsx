'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

// 샘플 포트폴리오 데이터 - 추후 실제 데이터로 교체 필요
const portfolioItems = [
  {
    id: 1,
    title: "Light in Motion",
    artist: "Sarah Kim",
    category: "painting",
    thumbnail: "/images/gallery/placeholder-1.jpg",
    arView: "/images/gallery/ar-placeholder-1.jpg",
  },
  {
    id: 2,
    title: "Urban Perspectives",
    artist: "Michael Chen",
    category: "photography",
    thumbnail: "/images/gallery/placeholder-2.jpg",
    arView: "/images/gallery/ar-placeholder-2.jpg",
  },
  {
    id: 3,
    title: "Geometric Dreams",
    artist: "Lila Rodriguez",
    category: "digital",
    thumbnail: "/images/gallery/placeholder-3.jpg",
    arView: "/images/gallery/ar-placeholder-3.jpg",
  },
  {
    id: 4,
    title: "Nature's Whisper",
    artist: "David Park",
    category: "sculpture",
    thumbnail: "/images/gallery/placeholder-4.jpg",
    arView: "/images/gallery/ar-placeholder-4.jpg",
  },
  {
    id: 5,
    title: "Abstract Emotions",
    artist: "Emma Wilson",
    category: "painting",
    thumbnail: "/images/gallery/placeholder-5.jpg",
    arView: "/images/gallery/ar-placeholder-5.jpg",
  },
  {
    id: 6,
    title: "Digital Landscape",
    artist: "Thomas Lee",
    category: "digital",
    thumbnail: "/images/gallery/placeholder-6.jpg",
    arView: "/images/gallery/ar-placeholder-6.jpg",
  },
]

const categories = [
  { id: "all", name: "모든 작품" },
  { id: "painting", name: "회화" },
  { id: "digital", name: "디지털 아트" },
  { id: "photography", name: "사진" },
  { id: "sculpture", name: "조각" },
]

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const filteredItems = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

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
            갤러리
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            ArcaWave에서 만나볼 수 있는 다양한 아티스트의 작품들을 둘러보세요
          </motion.p>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* 갤러리 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => setSelectedItem(item.id === selectedItem ? null : item.id)}
              >
                {/* 썸네일 이미지 - 실제 이미지로 교체 필요 */}
                <div className="relative h-64 w-full bg-slate-100">
                  {/* 실제 이미지가 준비되면 아래 주석 해제 */}
                  {/* <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover"
                  /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                    {item.title} 이미지
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white p-2 rounded-full shadow-md">
                    <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-3">{item.artist}</p>
                <div className="flex justify-between items-center">
                <span className="text-slate-500 text-sm">
                  {categories.find((cat) => cat.id === item.category)?.name || "분류 없음"}
                </span>
                  <Button variant="ghost" size="sm" className="text-blue-500">
                    자세히 보기
                  </Button>
                </div>
              </div>

              {/* AR 미리보기 (선택된 경우) */}
              {selectedItem === item.id && (
                <div className="p-5 bg-slate-50 border-t">
                  <h4 className="text-sm font-medium mb-3">AR 미리보기</h4>
                  <div className="relative h-48 w-full bg-slate-100 rounded-lg mb-4">
                    {/* 실제 AR 미리보기 이미지로 교체 필요 */}
                    {/* <Image
                      src={item.arView}
                      alt={`${item.title} AR View`}
                      fill
                      className="object-cover rounded-lg"
                    /> */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      AR 미리보기 이미지
                    </div>
                  </div>
                  <Button className="w-full">
                    내 공간에 배치해보기
                  </Button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            더 많은 작품 보기
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio