/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import logo from './Afshar-Law-logo-300x287.png';
import consultantVideo from './0_Man_Men_1280x672.mp4';
import heroImg from './hero-img-afshar.webp';
import heroBg from './ChatGPT Image Jul 18, 2026, 01_26_48 AM.png';
import guaranteeBg from './277.jpg';
import constructionImg from './2940.jpg';
import meetAttorneyImg from './DSC02475.jpg';
import howItWorksImg from './afshar-office.webp';
import contactImg from './afshar-cta-final-1.webp';
import contactBg from './5291.jpg';
import { 
  Phone, 
  Menu, 
  X, 
  Scale, 
  ShieldCheck, 
  CheckCircle2,
  Check, 
  ArrowRight,
  Star,
  Users,
  Gavel,
  User,
  Car,
  Truck,
  Bike,
  PersonStanding,
  Dog,
  Handshake,
  Shield,
  Award,
  FileSearch,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MapPin,
  Mail,
  Clock,
  Plus,
  Minus,
  CircleDollarSign,
  Building2,
  Briefcase,
  Globe,
  Activity
} from 'lucide-react';

const GOLD = "#E4B651";

const Reveal: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FAQItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-[#1E3655] bg-[#0A1A2F]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex justify-between items-center p-5 text-left group hover:text-[#E4B651] transition-colors"
      >
        <span className="font-serif text-lg text-white transition-colors">{question}</span>
        {isOpen ? (
           <Minus className="w-5 h-5 text-[#E4B651] shrink-0" />
        ) : (
           <Plus className="w-5 h-5 text-[#E4B651] shrink-0" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out px-5 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-[#A0AABF] text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const translations = {
  en: {
    hablamos: "Hablamos Español",
    english: "English Version",
    phone: "1-800-555-0000",
    navHome: "Home",
    navPractice: "Practice Areas",
    navVideos: "Videos",
    navBlogs: "Blogs",
    navReviews: "Reviews",
    navContact: "Contact",
    freeCaseEval: "Free Case Evaluation",
    heroBadge: "No Fee Unless We Win Your Case",
    heroTitle_1: "THE AFSHAR",
    heroTitle_2: "LAW FIRM.",
    heroTitle_3: "WINNING FOR YOU.",
    heroDesc: "We have a reputation for integrity, a commitment to excellence, and we strive to help our clients succeed and prosper.",
    getFreeConsultation: "Get Your Free Consultation",
    meetAttorney: "Meet Attorney",
    aboutEmanDesc: "Eman Afshar is the Founding Member of The Afshar Law Firm, focusing on Personal Injury, Construction, and Business Law. With a Juris Doctor from South Texas College of Law and an L.L.M. in International Law from the University of Houston, he has successfully facilitated international contracts and business negotiations across the Middle East, Asia, and Europe.",
    aboutEmanSubDesc: "Since 2016, we have proudly served Texas by putting people first—often taking on cases others won't. We view every client as a long-term partner and fight tirelessly to protect your interests. Let the experienced professionals at The Afshar Law Firm be your shield.",
    stat1: "Trusted Legal Representation",
    stat2: "Tailored Legal Strategies",
    stat3: "Multi-Practice Experience",
    stat4: "International Business Insight",
    stat5: "10+ Years of Experience",
    ourPracticeAreas: "Our Practice Areas",
    constructionLaw: "Construction Law",
    constructionDesc: "Handling construction disputes, contracts, and site liability.",
    businessLaw: "Business Law",
    businessDesc: "Drafting, litigation, and transactional services for entities.",
    personalInjury: "Personal Injury",
    injuryDesc: "Committed advocacy for injured victims and families.",
    internationalLaw: "International Law",
    internationalDesc: "Cross-border legal counsel and representation worldwide.",
    realEstateLaw: "Real Estate Law",
    realEstateDesc: "Assisting clients with commercial and residential transactions, zoning, and disputes.",
    employmentLaw: "Employment Law",
    employmentDesc: "Advocating for worker rights in discrimination, wrongful termination, and wage claims.",
    criminalDefense: "Criminal Defense",
    criminalDesc: "Providing robust, zealous defense for individuals facing state and federal charges.",
    intellectualProperty: "Intellectual Property",
    ipDesc: "Securing and protecting patents, trademarks, copyrights, and trade secrets.",
    viewAllPractice: "View All Practice Areas",
    needConsultant: "Need A Consultant?",
    consultantSubtitle: "Integrity & Commitment to Excellence",
    consultantDesc: "Whether it's for Personal Injury, Business Transactions, Construction or International Law. The Afshar Law Firm is here to lend expertise and advice. We encourage you to give us a call and make an appointment for a consultation. Currently, we are accepting in-person and virtual consultations, to ensure that our clients are not only satisfied but also feel safe. As an added benefit to our future clients, your initial case evaluation will be free of charge.",
    guaranteeTitle: "You Don't Pay",
    guaranteeSubtitle: "Unless We Win",
    guaranteeDesc_1: "We are committed to providing outstanding legal representation to each and every client. That's why we offer a ",
    guaranteeDesc_bold: "No Fee Guarantee",
    guaranteeDesc_2: " - you won't pay us a dime in attorney's fees unless we win your case or obtain a settlement for you. Your peace of mind is our priority.",
    guaranteeCall: "Call us today to schedule your free consultation with one of our legal experts.",
    ourProcess: "Our Process",
    howItWorks: "Let's see how it works",
    step1Title: "Free Consultation",
    step1Desc: "We listen to your case and provide honest legal advice.",
    step2Title: "Investigation",
    step2Desc: "We gather evidence and build a strong case on your behalf.",
    step3Title: "Demand & Negotiate",
    step3Desc: "We fight for maximum compensation through negotiation.",
    step4Title: "Litigation (If Needed)",
    step4Desc: "If necessary, we are fully prepared to take your case to court.",
    testimonialsTitle: "What Our Clients Say",
    testimonialsSubtitle: "Based on 38+ reviews",
    readMoreReviews: "READ MORE REVIEWS ON GOOGLE",
    faqTitle: "Frequently Asked Questions",
    dontFaceAlone: "Don't Face This Alone.",
    letUsFight: "Let Us Fight For You.",
    startFreeCase: "Start your FREE case evaluation today.",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    caseType: "Case Type",
    autoAccident: "Auto Accident",
    slipFall: "Slip & Fall",
    otherCase: "Other",
    getStartedNow: "GET STARTED NOW",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    address: "123 Law Firm Way, Suite 100, Houston, TX 77002",
    rightsReserved: "All Rights Reserved."
  },
  es: {
    hablamos: "Hablamos Español",
    english: "Versión en Inglés",
    phone: "1-800-555-0000",
    navHome: "Inicio",
    navPractice: "Áreas de Práctica",
    navVideos: "Videos",
    navBlogs: "Blogs",
    navReviews: "Reseñas",
    navContact: "Contacto",
    freeCaseEval: "Evaluación Gratuita de Caso",
    heroBadge: "Sin Honorarios a Menos que Ganemos su Caso",
    heroTitle_1: "EL BUFETE",
    heroTitle_2: "DE ABOGADOS AFSHAR.",
    heroTitle_3: "GANANDO PARA USTED.",
    heroDesc: "Tenemos una reputación de integridad, un compromiso con la excelencia y nos esforzamos por ayudar a nuestros clientes a tener éxito y prosperar.",
    getFreeConsultation: "Obtenga su Consulta Gratuita",
    meetAttorney: "Conozca al Abogado",
    aboutEmanDesc: "Eman Afshar es el miembro fundador de The Afshar Law Firm, enfocándose en Lesiones Personales, Construcción y Derecho Comercial. Con un Doctorado en Jurisprudencia de South Texas College of Law y una Maestría en Derecho Internacional de la Universidad de Houston, ha facilitado con éxito contratos internacionales y negociaciones comerciales en el Medio Oriente, Asia y Europa.",
    aboutEmanSubDesc: "Desde 2016, hemos servido con orgullo a Texas poniendo a las personas primero, a menudo asumiendo casos que otros no aceptan. Consideramos a cada cliente como un socio a largo plazo y luchamos incansablemente para proteger sus intereses. Deje que los profesionales experimentados de The Afshar Law Firm sean su escudo.",
    stat1: "Representación Legal de Confianza",
    stat2: "Estrategias Legales a Medida",
    stat3: "Experiencia Multi-Práctica",
    stat4: "Perspectiva de Negocios Internacionales",
    stat5: "10+ Años de Experiencia",
    ourPracticeAreas: "Nuestras Áreas de Práctica",
    constructionLaw: "Derecho de la Construcción",
    constructionDesc: "Manejo de disputas de construcción, contratos y responsabilidad del sitio.",
    businessLaw: "Derecho Comercial",
    businessDesc: "Redacción, litigación y servicios transaccionales para empresas.",
    personalInjury: "Lesiones Personales",
    injuryDesc: "Defensa comprometida para víctimas lesionadas y familias.",
    internationalLaw: "Derecho Internacional",
    internationalDesc: "Asesoramiento legal transfronterizo y representación a nivel mundial.",
    realEstateLaw: "Derecho Inmobiliario",
    realEstateDesc: "Asistencia a clientes con transacciones comerciales y residenciales, zonificación y disputas.",
    employmentLaw: "Derecho Laboral",
    employmentDesc: "Defensa de los derechos de los trabajadores en demandas de discriminación, despido injustificado y salarios.",
    criminalDefense: "Defensa Criminal",
    criminalDesc: "Proporcionando una defensa sólida y entusiasta para personas que enfrentan cargos estatales y federales.",
    intellectualProperty: "Propiedad Intelectual",
    ipDesc: "Asegurando y protegiendo patentes, marcas registradas, derechos de autor y secretos comerciales.",
    viewAllPractice: "Ver Todas las Áreas de Práctica",
    needConsultant: "¿Necesita un Asesor?",
    consultantSubtitle: "Integridad y Compromiso con la Excelencia",
    consultantDesc: "Ya sea para lesiones personales, transacciones comerciales, construcción o derecho internacional. El bufete de abogados Afshar está aquí para brindar su experiencia y asesoramiento. Le recomendamos que nos llame y programe una cita para una consulta. Actualmente, aceptamos consultas presenciales y virtuales, para garantizar que nuestros clientes no solo estén satisfechos sino que también se sientan seguros. Como beneficio adicional para nuestros futuros clientes, su evaluación inicial de caso será gratuita.",
    guaranteeTitle: "Usted No Paga",
    guaranteeSubtitle: "A Menos que Ganemos",
    guaranteeDesc_1: "Estamos comprometidos a brindar una representación legal excepcional a todos y cada uno de los clientes. Es por eso que ofrecemos una ",
    guaranteeDesc_bold: "Garantía de Sin Honorarios",
    guaranteeDesc_2: " - no nos pagará ni un centavo en honorarios de abogados a menos que ganemos su caso u obtengamos un acuerdo para usted. Su tranquilidad es nuestra prioridad.",
    guaranteeCall: "Llámenos hoy para programar su consulta gratuita con uno de nuestros expertos legales.",
    ourProcess: "Nuestro Proceso",
    howItWorks: "Cómo funciona",
    step1Title: "Consulta Gratuita",
    step1Desc: "Escuchamos su caso y brindamos asesoramiento legal honesto.",
    step2Title: "Investigación",
    step2Desc: "Reunimos pruebas y construimos un caso sólido en su nombre.",
    step3Title: "Exigir y Negociar",
    step3Desc: "Luchamos por la máxima compensación a través de la negociación.",
    step4Title: "Litigio (Si es Necesario)",
    step4Desc: "Si es necesario, estamos totalmente preparados para llevar su caso ante los tribunales.",
    testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
    testimonialsSubtitle: "Basado en más de 38 opiniones",
    readMoreReviews: "LEER MÁS OPINIONES EN GOOGLE",
    faqTitle: "Preguntas Frecuentes",
    dontFaceAlone: "No Enfrente Esto Solo.",
    letUsFight: "Permítanos Luchar por Usted.",
    startFreeCase: "Comience su evaluación de caso GRATUITA hoy mismo.",
    fullName: "Nombre Completo",
    phoneNumber: "Número de Teléfono",
    caseType: "Tipo de Caso",
    autoAccident: "Accidente de Auto",
    slipFall: "Resbalón y Caída",
    otherCase: "Otro",
    getStartedNow: "COMENZAR AHORA",
    quickLinks: "Enlaces Rápidos",
    contactUs: "Contáctenos",
    address: "123 Law Firm Way, Suite 100, Houston, TX 77002",
    rightsReserved: "Todos los derechos reservados."
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'es'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks = [
    { key: 'Home', label: t.navHome, href: '#home' },
    { key: 'Practice Areas', label: t.navPractice, href: '#practice-areas' },
    { key: 'Videos', label: t.navVideos, href: 'https://afsharlaw.com/videos/' },
    { key: 'Blogs', label: t.navBlogs, href: 'https://afsharlaw.com/blogs/' },
    { key: 'Reviews', label: t.navReviews, href: 'https://afsharlaw.com/reviews/' },
    { key: 'Contact', label: t.navContact, href: 'https://afsharlaw.com/contact/' },
  ];

  return (
    <div className="min-h-screen bg-[#071324] text-[#D4D8E2] font-sans selection:bg-[#E4B651] selection:text-[#071324]">
      {/* HEADER */}
      <header className="fixed w-full z-50">
        <div className="h-[40px] bg-[#040A14] border-b border-[#1E3655] flex items-center justify-between px-6 lg:px-12 text-xs md:text-sm text-[#A0AABF]">
          {/* Top Left: Translation switch */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 text-[#E4B651] hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 bg-white/5 hover:bg-white/10 px-3 py-1 rounded border border-[#1E3655]/60"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Hablamos Español' : 'English Version'}</span>
          </button>
          
          <span className="flex items-center gap-4">
            <a href="tel:1-800-555-0000" className="flex items-center gap-2 text-white font-semibold text-sm md:text-base hover:text-[#E4B651] transition-colors">
              <Phone className="w-4 h-4 text-[#E4B651]" fill="currentColor"/> {t.phone}
            </a>
          </span>
        </div>
        <div className="h-[90px] bg-[#071324]/95 backdrop-blur-md border-b border-[#1E3655] flex items-center justify-between px-6 lg:px-12">
          <div className="flex items-center">
            <img src={logo} alt="The Afshar Law Firm" className="h-16 lg:h-20 w-auto drop-shadow-lg object-contain py-1" />
          </div>
          
          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} className="text-white hover:text-[#E4B651] font-bold text-sm uppercase tracking-wider transition-colors relative group">
                {link.label}
                {link.key === 'Home' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#E4B651]"></span>}
              </a>
            ))}
          </nav>
          
          <a href="https://afsharlaw.com/contact/" className="hidden xl:block bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold px-8 py-3 text-sm hover:bg-white transition-all duration-300">
            {t.freeCaseEval}
          </a>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="xl:hidden text-white hover:text-[#E4B651] transition-colors">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-[130px] left-0 w-full bg-[#040A14] border-b border-[#1E3655] flex flex-col p-6 shadow-2xl z-50">
            {navLinks.map(link => (
              <a key={link.key} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white font-bold uppercase text-sm py-4 border-b border-[#1E3655] hover:text-[#E4B651] transition-colors">
                {link.label}
              </a>
            ))}
            <a href="https://afsharlaw.com/contact/" className="mt-8 bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold px-6 py-4 w-full text-center hover:bg-white transition-colors inline-block">
              {t.freeCaseEval}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative pt-[240px] pb-24 bg-[#071324] overflow-hidden min-h-[850px] flex items-center">
        <div className="absolute inset-0 z-0">
          {/* Gradient overlays: Lightened overlay for better background image visibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324]/75 via-[#071324]/35 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/60 via-transparent to-transparent z-10"></div>
          <img src={heroBg} alt="The Afshar Law Firm Background" className="w-full h-full object-cover" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-20">
          <div className="max-w-4xl pt-8">
              <Reveal>
                <div className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-white/20 px-5 py-2.5 rounded-full text-[#E4B651] uppercase tracking-widest text-sm sm:text-base lg:text-lg font-bold mb-6 transition-all duration-300 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E4B651] animate-pulse"></span>
                  {t.heroBadge}
                </div>
                <h1 className="text-[56px] lg:text-[76px] leading-[1.05] lg:leading-[1.1] font-serif font-bold text-white mb-6">
                  <span className="text-[#E4B651]">{t.heroTitle_1}<br/>{t.heroTitle_2}</span><br/>{t.heroTitle_3}
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-xl lg:text-[22px] leading-relaxed text-white mb-10 max-w-2xl">
                  {t.heroDesc}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <a href="https://afsharlaw.com/contact/" className="bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold px-8 py-4 flex items-center gap-3 hover:bg-white transition-all duration-300 w-fit justify-center group">
                  {t.getFreeConsultation}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-16 flex flex-wrap items-center gap-4 lg:gap-6">
                  {/* Super Lawyers */}
                  <div className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg h-16 px-4 transition-all duration-300 shadow-lg shadow-black/20 group cursor-pointer">
                    <svg viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto transition-all duration-300 group-hover:scale-105">
                      <polygon points="12,6 15,13 22,13 17,17 19,24 12,20 5,24 7,17 2,13 9,13" fill="#E4B651" />
                      <text x="28" y="19" fontFamily="Georgia, serif" fontWeight="bold" fontSize="11" fill="#FFFFFF">Super Lawyers</text>
                      <text x="28" y="31" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="8" fill="#E4B651" letterSpacing="1.5">RATED 2026</text>
                    </svg>
                  </div>

                  {/* Avvo 10.0 Superb */}
                  <div className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg h-16 px-4 transition-all duration-300 shadow-lg shadow-black/20 group cursor-pointer">
                    <svg viewBox="0 0 190 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto transition-all duration-300 group-hover:scale-105">
                      <text x="8" y="27" fontFamily="Georgia, serif" fontWeight="900" fontSize="24" fill="#E4B651" className="italic">avvo</text>
                      <text x="75" y="18" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="11" fill="#FFFFFF">10.0 Rating</text>
                      <text x="75" y="31" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="9" fill="#E4B651" letterSpacing="1.5">SUPERB</text>
                    </svg>
                  </div>

                  {/* BBB A+ */}
                  <div className="flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg h-16 px-4 transition-all duration-300 shadow-lg shadow-black/20 group cursor-pointer">
                    <svg viewBox="0 0 160 45" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto transition-all duration-300 group-hover:scale-105">
                      <g fill="#E4B651">
                        <rect x="6" y="11" width="14" height="18" rx="1" />
                        <text x="10" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#040A14">B</text>
                        <rect x="22" y="11" width="14" height="18" rx="1" />
                        <text x="26" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#040A14">B</text>
                        <rect x="38" y="11" width="14" height="18" rx="1" />
                        <text x="42" y="24" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10" fill="#040A14">B</text>
                      </g>
                      <text x="60" y="18" fontFamily="system-ui, sans-serif" fontWeight="bold" fontSize="11" fill="#FFFFFF">A+ Rating</text>
                      <text x="60" y="30" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="7" fill="#E4B651" letterSpacing="0.5">ACCREDITED</text>
                    </svg>
                  </div>
                </div>
              </Reveal>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about-us" className="py-32 bg-[#0A1A2F] border-y border-[#1E3655]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 items-center">
            <Reveal className="h-full">
              <img src={meetAttorneyImg} alt="Attorney Eman Afshar" className="w-full h-[650px] object-cover object-center border-2 border-[#1E3655] rounded-xl shadow-xl" />
            </Reveal>
            
            <div className="flex flex-col justify-center">
              <Reveal delay={0.1}>
                <h3 className="text-[20px] font-serif text-[#E4B651] mb-2 tracking-wide uppercase">{t.meetAttorney}</h3>
                <h2 className="text-[40px] font-serif font-bold text-white mb-6 leading-tight">Eman Afshar</h2>
                <p className="text-[16px] leading-8 text-[#A0AABF] mb-6">
                  {t.aboutEmanDesc}
                </p>
                <p className="text-[16px] leading-8 text-[#A0AABF] mb-12">
                  {t.aboutEmanSubDesc}
                </p>
              </Reveal>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
                {[
                  { icon: <ShieldCheck className="w-10 h-10 text-[#E4B651]" strokeWidth={1.5} />, title: t.stat5 },
                  { icon: <Star className="w-10 h-10 text-[#E4B651]" strokeWidth={1.5} />, title: t.stat1 },
                  { icon: <FileSearch className="w-10 h-10 text-[#E4B651]" strokeWidth={1.5} />, title: t.stat2 },
                  { icon: <Building2 className="w-10 h-10 text-[#E4B651]" strokeWidth={1.5} />, title: t.stat3 },
                  { icon: <Globe className="w-10 h-10 text-[#E4B651]" strokeWidth={1.5} />, title: t.stat4 },
                ].map((item, i) => (
                  <Reveal key={i} delay={0.2 + (i * 0.1)} className="flex flex-col items-center text-center">
                    <div className="mb-4">{item.icon}</div>
                    <h4 className="text-white text-[14px] font-bold leading-tight">{item.title}</h4>
                  </Reveal>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section id="practice-areas" className="py-32 bg-[#071324]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="text-[40px] font-serif font-bold text-white mb-12 text-center">{t.ourPracticeAreas}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
                { 
                  title: lang === 'en' ? "Construction Law Attorney" : "Abogado de Construcción", 
                  desc: lang === 'en' ? "Handling construction disputes, mechanics' liens, contract drafting, and site liability." : "Manejo de disputas de construcción, embargos, contratos y responsabilidad del sitio.",
                  img: constructionImg,
                  href: "https://afsharlaw.com/practice-areas/construction-law/"
                },
                { 
                  title: lang === 'en' ? "Business & Commercial" : "Negocios y Comercio", 
                  desc: lang === 'en' ? "Strategic corporate counsel, commercial contract negotiation, and business transactions." : "Asesoría corporativa estratégica, negociación de contratos comerciales y transacciones de negocios.",
                  img: "/images/business_commercial_transactions.jpg",
                  href: "https://afsharlaw.com/practice-areas/business-commercial-transactions/"
                },
                { 
                  title: lang === 'en' ? "International Law" : "Derecho Internacional", 
                  desc: lang === 'en' ? "Cross-border transactions, international dispute resolution, and global business counsel." : "Transacciones transfronterizas, resolución de disputas internacionales y asesoría global.",
                  img: "/images/international_law_attorney.jpg",
                  href: "https://afsharlaw.com/practice-areas/international-law/"
                },
                { 
                  title: lang === 'en' ? "Personal Injury & Wrongful Death" : "Lesiones Personales y Muerte por Negligencia", 
                  desc: lang === 'en' ? "Providing compassionate support and aggressive representation for grieving families." : "Brindando apoyo compasivo y representación agresiva para familias en duelo.",
                  img: "/images/wrongful_death.jpg",
                  href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/"
                },
                { 
                  title: lang === 'en' ? "Personal Injury & Car Accidents" : "Lesiones Personales y Accidentes de Auto", 
                  desc: lang === 'en' ? "Expert representation for victims of car accidents seeking maximum compensation." : "Representación experta para víctimas de accidentes de auto buscando la máxima compensación.",
                  img: "/images/car_accidents.jpg",
                  href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/"
                },
                { 
                  title: lang === 'en' ? "Personal Injury & Truck Accidents" : "Lesiones Personales y Accidentes de Camión", 
                  desc: lang === 'en' ? "Handling complex truck accident cases involving major injuries and insurance claims." : "Manejo de casos complejos de accidentes de camiones que involucran lesiones graves.",
                  img: "/images/truck_accidents.jpg",
                  href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/"
                },
                { 
                  title: lang === 'en' ? "Personal Injury & Motorcycle Accidents" : "Lesiones Personales y Accidentes de Motocicleta", 
                  desc: lang === 'en' ? "Advocating for injured motorcyclists against negligent drivers and insurance companies." : "Abogando por motociclistas lesionados contra conductores negligentes y aseguradoras.",
                  img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80",
                  href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/"
                },
                { 
                  title: lang === 'en' ? "Personal Injury & Slip and Fall" : "Lesiones Personales y Resbalones", 
                  desc: lang === 'en' ? "Holding property owners accountable for hazardous conditions causing slip and fall injuries." : "Haciendo responsables a los propietarios por condiciones peligrosas que causan caídas.",
                  img: "/images/slip_and_fall.jpg",
                  href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/"
                },
              ].map((area, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group border border-[#1E3655] min-h-[360px] py-8 flex flex-col justify-center items-center hover:border-[#E4B651] transition-all duration-300 relative cursor-pointer overflow-hidden text-center px-6 bg-[#0A1A2F]">
                  <a href={area.href} className="absolute inset-0 z-20"></a>
                  <div className="absolute inset-0 z-0 bg-[#040A14]">
                    <img src={area.img} alt={area.title.replace('\n', ' ')} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-40 group-hover:opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040A14]/80 via-[#040A14]/60 to-[#040A14]/20"></div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center justify-between h-full">
                    <div>
                      <h3 className="text-[20px] font-serif font-bold text-white mb-3 whitespace-pre-line leading-tight group-hover:text-[#E4B651] transition-colors duration-300">{area.title}</h3>
                      <p className="text-[14px] text-gray-300 mb-6 leading-relaxed font-normal">{area.desc}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-[#E4B651] group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION SECTION */}
      <section className="py-32 bg-[#0A1A2F] border-t border-[#1E3655] relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          src={consultantVideo}
        />
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <Reveal className="flex flex-col items-center justify-center">
            <h2 className="text-[40px] font-serif font-bold text-white mb-4 leading-tight">{t.needConsultant}</h2>
            <h3 className="text-[24px] font-serif text-[#E4B651] mb-8">{t.consultantSubtitle}</h3>
            
            <p className="text-[16px] leading-8 text-[#A0AABF] mb-10">
              {t.consultantDesc}
            </p>
            
            <a href="https://afsharlaw.com/contact/" className="bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold px-8 py-4 hover:bg-white transition-all duration-300 w-fit text-center inline-block">
              {t.getFreeConsultation}
            </a>
          </Reveal>
        </div>
      </section>

      {/* GUARANTEE SECTION */}
      <section className="py-32 bg-[#071324] border-t border-[#1E3655] relative overflow-hidden">
        {/* Right-sided Background Image with Faded Borders */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0 pointer-events-none">
          <img 
            src={guaranteeBg} 
            alt="Guarantee Background" 
            className="w-full h-full object-cover object-right opacity-70 block"
            style={{
              maskImage: 'radial-gradient(ellipse at 65% 50%, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 65% 50%, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%)'
            }}
          />
          {/* Subtle gradient overlays to ensure seamless border fading on all sides */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071324] via-[#071324]/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#071324] via-transparent to-[#071324] z-10"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <Reveal className="max-w-4xl">
            <h3 className="text-[40px] font-serif font-bold text-[#E4B651] mb-6">{lang === 'en' ? "You Don't Pay Unless We Win" : "Usted No Paga A Menos Que Ganemos"}</h3>
            <p className="text-white text-xl mb-16">
              {lang === 'en' 
                ? "We advance all costs and fees associated with your case. Our goal is simple: get you the maximum compensation you deserve."
                : "Adelantamos todos los costos y tarifas asociados con su caso. Nuestro objetivo es simple: obtener la máxima compensación que se merece."}
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#1E3655] mb-16">
              <div className="flex flex-col items-start lg:items-center lg:text-center lg:px-6 xl:px-8">
                <Handshake className="w-12 h-12 text-[#E4B651] mb-4" strokeWidth={1} />
                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'No Upfront Costs' : 'Sin Costos Iniciales'}</h4>
                <p className="text-[#A0AABF] text-sm">{lang === 'en' ? 'You pay $0 unless we win your case.' : 'Paga $0 a menos que ganemos su caso.'}</p>
              </div>
              <div className="flex flex-col items-start lg:items-center lg:text-center border-t pt-6 sm:border-t-0 sm:pt-0 lg:px-6 xl:px-8">
                <Shield className="w-12 h-12 text-[#E4B651] mb-4" strokeWidth={1} />
                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'Risk Free' : 'Sin Riesgo'}</h4>
                <p className="text-[#A0AABF] text-sm">{lang === 'en' ? "We take on the risk so you don't have to." : 'Asumimos el riesgo para que usted no tenga que hacerlo.'}</p>
              </div>
              <div className="flex flex-col items-start lg:items-center lg:text-center border-t pt-6 lg:border-t-0 lg:pt-0 lg:px-6 xl:px-8">
                <Award className="w-12 h-12 text-[#E4B651] mb-4" strokeWidth={1} />
                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'Maximum Compensation' : 'Compensación Máxima'}</h4>
                <p className="text-[#A0AABF] text-sm">{lang === 'en' ? 'We fight for the best possible outcome.' : 'Luchamos por el mejor resultado posible.'}</p>
              </div>
              <div className="flex flex-col items-start lg:items-center lg:text-center border-t pt-6 lg:border-t-0 lg:pt-0 lg:px-6 xl:px-8">
                <FileSearch className="w-12 h-12 text-[#E4B651] mb-4" strokeWidth={1} />
                <h4 className="text-white font-bold mb-2">{lang === 'en' ? 'Free Case Evaluation' : 'Evaluación de Caso Gratis'}</h4>
                <p className="text-[#A0AABF] text-sm">{lang === 'en' ? 'We review your case with absolutely no obligation.' : 'Revisamos su caso con absolutamente ningún compromiso.'}</p>
              </div>
            </div>
            
            <a href="https://afsharlaw.com/contact/" className="bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold px-8 py-4 hover:bg-white transition-all duration-300 w-full sm:w-auto text-center inline-block">
              {t.freeCaseEval}
            </a>
          </Reveal>
        </div>
      </section>

      {/* OUR PROVEN PROCESS / HOW IT WORKS */}
      <section className="py-32 bg-[#071324] border-t border-[#1E3655]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Reveal>
              <h3 className="text-[20px] font-serif text-[#E4B651] mb-2 tracking-widest uppercase">
                {lang === 'en' ? 'HOW IT WORKS' : 'CÓMO FUNCIONA'}
              </h3>
              <h2 className="text-[40px] md:text-[48px] font-serif font-bold text-white mb-6 text-center leading-tight">
                {lang === 'en' ? (
                  <>
                    Take a look at how<br className="hidden sm:inline" /> we get it done
                  </>
                ) : (
                  'Eche un vistazo a cómo lo logramos'
                )}
              </h2>
              <p className="text-[17px] text-[#A0AABF] leading-relaxed mb-4">
                {lang === 'en' 
                  ? 'Our process is designed to be seamless, transparent, and completely risk-free. From your first free consultation to the final settlement or trial verdict, we handle the legal burden so you can focus on healing and moving forward.' 
                  : 'Nuestro proceso está diseñado para ser fluido, transparente y completamente libre de riesgos. Desde su primera consulta gratuita hasta el acuerdo final o el veredicto del juicio, nos encargamos de la carga legal para que pueda concentrarse en recuperarse y salir adelante.'}
              </p>
              <p className="text-sm font-semibold text-[#E4B651] italic">
                {lang === 'en' 
                  ? '*We operate on a contingency fee basis—you pay nothing unless we win.' 
                  : '*Operamos sobre la base de honorarios de contingencia: no paga nada a menos que ganemos.'}
              </p>
            </Reveal>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Image */}
            <Reveal>
              <div className="rounded-xl overflow-hidden bg-[#0A1A2F] border border-[#1E3655] aspect-square relative flex items-center justify-center shadow-xl shadow-[#040A14]">
                <img src={howItWorksImg} alt="The Afshar Law Firm Office" className="w-full h-full object-cover rounded-xl" />
              </div>
            </Reveal>
          
            {/* Right Stepper */}
            <div className="flex flex-col relative pl-4 lg:pl-12">
              {[
                { 
                  step: 1, 
                  title: lang === 'en' ? "Free Consultation" : "Consulta Gratuita", 
                  desc: lang === 'en' ? "Schedule a risk-free case evaluation with our expert legal team to discuss your situation and options." : "Programe una evaluación de caso libre de riesgo con nuestro equipo legal experto para discutir su situación y opciones." 
                },
                { 
                  step: 2, 
                  title: lang === 'en' ? "Case Investigation" : "Investigación del Caso", 
                  desc: lang === 'en' ? "We gather critical evidence, interview witnesses, review medical records, and build a powerful legal strategy." : "Reunimos pruebas críticas, entrevistamos a testigos, revisamos registros médicos y construimos una estrategia legal poderosa." 
                },
                { 
                  step: 3, 
                  title: lang === 'en' ? "Fierce Negotiation" : "Negociación Feroz", 
                  desc: lang === 'en' ? "We demand maximum compensation from insurance companies or employers and negotiate aggressively on your behalf." : "Exigimos la máxima compensación de las compañías de seguros o empleadores y negociamos agresivamente en su nombre." 
                },
                { 
                  step: 4, 
                  title: lang === 'en' ? "Resolution & Recovery" : "Resolución y Recuperación", 
                  desc: lang === 'en' ? "If they refuse to settle fairly, we take them to court and fight for a winning jury verdict or settlement." : "Si se niegan a llegar a un acuerdo justo, los llevamos a los tribunales y luchamos por un veredicto o acuerdo ganador del jurado." 
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.15} className="flex relative group">
                  {/* Line connection */}
                  {i !== 3 && (
                    <div className="absolute left-[20px] top-[48px] bottom-[-16px] w-[2px] bg-[#1E3655] group-hover:bg-[#E4B651]/50 transition-colors duration-300"></div>
                  )}
                  
                  {/* Step Icon / Number */}
                  <div className="mr-8 relative z-10 flex-shrink-0 mt-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${i === 0 ? 'bg-[#E4B651] border-[#E4B651]' : 'bg-[#071324] border-[#1E3655] group-hover:border-[#E4B651]'}`}>
                      <span className={`text-base font-bold ${i === 0 ? 'text-[#071324]' : 'text-white group-hover:text-[#E4B651]'}`}>
                        {item.step}
                      </span>
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="pb-10 pt-1">
                    <div className={`text-sm font-bold tracking-widest uppercase mb-2 ${i === 0 ? 'text-[#E4B651]' : 'text-[#A0AABF]'}`}>{lang === 'en' ? 'STEP' : 'PASO'} {item.step}</div>
                    <h4 className="text-[24px] font-serif font-bold text-white mb-3">{item.title}</h4>
                    <p className="text-[16px] text-[#A0AABF] leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Get Started Button */}
          <Reveal delay={0.3} className="text-center">
            <a 
              href="https://afsharlaw.com/contact/" 
              className="inline-flex items-center gap-3 bg-[#E4B651] text-[#071324] uppercase tracking-wider font-bold px-10 py-5 text-base hover:bg-white hover:shadow-lg hover:shadow-[#E4B651]/20 transition-all duration-300 group rounded-none"
            >
              <span>{lang === 'en' ? 'Get Started' : 'Comenzar Ahora'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="py-32 bg-[#0A1A2F] border-t border-[#1E3655]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="text-[40px] font-serif font-bold text-white mb-16 text-center">{t.testimonialsTitle}</h2>
          </Reveal>
          
          <div className="grid lg:grid-cols-[20%_80%] gap-12 items-center mb-16">
            <Reveal className="flex flex-col items-center justify-center text-center">
              {/* Google G Logo SVG approximation */}
              <svg viewBox="0 0 24 24" className="w-16 h-16 mb-4">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="text-[64px] font-bold text-white leading-none mb-4">4.9</div>
              <div className="flex gap-1 mb-2 text-[#E4B651]">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
              </div>
              <div className="text-white text-sm">{t.testimonialsSubtitle}</div>
            </Reveal>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { text: lang === 'en' ? "Eman is a fantastic lawyer. He goes above and beyond helping his clients. From discovery call to case dismissed I would recommend him to all my friends and family that need legal help." : "Eman es un abogado fantástico. Él va más allá ayudando a sus clientes. Desde la llamada de descubrimiento hasta el caso desestimado, lo recomendaría a todos mis amigos y familiares que necesiten ayuda legal.", author: "- Anthony Michael" },
                { text: lang === 'en' ? "I've utilized the Afshar Law Firm many times for legal services and continue to do so. Eman Afshar has always been great at explaining the process, setting expectations, and is timely in his work. I highly recommend him for his strong knowledge of the law." : "He utilizado el bufete de abogados Afshar muchas veces para servicios legales y sigo haciéndolo. Eman Afshar siempre ha sido excelente explicando el proceso, estableciendo expectativas y es oportuno en su trabajo. Lo recomiendo encarecidamente por su gran conocimiento de la ley.", author: "- Paradise TaShoor" },
                { text: lang === 'en' ? "Great experience here!! They were very responsive and helped me get my case settled in record time. This firm is all about helping clients! Highly recommend" : "¡Gran experiencia aquí! Fueron muy receptivos y me ayudaron a resolver mi caso en tiempo récord. ¡Esta firma se trata de ayudar a los clientes! Altamente recomendado", author: "- Eddie Galvan" }
              ].map((review, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-[#071324] border border-[#1E3655] p-8 relative h-full flex flex-col">
                    <div className="flex gap-1 mb-6 text-[#E4B651]">
                      {[1,2,3,4,5].map(j => <Star key={j} fill="currentColor" className="w-4 h-4" />)}
                    </div>
                    <p className="text-white text-[15px] leading-relaxed mb-12 flex-1">{review.text}</p>
                    <div className="flex justify-between items-end mt-auto">
                      <div className="text-[#E4B651] font-serif text-lg">{review.author}</div>
                      <svg viewBox="0 0 24 24" className="w-6 h-6">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          
          <Reveal delay={0.2} className="text-center">
             <a href="https://www.google.com/maps/place/The+Afshar+Law+Firm/@29.731764,-95.5448097,17z/data=!3m1!5s0x8640c3176eaa0407:0xcaecddc7d258831a!4m8!3m7!1s0x8640c66212155555:0xe1ffe6d46f8399f4!8m2!3d29.7317594!4d-95.5399388!9m1!1b1!16s%2Fg%2F11ghr0zz87?hl=en&entry=ttu&g_ep=EgoyMDI2MDgwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-[#E4B651] uppercase tracking-wide font-bold inline-flex items-center gap-2 mx-auto hover:text-white transition-colors group">
                {t.readMoreReviews} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </a>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 bg-[#071324] border-t border-[#1E3655]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal>
            <h2 className="text-[40px] font-serif font-bold text-white mb-12 text-center">{t.faqTitle}</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            <div className="space-y-4">
              <FAQItem question={lang === 'en' ? "How much does it cost to hire you?" : "¿Cuánto cuesta contratarlos?"} answer={lang === 'en' ? "We work on a contingency fee basis. You pay nothing upfront, and we only collect a fee if we successfully recover compensation for you." : "Trabajamos bajo una tarifa de contingencia. No paga nada por adelantado y solo cobramos si recuperamos una compensación para usted de manera exitosa."} />
              <FAQItem question={lang === 'en' ? "What types of cases do you handle?" : "¿Qué tipo de casos manejan?"} answer={lang === 'en' ? "We handle a wide range of personal injury cases including car accidents, truck accidents, motorcycle accidents, slip and falls, dog bites, and wrongful death claims." : "Manejamos una amplia gama de casos de lesiones personales, incluidos accidentes de auto, de camiones, de motocicletas, resbalones y caídas, mordeduras de perro y reclamos por muerte por negligencia."} />
              <FAQItem question={lang === 'en' ? "How long do I have to file a claim?" : "¿Cuánto tiempo tengo para presentar un reclamo?"} answer={lang === 'en' ? "The statute of limitations varies by state and case type. It's crucial to contact an attorney as soon as possible to ensure your right to file a claim is protected." : "El plazo de prescripción varía según el estado y el tipo de caso. Es fundamental ponerse en contacto con un abogado lo antes posible para garantizar que su derecho a presentar un reclamo esté protegido."} />
            </div>
            <div className="space-y-4">
              <FAQItem question={lang === 'en' ? "What if I was partially at fault?" : "¿Qué pasa si fui parcialmente culpable?"} answer={lang === 'en' ? "In many states, you can still recover compensation even if you were partially at fault, though your recovery may be reduced by your percentage of fault. We can evaluate the specifics of your case." : "En muchos estados, aún puede recuperar la compensación incluso si fue parcialmente culpable, aunque su recuperación puede reducirse según su porcentaje de culpa. Evaluaremos los detalles de su caso."} />
              <FAQItem question={lang === 'en' ? "How long will my case take?" : "¿Cuánto tiempo tomará mi caso?"} answer={lang === 'en' ? "Case duration varies widely based on complexity, the extent of your injuries, and the opposing party's willingness to settle. It can take anywhere from a few months to a few years." : "La duración del caso varía según la complejidad, el alcance de sus lesiones y la disposición de la otra parte para llegar a un acuerdo. Puede tomar desde unos meses hasta algunos años."} />
              <FAQItem question={lang === 'en' ? "What if my case goes to court?" : "¿Qué pasa si mi caso va a juicio?"} answer={lang === 'en' ? "While most cases settle out of court, we prepare every case as if it will go to trial. We have extensive trial experience and are fully prepared to litigate if a fair settlement cannot be reached." : "Aunque la mayoría de los casos se resuelven fuera de los tribunales, preparamos cada caso como si fuera a juicio. Contamos con una amplia experiencia y estamos listos para litigar si no se llega a un acuerdo justo."} />
            </div>
          </div>
          
        </div>
      </section>

      {/* FINAL CTA / CONTACT SECTION */}
      <section id="contact" className="relative h-auto lg:h-[540px] bg-[#0A1A2F] border-t border-[#1E3655] overflow-hidden flex items-end">
        {/* Right-sided Background Image with Faded Borders */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0 pointer-events-none">
          <img 
            src={contactBg} 
            alt="Contact Section Background" 
            className="w-full h-full object-cover object-right opacity-70 block"
            style={{
              maskImage: 'radial-gradient(ellipse at 65% 50%, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 65% 50%, black 20%, rgba(0,0,0,0.6) 50%, transparent 90%)'
            }}
          />
          {/* Seamless gradient overlays to fade image edges into section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F] via-[#0A1A2F]/50 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F] via-transparent to-[#0A1A2F] z-10"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-20 pt-1 pb-16 lg:pt-0 lg:pb-0">
          <div className="grid lg:grid-cols-[40%_60%] gap-12 items-end">
            <Reveal className="hidden lg:flex items-end justify-center relative">
              <div className="relative w-full max-w-[480px] h-[520px] flex items-end -mb-1">
                <img 
                  src={contactImg} 
                  alt="Attorney Eman Afshar" 
                  className="w-full h-full object-contain object-bottom translate-y-2 scale-100 origin-bottom block" 
                />
              </div>
            </Reveal>
            
            <Reveal delay={0.2} className="w-full pb-16 lg:pb-14 pt-0 lg:pt-0">
              <h2 className="text-[40px] font-serif font-bold text-white leading-tight mb-1">
                {t.dontFaceAlone}
              </h2>
              <h3 className="text-[40px] font-serif font-bold text-[#E4B651] mb-8">
                {t.letUsFight}
              </h3>
              <p className="text-white font-bold mb-6">{t.startFreeCase}</p>
              
              <form className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
                <input type="text" placeholder={t.fullName} className="h-[48px] bg-white px-4 text-black outline-none focus:ring-2 focus:ring-[#E4B651] sm:w-[25%] flex-1 placeholder:text-gray-500" />
                <input type="tel" placeholder={t.phoneNumber} className="h-[48px] bg-white px-4 text-black outline-none focus:ring-2 focus:ring-[#E4B651] sm:w-[25%] flex-1 placeholder:text-gray-500" />
                <select className="h-[48px] bg-white px-4 text-black outline-none focus:ring-2 focus:ring-[#E4B651] sm:w-[25%] flex-1 text-gray-500 appearance-none">
                  <option value="">{t.caseType}</option>
                  <option value="construction">{lang === 'en' ? 'Construction Law' : 'Derecho de la Construcción'}</option>
                  <option value="commercial">{lang === 'en' ? 'Business / Commercial Transactions' : 'Transacciones Comerciales'}</option>
                  <option value="injury">{lang === 'en' ? 'Personal Injury & Wrongful Death' : 'Lesiones Personales y Muerte Injusta'}</option>
                  <option value="international">{lang === 'en' ? 'International Law' : 'Derecho Internacional'}</option>
                </select>
                <button type="submit" className="bg-[#E4B651] text-[#071324] uppercase tracking-wide font-bold h-[48px] hover:bg-white transition-colors px-6 flex-initial shrink-0 whitespace-nowrap text-sm">
                  {t.getStartedNow}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#040A14] pt-20 pb-10 border-t-4 border-[#E4B651]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img src={logo} alt="The Afshar Law Firm" className="h-24 w-auto drop-shadow-md object-contain" />
              </div>
              <p className="text-[#A0AABF] text-[13px] leading-relaxed mb-8">
                {lang === 'en' 
                  ? 'We are a personal injury law firm dedicated to protecting your rights and winning the compensation you deserve.' 
                  : 'Somos un bufete de abogados de lesiones personales dedicado a proteger sus derechos y obtener la compensación que se merece.'}
              </p>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/Afsharlawfirm/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E4B651] hover:border-[#E4B651] hover:text-[#040A14] transition-colors cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/channel/UC8jfKVLr62zCIOH4I5tINhA" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E4B651] hover:border-[#E4B651] hover:text-[#040A14] transition-colors cursor-pointer">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://www.linkedin.com/in/eman-afshar-82426931/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#E4B651] hover:border-[#E4B651] hover:text-[#040A14] transition-colors cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">{t.quickLinks}</h4>
              <ul className="space-y-3 text-[14px] text-[#A0AABF]">
                {navLinks.map(link => (
                  <li key={link.key}><a href={link.href} className="hover:text-[#E4B651] transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">{t.navPractice}</h4>
              <ul className="space-y-3 text-[14px] text-[#A0AABF]">
                {[
                  { label: lang === 'en' ? "Construction Law Attorney" : "Abogado de Construcción", href: "https://afsharlaw.com/practice-areas/construction-law/" },
                  { label: lang === 'en' ? "Business & Commercial" : "Negocios y Comercio", href: "https://afsharlaw.com/practice-areas/business-commercial-transactions/" },
                  { label: lang === 'en' ? "International Law" : "Derecho Internacional", href: "https://afsharlaw.com/practice-areas/international-law/" },
                  { label: lang === 'en' ? "Personal Injury & Wrongful Death" : "Lesiones Personales y Muerte por Negligencia", href: "https://afsharlaw.com/practice-areas/personal-injury-wrongful-death/" },
                ].map(link => (
                  <li key={link.label}><a href={link.href} className="hover:text-[#E4B651] transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-white font-bold mb-6">{t.contactUs}</h4>
              <ul className="space-y-4 text-[14px] text-[#A0AABF]">
                <li className="flex gap-3 items-start"><Phone className="w-4 h-4 text-[#E4B651] shrink-0 mt-0.5" /> <span>{t.phone}</span></li>
                <li className="flex gap-3 items-start"><Mail className="w-4 h-4 text-[#E4B651] shrink-0 mt-0.5" /> <span>info@justicelaw.com</span></li>
                <li className="flex gap-3 items-start leading-relaxed"><MapPin className="w-4 h-4 text-[#E4B651] shrink-0 mt-0.5" /> <span>{t.address}</span></li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <h4 className="text-white font-bold mb-6">{lang === 'en' ? 'Our Location' : 'Nuestra Ubicación'}</h4>
              <div className="w-full h-[200px] rounded-lg overflow-hidden border border-[#1E3655]">
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.585490760371!2d-95.5425137246797!3d29.731764033318182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c66212155555%3A0xe1ffe6d46f8399f4!2sThe%20Afshar%20Law%20Firm!5e0!3m2!1sen!2str!4v1786479688221!5m2!1sen!2str"
                  className="w-full h-full border-0 opacity-75 hover:opacity-100 transition-all duration-300"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

