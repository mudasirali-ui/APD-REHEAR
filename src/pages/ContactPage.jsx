import { useState } from 'react';
import { submitContact } from '../api/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const result = await submitContact(formData);

      if (result.success) {
        setStatus('success');
        // Clear form after success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="main" className="contact-page fade-in">
      {/* Decorative background elements */}
      <div className="contact-bg-glow glow-1" />
      <div className="contact-bg-glow glow-2" />
      
      <div className="container contact-container">
        <div className="contact-header">
          <span className="eyebrow">Get in touch</span>
          <h1 className="contact-title">Let's start a <span className="gradient-text">conversation</span></h1>
          <p className="contact-subtitle">
            Whether you have a question about our features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Info Section */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>Our friendly team is here to help.</p>
                <a href="mailto:info@rehear.com" className="info-link">info@rehear.com</a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              {status === 'success' ? (
                <div className="success-message">
                  <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you as soon as possible.</p>
                  <button type="button" className="btn btn-outline" onClick={() => setStatus('')} style={{marginTop: '1.5rem'}}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {status === 'error' && (
                    <div style={{ color: 'var(--err)', marginBottom: '1rem', fontWeight: '500', background: '#fee2e2', padding: '0.75rem', borderRadius: '8px' }}>
                      ❌ Something went wrong. Please try again.
                    </div>
                  )}

                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="firstName">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        required 
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required 
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a little more about what you need..."
                      required 
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`btn btn-primary btn-submit ${loading ? 'submitting' : ''}`}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="loader"></span>
                    ) : (
                      <>
                        Send Message ✈
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
