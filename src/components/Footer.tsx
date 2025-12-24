import { MapPin, Phone, Clock } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-barber-bg border-t border-barber-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-red to-accent-red-light flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-lg font-bold text-text-primary tracking-tight block">SAMPSON'S</span>
                <span className="text-xs text-text-muted uppercase tracking-wider">Barbershop</span>
              </div>
            </div>
            <p className="text-sm text-accent-red font-semibold mb-2">Brian Sampson, Barber</p>
            <p className="text-sm text-text-muted leading-relaxed max-w-sm">
              Traditional cuts with modern style. Serving the Wheelersburg community with quality haircuts and grooming services. Walk-ins only!
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>
                <a href="tel:740-357-0482" className="flex items-center gap-2 hover:text-text-secondary transition-colors">
                  <Phone size={14} className="text-accent-blue" />
                  (740) 357-0482
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-accent-red mt-0.5" />
                <span>
                  8520 Ohio River Road<br />
                  Wheelersburg, OH 45694
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider mb-4">Hours</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-accent-blue" />
                <span>Mon-Fri: 9 AM - 5 PM</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-accent-blue" />
                <span>Saturday: 7 AM - 12 PM</span>
              </li>
              <li className="flex items-center gap-2 opacity-50">
                <Clock size={14} />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-barber-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted">
            Â© 2025 Sampson's Barbershop. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <span className="w-1.5 h-1.5 bg-accent-red rounded-full"></span>
            <span>Wheelersburg, Ohio</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
