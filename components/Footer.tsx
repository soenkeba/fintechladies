import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-2xl font-montserrat font-bold mb-4">
            We shape the future of finance
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>Intense © {new Date().getFullYear()}</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-ftl-green transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/imprint" className="hover:text-ftl-green transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}