import { Clock, Scissors } from 'lucide-react'

const BookingSection = () => {
  return (
    <section id="book" className="py-24 bg-barber-surface border-t border-barber-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-red/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-barber-bg border border-barber-border text-text-secondary text-xs font-medium tracking-wide mb-4">
            <Scissors size={14} className="text-accent-red" />
            Walk-Ins Only
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
            How to get a cut
          </h2>
          
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            No appointment needed! Just <span className="text-accent-blue font-semibold">walk in</span> during business hours and we'll take care of you.
          </p>
        </div>
        
        <div className="glass-panel rounded-xl p-8 max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl bg-accent-blue/10 flex items-center justify-center">
              <Clock size={32} className="text-accent-blue" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-text-primary">Walk-Ins Welcome</h3>
              <p className="text-accent-blue font-medium">Monday - Saturday</p>
            </div>
          </div>
          <p className="text-text-muted mb-6">
            At Sampson's Barbershop, we keep it simple. No apps, no booking systems - just stop by during our business hours and we'll get you taken care of. First come, first served.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="px-4 py-2 rounded-full bg-accent-blue/10 text-accent-blue text-sm font-medium">
              No appointments
            </div>
            <div className="px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium">
              First come, first served
            </div>
            <div className="px-4 py-2 rounded-full bg-accent-red/10 text-accent-red text-sm font-medium">
              Family friendly
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-8 max-w-xl mx-auto text-center">
          <h3 className="text-xl font-bold text-text-primary mb-2">
            Ready for a fresh cut?
          </h3>
          <p className="text-text-muted text-sm mb-6">
            Stop by during business hours. Brian Sampson is ready to give you a great haircut!
          </p>
          
          <a
            href="#hours"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 bg-accent-red hover:bg-accent-red-light text-white font-semibold rounded-xl text-lg transition-all shadow-glow-red hover:shadow-lg"
          >
            <Clock size={22} />
            View Hours
          </a>
          
          <div className="mt-10 pt-8 border-t border-barber-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-accent-red">$10</p>
                <p className="text-text-muted text-sm">Haircut</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-blue">$8</p>
                <p className="text-text-muted text-sm">Beard Trim</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-red">$8</p>
                <p className="text-text-muted text-sm">Senior Cut</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-text-muted text-sm">
            Serving Wheelersburg since 2008 â€¢ Brian Sampson, Barber
          </p>
        </div>
      </div>
    </section>
  )
}

export default BookingSection
