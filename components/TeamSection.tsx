import Image from 'next/image'

const teamMembers = [
  {
    name: 'Christine Kiefer',
    role: 'Founder',
    bio: 'Christine is the founder of RIDE Capital, a blockchain-based technology company for real estate investments. Christine started her career at Goldman Sachs in London before joining the Fintech scene in Berlin. Christine has held various positions as managing director/co-founder of Fintech ventures such as BillPay and Pair Finance. Christine is a member of the Fintech Council of the German Ministry of Finance.',
    linkedin: 'https://www.linkedin.com/in/christinekiefer/',
    image: '/images/team/christine.jpg'
  },
  {
    name: 'Dr. Daniela Reimann',
    role: 'Ambassador Berlin',
    bio: 'Dr. Daniela Reimann is Director Legal, Risk & Compliance at smava GmbH, an online comparison portal for consumer loans and Germany\'s first Fintech. Daniela has seven years of leadership experience in the German Fintech sector with special focus on compliance related matters. She serves as ambassador for the Fintech Ladies network at their Berlin hub.',
    linkedin: 'https://www.linkedin.com/in/dr-daniela-reimann-940325107/',
    image: '/images/team/daniela.jpg'
  },
  {
    name: 'Alexandra Weck',
    role: 'Ambassador Frankfurt & Munich',
    bio: '"If it was easy, everyone could do it" is Alexandras slogan! Alexandra has managed more than 10 fintech projects in a boutique bank where she transformed classical financial intermediaries business into a market leader position. With ongoing digitisation in the banking industry, it was a reasonable decision to move to the new financial heart of Europe, to Frankfurt, and make use of her expertise within UBS as Business Developer.',
    linkedin: 'https://www.linkedin.com/in/alexandra-weck/',
    image: '/images/team/alexandra.jpg'
  },
  {
    name: 'Natalie Staniewicz',
    role: 'Ambassador Vienna',
    bio: '',
    linkedin: 'https://www.linkedin.com/in/natalie-staniewicz/',
    image: '/images/team/natalie.jpg'
  }
]
const additionalMembers = [
  {
    name: 'Gwen Sandberg',
    role: 'Ambassador Sweden',
    bio: 'Gwen Sandberg is the Business Development Director at Tink, which offers its products on a cloud-based platform that ushers in a new future of banking. With a background in sales management at Google, Gwen has more than 10 years of experience helping large corporations leverage new technologies to drive their business.',
    linkedin: 'https://www.linkedin.com/in/gwen-sandberg-5806615',
    image: '/images/team/gwen.jpg'
  },
  {
    name: 'Ulrike Moritz',
    role: 'Partnerships',
    bio: 'Ulrike is Product Lead at finleap connect. She is responsible for managing multiple products for fintechs and banks. Before joining finleap connect, she was a Manager at PwC\'s Financial Services Consulting. In this role, she managed various projects around digitization and process efficiency at banks. At FintechLadies, Ulrike is responsible for partner management, sponsorings, speaker enquiries and event cooperations.',
    linkedin: 'https://www.linkedin.com/in/ulrikemoritz',
    image: '/images/team/ulrike.jpg'
  },
  {
    name: 'Johanna Maria Leiner',
    role: 'Ambassador Vienna',
    bio: 'Johanna is Vice President Compliance Governance & Ethics at Paysafe. After obtaining her law degree Johanna started her career at the Financial Market Authority (FMA) in Liechtenstein. She then worked at the Austrian FMA for over 4 years, before she joined Paysafe in 2013. Johanna is part of the International Compliance Association (ICA) Advisory Board and official Ambassador for the "European Women in Payments Network."',
    linkedin: 'https://www.linkedin.com/in/johanna-maria-l-08351893/',
    image: '/images/team/johanna.jpg'
  },
  {
    name: 'Patricia Boydens',
    role: 'Ambassador Brussels',
    bio: 'Patricia is a digital transformation manager with 15 years of experience. She is an expert in savings and investments products and services, MiFID II, KYC, AML and customer journeys. She joined Harmoney as CCO, after spending four years as Business Development Consultant at MeDirect, a new Belgian online bank. Prior to that, she has been Head of Product Management at Rabobank.be. Patricia is also Vice President of FinTech Belgium.',
    linkedin: 'https://www.linkedin.com/in/patriciaboydens/',
    image: '/images/team/patricia.jpg'
  }
]

const allTeamMembers = [...teamMembers, ...additionalMembers]
export default function TeamSection() {
  return (
    <section className="section py-16 md:py-24 bg-ftl-light-gray" id="team">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-8">Team</h2>
        <div className="divider"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allTeamMembers.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-64 h-64 mx-auto mb-4 overflow-hidden rounded-lg">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={270}
                  height={270}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-ftl-green opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-sm leading-relaxed overflow-y-auto max-h-full">
                    {member.bio}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-ftl-green transition-colors"
                >
                  {member.name}
                </a>
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}