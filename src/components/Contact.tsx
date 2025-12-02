import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export function Contact() {
  const [state, handleSubmit] = useForm("xbljepkq");
  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Thank You!</h2>
            <p className="text-amber-700 text-lg mb-6">
              Your message has been received. We'll get back to you shortly!
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors">
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Get in Touch</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-amber-900 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your name"
                />
              </div>
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <div>
                <label htmlFor="email" className="block text-amber-900 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="your@email.com"
                />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <div>
                <label htmlFor="message" className="block text-amber-900 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg hover:bg-amber-700 transition-colors flex items-center justify-center space-x-2"
                disabled={state.submitting}>
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Email Us</h3>
                  <p className="text-amber-700">admin@embrise.in</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-amber-600 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-900 mb-2">Live Chat</h3>
                  <p className="text-amber-700">Available 24/7 for your queries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
