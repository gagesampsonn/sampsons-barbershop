import { MapPin, Phone, Scissors, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(245,245,245,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,245,245,0.1) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-barber-surface border border-barber-border text-text-secondary text-sm font-medium tracking-wide mb-8">
            <span className="text-accent-red font-semibold">Est. 2008</span>
            <span className="text-text-muted">â€¢</span>
            <a 
              href="https://www.google.com/maps/place/Sampson's+Barber+Shop/@38.73,-82.84,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-text-primary transition-colors"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400/50"} 
                  />
                ))}
              </div>
              <span className="font-semibold text-text-primary">4.5</span>
              <span className="text-text-muted hidden sm:inline">â€¢ 95 Reviews</span>
            </a>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="text-text-primary">SAMPSON'S</span>
            <br />
            <span className="text-gradient-red">BARBERSHOP</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-2 font-medium">
            Traditional Cuts. Modern Style.
          </p>
          
          <p className="text-lg text-accent-red font-semibold mb-4">
            Brian Sampson, Barber
          </p>
          
          <p className="text-base text-text-muted mb-10 max-w-xl mx-auto leading-relaxed">
            Quality haircuts and grooming services in Wheelersburg, Ohio. 
            Family-friendly barbershop. <span className="text-accent-blue font-semibold">Walk-ins only!</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-12">
            <a 
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 bg-accent-red hover:bg-accent-red-light text-white font-semibold rounded-lg text-base transition-all shadow-glow-red hover:shadow-lg flex items-center justify-center gap-2"
            >
              <Scissors size={18} />
              View Services
            </a>
            <a 
              href="tel:740-357-0482"
              className="w-full sm:w-auto px-8 py-3.5 bg-barber-surface border border-barber-border text-text-primary font-medium rounded-lg text-base hover:bg-barber-elevated hover:border-barber-border-light transition-all flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              (740) 357-0482
            </a>
          </div>
          
          <div className="glass-panel rounded-xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 text-text-secondary">
              <MapPin size={20} className="text-accent-red flex-shrink-0" />
              <div className="text-left">
                <p className="text-text-primary font-medium">8520 Ohio River Road</p>
                <p className="text-sm">Wheelersburg, OH 45694</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-8 h-48 rounded-full overflow-hidden opacity-30">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(45deg, #C41E3A, #C41E3A 10px, #ffffff 10px, #ffffff 20px, #1E3A8A 20px, #1E3A8A 30px, #ffffff 30px, #ffffff 40px)'
          }}></div>
        </div>
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 w-8 h-48 rounded-full overflow-hidden opacity-30">
          <div className="w-full h-full" style={{
            background: 'repeating-linear-gradient(-45deg, #C41E3A, #C41E3A 10px, #ffffff 10px, #ffffff 20px, #1E3A8A 20px, #1E3A8A 30px, #ffffff 30px, #ffffff 40px)'
          }}></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
