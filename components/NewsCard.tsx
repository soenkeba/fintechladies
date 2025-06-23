import Image from 'next/image'
import Link from 'next/link'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  category: string
  source: string
  url: string
  readTime: string
}

interface NewsCardProps {
  news: NewsItem
}

export default function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Funding': 'bg-blue-100 text-blue-800',
      'Leadership': 'bg-purple-100 text-purple-800',
      'Research': 'bg-green-100 text-green-800',
      'Diversity': 'bg-pink-100 text-pink-800',
      'Events': 'bg-yellow-100 text-yellow-800',
      'Policy': 'bg-indigo-100 text-indigo-800',
      'Technology': 'bg-red-100 text-red-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(news.category)}`}>
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>{formatDate(news.date)}</span>
          <span>{news.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-ftl-green transition-colors">
          <a 
            href={news.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {news.title}
          </a>
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500">
            Source: {news.source}
          </span>
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-ftl-green hover:text-ftl-dark-green font-medium text-sm transition-colors"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )
}