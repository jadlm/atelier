import { useEffect, useState } from 'react'
import {
  ArrowRight, ArrowUpRight, Camera, Check, ChevronLeft, ChevronRight, Clock3,
  Menu, MessageCircle, Phone, X
} from 'lucide-react'

const siteConfig = {
  name: 'Atelier Nord',
  phone: '+212 5 22 84 16 20',
  whatsapp: '212661245890',
  email: 'bonjour@atelier-nord.ma',
  address: '28, rue du Parc · Casablanca',
}

const services = [
  ['01', 'Architecture intérieure', 'Des volumes calmes et cohérents, dessinés autour de vos usages.'],
  ['02', 'Aménagement sur mesure', 'Mobilier, matières et lumière composent un intérieur qui vous ressemble.'],
  ['03', 'Suivi de réalisation', 'Un accompagnement précis, du premier croquis aux dernières finitions.'],
  ['04', 'Conseil & décoration', 'Une direction sensible pour révéler le potentiel d’un lieu existant.'],
]

const projects = [
  { title: 'Villa Atlas', category: 'Architecture intérieure', city: 'Bouskoura · 2025', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85', size: 'large' },
  { title: 'Appartement Palmier', category: 'Rénovation complète', city: 'Casablanca · 2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', size: 'small' },
  { title: 'Maison blanche', category: 'Aménagement sur mesure', city: 'Rabat · 2024', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85', size: 'small' },
  { title: 'Dar Anfa', category: 'Décoration', city: 'Casablanca · 2023', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85', size: 'large' },
]

const testimonials = [
  { quote: 'L’équipe a compris notre façon de vivre avant même de dessiner. Le résultat est beau, mais surtout profondément juste.', name: 'Nadia El Mansouri', role: 'Projet Villa Atlas' },
  { quote: 'Chaque étape était claire, les choix étaient argumentés et le chantier parfaitement suivi. Une vraie tranquillité.', name: 'Karim Berrada', role: 'Projet Appartement Palmier' },
  { quote: 'Atelier Nord a donné une âme à notre maison sans jamais chercher à imposer un style.', name: 'Salma & Youssef', role: 'Projet Dar Anfa' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [testimonial, setTestimonial] = useState(0)
  const [formState, setFormState] = useState('idle')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Bonjour Atelier Nord, j’aimerais parler d’un projet.')}`
  const handleSubmit = (event) => {
    event.preventDefault()
    setFormState('sent')
  }

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#accueil" aria-label="Atelier Nord, accueil">
          <span className="brand-mark">AN</span><span>Atelier <em>Nord</em></span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navigation principale">
          {['Services', 'Réalisations', 'À propos', 'Avis'].map((item) => <a key={item} href={`#${item.toLowerCase().replace('é', 'e').replace(' ', '-')}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Parlons de votre projet <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">Architecture · Intérieurs · Casablanca</p>
            <h1>Des espaces<br /><i>qui ont du sens.</i></h1>
            <p className="hero-intro">Nous imaginons des lieux singuliers, durables et profondément ancrés dans votre manière de vivre.</p>
            <div className="hero-actions"><a className="button button-dark" href="#contact">Démarrer un projet <ArrowRight size={17} /></a><a className="text-link" href="#realisations">Voir nos réalisations <ArrowDown /></a></div>
            <div className="hero-proof"><span className="stars">★★★★★</span><span><strong>12 ans</strong> d’expérience<br />et des projets qui durent.</span></div>
          </div>
          <div className="hero-visual"><img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=90" alt="Salon contemporain avec matières naturelles" /><div className="image-caption"><span>01</span><span>Villa Atlas<br /><small>Bouskoura · 2025</small></span></div></div>
          <div className="hero-side-note">Scroll to explore <span>↓</span></div>
        </section>

        <section className="trust-strip" aria-label="Engagements Atelier Nord">{['Une écoute attentive', 'Des choix durables', 'Un suivi de proximité', 'Des détails qui comptent'].map((item) => <span key={item}><Check size={15} />{item}</span>)}</section>

        <section className="section services-section" id="services">
          <div className="section-heading"><p className="eyebrow">Notre savoir-faire</p><h2>Penser le beau.<br /><i>Habiter le juste.</i></h2><p>De l’idée à la dernière poignée de porte, nous construisons des projets cohérents, sensibles et réalisables.</p></div>
          <div className="service-list">{services.map(([number, title, description]) => <article className="service-row" key={number}><span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><ArrowUpRight className="service-arrow" size={22} /></article>)}</div>
        </section>

        <section className="about-section" id="a-propos"><div className="about-image"><img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85" alt="Détail de mobilier et de lumière naturelle" /><span>La matière<br />comme point<br />de départ.</span></div><div className="about-copy"><p className="eyebrow">L’atelier</p><h2>Une architecture<br /><i>à hauteur de vie.</i></h2><p>Atelier Nord est un studio d’architecture intérieure basé à Casablanca. Nous croyons aux espaces qui vieillissent bien, aux matières que l’on a envie de toucher et aux intérieurs qui laissent de la place à la vie.</p><div className="principles">{['Une expertise maîtrisée', 'Des solutions pour chaque projet', 'Un accompagnement de proximité'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div><a className="text-link" href="#contact">Découvrir notre approche <ArrowRight size={16} /></a></div></section>

        <section className="section portfolio-section" id="realisations"><div className="portfolio-top"><div><p className="eyebrow">Sélection de projets</p><h2>Des lieux qui<br /><i>restent en mémoire.</i></h2></div><p className="portfolio-note">Chaque projet part d’une page blanche.<br />Voici quelques histoires déjà écrites.</p></div><div className="portfolio-grid">{projects.map((project) => <button className={`project-card ${project.size}`} key={project.title} onClick={() => setSelectedProject(project)}><img src={project.image} alt={project.title} loading="lazy" /><span className="project-overlay"><strong>{project.title}</strong><small>{project.category} · {project.city}</small><ArrowUpRight size={20} /></span></button>)}</div><a className="center-link" href="#contact">Parlons de votre prochain projet <ArrowRight size={17} /></a></section>

        <section className="process-section"><div className="section process-heading"><p className="eyebrow">Notre manière de faire</p><h2>Simple, précise,<br /><i>humaine.</i></h2></div><div className="process-list">{['Premier échange', 'Analyse du lieu', 'Le projet prend forme', 'Réalisation & suivi'].map((item, index) => <div className="process-step" key={item}><span>0{index + 1}</span><div><h3>{item}</h3><p>{['Comprendre vos envies, vos habitudes et ce qui compte vraiment.', 'Lire la lumière, les volumes et les possibilités du lieu.', 'Plans, matières et détails donnent une direction concrète.', 'Des artisans choisis et un suivi attentif jusqu’à la remise des clés.'][index]}</p></div></div>)}</div></section>

        <section className="section testimonials-section" id="avis"><div className="quote-mark">“</div><p className="eyebrow">Paroles de clients</p><div className="testimonial-body"><div className="testimonial-quote"><div className="stars">★★★★★</div><blockquote>{testimonials[testimonial].quote}</blockquote><p><strong>{testimonials[testimonial].name}</strong><br />{testimonials[testimonial].role}</p></div><div className="slider-controls"><button onClick={() => setTestimonial((testimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Avis précédent"><ChevronLeft /></button><span>0{testimonial + 1} <small>/ 0{testimonials.length}</small></span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Avis suivant"><ChevronRight /></button></div></div></section>

        <section className="cta-section"><div><p className="eyebrow">Une idée, un lieu, une envie</p><h2>Votre projet mérite<br /><i>un regard juste.</i></h2></div><a className="button button-light" href="#contact">Échangeons sur votre projet <ArrowUpRight size={18} /></a></section>

        <section className="section contact-section" id="contact"><div className="contact-intro"><p className="eyebrow">Nous rencontrer</p><h2>Parlons de votre<br /><i>projet.</i></h2><p>Un premier échange suffit pour poser les bases. Écrivez-nous, nous vous répondrons sous 48 heures.</p><div className="contact-details"><a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}><Phone size={17} />{siteConfig.phone}</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={17} />WhatsApp</a><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>{siteConfig.address}</span><span><Clock3 size={17} />Lun — Ven · 9h00 — 18h00</span></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Votre nom<input required name="name" placeholder="Comment vous appelez-vous ?" /></label><label>Votre email<input required type="email" name="email" placeholder="vous@exemple.com" /></label><label>Parlez-nous de votre projet<textarea required name="message" rows="4" placeholder="Quelques mots sur votre lieu, vos envies..."></textarea></label><button className="button button-dark" type="submit" disabled={formState === 'sent'}>{formState === 'sent' ? <><Check size={17} /> Message envoyé</> : <>Envoyer ma demande <ArrowRight size={17} /></>}</button>{formState === 'sent' && <p className="form-success">Merci. Votre message est bien arrivé, nous revenons vers vous rapidement.</p>}</form></section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="brand" href="#accueil"><span className="brand-mark">AN</span><span>Atelier <em>Nord</em></span></a><p>Architecture intérieure<br />et projets qui durent.</p><a className="footer-social" href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={18} /> Instagram</a></div><div className="footer-links"><div><span>Navigation</span><a href="#services">Services</a><a href="#realisations">Réalisations</a><a href="#a-propos">À propos</a></div><div><span>Contact</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="#contact">Demander un devis</a></div></div><div className="footer-bottom"><span>© 2025 Atelier Nord</span><span>Casablanca, Maroc</span><a href="#accueil">Haut de page ↑</a></div></footer>

      <a className="floating-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter Atelier Nord sur WhatsApp"><MessageCircle size={22} /></a>
      {selectedProject && <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}><div className="project-modal" role="dialog" aria-modal="true" aria-label={selectedProject.title} onClick={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Fermer"><X /></button><img src={selectedProject.image} alt={selectedProject.title} /><div><p className="eyebrow">{selectedProject.category}</p><h2>{selectedProject.title}</h2><p>{selectedProject.city}. Une réalisation Atelier Nord, pensée autour de la lumière, des matières naturelles et d’une circulation fluide.</p><a className="text-link" href="#contact" onClick={() => setSelectedProject(null)}>Parler d’un projet similaire <ArrowRight size={16} /></a></div></div></div>}
    </div>
  )
}

function ArrowDown() { return <span aria-hidden="true">↓</span> }

export default App