import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronDown,
  Clock,
  Droplets,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const PHONE_PRIMARY = "8850458258";
const PHONE_SECONDARY = "8369864429";
const WA_PRIMARY = `https://wa.me/91${PHONE_PRIMARY}`;
const WA_SECONDARY = `https://wa.me/91${PHONE_SECONDARY}`;

const PERFUMES = [
  {
    id: 1,
    name: "J31 Midnight",
    description:
      "A bold and mysterious fragrance with deep woody and spicy notes, giving a rich and masculine vibe. Perfect for evening wear and special occasions.",
    mood: "Bold & Mysterious",
    occasion: "Evening Wear",
    icon: "🌑",
    notes: ["Woody", "Spicy", "Dark Musk"],
  },
  {
    id: 2,
    name: "Velvet Flora",
    description:
      "A soft and elegant scent with luxurious floral notes and a touch of sweetness, creating a smooth and romantic aroma. Ideal for everyday wear.",
    mood: "Soft & Romantic",
    occasion: "Everyday Wear",
    icon: "🌸",
    notes: ["Floral", "Sweet", "Velvety"],
  },
  {
    id: 3,
    name: "Aqua 13",
    description:
      "A fresh aquatic fragrance with hints of mint, lavender, and ocean breeze, giving a clean and energetic feel. Perfect for summer and daily use.",
    mood: "Fresh & Energetic",
    occasion: "Summer & Daily",
    icon: "🌊",
    notes: ["Aquatic", "Mint", "Lavender"],
  },
  {
    id: 4,
    name: "Sunmist",
    description:
      "A bright and refreshing scent with citrus and light fruity notes, inspired by warm sunny days and beach vibes.",
    mood: "Bright & Refreshing",
    occasion: "Beach & Summer",
    icon: "☀️",
    notes: ["Citrus", "Fruity", "Sunshine"],
  },
  {
    id: 5,
    name: "Million Aura",
    description:
      "A powerful and luxurious fragrance with spicy, woody, and warm amber notes, giving a bold and attractive signature scent.",
    mood: "Powerful & Luxurious",
    occasion: "Signature Scent",
    icon: "👑",
    notes: ["Spicy", "Amber", "Woody"],
  },
];

function Header({
  mobileOpen,
  setMobileOpen,
}: { mobileOpen: boolean; setMobileOpen: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "COLLECTIONS", href: "#collections" },
    { label: "OFFER", href: "#offer" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-[0_2px_20px_rgba(201,164,90,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - user's actual logo */}
          <a href="#home" className="flex items-center" data-ocid="nav.link">
            <img
              src="/assets/output-onlinepngtools-removebg-preview-019d3601-db8d-70dc-b2a2-a9407b7f21d6.png"
              alt="Prahii Perfumes"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="font-cinzel text-xs tracking-[0.2em] text-muted-foreground hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={WA_PRIMARY}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.primary_button"
            className="hidden md:flex items-center gap-2 gold-gradient text-black font-cinzel text-xs tracking-widest px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity font-semibold"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            ORDER NOW
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-gold p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/98 border-t border-gold/20"
          >
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  data-ocid="nav.link"
                  className="font-cinzel text-sm tracking-[0.2em] text-muted-foreground hover:text-gold py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_PRIMARY}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="nav.primary_button"
                className="flex items-center justify-center gap-2 gold-gradient text-black font-cinzel text-xs tracking-widest px-5 py-3 rounded-sm mt-2"
              >
                <MessageCircle className="w-4 h-4" />
                ORDER NOW
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* Background radial */}
      <div className="absolute inset-0 hero-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,164,90,0.08)_0%,transparent_60%)] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Small top label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-8 h-px bg-gold" />
              <span className="font-cinzel text-gold text-xs tracking-[0.4em] uppercase">
                Luxury Fragrances
              </span>
              <div className="w-8 h-px bg-gold" />
            </motion.div>

            <h1 className="font-cinzel font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-tight mb-4">
              <span className="gold-text-gradient block">PRAHII</span>
              <span className="text-white/90 block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-1">
                PERFUMES
              </span>
            </h1>

            <p className="font-montserrat italic text-lg sm:text-xl text-muted-foreground mt-4 mb-8 tracking-wide">
              A scent that stays.
            </p>

            <p className="font-montserrat text-sm text-muted-foreground leading-relaxed mb-10 max-w-md">
              Experience the art of fine perfumery. Each bottle is a journey —
              crafted for those who believe that fragrance is the invisible part
              of your personality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collections"
                data-ocid="hero.primary_button"
                className="flex items-center justify-center gap-2 gold-gradient text-black font-cinzel text-sm tracking-[0.2em] px-8 py-4 rounded-sm hover:opacity-90 transition-all hover:shadow-gold font-bold"
              >
                EXPLORE COLLECTION
              </a>
              <a
                href="#offer"
                data-ocid="hero.secondary_button"
                className="flex items-center justify-center gap-2 border border-gold/50 text-gold font-cinzel text-sm tracking-[0.2em] px-8 py-4 rounded-sm hover:border-gold hover:bg-gold/5 transition-all"
              >
                VIEW COMBO OFFER
              </a>
            </div>

            {/* Stats - replaced 60ml with Handcrafted */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="font-cinzel text-2xl font-bold gold-text-gradient">
                  5
                </div>
                <div className="font-montserrat text-xs text-muted-foreground tracking-widest mt-0.5">
                  FRAGRANCES
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="font-cinzel text-2xl font-bold gold-text-gradient">
                  7hrs
                </div>
                <div className="font-montserrat text-xs text-muted-foreground tracking-widest mt-0.5">
                  LASTING
                </div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <Sparkles className="w-5 h-5 text-gold mb-1" />
                <div className="font-montserrat text-xs text-muted-foreground tracking-widest mt-0.5">
                  HANDCRAFTED
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(201,164,90,0.2)_0%,transparent_70%)] blur-2xl scale-110" />
              <img
                src="/assets/generated/prahii-square-bottle.dim_400x500.png"
                alt="Prahii Perfume Collection"
                className="relative z-10 w-full max-w-sm lg:max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-montserrat text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
        >
          <ChevronDown className="w-4 h-4 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function ProductCard({
  perfume,
  index,
}: { perfume: (typeof PERFUMES)[0]; index: number }) {
  const waMessage = encodeURIComponent(
    `Hi, I want to order ${perfume.name} - 60ml at ₹299`,
  );
  const waLink = `${WA_PRIMARY}?text=${waMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-ocid={`product.item.${index + 1}`}
      className="group relative bg-[#111111] border border-white/10 rounded-sm overflow-hidden card-hover cursor-default"
    >
      {/* Gold top accent */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Bottle Image */}
      <div className="relative bg-gradient-to-b from-black to-[#0d0d0d] p-6 pb-4 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse,rgba(201,164,90,0.15)_0%,transparent_70%)] blur-xl" />
          <img
            src="/assets/generated/prahii-square-bottle.dim_400x500.png"
            alt={`${perfume.name} Perfume Bottle`}
            className="relative z-10 h-44 w-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Icon + mood */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl">{perfume.icon}</span>
          <Badge
            variant="outline"
            className="border-gold/30 text-gold/70 font-montserrat text-[10px] tracking-wider px-2"
          >
            {perfume.mood}
          </Badge>
        </div>

        <h3 className="font-cinzel font-bold text-lg text-white mb-3 tracking-wide group-hover:text-gold transition-colors">
          {perfume.name}
        </h3>

        <p className="font-montserrat text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {perfume.description}
        </p>

        {/* Notes */}
        <div className="flex gap-1.5 flex-wrap mb-4">
          {perfume.notes.map((note) => (
            <span
              key={note}
              className="font-montserrat text-[10px] bg-gold/10 border border-gold/20 text-gold/80 px-2 py-0.5 rounded-full tracking-wide"
            >
              {note}
            </span>
          ))}
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground font-montserrat">
          <span className="flex items-center gap-1">
            <Droplets className="w-3 h-3 text-gold/50" />
            60 ml
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gold/50" />
            Up to 7 hours
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <div>
            <span className="font-cinzel text-2xl font-bold gold-text-gradient">
              ₹299
            </span>
            <span className="font-montserrat text-xs text-muted-foreground ml-1">
              / bottle
            </span>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`product.primary_button.${index + 1}`}
            className="flex items-center gap-1.5 gold-gradient text-black font-cinzel text-xs tracking-wider px-4 py-2 rounded-sm hover:opacity-90 transition-all font-bold"
          >
            <MessageCircle className="w-3 h-3" />
            ORDER
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-black relative">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px gold-gradient" />
            <Star className="w-4 h-4 text-gold fill-gold" />
            <div className="w-16 h-px gold-gradient" />
          </div>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl tracking-wide mb-4">
            <span className="gold-text-gradient">OUR COLLECTION</span>
          </h2>
          <p className="font-montserrat text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Five distinct fragrances, each telling a unique story. Find your
            signature scent.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {PERFUMES.map((perfume, i) => (
            <ProductCard key={perfume.id} perfume={perfume} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComboOfferSection() {
  const [perfume1, setPerfume1] = useState("");
  const [perfume2, setPerfume2] = useState("");

  const handleClaim = () => {
    const p1 = perfume1 || "a perfume";
    const p2 = perfume2 || "another perfume";
    const msg = encodeURIComponent(
      `Hi! I want to claim the COMBO OFFER:\n1. ${p1} (60ml)\n2. ${p2} (60ml)\n\nTotal: ₹499 (Combo Price)\n\nPlease confirm my order. 🙏`,
    );
    window.open(`${WA_PRIMARY}?text=${msg}`, "_blank");
  };

  return (
    <section id="offer" className="py-24 bg-[#080808] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px gold-gradient" />
            <span className="text-2xl">🎁</span>
            <div className="w-16 h-px gold-gradient" />
          </div>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl tracking-wide mb-4">
            <span className="gold-text-gradient">EXCLUSIVE OFFER</span>
          </h2>
          <p className="font-montserrat text-muted-foreground">
            Double your luxury — at half the price.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Gold border box */}
          <div className="relative border border-gold/40 rounded-sm p-8 md:p-12 bg-gradient-to-br from-[#111] to-[#0a0a0a] overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold" />

            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,164,90,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 text-center">
              {/* Offer headline */}
              <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 px-6 py-2 rounded-full mb-8">
                <span className="font-montserrat text-gold text-xs tracking-widest uppercase font-semibold">
                  Limited Combo Deal
                </span>
              </div>

              <h3 className="font-cinzel text-2xl md:text-3xl font-bold text-white mb-2">
                BUY ANY 2 PERFUMES
              </h3>
              <p className="font-montserrat text-muted-foreground mb-8">
                Mix & match from our entire collection
              </p>

              {/* Price display */}
              <div className="flex items-center justify-center gap-6 mb-10">
                <div className="text-center">
                  <div className="font-montserrat text-xs text-muted-foreground tracking-widest uppercase mb-1">
                    Regular
                  </div>
                  <div className="font-cinzel text-3xl font-bold text-white/40 line-through decoration-red-400">
                    ₹598
                  </div>
                </div>
                <div className="text-4xl text-gold/40">→</div>
                <div className="text-center">
                  <div className="font-montserrat text-xs text-gold tracking-widest uppercase mb-1">
                    Combo Price
                  </div>
                  <div className="font-cinzel text-5xl font-black gold-text-gradient">
                    ₹499
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 px-4 py-1.5 rounded-full mb-10">
                <span className="font-montserrat text-green-400 text-sm font-semibold">
                  💰 You Save ₹99!
                </span>
              </div>

              {/* Perfume selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                <div>
                  <label
                    htmlFor="select-perfume1"
                    className="font-montserrat text-xs text-gold/70 tracking-widest uppercase block mb-2"
                  >
                    Perfume 1
                  </label>
                  <Select onValueChange={setPerfume1}>
                    <SelectTrigger
                      data-ocid="combo.select"
                      className="bg-black border-gold/30 text-white font-montserrat focus:ring-gold focus:border-gold hover:border-gold/60 transition-colors"
                    >
                      <SelectValue placeholder="Choose your first scent" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-gold/30">
                      {PERFUMES.map((p) => (
                        <SelectItem
                          key={p.id}
                          value={p.name}
                          className="font-montserrat text-white hover:bg-gold/10 focus:bg-gold/10"
                        >
                          {p.icon} {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="select-perfume2"
                    className="font-montserrat text-xs text-gold/70 tracking-widest uppercase block mb-2"
                  >
                    Perfume 2
                  </label>
                  <Select onValueChange={setPerfume2}>
                    <SelectTrigger
                      data-ocid="combo.select"
                      className="bg-black border-gold/30 text-white font-montserrat focus:ring-gold focus:border-gold hover:border-gold/60 transition-colors"
                    >
                      <SelectValue placeholder="Choose your second scent" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111] border-gold/30">
                      {PERFUMES.map((p) => (
                        <SelectItem
                          key={p.id}
                          value={p.name}
                          className="font-montserrat text-white hover:bg-gold/10 focus:bg-gold/10"
                        >
                          {p.icon} {p.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <button
                type="button"
                onClick={handleClaim}
                data-ocid="combo.primary_button"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 gold-gradient text-black font-cinzel font-bold text-sm tracking-[0.2em] px-10 py-4 rounded-sm hover:opacity-90 transition-all hover:shadow-gold gold-glow"
              >
                <MessageCircle className="w-5 h-5" />
                CLAIM OFFER ON WHATSAPP
              </button>

              <p className="font-montserrat text-xs text-muted-foreground mt-4">
                Click to open WhatsApp with your order pre-filled 📱
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px gold-gradient" />
            <Phone className="w-4 h-4 text-gold" />
            <div className="w-16 h-px gold-gradient" />
          </div>
          <h2 className="font-cinzel font-black text-4xl sm:text-5xl tracking-wide mb-4">
            <span className="gold-text-gradient">GET IN TOUCH</span>
          </h2>
          <p className="font-montserrat text-muted-foreground max-w-md mx-auto">
            Ready to find your signature scent? Reach out and we'll guide you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative border border-gold/20 rounded-sm p-8 bg-[#0d0d0d] hover:border-gold/40 transition-colors group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/60" />

            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-cinzel text-gold text-sm font-bold">
                  1
                </span>
              </div>
              <span className="font-montserrat text-xs text-gold/60 tracking-widest uppercase">
                Primary Contact
              </span>
            </div>

            <p className="font-cinzel text-2xl font-bold text-white mb-6 tracking-wide">
              +91 {PHONE_PRIMARY}
            </p>

            <div className="flex gap-3">
              <a
                href={`tel:${PHONE_PRIMARY}`}
                data-ocid="contact.primary_button"
                className="flex-1 flex items-center justify-center gap-2 border border-gold/40 text-gold font-cinzel text-xs tracking-widest px-4 py-3 rounded-sm hover:bg-gold/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                CALL NOW
              </a>
              <a
                href={`${WA_PRIMARY}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.secondary_button"
                className="flex-1 flex items-center justify-center gap-2 gold-gradient text-black font-cinzel text-xs tracking-widest px-4 py-3 rounded-sm hover:opacity-90 transition-all font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
          </motion.div>

          {/* Contact 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative border border-gold/20 rounded-sm p-8 bg-[#0d0d0d] hover:border-gold/40 transition-colors group"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/60" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/60" />

            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-cinzel text-gold text-sm font-bold">
                  2
                </span>
              </div>
              <span className="font-montserrat text-xs text-gold/60 tracking-widest uppercase">
                Secondary Contact
              </span>
            </div>

            <p className="font-cinzel text-2xl font-bold text-white mb-6 tracking-wide">
              +91 {PHONE_SECONDARY}
            </p>

            <div className="flex gap-3">
              <a
                href={`tel:${PHONE_SECONDARY}`}
                data-ocid="contact.primary_button"
                className="flex-1 flex items-center justify-center gap-2 border border-gold/40 text-gold font-cinzel text-xs tracking-widest px-4 py-3 rounded-sm hover:bg-gold/10 transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                CALL NOW
              </a>
              <a
                href={`${WA_SECONDARY}`}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.secondary_button"
                className="flex-1 flex items-center justify-center gap-2 gold-gradient text-black font-cinzel text-xs tracking-widest px-4 py-3 rounded-sm hover:opacity-90 transition-all font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WHATSAPP
              </a>
            </div>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 border border-gold/20 rounded-sm px-8 py-4 bg-gold/5">
            <span className="text-xl">⏰</span>
            <div className="text-left">
              <div className="font-cinzel text-sm text-gold font-bold tracking-wider">
                AVAILABLE 9AM – 9PM
              </div>
              <div className="font-montserrat text-xs text-muted-foreground mt-0.5">
                Monday to Sunday · Fast Response on WhatsApp
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-[#050505] border-t border-gold/20 py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <img
            src="/assets/output-onlinepngtools-removebg-preview-019d3601-db8d-70dc-b2a2-a9407b7f21d6.png"
            alt="Prahii Perfumes"
            className="h-16 w-auto object-contain opacity-80"
          />

          <p className="font-montserrat italic text-muted-foreground tracking-wide">
            A scent that stays.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            {["#home", "#collections", "#offer", "#contact"].map((href) => (
              <a
                key={href}
                href={href}
                className="font-cinzel text-[10px] text-muted-foreground hover:text-gold tracking-[0.3em] uppercase transition-colors"
                data-ocid="nav.link"
              >
                {href.replace("#", "")}
              </a>
            ))}
          </div>

          <div className="w-24 h-px gold-gradient opacity-40" />

          <p className="font-montserrat text-xs text-muted-foreground">
            © {year} Prahii Perfumes. All rights reserved. ·{" "}
            <a
              href={caffeineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Built with ❤️ using caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <HeroSection />
        <CollectionsSection />
        <ComboOfferSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
