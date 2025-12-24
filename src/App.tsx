import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Hours from './components/Hours'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-barber-bg font-sans text-text-primary">
      <nav className="sticky top-0 z-50 w-full bg-barber-bg/90 backdrop-blur-md border-b border-barber-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-red to-accent-red-light flex items-center justify-center shadow-glow-red">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-lg font-semibold text-text-primary tracking-tight hidden sm:block">SAMPSON'S</span>
            </a>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-text-secondary hover:text-text-primary transition-colors">Services</a>
              <a href="#reviews" className="text-text-secondary hover:text-text-primary transition-colors">Reviews</a>
              <a href="#hours" className="text-text-secondary hover:text-text-primary transition-colors">Hours</a>
              <a href="#location" className="text-text-secondary hover:text-text-primary transition-colors">Location</a>
            </div>

            <a 
              href="tel:740-357-0482"
              className="px-5 py-2 bg-accent-red hover:bg-accent-red-light text-white font-semibold rounded-lg text-sm transition-all shadow-glow-red hover:shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero />
        <Services />
        <Reviews />
        <Hours />
        <BookingSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
