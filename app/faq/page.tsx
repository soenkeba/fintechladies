import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function FAQPage() {
  const faqs = [
    {
      question: 'What is Fintech Ladies?',
      answer: 'Fintech Ladies is a network for women in the finance and tech industry, connecting professionals across Europe to learn, grow, and shape the future of finance together.'
    },
    {
      question: 'How can I join the network?',
      answer: 'You can join our network by signing up for our newsletter through the contact form on our website. Simply provide your details and tell us about yourself and your motivation to join.'
    },
    {
      question: 'What types of events do you organize?',
      answer: 'We organize various event formats including FTL Deep Dives (networking events), FTL Academy (workshops), FTL Dinner (exclusive senior-level dinners), and Fintech Stories (open talks with industry leaders).'
    },
    {
      question: 'In which cities are you active?',
      answer: 'We currently operate in Berlin, Frankfurt, Hamburg, Munich, Vienna, Zurich/Zug/Geneva, Brussels, London, New York, and Stockholm.'
    },
    {
      question: 'Can men attend your events?',
      answer: 'While our network focuses on empowering women in fintech, some of our events like Fintech Stories are open to everyone. Please check individual event descriptions for details.'
    },
    {
      question: 'How can my company become a sponsor or host an event?',
      answer: 'We are always looking for new event hosts and sponsors. Please send an email to team@fintechladies.com to discuss partnership opportunities.'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-montserrat font-bold text-center mb-8">Frequently Asked Questions</h1>
          <div className="divider"></div>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}