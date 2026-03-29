import { Badge } from "@/components/ui/badge";
import {
  Award,
  ChevronDown,
  Clock,
  Droplets,
  Gem,
  Heart,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const PERFUMES = [
  {
    id: 1,
    name: "J31 Midnight",
    tagline: "Bold. Dark. Unforgettable.",
    description:
      "A deep, mysterious blend of oud wood, black pepper, and smoky musk. J31 Midnight is crafted for those who leave an impression long after they've left the room.",
    price: 249,
    lasting: "6",
    notes: ["Oud Wood", "Black Pepper", "Smoky Musk"],
    mood: "Mysterious",
  },
  {
    id: 2,
    name: "Velvet Flora",
    tagline: "Soft. Floral. Timeless.",
    description:
      "An exquisite bouquet of rose petals, jasmine, and soft sandalwood. Velvet Flora captures the essence of a secret garden in full bloom — elegant and eternally feminine.",
    price: 249,
    lasting: "6",
    notes: ["Rose Petals", "Jasmine", "Sandalwood"],
    mood: "Romantic",
  },
  {
    id: 3,
    name: "Aqua 13",
    tagline: "Fresh. Clean. Alive.",
    description:
      "A crisp aquatic freshness with citrus zest and sea breeze undertones, grounded in white cedar. Aqua 13 is the scent of confidence for every occasion.",
    price: 249,
    lasting: "6",
    notes: ["Citrus Zest", "Sea Breeze", "White Cedar"],
    mood: "Fresh",
  },
  {
    id: 4,
    name: "Sunmist",
    tagline: "Warm. Golden. Radiant.",
    description:
      "Sun-drenched vanilla orchid and warm amber warmed by hints of bergamot. Sunmist is a joyful, luminous scent that wraps you in golden warmth from morning to night.",
    price: 249,
    lasting: "6",
    notes: ["Vanilla Orchid", "Warm Amber", "Bergamot"],
    mood: "Joyful",
  },
  {
    id: 5,
    name: "Million Aura",
    tagline: "Rich. Opulent. Magnetic.",
    description:
      "A luxurious fusion of patchouli, rich leather, and golden saffron. Million Aura is the signature scent of success — commanding attention with every step.",
    price: 249,
    lasting: "6",
    notes: ["Patchouli", "Rich Leather", "Golden Saffron"],
    mood: "Opulent",
  },
];

const CONTACT_NUMBERS = [
  { number: "8850458258", label: "Call or WhatsApp" },
  { number: "8369864429", label: "Call or WhatsApp" },
];

// ─── Header ───────────────────────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#coming-soon", label: "Coming Soon" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gold/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            data-ocid="nav.link"
          >
            <img
              src="/assets/output-onlinepngtools-removebg-preview-019d3601-db8d-70dc-b2a2-a9407b7f21d6.png"
              alt="Prahii Perfumes Logo"
              className="h-10 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-cinzel tracking-widest text-foreground/70 hover:text-gold transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            data-ocid="nav.primary_button"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-gold/50 text-gold text-xs font-cinzel tracking-widest uppercase hover:bg-gold/10 transition-all duration-200 rounded"
          >
            <Phone className="w-3 h-3" />
            Order Now
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-foreground/70 hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/98 border-t border-gold/20"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-sm font-cinzel tracking-widest text-foreground/70 hover:text-gold transition-colors uppercase py-2 border-b border-gold/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                data-ocid="nav.primary_button"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 bg-gold/10 border border-gold/50 text-gold text-xs font-cinzel tracking-widest uppercase rounded"
              >
                <Phone className="w-3 h-3" />
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background: square bottles panoramic image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/prahii-hero-header-bg.dim_1600x700.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/output-onlinepngtools-removebg-preview-019d3601-db8d-70dc-b2a2-a9407b7f21d6.png"
              alt="Prahii Perfumes"
              className="h-20 md:h-28 w-auto object-contain"
              loading="eager"
            />
          </div>

          <p className="text-xs font-cinzel tracking-[0.4em] text-gold/70 uppercase mb-4">
            Luxury Fragrance House
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-cinzel font-bold text-white mb-6 leading-tight">
            A Scent That
            <span className="block gold-text-gradient">Stays.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/60 font-montserrat max-w-xl mx-auto mb-10 leading-relaxed">
            Five signature fragrances. Handcrafted for those who understand that
            a true luxury begins with the senses.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-12">
            {[
              {
                icon: <Droplets className="w-4 h-4" />,
                label: "60ml Each Bottle",
              },
              { icon: <Clock className="w-4 h-4" />, label: "6 Hours Lasting" },
              { icon: <Heart className="w-4 h-4" />, label: "Handcrafted" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-2 text-gold/80 text-sm font-montserrat tracking-wider"
              >
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#collections"
              data-ocid="hero.primary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 gold-gradient text-black font-cinzel font-bold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity duration-200 shadow-gold"
            >
              <Sparkles className="w-4 h-4" />
              Explore Collection
            </a>
            <a
              href="#contact"
              data-ocid="hero.secondary_button"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/50 text-gold font-cinzel text-sm tracking-widest uppercase rounded hover:bg-gold/10 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="mt-16 flex justify-center"
          >
            <ChevronDown className="w-6 h-6 text-gold/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Collections ─────────────────────────────────────────────────────────────

function PerfumeCard({
  perfume,
  index,
}: { perfume: (typeof PERFUMES)[0]; index: number }) {
  const whatsappNumber = CONTACT_NUMBERS[0].number;
  const whatsappMessage = encodeURIComponent(
    `Hi! I'd like to order ${perfume.name} (60ml) — ₹${perfume.price}. Please confirm availability.`,
  );

  return (
    <motion.div
      key={perfume.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      data-ocid={`collections.item.${index + 1}`}
      className="group relative bg-[#0a0a0a] border border-gold/15 rounded-lg overflow-hidden card-hover flex flex-col"
    >
      {/* Bottle image */}
      <div className="relative h-52 bg-gradient-to-b from-[#111] to-[#0a0a0a] overflow-hidden flex items-center justify-center">
        <img
          src="/assets/generated/prahii-square-bottle.dim_400x500.png"
          alt="Prahii Perfume Bottle"
          className="h-44 w-auto object-contain opacity-90 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <Badge className="absolute top-4 right-4 bg-gold/10 text-gold border border-gold/30 text-xs font-cinzel tracking-wider">
          {perfume.mood}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-cinzel font-bold text-white mb-1">
          {perfume.name}
        </h3>
        <p className="text-xs text-gold/70 font-montserrat tracking-wider mb-3 italic">
          {perfume.tagline}
        </p>
        <p className="text-sm text-foreground/60 font-montserrat leading-relaxed mb-4">
          {perfume.description}
        </p>

        {/* Notes */}
        <div className="flex flex-wrap gap-2 mb-5">
          {perfume.notes.map((note) => (
            <span
              key={note}
              className="text-xs px-2 py-1 bg-gold/5 border border-gold/20 text-gold/70 rounded-full font-montserrat"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Price + lasting */}
        <div className="flex items-center justify-between pt-4 border-t border-gold/10 mb-5">
          <div>
            <span className="text-2xl font-cinzel font-bold gold-text-gradient">
              ₹{perfume.price}
            </span>
            <span className="text-xs text-foreground/40 font-montserrat ml-2">
              / 60ml
            </span>
          </div>
          <div className="flex items-center gap-1 text-gold/60 text-xs font-montserrat">
            <Clock className="w-3 h-3" />
            <span>{perfume.lasting}h lasting</span>
          </div>
        </div>

        {/* Order Now button */}
        <a
          href={`https://wa.me/91${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          data-ocid={`collections.order_button.${index + 1}`}
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 gold-gradient text-black font-cinzel font-bold text-xs tracking-widest uppercase rounded hover:opacity-90 transition-opacity duration-200"
        >
          <ShoppingBag className="w-4 h-4" />
          Order Now
        </a>
      </div>
    </motion.div>
  );
}

function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-cinzel tracking-[0.4em] text-gold/60 uppercase mb-4">
            Our Signature Range
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
            The <span className="gold-text-gradient">Collection</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-ocid="collections.list"
        >
          {PERFUMES.map((perfume, index) => (
            <PerfumeCard key={perfume.id} perfume={perfume} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Coming Soon ──────────────────────────────────────────────────────────────

function ComingSoonSection() {
  return (
    <section id="coming-soon" className="py-24 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full bg-gold/5 mb-8">
            <Zap className="w-4 h-4 text-gold" />
            <span className="text-xs font-cinzel tracking-widest text-gold uppercase">
              Coming Soon
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-6">
            Next Level
            <span className="block gold-text-gradient">Luxury Awaits</span>
          </h2>

          <p className="text-lg text-foreground/60 font-montserrat leading-relaxed mb-10 max-w-2xl mx-auto">
            We are crafting{" "}
            <span className="text-gold font-semibold">
              5 all-new premium perfumes
            </span>{" "}
            with exceptional ingredients and an extraordinary lasting power of{" "}
            <span className="text-gold font-semibold">8–9 hours</span>. These
            exclusive scents will redefine what luxury fragrance means.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Gem className="w-6 h-6" />,
                title: "Premium Quality",
                desc: "Finest ingredients sourced globally",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "8–9 Hours Lasting",
                desc: "Long-lasting luxury all day",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "5 New Scents",
                desc: "Unique fragrances for every personality",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-[#0a0a0a] border border-gold/15 rounded-lg"
              >
                <div className="flex justify-center text-gold mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-sm font-cinzel font-bold text-white mb-2 tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xs text-foreground/50 font-montserrat">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gold/60 font-cinzel tracking-widest uppercase">
            ✦ Stay Tuned — Launching Very Soon ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-cinzel tracking-[0.4em] text-gold/60 uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-4">
            Order Your
            <span className="gold-text-gradient"> Prahii</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="text-foreground/60 font-montserrat mb-12 max-w-lg mx-auto">
            Ready to experience luxury? Call or WhatsApp us to place your order.
            We deliver across Maharashtra.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {CONTACT_NUMBERS.map((contact, i) => (
              <div
                key={contact.number}
                data-ocid={`contact.card.${i + 1}`}
                className="p-6 bg-[#0a0a0a] border border-gold/20 rounded-lg"
              >
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Phone className="w-4 h-4 text-gold" />
                  <span className="text-white font-cinzel font-bold text-lg tracking-wider">
                    {contact.number}
                  </span>
                </div>
                <p className="text-xs text-foreground/40 font-montserrat mb-5">
                  {contact.label}
                </p>
                <div className="flex gap-3">
                  <a
                    href={`tel:${contact.number}`}
                    data-ocid={`contact.primary_button.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gold/10 border border-gold/30 text-gold text-xs font-cinzel tracking-wider uppercase rounded hover:bg-gold/20 transition-colors duration-200"
                  >
                    <Phone className="w-3 h-3" />
                    Call
                  </a>
                  <a
                    href={`https://wa.me/91${contact.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`contact.secondary_button.${i + 1}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-900/20 border border-green-600/30 text-green-400 text-xs font-cinzel tracking-wider uppercase rounded hover:bg-green-900/40 transition-colors duration-200"
                  >
                    <MessageCircle className="w-3 h-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#collections", label: "Collections" },
    { href: "#coming-soon", label: "Coming Soon" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#050505] border-t border-gold/15 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & tagline */}
          <div className="text-center md:text-left">
            <img
              src="/assets/output-onlinepngtools-removebg-preview-019d3601-db8d-70dc-b2a2-a9407b7f21d6.png"
              alt="Prahii Perfumes"
              className="h-10 w-auto object-contain mx-auto md:mx-0 mb-3"
              loading="lazy"
            />
            <p className="text-xs text-foreground/40 font-montserrat italic">
              A scent that stays.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="footer.link"
                className="text-xs font-cinzel tracking-widest text-foreground/40 hover:text-gold uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Stars decoration */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} className="w-3 h-3 text-gold/40 fill-gold/40" />
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gold/10 text-center">
          <p className="text-xs text-foreground/30 font-montserrat">
            © {year}. Built with{" "}
            <Heart className="inline w-3 h-3 text-gold/50" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/50 hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
        <ComingSoonSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
