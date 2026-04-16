/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MessageCircle, 
  Wrench, 
  Droplets, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  Star,
  ArrowRight,
  Menu,
  X,
  Hammer,
  Settings,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const WHATSAPP_LINK = "https://wa.me/8801570205393";
const PHONE_NUMBER = "+8801570205393";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Repair Services",
      icon: <Wrench className="w-6 h-6 text-blue-600" />,
      items: ["Pipe Leakage Repair", "Clogged Drain Cleaning", "Toilet & Sink Repair", "Gas Line Repair"],
      color: "bg-blue-50"
    },
    {
      title: "Installation",
      icon: <Hammer className="w-6 h-6 text-orange-600" />,
      items: ["Bathroom Fittings", "Water Heater (Geyser)", "Water Pump Setup", "Kitchen Sink Install"],
      color: "bg-orange-50"
    },
    {
      title: "Maintenance",
      icon: <Settings className="w-6 h-6 text-green-600" />,
      items: ["Tank Cleaning", "Full Home Inspection", "Pressure Fixing", "Filter Maintenance"],
      color: "bg-green-50"
    }
  ];

  const usps = [
    { title: "30-Min Response", desc: "Fastest emergency service in Mohammadpur.", icon: <Clock /> },
    { title: "Local Experts", desc: "Technicians who know your neighborhood.", icon: <MapPin /> },
    { title: "Affordable Price", desc: "Transparent pricing with no hidden costs.", icon: <ShieldCheck /> },
    { title: "Service Guarantee", desc: "100% satisfaction or we fix it for free.", icon: <CheckCircle2 /> }
  ];

  const testimonials = [
    { name: "Rahat Ahmed", location: "Kaderabad Housing", text: "Best plumber in Mohammadpur! Fixed my kitchen leak in 20 minutes." },
    { name: "Sultana Begum", location: "Zakir Hossain Road", text: "Very professional and clean work. Highly recommended for bathroom fittings." },
    { name: "Tanvir Hasan", location: "Adabor", text: "Emergency service was a lifesaver when my water pump broke at midnight." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Plumb<span className="text-blue-600">Expert</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">Why Us</a>
            <a href="#reviews" className="text-sm font-medium hover:text-blue-600 transition-colors">Reviews</a>
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Services</a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Why Us</a>
              <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold">Reviews</a>
              <div className="flex flex-col gap-4 pt-6">
                <a href={`tel:${PHONE_NUMBER}`} className="bg-blue-600 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <a href={WHATSAPP_LINK} className="bg-green-500 text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Emergency Plumbing Service in Mohammadpur
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Expert Plumber in <span className="text-blue-600">Mohammadpur</span> <br className="hidden md:block" /> Fixed in Minutes.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Facing urgent leaks or clogged drains? Our local experts arrive in 30 minutes to fix all your water and plumbing problems. Affordable & Guaranteed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call Now
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp Now
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-semibold">Licensed Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-semibold">24/7 Emergency</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-semibold">4.9/5 Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertTriangle className="w-32 h-32" />
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Let a Small Leak <br /> Become a Big Disaster.</h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl">
                Water damage can cost thousands. Whether it's a broken pipe at midnight or a clogged drain during a party, we're here to save your day.
              </p>
              
              <ul className="grid md:grid-cols-2 gap-4 mb-10">
                {["Urgent Pipe Leaks", "Clogged Toilets", "Low Water Pressure", "Broken Fittings"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200 font-medium">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-4 h-4 text-red-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a href={`tel:${PHONE_NUMBER}`} className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 transition-colors">
                Get an Emergency Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Professional Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">From minor repairs to full installations, we handle everything with precision and care.</p>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className={`${service.color} p-8 rounded-[2rem] border border-slate-100 transition-all`}
            >
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3 text-left">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* USPs Section */}
      <section id="about" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Mohammadpur Trusts PlumbExpert?</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {usps.map((usp, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-blue-500 w-10 h-10">
                      {usp.icon}
                    </div>
                    <h4 className="text-xl font-bold">{usp.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{usp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-600/20 rounded-[3rem] overflow-hidden border border-blue-500/30 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="text-7xl font-black text-blue-500 mb-2">10+</div>
                  <div className="text-xl font-bold text-slate-300">Years of Experience <br /> in Dhaka</div>
                </div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="font-bold">4.9/5</span>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Trusted by 2000+ Homes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">What Your Neighbors Say</h2>
          <p className="text-slate-600">Real feedback from Mohammadpur residents.</p>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-slate-700 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                  {t.name[0]}
                </div>
                <div>
                  <h5 className="font-bold">{t.name}</h5>
                  <p className="text-xs text-slate-500 font-medium">{t.location}, Mohammadpur</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to Fix Your Plumbing?</h2>
            <p className="text-blue-100 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Don't wait for the problem to get worse. Call our Mohammadpur experts now for a free consultation and fast service.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a 
                href={`tel:${PHONE_NUMBER}`}
                className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" /> Call {PHONE_NUMBER}
              </a>
              <a 
                href={WHATSAPP_LINK}
                className="w-full sm:w-auto bg-green-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-green-600 transition-all flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Droplets className="text-white w-6 h-6" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Plumb<span className="text-blue-600">Expert</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Your trusted local plumbing partner in Mohammadpur, Dhaka. Providing high-quality, affordable, and fast emergency services for over 10 years.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Emergency Repair</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Installations</a></li>
                <li><a href="#services" className="hover:text-blue-600 transition-colors">Maintenance</a></li>
                <li><a href="#reviews" className="hover:text-blue-600 transition-colors">Customer Reviews</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Service Areas</h4>
              <ul className="space-y-4 text-slate-500 text-sm font-medium">
                <li>Mohammadpur, Dhaka</li>
                <li>Adabor & Ring Road</li>
                <li>Zakir Hossain Road</li>
                <li>Kaderabad Housing</li>
                <li>Asad Gate & Town Hall</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-xs font-medium">
              &copy; {new Date().getFullYear()} PlumbExpert Mohammadpur. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              <span>Plumber in Mohammadpur</span>
              <span>Emergency Plumbing Dhaka</span>
              <span>Best Plumber Dhaka</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button (Mobile) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <a 
          href={WHATSAPP_LINK}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        <a 
          href={`tel:${PHONE_NUMBER}`}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
