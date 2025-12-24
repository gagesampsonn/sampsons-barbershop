import { Clock, MapPin, Phone, Navigation } from 'lucide-react'

const HOURS = [
  { day: 'Monday', hours: '9:00 AM - 5:00 PM', type: 'walk-in' },
  { day: 'Tuesday', hours: '9:00 AM - 5:00 PM', type: 'walk-in' },
  { day: 'Wednesday', hours: '9:00 AM - 5:00 PM', type: 'walk-in' },
  { day: 'Thursday', hours: '9:00 AM - 5:00 PM', type: 'walk-in' },
  { day: 'Friday', hours: '9:00 AM - 5:00 PM', type: 'walk-in' },
  { day: 'Saturday', hours: '7:00 AM - 12:00 PM', type: 'walk-in' },
  { day: 'Sunday', hours: 'Closed', type: 'closed' },
]

const Hours = () => {
  const now = new Date()
  const dayOfWeek = now.getDay()
  const currentHour = now.getHours()
  
  let isOpen = false
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    isOpen = currentHour >= 9 && currentHour < 17
  } else if (dayOfWeek === 6) {
    isOpen = currentHour >= 7 && currentHour < 12
  }

  return (
    <section id="hours" className="py-24 bg-barber-bg border-t border-barber-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-barber-surface border border-barber-border text-text-secondary text-xs font-medium tracking-wide mb-4">
              <Clock size={14} className="text-accent-blue" />
              Business Hours
            </div>
            
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-2">
              When we're open
            </h2>
            
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-8 ${
              isOpen 
                ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                : 'bg-red-500/10 text-red-400 border border-red-500/20'
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
              {isOpen ? 'Open Now' : 'Currently Closed'}
            </div>
            
            <div className="glass-panel rounded-xl overflow-hidden">
              {HOURS.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex justify-between items-center px-6 py-4 ${
                    idx !== HOURS.length - 1 ? 'border-b border-barber-border' : ''
                  } ${item.type === 'closed' ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-text-primary font-medium">{item.day}</span>
                    {item.type === 'walk-in' && (
                      <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide bg-accent-blue/10 text-accent-blue rounded">
                        Walk-in
                      </span>
                    )}
                  </div>
                  <span className={`text-sm ${
                    item.type === 'closed' ? 'text-text-muted' : 'text-text-secondary'
                  }`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
                Walk-ins welcome - No appointment needed!
              </div>
            </div>
          </div>
          
          <div id="location">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-barber-surface border border-barber-border text-text-secondary text-xs font-medium tracking-wide mb-4">
              <MapPin size={14} className="text-accent-red" />
              Location
            </div>
            
            <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-8">
              Find us here
            </h2>
            
            <div className="glass-panel rounded-xl overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5!2d-82.8447!3d38.7328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88456e3a9a9a9a9a%3A0x0!2sSampson's%20Barber%20Shop!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sampson's Barber Shop Location"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <div className="glass-panel rounded-xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-red/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent-red" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">8520 Ohio River Road</p>
                  <p className="text-text-muted text-sm">Wheelersburg, OH 45694</p>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=8520+Ohio+River+Road+Wheelersburg+OH+45694"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto p-3 rounded-lg bg-barber-elevated hover:bg-barber-border transition-colors"
                  title="Get Directions"
                >
                  <Navigation size={18} className="text-text-secondary" />
                </a>
              </div>
              
              <a 
                href="tel:740-357-0482"
                className="glass-panel rounded-xl p-5 flex items-center gap-4 hover:border-barber-border-light transition-colors block"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-text-primary font-medium">(740) 357-0482</p>
                  <p className="text-text-muted text-sm">Tap to call</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hours
