import Image from 'next/image'

export default function SponsorsSection() {
  const sponsors = [
    {
      name: 'Berliner Sparkasse',
      logo: '/images/sponsors/berlinersparkasse.png',
      url: 'https://www.berliner-sparkasse.de/de/home.html'
    },
    {
      name: 'Taylor Wessing',
      logo: '/images/sponsors/taylorwessing.svg',
      url: 'https://deutschland.taylorwessing.com/'
    },
    {
      name: 'Mastercard',
      logo: '/images/sponsors/mastercard.png',
      url: 'https://www.mastercard.de'
    },
    {
      name: 'Scalable Capital',
      logo: '/images/sponsors/scalable.png',
      url: 'https://de.scalable.capital/'
    }
  ]

  return (
    <section className="section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-montserrat font-bold mb-4">Our Supporters</h3>
            <p className="text-gray-700">
              Our network can only grow thanks to our wonderful sponsors and supporters:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  width={160}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}