export default function EventsSection() {
  const eventFormats = [
    {
      title: '#FTLDeepdive',
      description: 'The Deep Dives are our regular networking events. We partner with companies who invite us to their office and host a session. The intimate setting guarantees intensive networking opportunities.'
    },
    {
      title: '#FTLAcademy',
      description: 'The Fintech Ladies Academy offers workshops on legal topics, coding, self-development and more. We are aiming to provide continuous education and knowledge sharing amongst fintech professionnels.'
    },
    {
      title: '#FTLDinner',
      description: 'The annual Fintech Ladies Dinner is an exclusive dinner event where we gather women in senior positions, C-Level and founders. Places are very limited. Participation is by invite-only or per formal application.'
    },
    {
      title: '#FintechStories',
      description: 'The Fintech Stories are open to everyone. We invite senior female executives from the fintech industry to talk about their company and their careerpath, followed by a round table discussion and a Q&A by the audience.'
    }
  ]

  return (
    <section className="section py-16 md:py-24 bg-ftl-green text-white" id="events">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center mb-8">Events</h2>
        <div className="divider bg-mantis-white"></div>
        
        <div className="text-center mb-12">
          <p className="text-lg mb-2">
            We are always looking for new event hosts and sponsors who invite us to their office or who support our network.
          </p>
          <p className="text-lg">
            Are you interested in hosting an event? Send an email to{' '}
            <a href="mailto:team@fintechladies.com" className="underline hover:no-underline">
              team@fintechladies.com
            </a>.
          </p>
        </div>
        <h3 className="text-3xl font-montserrat font-bold text-center mb-8">Event Formats</h3>
        <div className="divider bg-mantis-white"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventFormats.map((format, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 bg-white/30 rounded-full"></div>
              </div>
              <h4 className="text-xl font-bold mb-4">{format.title}</h4>
              <p className="text-sm leading-relaxed">{format.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-3xl font-montserrat font-bold text-center mb-8">Upcoming Events</h3>
        <div className="divider bg-mantis-white"></div>
        
        <div className="text-center">
          <p className="text-lg">
            Tickets for our upcoming events are available{' '}
            <a 
              href="https://helmtickets.com/events/organiser-events/50737" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline inline-flex items-center"
            >
              <span className="mr-2">👉</span>
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}