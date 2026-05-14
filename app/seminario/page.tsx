'use client';

import { motion } from 'motion/react';
import {
  ArrowLeft,
  BookOpen,
  Layers,
  ShieldCheck,
  UserCheck,
  ExternalLink,
  CheckCircle2,
  Clock,
  Users,
} from 'lucide-react';
import usePreferences from '../hooks/usePreferences';
import { useRouter } from 'next/navigation';

// Replace this URL with your actual payment gateway link
const PAYMENT_URL = 'https://tu-pasarela-de-pago.com/seminario-stiventatu';

const chapters = {
  es: [
    {
      number: '01',
      icon: BookOpen,
      title: 'Fundamentos del Arte del Tatuaje',
      duration: '3 horas',
      description:
        'Una introducción completa al mundo del tatuaje profesional. Exploramos la historia del tatuaje desde las culturas ancestrales hasta la era moderna, los distintos estilos que existen hoy (realismo, fineline, tradicional, geométrico), y cómo encontrar tu propia identidad artística desde el inicio.',
      topics: [
        'Historia y evolución del tatuaje',
        'Estilos y tendencias actuales',
        'Materiales: máquinas, agujas, tintas y cartuchos',
        'Anatomía de la piel y cómo reacciona al tatuaje',
        'Tu identidad como artista: referencias y construcción de portafolio',
      ],
    },
    {
      number: '02',
      icon: Layers,
      title: 'Técnicas Esenciales: Líneas, Sombras y Relleno',
      duration: '4 horas',
      description:
        'El corazón técnico del seminario. Aprenderás a ejecutar las tres técnicas base que todo tatuador necesita dominar: el trazado de líneas limpias y consistentes, el sombrado suave y gradual, y el relleno sólido. Todo con demostraciones prácticas sobre piel sintética.',
      topics: [
        'Configuración de velocidad y voltaje según técnica',
        'Líneas: presión, ángulo y velocidad de trazo',
        'Sombras: packing, blending y degradados',
        'Rellenos sólidos y saturación de tinta',
        'Errores comunes y cómo corregirlos',
      ],
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Higiene, Bioseguridad y Marco Legal',
      duration: '2.5 horas',
      description:
        'Uno de los módulos más importantes y frecuentemente subestimados. La seguridad de tu cliente es tu responsabilidad. Cubrimos todos los protocolos de esterilización, el manejo correcto de residuos patogénicos, y los requisitos legales para ejercer como tatuador en Argentina.',
      topics: [
        'Zonas de trabajo: setup limpio y sucio',
        'Esterilización de equipos y uso de autoclave',
        'Manejo de residuos patogénicos (descarte de agujas)',
        'EPP: guantes, tapabocas, protección ocular',
        'Marco legal: habilitaciones y responsabilidades',
      ],
    },
    {
      number: '04',
      icon: UserCheck,
      title: 'Tu Primera Sesión Real con Cliente',
      duration: '3.5 horas',
      description:
        'Del aprendizaje a la práctica. Este módulo te prepara para el momento más importante: tu primer cliente real. Trabajamos la consulta inicial, cómo diseñar o adaptar un diseño según la zona del cuerpo, el proceso completo de la sesión, y los cuidados posteriores que debes indicarle al cliente.',
      topics: [
        'La consulta previa: preguntas clave y contrato',
        'Stencil: preparación y posicionamiento',
        'Gestión del dolor y comunicación durante la sesión',
        'Proceso completo de tatuado paso a paso',
        'Instrucciones de aftercare y seguimiento del cliente',
      ],
    },
  ],
  en: [
    {
      number: '01',
      icon: BookOpen,
      title: 'Tattoo Art Fundamentals',
      duration: '3 hours',
      description:
        'A comprehensive introduction to the professional tattoo world. We explore the history of tattooing from ancient cultures to the modern era, the different styles that exist today (realism, fineline, traditional, geometric), and how to find your own artistic identity from the start.',
      topics: [
        'History and evolution of tattooing',
        'Current styles and trends',
        'Materials: machines, needles, inks and cartridges',
        'Skin anatomy and how it reacts to tattooing',
        'Your artistic identity: references and portfolio building',
      ],
    },
    {
      number: '02',
      icon: Layers,
      title: 'Essential Techniques: Lines, Shading and Fill',
      duration: '4 hours',
      description:
        'The technical heart of the seminar. You will learn to execute the three base techniques every tattoo artist needs to master: clean and consistent line work, smooth and gradual shading, and solid fill. All with practical demonstrations on synthetic skin.',
      topics: [
        'Speed and voltage configuration by technique',
        'Lines: pressure, angle and stroke speed',
        'Shading: packing, blending and gradients',
        'Solid fills and ink saturation',
        'Common mistakes and how to fix them',
      ],
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Hygiene, Biosafety and Legal Framework',
      duration: '2.5 hours',
      description:
        'One of the most important and frequently underestimated modules. Your client\'s safety is your responsibility. We cover all sterilization protocols, proper management of pathogenic waste, and the legal requirements to practice as a tattoo artist.',
      topics: [
        'Work areas: clean and dirty setup',
        'Equipment sterilization and autoclave use',
        'Pathogenic waste management (needle disposal)',
        'PPE: gloves, masks, eye protection',
        'Legal framework: permits and responsibilities',
      ],
    },
    {
      number: '04',
      icon: UserCheck,
      title: 'Your First Real Client Session',
      duration: '3.5 hours',
      description:
        'From learning to practice. This module prepares you for the most important moment: your first real client. We work on the initial consultation, how to design or adapt a design based on the body area, the complete session process, and the aftercare instructions you must give your client.',
      topics: [
        'The pre-consultation: key questions and contract',
        'Stencil: preparation and positioning',
        'Pain management and communication during the session',
        'Complete step-by-step tattooing process',
        'Aftercare instructions and client follow-up',
      ],
    },
  ],
};

const uiText = {
  es: {
    back: 'Volver al inicio',
    eyebrow: 'Programa Completo',
    title: 'Seminario para Tatuadores Principiantes',
    subtitle:
      'Todo lo que necesitás para arrancar tu carrera como tatuador profesional, condensado en un programa intensivo y directo al punto.',
    statsLabel: ['13 horas de contenido', 'Acceso de por vida', 'Cupos limitados'],
    chaptersTitle: 'Contenido del Seminario',
    topicsTitle: 'Temas incluidos:',
    paymentCta: 'Inscribirme ahora',
    paymentNote: 'Pago seguro · Acceso inmediato · Garantía de 7 días',
    priceLabel: 'Precio especial de lanzamiento',
    price: 'USD 49',
    priceOriginal: 'USD 97',
  },
  en: {
    back: 'Back to home',
    eyebrow: 'Full Program',
    title: 'Seminar for Beginner Tattoo Artists',
    subtitle:
      'Everything you need to kick-start your career as a professional tattoo artist, condensed into an intensive, straight-to-the-point program.',
    statsLabel: ['13 hours of content', 'Lifetime access', 'Limited spots'],
    chaptersTitle: 'Seminar Content',
    topicsTitle: 'Topics included:',
    paymentCta: 'Enroll now',
    paymentNote: 'Secure payment · Instant access · 7-day guarantee',
    priceLabel: 'Special launch price',
    price: 'USD 49',
    priceOriginal: 'USD 97',
  },
};

const SeminarPage = () => {
  const { language } = usePreferences();
  const navigate = useRouter();
  const ui = uiText[language];
  const chapterList = chapters[language];

  return (
    <main className="min-h-screen pt-24" style={{ background: '#0a0a0a' }}>
      {/* Hero */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #0d0d0d 0%, #111 60%, #0a0a0a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(241,177,17,0.06) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent, #F1B111, transparent)' }}
        />

        <div className="max-w-4xl mx-auto relative">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => navigate.push('/')}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {ui.back}
          </motion.button>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: '#F1B111' }}
          >
            {ui.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-serif)', color: '#fff' }}
          >
            {ui.title}
          </motion.h1>

          <div className="w-20 h-0.5 mb-8" style={{ background: '#F1B111' }} />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-10"
          >
            {ui.subtitle}
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Clock, label: ui.statsLabel[0] },
              { icon: BookOpen, label: ui.statsLabel[1] },
              { icon: Users, label: ui.statsLabel[2] },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4" style={{ color: '#F1B111' }} />
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl mb-12"
            style={{ fontFamily: 'var(--font-serif)', color: '#fff' }}
          >
            {ui.chaptersTitle}
          </motion.h2>

          <div className="space-y-8">
            {chapterList.map((chapter, i) => {
              const Icon = chapter.icon;
              return (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="border p-8 sm:p-10 relative overflow-hidden group hover:border-opacity-60 transition-all duration-300"
                  style={{ borderColor: 'rgba(241,177,17,0.18)', background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Chapter number watermark */}
                  <span
                    className="absolute right-6 top-4 text-7xl select-none pointer-events-none"
                    style={{
                      fontFamily: 'var(--font-serif)',
                      color: 'rgba(241,177,17,0.06)',
                      lineHeight: 1,
                    }}
                  >
                    {chapter.number}
                  </span>

                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="shrink-0 w-12 h-12 flex items-center justify-center"
                      style={{ background: 'rgba(241,177,17,0.1)', border: '1px solid rgba(241,177,17,0.25)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#F1B111' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span
                          className="text-xs tracking-widest uppercase"
                          style={{ color: '#F1B111' }}
                        >
                          Módulo {chapter.number}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {chapter.duration}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl text-white" style={{ fontFamily: 'var(--font-serif)' }}>
                        {chapter.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    {chapter.description}
                  </p>

                  <div>
                    <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#F1B111' }}>
                      {ui.topicsTitle}
                    </p>
                    <ul className="space-y-2">
                      {chapter.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#F1B111' }} />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Payment */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(241,177,17,0.05) 0%, transparent 70%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center relative"
        >
          <span
            className="inline-block text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: '#F1B111' }}
          >
            {ui.priceLabel}
          </span>

          <div className="flex items-baseline justify-center gap-3 mb-2">
            <span
              className="text-5xl"
              style={{ fontFamily: 'var(--font-serif)', color: '#F1B111' }}
            >
              {ui.price}
            </span>
            <span className="text-xl text-muted-foreground line-through">{ui.priceOriginal}</span>
          </div>

          <p className="text-xs text-muted-foreground mb-10">{ui.paymentNote}</p>

          <motion.a
            href={PAYMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 text-sm tracking-widest uppercase transition-all duration-300"
            style={{ background: '#F1B111', color: '#000' }}
          >
            {ui.paymentCta}
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </section>
    </main>
  );
}

export default SeminarPage;
