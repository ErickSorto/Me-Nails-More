import Image from "next/image";
import BookingSection from "./BookingSection";
import DrawerAutoClose from "./DrawerAutoClose";
import MobileReviewCarousel from "./MobileReviewCarousel";
import ViewportSequenceTrigger from "./ViewportSequenceTrigger";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgePercent,
  CalendarDays,
  Clock,
  Gift,
  HandHeart,
  MapPin,
  PersonStanding,
  Phone,
  Sparkles,
  UserRoundPlus,
  UsersRound,
} from "lucide-react";
import type { IconType } from "react-icons";
import { FaFacebookF, FaGoogle, FaInstagram, FaStar, FaTiktok } from "react-icons/fa6";
import { GiEyelashes, GiFingernail, GiFootprint, GiNails, GiPalette } from "react-icons/gi";

type SiteIcon = IconType | LucideIcon;

const services = [
  {
    title: "Signature manicures",
    detail: "Detailed shaping, cuticle care, massage, and a glassy polish finish.",
    icon: GiNails,
  },
  {
    title: "Gel extensions",
    detail: "Balanced length, soft apex structure, and wearable salon glamour.",
    icon: GiFingernail,
  },
  {
    title: "Pedicure lounge",
    detail: "Classic, jelly, deluxe, and gel pedicures with massage-focused care.",
    icon: GiFootprint,
  },
  {
    title: "Lashes and more",
    detail: "A beauty stop for nails, lashes, massage moments, and complimentary sips.",
    icon: GiEyelashes,
  },
];

const steps = [
  {
    number: "01",
    title: "Consult the palette",
    detail: "Review tones, finishes, and references with a tech before the set begins.",
    image: "/generated/journey-editorial-consult.webp",
    imageAlt: "Client and nail technician choosing a pink nail color palette",
  },
  {
    number: "02",
    title: "Refine the shape",
    detail: "Length, structure, and cuticle detail are shaped with quiet precision.",
    image: "/generated/journey-editorial-shape.webp",
    imageAlt: "Nail technician shaping glossy pink nails at a manicure table",
  },
  {
    number: "03",
    title: "Seal the finish",
    detail: "Color, gloss, and final checks bring the set to a clean salon-shine finish.",
    image: "/generated/journey-editorial-finish.webp",
    imageAlt: "Woman showing finished glossy pink nails with sparkle accents",
  },
];

const menu = [
  ["Classic manicure", "Hands", "Polish ready", GiNails],
  ["Gel manicure", "Hands", "Gloss finish", HandHeart],
  ["Gel-X or acrylic set", "Extensions", "Custom length", GiFingernail],
  ["Spa or jelly pedicure", "Feet", "Massage care", GiFootprint],
  ["Lash services", "Beauty", "Ask for Mimi", GiEyelashes],
  ["Custom nail art", "Add-on", "Chrome • gems • art", GiPalette],
] as const;

const hours = [
  ["Mon-Fri", "10:00 AM - 8:00 PM"],
  ["Sat", "9:30 AM - 8:00 PM"],
  ["Sun", "11:00 AM - 6:30 PM"],
];

const stats = [
  ["4.9", "Google rating", Sparkles],
  ["269", "Google reviews", FaGoogle],
  ["7", "days open", CalendarDays],
] as const;

const guestNotes = [
  ["22 licensed nail techs", UsersRound],
  ["Walk-ins welcome", PersonStanding],
  ["Same-time services by request", Clock],
  ["15% when you bring friends or family", UserRoundPlus],
  ["10% Mother's Day special", Gift],
] as const;

const reviews = [
  {
    name: "Stephanie",
    service: "Nail art, extensions, designs, pedicure",
    text: "Every tech that has worked on my nails is very talented. Yenifer is my go-to and has done awesome work for me for the last three months. The owners are humble, hospitable, and even offer a bubbly.",
  },
  {
    name: "Dana Massey",
    service: "Mimi and Juneya",
    text: "I've been going to Mimi for over a decade and she never lets me down. Juneya is an absolute magician with nails, with creativity, a customer-driven attitude, and an amazing hand massage.",
  },
  {
    name: "Hellen Flores",
    service: "Jennifer and salon team",
    text: "I love this nail salon so much. I have gotten nothing but perfection. Jennifer is so good, and honestly all the techs are well experienced and extremely nice.",
  },
  {
    name: "Janelle Dickerson",
    service: "Maria",
    text: "Maria is amazing. Her customer service is always top-tier, and she takes her time to make sure my nails come out perfect every visit. She's friendly, patient, and so talented.",
  },
  {
    name: "Myeisha Foster",
    service: "Nails, lashes, feet, and brows",
    text: "Meme is amazing and I love her shop. Juneya slayed my birthday nails, and I came back for lashes, feet, and eyebrows. Maria is detail oriented and very professional.",
  },
  {
    name: "DaShawn Roddey",
    service: "Anthony and salon team",
    text: "This is the only nail salon I go to, and for good reason. The atmosphere is always welcoming and the entire staff is amazing. Anthony is definitely my go-to.",
  },
];

const reels = [
  {
    title: "Red and black set",
    detail: "Real salon clip with sculpted length and high-gloss detail.",
    poster: "/instagram-gallery/menails-instagram-04.webp",
    video: "/videos/instagram-nail-reel-dqfj6fekqus.mp4",
  },
  {
    title: "Color story",
    detail: "Bright ombre length with a polished salon finish.",
    image: "/instagram-gallery/menails-instagram-07.webp",
  },
  {
    title: "Custom character art",
    detail: "Mixed-color detail with a bold graphic finish.",
    image: "/instagram-gallery/menails-instagram-11.webp",
  },
];

const gallery = [
  {
    image: "/instagram-gallery/menails-instagram-04.webp",
    href: "https://www.instagram.com/reel/DQFj6fekQuS/",
    alt: "Red and black long nail art from the Me Nails and More Instagram feed",
  },
  {
    image: "/instagram-gallery/menails-instagram-05.webp",
    href: "https://www.instagram.com/reel/DPwydfikcOB/",
    alt: "Custom colorful long nail art from the Me Nails and More Instagram feed",
  },
  {
    image: "/instagram-gallery/menails-instagram-07.webp",
    href: "https://www.instagram.com/p/DPDMHdZDRt2/",
    alt: "Rainbow ombre nail art from the Me Nails and More Instagram feed",
  },
  {
    image: "/instagram-gallery/menails-instagram-10.webp",
    href: "https://www.instagram.com/reel/DOSSCzBjfnG/",
    alt: "Character nail art from the Me Nails and More Instagram feed",
  },
  {
    image: "/instagram-gallery/menails-instagram-11.webp",
    href: "https://www.instagram.com/reel/DOOVzMOkVcN/",
    alt: "Pink and blue character nail art from the Me Nails and More Instagram feed",
  },
  {
    image: "/instagram-gallery/menails-instagram-13.webp",
    href: "https://www.instagram.com/reel/DQFj6fekQuS/",
    alt: "Close-up red and black long nail art from the Me Nails and More Instagram reel",
  },
];

const heroNailCards = [
  {
    image: "/instagram-gallery/menails-instagram-04.webp",
    alt: "Red and black long nail art",
    className: "nail-card-one",
  },
  {
    image: "/instagram-gallery/menails-instagram-07.webp",
    alt: "Rainbow ombre nail art",
    className: "nail-card-two",
  },
  {
    image: "/instagram-gallery/menails-instagram-11.webp",
    alt: "Pink and blue character nail art",
    className: "nail-card-three",
  },
];

const phoneNumber = "+12408285997";
const salonAddress = "3818 Bladensburg Rd, Brentwood, MD 20722";
const locationUrl = "https://maps.app.goo.gl/yDKeMkKpxTSGUMpF7";
const mapEmbedUrl =
  "https://www.google.com/maps?q=3818%20Bladensburg%20Rd%2C%20Brentwood%2C%20MD%2020722&output=embed";
const instagramUrl = "https://www.instagram.com/menails_and_more_/";
const tiktokUrl = "https://www.tiktok.com/@nailsmeme";
const facebookUrl = "https://www.facebook.com/";

function Icon({ icon: IconComponent }: { icon: SiteIcon }) {
  return <IconComponent className="site-icon" aria-hidden="true" />;
}

function Stars() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <FaStar aria-hidden="true" key={index} />
      ))}
    </div>
  );
}

function SocialIcon({ name }: { name: "instagram" | "tiktok" | "facebook" }) {
  const icons = {
    instagram: FaInstagram,
    tiktok: FaTiktok,
    facebook: FaFacebookF,
  };
  const IconComponent = icons[name];

  return <IconComponent className="brand-icon" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main className="site-shell">
      <input className="drawer-toggle" id="salon-drawer" type="checkbox" aria-label="Toggle mobile menu" />
      <DrawerAutoClose />
      <header className="site-header">
        <div className="announcement-bar">
          <a className="sale-pill" href="#visit">
            <Icon icon={BadgePercent} />
            <span>Mother&apos;s Day 10%</span>
          </a>
          <a className="announcement-center" href="#visit">
            15% off when you bring friends or family <span aria-hidden="true">-&gt;</span>
          </a>
          <div className="social-icons compact" aria-label="Social media">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon name="instagram" />
            </a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
              <SocialIcon name="tiktok" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <SocialIcon name="facebook" />
            </a>
          </div>
        </div>
        <div className="main-nav">
          <a className="brand" href="#home" aria-label="Me Nails and More home">
            <Image src="/generated/menails-wordmark-flow.webp" alt="" width={1200} height={260} priority />
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#reels">Reels</a>
            <a href="#gallery">Gallery</a>
            <a href="#menu">Menu</a>
            <a href="#visit">Visit</a>
          </nav>
          <label className="menu-button" htmlFor="salon-drawer" aria-label="Open menu">
            <span />
            <span />
            <span />
          </label>
          <a className="nav-cta" href="#booking" aria-label="Book now">
            <Icon icon={CalendarDays} />
            Book now
          </a>
        </div>
      </header>
      <label className="drawer-backdrop" htmlFor="salon-drawer" aria-label="Close menu" />
      <aside className="mobile-drawer" aria-label="Quick salon drawer">
        <div className="drawer-top">
          <Image src="/generated/menails-wordmark-flow.webp" alt="Me Nails and More" width={1200} height={260} />
          <label htmlFor="salon-drawer" aria-label="Close menu">
            <span />
            <span />
          </label>
        </div>
        <nav className="drawer-links" aria-label="Mobile navigation">
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#reels">Reels</a>
          <a href="#gallery">Gallery</a>
          <a href="#menu">Menu</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className="drawer-card">
          <span className="drawer-card-icon">
            <Icon icon={Clock} />
          </span>
          <div>
            <p>Today&apos;s hours</p>
            <strong>10 AM - 8 PM</strong>
          </div>
        </div>
        <div className="drawer-card">
          <span className="drawer-card-icon">
            <Icon icon={PersonStanding} />
          </span>
          <div>
            <p>Walk-ins</p>
            <strong>Welcome</strong>
          </div>
        </div>
          <a className="drawer-cta" href="#booking">
            <Icon icon={CalendarDays} />
            Book a time
        </a>
        <div className="drawer-socials">
          <p>Follow the work</p>
          <div className="social-icons" aria-label="Social media">
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <SocialIcon name="instagram" />
            </a>
            <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
              <SocialIcon name="tiktok" />
            </a>
            <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <SocialIcon name="facebook" />
            </a>
          </div>
        </div>
      </aside>

      <section className="hero" id="home">
        <Image
          src="/store-hero.webp"
          alt="Pink and champagne nail salon interior with manicure stations"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow">Nail studio and beauty lounge</p>
          <h1>
            <span className="hero-title-line">Me Nails</span>{" "}
            <span className="hero-title-line">&amp; <span className="hero-title-accent">More</span></span>
          </h1>
          <p className="hero-copy">
            Brentwood&apos;s pink beauty stop for nails, lashes, pedicures, mimosas, and polished little
            moments with room for walk-ins.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#menu">
              <Icon icon={GiNails} />
              View services
              <Icon icon={ArrowRight} />
            </a>
            <a className="secondary-link" href="#visit">
              <Icon icon={MapPin} />
              Plan a visit
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="portrait-glow" />
          {heroNailCards.map((card) => (
            <div className={`hero-nail-card ${card.className}`} key={card.image}>
              <Image src={card.image} alt={card.alt} fill sizes="(max-width: 700px) 34vw, 14vw" />
            </div>
          ))}
          <div className="hero-portrait">
            <Image
              src="/generated/hero-model-modest-cutout.webp"
              alt=""
              width={901}
              height={1744}
              priority
              sizes="(max-width: 700px) 58vw, (max-width: 980px) 42vw, 34vw"
            />
          </div>
        </div>
        <div className="hero-ribbon" aria-label="Salon highlights">
          <span>
            <Icon icon={UsersRound} />
            22 licensed nail techs
          </span>
          <span>
            <Icon icon={PersonStanding} />
            Walk-ins welcome
          </span>
          <span>
            <Icon icon={UserRoundPlus} />
            15% with friends or family
          </span>
        </div>
      </section>

      <section className="proof-band" aria-label="Salon proof points">
        {stats.map(([value, label, icon]) => (
          <div key={label}>
            <span className="proof-icon">
              <Icon icon={icon} />
            </span>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="proof-reviews" aria-label="Google review highlights">
        <div className="proof-summary">
          <p className="eyebrow">Google reviews</p>
          <h2>Loved for careful sets and a calm pink salon feel.</h2>
          <div className="proof-rating">
            <Stars />
            <span>4.9 average from 269 Google reviews</span>
          </div>
        </div>
        <MobileReviewCarousel reviews={reviews} />
      </section>

      <section className="experience-section" id="experience">
        <ViewportSequenceTrigger selector=".journey" />
        <div className="section-copy">
          <p className="eyebrow">The appointment flow</p>
          <h2>From idea to flawless finish.</h2>
          <p>
            A refined three-step flow keeps each set personal, precise, and polished from the first color
            choice.
          </p>
        </div>
        <div className="journey" aria-label="Appointment journey">
          <span className="journey-line" aria-hidden="true" />
          <span className="journey-connector connector-one" aria-hidden="true" />
          <span className="journey-connector connector-two" aria-hidden="true" />
          {steps.map((step) => (
            <article className="journey-step" key={step.number}>
              <Image
                className="step-art"
                src={step.image}
                alt={step.imageAlt}
                width={724}
                height={724}
                loading="eager"
                sizes="(max-width: 700px) 25vw, 142px"
                unoptimized
              />
              <div>
                <small>{step.number}</small>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-visual" aria-hidden="true">
          <Image src="/store-hero.webp" alt="" fill sizes="(max-width: 900px) 100vw, 42vw" />
        </div>
        <div className="services-copy">
          <p className="eyebrow">Services</p>
          <h2>Made for glossy color, careful shaping, and quiet luxury.</h2>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-item" key={service.title}>
                <span>
                  <Icon icon={service.icon} />
                </span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="video-section" id="reels">
        <div className="video-heading">
          <p className="eyebrow">Salon reels</p>
          <h2>Pretty sets, color picks, and tiny moments worth replaying.</h2>
        </div>
        <div className="reel-grid" aria-label="Salon video and nail previews">
          {reels.map((reel) => (
            <article className={`reel-card ${"video" in reel ? "has-video" : ""}`} key={reel.title}>
              {"video" in reel ? (
                <video
                  className="reel-media"
                  controls
                  playsInline
                  preload="metadata"
                  poster={reel.poster}
                  aria-label={`${reel.title} video`}
                >
                  <source src={reel.video} type="video/mp4" />
                </video>
              ) : (
                <Image src={reel.image} alt="" fill sizes="(max-width: 700px) 76vw, 24vw" />
              )}
              <span className="reel-copy">
                <strong>{reel.title}</strong>
                <small>{reel.detail}</small>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="gallery-heading">
          <p className="eyebrow">Gallery</p>
          <h2>Real looks from the salon Instagram feed.</h2>
          <a className="secondary-dark-link" href={instagramUrl} target="_blank" rel="noreferrer">
            <SocialIcon name="instagram" />
            Open Instagram
          </a>
        </div>
        <div className="gallery-grid" aria-label="Instagram gallery previews">
          {gallery.map((item, index) => (
            <a
              className="gallery-tile"
              href={item.href}
              target="_blank"
              rel="noreferrer"
              key={item.image}
              aria-label={`Open Instagram gallery image ${index + 1}`}
            >
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 700px) 46vw, 16vw" />
            </a>
          ))}
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading">
          <p className="eyebrow">Beauty menu</p>
          <h2>Pick the service. We handle the detail.</h2>
        </div>
        <div className="menu-grid">
          {menu.map(([name, time, price, icon]) => (
            <article className="menu-row" key={name}>
              <span className="menu-icon">
                <Icon icon={icon} />
              </span>
              <div className="menu-row-copy">
                <div>
                  <h3>{name}</h3>
                  <span>{time}</span>
                </div>
                <strong>{price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details-section" id="visit">
        <div className="details-copy">
          <p className="eyebrow">Visit</p>
          <h2>Open every day in Brentwood.</h2>
          <p>
            Come by for walk-in availability or call ahead for a smoother appointment, especially for
            same-time services.
          </p>
          <div className="contact-actions">
            <a className="primary-link" href={`tel:${phoneNumber}`}>
              <Icon icon={Phone} />
              Call {phoneNumber}
              <Icon icon={ArrowRight} />
            </a>
            <a
              className="secondary-dark-link"
              href={locationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={MapPin} />
              Get directions
            </a>
          </div>
        </div>
        <div className="hours-panel">
          <div className="address-block">
            <span className="panel-icon">
              <Icon icon={MapPin} />
            </span>
            <div>
              <span>Address</span>
              <strong>3818 Bladensburg Rd</strong>
              <p>Brentwood, MD 20722</p>
            </div>
          </div>
          <div className="hours-list" aria-label="Business hours">
            {hours.map(([day, time]) => (
              <div key={day}>
                <span>{day}</span>
                <strong>{time}</strong>
              </div>
            ))}
          </div>
          <div className="guest-notes" aria-label="Guest notes and specials">
            {guestNotes.map(([note, icon]) => (
              <span key={note}>
                <Icon icon={icon} />
                {note}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section" aria-labelledby="map-heading">
        <div className="map-copy">
          <p className="eyebrow">Location</p>
          <h2 id="map-heading">Find Me Nails &amp; More in Brentwood.</h2>
          <p>{salonAddress}</p>
          <div className="contact-actions">
            <a className="primary-link" href={locationUrl} target="_blank" rel="noreferrer">
              <Icon icon={MapPin} />
              Open map
              <Icon icon={ArrowRight} />
            </a>
            <a className="secondary-dark-link" href={`tel:${phoneNumber}`}>
              <Icon icon={Phone} />
              Call {phoneNumber}
            </a>
          </div>
        </div>
        <div className="map-frame">
          <iframe
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={mapEmbedUrl}
            title="Map to Me Nails and More in Brentwood, Maryland"
          />
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-copy">
          <Image
            src="/generated/menails-wordmark-flow.webp"
            alt="Me Nails and More"
            width={1200}
            height={260}
          />
          <h2>Fresh sets, soft pink chairs, and a little shine before you go.</h2>
          <a className="primary-link" href="#booking">
            <Icon icon={CalendarDays} />
            Book your set
            <Icon icon={ArrowRight} />
          </a>
        </div>
      </section>

      <BookingSection />

      <footer className="site-footer">
        <div className="footer-top">
          <a className="footer-logo" href="#home" aria-label="Me Nails and More home">
            <Image src="/generated/menails-wordmark-flow.webp" alt="Me Nails and More" width={1200} height={260} />
          </a>
          <div className="footer-cta">
            <p>Walk-ins welcome every day</p>
            <a href={`tel:${phoneNumber}`}>
              <Icon icon={Phone} />
              Call {phoneNumber}
            </a>
          </div>
        </div>

        <div className="footer-grid">
          <div className="footer-column footer-about">
            <span>Brentwood nail studio</span>
            <p>
              Pink salon energy for detailed manicures, glossy pedicures, lashes, nail art, and a
              relaxed beauty visit.
            </p>
            <div className="footer-socials" aria-label="Social media">
              <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                <SocialIcon name="instagram" />
              </a>
              <a href={tiktokUrl} target="_blank" rel="noreferrer" aria-label="TikTok">
                <SocialIcon name="tiktok" />
              </a>
              <a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
                <SocialIcon name="facebook" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <span>Visit</span>
            <address>
              {salonAddress}
            </address>
            <a
              className="footer-text-link"
              href={locationUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={MapPin} />
              Get directions
            </a>
          </div>

          <div className="footer-column">
            <span>Hours</span>
            <div className="footer-hours" aria-label="Footer business hours">
              {hours.map(([day, time]) => (
                <p key={day}>
                  <strong>{day}</strong>
                  <em>{time}</em>
                </p>
              ))}
            </div>
          </div>

          <nav className="footer-column footer-links" aria-label="Footer navigation">
            <span>Explore</span>
            <a href="#services">Services</a>
            <a href="#experience">Experience</a>
            <a href="#reels">Reels</a>
            <a href="#gallery">Gallery</a>
            <a href="#menu">Menu</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>2026 Me Nails &amp; More. All rights reserved.</p>
          <p>22 licensed nail techs / walk-ins welcome / same-time services by request</p>
        </div>
      </footer>
    </main>
  );
}
