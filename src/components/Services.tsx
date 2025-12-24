import { Scissors, User, UserCheck } from 'lucide-react'

const SERVICES = [
  {
    icon: Scissors,
    name: 'Haircut',
    price: 10,
    description: 'Classic haircut tailored to your style. Includes consultation, cut, and styling.',
    accent: 'red'
  },
  {
    icon: User,
    name: 'Beard Trim',
    price: 8,
    description: 'Professional beard shaping and trimming. Keep your facial hair looking sharp.',
    accent: 'blue'
  },
  {
    icon: UserCheck,
    name: 'Senior Haircut',
    price: 8,
    description: 'Quality haircut for our valued senior customers (65+). Same great service.',
    accent: 'red'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-barber-surface border-t border-barber-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-barber-bg border border-barber-border text-text-secondary text-xs font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 bg-accent-red rounded-full"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Quality cuts at <span className="text-gradient-red">honest prices</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Professional barbering services for the whole family. No hidden fees, no surprises.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx}
              className="group relative bg-barber-bg rounded-xl border border-barber-border p-8 hover:border-barber-border-light transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                service.accent === 'red' 
                  ? 'bg-gradient-to-r from-accent-red to-accent-red-light' 
                  : 'bg-gradient-to-r from-accent-blue to-accent-blue-light'
              }`}></div>
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.accent === 'red' 
                  ? 'bg-accent-red/10 text-accent-red' 
                  : 'bg-accent-blue/10 text-accent-blue'
              }`}>
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-semibold text-text-primary mb-2">{service.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">{service.description}</p>
              
              <div className="flex items-baseline gap-1">
                <span className={`text-4xl font-bold ${
                  service.accent === 'red' ? 'text-accent-red' : 'text-accent-blue'
                }`}>
                  ${service.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-barber-bg border border-barber-border text-text-secondary text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Good for Kids
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-barber-bg border border-barber-border text-text-secondary text-sm">
            <span className="w-2 h-2 bg-accent-blue rounded-full"></span>
            Walk-ins Only
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-barber-bg border border-barber-border text-text-secondary text-sm">
            <span className="w-2 h-2 bg-accent-red rounded-full"></span>
            Cash & Cards Accepted
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
