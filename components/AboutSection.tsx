export default function AboutSection() {
  return (
    <section className="section py-16 md:py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">About us</h2>
          <div className="divider"></div>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              The Fintech Ladies are a network for women in the finance and tech industry. 
              Headquartered in Berlin, the network has expanded to various cities all over Europe. 
              We currently operate in Germany, Austria, Sweden and Belgium.
            </p>
            <p>
              Digitisation and innovation are transforming the financial sector fundamentally. 
              We believe that fintech is the future of finance. Our network is for women working 
              in fintech startups, banks, law firms, financial services and consulting.
            </p>
            <p>
              Together, we want to learn and grow, we want to inspire and empower each other.
            </p>
            <p className="text-xl font-semibold text-ftl-green">
              We want to shape the future of finance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}