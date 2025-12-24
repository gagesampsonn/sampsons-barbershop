import { useState } from 'react'
import { X, Calendar, Bell, Mail, CheckCircle } from 'lucide-react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // This will integrate with Square's customer database
    // For now, we'll simulate the submission
    // TODO: Connect to Square API for customer creation
    console.log('Customer signup:', { name, email, phone })
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const handleClose = () => {
    setSubmitted(false)
    setEmail('')
    setPhone('')
    setName('')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-barber-surface border border-barber-border rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-barber-elevated transition-colors"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="p-6 pb-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent-red/10 flex items-center justify-center mx-auto mb-4">
                <Calendar size={32} className="text-accent-red" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Book an Appointment
              </h2>
              <p className="text-text-secondary text-sm">
                Appointments available <span className="text-accent-red font-semibold">Friday & Saturday only</span>
              </p>
            </div>

            {/* Info Box */}
            <div className="mx-6 p-4 bg-barber-bg rounded-xl border border-barber-border mb-6">
              <div className="flex items-start gap-3">
                <Bell size={20} className="text-accent-blue flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-text-primary font-medium text-sm mb-1">
                    Get notified when slots open!
                  </p>
                  <p className="text-text-muted text-xs">
                    We release new appointment slots each week. Sign up below and we'll notify you when they're available.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-barber-bg border border-barber-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-red transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-barber-bg border border-barber-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-red transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-text-secondary mb-1.5">
                  Phone Number <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(740) 555-1234"
                  className="w-full px-4 py-3 bg-barber-bg border border-barber-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-red transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-accent-red hover:bg-accent-red-light text-white font-semibold rounded-lg transition-all shadow-glow-red hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Signing Up...
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Get Notified
                  </>
                )}
              </button>

              <p className="text-text-muted text-xs text-center">
                We'll only email you about appointment availability. No spam, ever.
              </p>
            </form>

            {/* Walk-in note */}
            <div className="px-6 pb-6">
              <div className="p-4 bg-accent-blue/5 border border-accent-blue/20 rounded-xl text-center">
                <p className="text-text-secondary text-sm">
                  <span className="font-medium text-text-primary">Prefer to walk in?</span>
                  <br />
                  We welcome walk-ins Mon–Thu! No appointment needed.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              You're on the list!
            </h2>
            <p className="text-text-secondary mb-6">
              We'll notify you at <span className="text-text-primary font-medium">{email}</span> when new appointment slots open up.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-barber-elevated border border-barber-border text-text-primary font-medium rounded-lg hover:bg-barber-border transition-colors"
            >
              Got it, thanks!
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookingModal
