import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ImprintPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-8">Imprint</h1>
          <div className="divider"></div>
          
          <div className="max-w-3xl mx-auto mt-12 prose prose-lg">
            <p>This is a placeholder for the imprint/legal notice content.</p>
            <p>Please add your actual imprint content here.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}