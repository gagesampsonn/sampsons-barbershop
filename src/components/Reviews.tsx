import { Star, ExternalLink } from 'lucide-react'

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-barber-bg border-t border-barber-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-blue/3 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Google Rating Card */}
          <div className="glass-panel rounded-2xl p-8 md:p-10 inline-block">
            <div className="flex flex-col items-center gap-4">
              {/* Google G Logo */}
              <div className="flex items-center gap-2 text-text-muted text-sm mb-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Google Reviews</span>
              </div>
              
              {/* Big Rating */}
              <div className="text-6xl font-bold text-text-primary">4.5</div>
              
              {/* Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={28} 
                    className={i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400/50"} 
                  />
                ))}
              </div>
              
              {/* Review Count */}
              <p className="text-text-secondary">
                Based on <span className="text-text-primary font-semibold">95 reviews</span>
              </p>
              
              {/* CTA */}
              <a
                href="https://www.google.com/search?q=Sampson's+Barber+Shop+Wheelersburg+Ohio+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-barber-elevated border border-barber-border rounded-lg text-text-primary font-medium hover:bg-barber-border-light transition-colors"
              >
                Read Reviews on Google
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          {/* Testimonial Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-text-muted italic text-lg leading-relaxed">
              "Great place for a haircut. Friendly staff and always does a great job. 
              Been going here for years!"
            </p>
            <p className="text-text-secondary text-sm mt-4">— Happy Customer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
