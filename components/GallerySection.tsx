'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  category: string
  imageSrc: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  { id: 1, category: 'Dinner', imageSrc: '/images/gallery/ftldinner_03.jpg', alt: 'FTL Dinner' },
  { id: 2, category: 'Stories', imageSrc: '/images/gallery/ftlstories_01.jpg', alt: 'Fintech Stories - Fintech Week 2018 in Hamburg' },
  { id: 3, category: 'Marketing', imageSrc: '/images/gallery/ftldd_02.jpg', alt: 'FTL Deep Dive at Paysafe Group in Vienna' },
  { id: 4, category: 'Stories', imageSrc: '/images/gallery/ftlstories_03.jpg', alt: 'FTL Stories' },
  { id: 5, category: 'Dinner', imageSrc: '/images/gallery/ftldinner_02.jpg', alt: 'FTL Dinner' },
  { id: 6, category: 'Marketing', imageSrc: '/images/gallery/ftldd_01.jpg', alt: 'FTL Deep Dive' },
  { id: 7, category: 'Marketing', imageSrc: '/images/gallery/ftldd_03.jpg', alt: 'FTL Deep Dive' },
  { id: 8, category: 'Stories', imageSrc: '/images/gallery/ftlstories_02.jpg', alt: 'FTL Stories' },
  { id: 9, category: 'Dinner', imageSrc: '/images/gallery/ftldinner_01.jpg', alt: 'FTL Dinner' },
]

const categories = [
  { name: 'All', filter: '*' },
  { name: 'FTL Deep Dive', filter: 'Marketing' },
  { name: 'Fintech Ladies Dinner', filter: 'Dinner' },
  { name: 'Fintech Stories', filter: 'Stories' },
]
export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('*')

  const filteredItems = activeFilter === '*' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section className="section py-16 md:py-24" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-8">Impressions</h2>
        <div className="divider"></div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.filter}
              onClick={() => setActiveFilter(category.filter)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === category.filter
                  ? 'bg-ftl-green text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image 
                src={item.imageSrc} 
                alt={item.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}