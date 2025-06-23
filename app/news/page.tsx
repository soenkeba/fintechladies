import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NewsCard from '@/components/NewsCard'

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Berlin's Female Fintech Founders Raise €50M in Record Quarter",
      excerpt: "Women-led fintech startups in Berlin secured unprecedented funding in Q4 2024, with three major rounds led by female founders in payments, lending, and crypto sectors.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-15",
      category: "Funding",
      source: "TechCrunch Europe",
      url: "https://techcrunch.com/fintech-funding-berlin-women",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Solaris Bank Appoints First Female CTO in German Banking",
      excerpt: "Berlin-based Solaris Bank makes history by appointing Dr. Sarah Mueller as Chief Technology Officer, becoming the first major German bank to have a woman in this role.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-10",
      category: "Leadership",
      source: "Financial Times",
      url: "https://ft.com/solaris-bank-female-cto",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Women in Fintech: Breaking the Glass Ceiling in European Banking",
      excerpt: "A comprehensive study reveals that women now hold 35% of senior positions in European fintech companies, with Berlin leading the charge at 42%.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-08",
      category: "Research",
      source: "McKinsey & Company",
      url: "https://mckinsey.com/women-fintech-europe-2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "N26's Diversity Initiative Reaches 50% Female Leadership",
      excerpt: "Berlin-based digital bank N26 announces that women now represent 50% of its leadership team, setting a new standard for gender equality in European fintech.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-05",
      category: "Diversity",
      source: "Reuters",
      url: "https://reuters.com/n26-female-leadership-milestone",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Female-Founded Crypto Startup Raises €25M Series A in Berlin",
      excerpt: "CryptoHer, a Berlin-based cryptocurrency platform focused on women investors, secures major Series A funding led by prominent European VCs.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-12-01",
      category: "Funding",
      source: "VentureBeat",
      url: "https://venturebeat.com/cryptoher-series-a-berlin",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Berlin Fintech Week 2024: Women Leaders Take Center Stage",
      excerpt: "This year's Berlin Fintech Week featured an unprecedented 60% female speakers, highlighting the growing influence of women in the German fintech ecosystem.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-28",
      category: "Events",
      source: "Berlin Fintech Week",
      url: "https://berlinfintechweek.com/women-leaders-2024",
      readTime: "4 min read"
    },
    {
      id: 7,
      title: "European Investment Bank Launches €100M Fund for Women-Led Fintechs",
      excerpt: "The EIB announces a dedicated fund to support female entrepreneurs in fintech across Europe, with Berlin-based startups expected to be major beneficiaries.",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-25",
      category: "Policy",
      source: "European Investment Bank",
      url: "https://eib.org/women-fintech-fund-2024",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Trade Republic's Female Engineers Lead Open Source Initiative",
      excerpt: "Berlin-based Trade Republic's all-female engineering team launches an open-source project to improve financial accessibility for underrepresented communities.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-11-20",
      category: "Technology",
      source: "GitHub Blog",
      url: "https://github.blog/trade-republic-open-source",
      readTime: "4 min read"
    }
  ]

  const categories = ['All', 'Funding', 'Leadership', 'Research', 'Diversity', 'Events', 'Policy', 'Technology']

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-montserrat font-bold mb-4">Women in Fintech News</h1>
            <div className="divider"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest news about women making waves in the fintech industry, 
              with a special focus on Berlin and the European ecosystem.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-ftl-green hover:text-white transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} news={item} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-ftl-green text-white font-medium rounded-lg hover:bg-ftl-dark-green transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}