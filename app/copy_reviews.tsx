
import { motion } from 'motion/react';
import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface ReviewsProps {
  language: 'es' | 'en';
}

export function Reviews({ language }: ReviewsProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 768px)': { slidesToScroll: 1 },
        '(min-width: 1024px)': { slidesToScroll: 1 }
      }
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const content = {
    es: {
      title: 'Reseñas de clientes',
      seeMore: 'Ver más',
      seeLess: 'Ver menos',
      reviews: [
        {
          name: 'Martín',
          review: 'Llegué con una idea bastante clara, pero no esperaba que el resultado final superara tanto lo que tenía en mente. Desde la primera consulta Stiven entendió perfectamente lo que buscaba y, sobre todo, supo adaptar el diseño a mi anatomía. El proyecto llevó varias sesiones y durante todo el proceso mantuvo el mismo nivel de atención y detalle. El resultado del brazo completo es impresionante. Mucha gente me pregunta quién me lo hizo y para mí eso ya dice bastante.',
          image: 'https://images.unsplash.com/photo-1764698072654-b8c360ff480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzE1MDQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Axel',
          review: 'Mi proyecto de torso completo terminó siendo mucho más grande de lo que originalmente imaginaba. Lo trabajamos durante varios meses y fui viendo cómo cada sesión iba construyendo el resultado final. Lo que más valoro es que Stiven no se limita a tatuar lo que uno pide. Hay un verdadero trabajo de composición, proporciones, movimiento y adaptación al cuerpo.',
          image: 'https://images.unsplash.com/photo-1758404255679-9afd847ede1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBibGFjayUyMGluayUyMGFydGlzdGljfGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Alejandro',
          review: 'Soy bastante exigente con los detalles y, sinceramente, tenía mis dudas antes de empezar porque buscaba un nivel de realismo muy específico. Desde la primera conversación me sorprendió la seguridad con la que Stiven planteó el proyecto. Durante la sesión fue muy profesional y cuidadoso, pero lo que realmente me sorprendió fue ver el tatuaje terminado. La calidad de los detalles y la forma en que el tatuaje se integra con el cuerpo superaron mis expectativas.',
          image: 'https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdGF0dG9vJTIwYXJ0JTIwZGV0YWlsZWR8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Juliana',
          review: 'Era mi primer tatuaje grande y estaba bastante nerviosa. Desde que entré al estudio la experiencia fue completamente diferente a lo que esperaba. El ambiente es muy agradable, el trato es cercano y al mismo tiempo extremadamente profesional. Stiven se tomó el tiempo necesario para explicarme cada parte del proyecto y nunca sentí que estuviera apurado por terminar. El resultado fue espectacular. Salí pensando que había tomado una muy buena decisión.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Massimiliano',
          review: 'Comenzamos este proyecto pensando en hacer solamente algunas piezas y terminó convirtiéndose en un brazo completo. Fueron varias sesiones a lo largo del año y en cada una mantuvimos una línea estética coherente. Algo que me gustó mucho fue que el proyecto no se sintió como una colección de tatuajes independientes. Todo tiene conexión y sentido dentro del brazo. Además del resultado artístico, destaco muchísimo la seriedad y organización de Stiven durante todo el proceso.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Aarón',
          review: 'He trabajado con Stiven en más de un proyecto y cada vez termino más conforme. Lo que más me sorprendió la primera vez fue la diferencia entre ver un diseño en pantalla y verlo finalmente adaptado al cuerpo. Hay un nivel de criterio artístico que se nota muchísimo. El estudio también tiene un ambiente muy cómodo. Para proyectos largos, donde tienes que pasar varias horas y volver varias veces, eso hace una diferencia enorme.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Horacio',
          review: 'No buscaba simplemente un tatuaje bonito. Quería algo que tuviera una identidad propia y que estuviera pensado específicamente para mí. Stiven hizo muchas preguntas antes de comenzar y eso me dio mucha confianza. Se nota que hay un proceso detrás de cada decisión. El proyecto llevó varias sesiones y el resultado final fue exactamente lo que esperaba, pero con una calidad que sinceramente no sabía que podía conseguir.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'León',
          review: 'Mi brazo nos llevó prácticamente un año entre sesiones, cicatrización y ajustes del proyecto. Y creo que justamente eso demuestra el nivel de dedicación. Nunca tuve la sensación de que hubiera que correr para terminar. Cada sesión tenía un objetivo y el resultado se iba construyendo progresivamente. La calidad del tatuaje es excelente, pero también quiero destacar muchísimo el trato durante todo el proceso. Después de tantas horas y tantas visitas, terminas sintiéndote muy cómodo en el estudio.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Julián',
          review: 'He visto muchísimos trabajos de tatuajes antes de decidirme y por eso tenía expectativas bastante altas. Lo que me sorprendió fue que la experiencia completa estuvo a la altura del trabajo que había visto en redes. Desde la atención inicial hasta la planificación del proyecto y las sesiones, todo fue muy profesional. El tatuaje terminado tiene una presencia increíble y varios meses después sigo descubriendo detalles que me encantan.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Cristian',
          review: 'Mi proyecto requirió varias sesiones y fue una inversión importante, así que quería estar seguro de elegir al tatuador correcto. Desde el primer encuentro sentí que estaba tratando con alguien que realmente entiende el tatuaje como una obra completa y no simplemente como una imagen que se coloca sobre la piel. El resultado superó mis expectativas. Pero si tuviera que destacar una sola cosa, sería la combinación entre calidad artística, profesionalismo y el trato cálido durante todo el proceso.Sin dudas volvería a hacerme otro proyecto con Stiven.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    en: {
      title: 'Client Reviews',
      seeMore: 'See more',
      seeLess: 'See less',
      reviews: [
        {
          name: 'María González',
          review: 'From the very first moment the attention was incredible. They listened, helped me with the design and the result exceeded all my expectations. The studio has a very professional, clean atmosphere with a unique energy. You can tell how much talent and passion goes into their work. I will definitely be back for my next tattoo.',
          image: 'https://images.unsplash.com/photo-1764698072654-b8c360ff480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzE1MDQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Carlos Ramírez',
          review: "I had been thinking about getting my first tattoo for years and had a lot of doubts. From the initial consultation to the final result, everything was perfect. They explained every step, gave me full confidence and the work came out exactly as I had imagined. The design is clean, precise and has a depth I didn't expect. Highly recommended for those looking for real quality.",
          image: 'https://images.unsplash.com/photo-1758404255679-9afd847ede1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBibGFjayUyMGluayUyMGFydGlzdGljfGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Ana Martínez',
          review: 'I came in with a vague reference and left with something much better than I had imagined. The artist has an incredible ability to interpret what you want and improve on it. The studio is impeccable, hygiene is top-notch and the atmosphere makes you feel comfortable from the very first second. I have already booked my next appointment.',
          image: 'https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdGF0dG9vJTIwYXJ0JTIwZGV0YWlsZWR8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Diego López',
          review: 'I have tattoos from several different studios and I can say with full conviction that Stiventatu is on another level. The line work is clean, the shading is smooth and the detail in the design is remarkable. On top of that, the human treatment makes all the difference: you feel heard, not rushed. The tattoo healed perfectly and the tones are still vivid weeks later.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    }
  };

  return (
    <section id="reviews" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {content[language].title}
          </h2>
          <div className="w-24 h-[2px] bg-accent mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {content[language].reviews.map((review, index) => {
                const isExpanded = expandedCards.has(index);
                return (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 px-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    {/*
                      Fixed-height card. Image fills the full background.
                      ONE panel anchored at bottom grows upward:
                        - collapsed (185px): covers only the text area, image fully visible above
                        - expanded (340px): grows over the image, top portion translucent
                      Inside the panel: name+button pinned to bottom, quote+text fill the rest
                      growing upward into the image.
                    */}
                    <div
                      className="relative overflow-hidden border border-white/5"
                      style={{ height: '480px' }}
                    >
                      {/* Image — fills entire card, fully visible behind the panel */}
                      <img
                        src={review.image}
                        alt={review.name}
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />

                      {/* Single expanding panel anchored at bottom */}
                      <div
                        className="absolute bottom-0 left-0 right-0 flex flex-col transition-all duration-500 ease-in-out"
                        style={{
                          height: isExpanded ? '340px' : '185px',
                          background: isExpanded
                            ? 'linear-gradient(to bottom, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.92) 30%, rgba(8,8,8,0.98) 55%, rgb(10,10,10) 100%)'
                            : 'linear-gradient(to bottom, rgba(8,8,8,0.92) 0%, rgb(10,10,10) 35%, rgb(10,10,10) 100%)',
                          backdropFilter: isExpanded ? 'blur(2px)' : 'none',
                        }}
                      >
                        {/* Quote + text — fills remaining space, grows upward */}
                        <div className="flex-1 min-h-0 flex flex-col px-6 pt-4 overflow-hidden">
                          <span
                            className="text-4xl leading-none mb-2 flex-shrink-0 select-none"
                            style={{ color: '#F1B111', fontFamily: 'Georgia, serif' }}
                          >
                            "
                          </span>
                          <div className={`flex-1 min-h-0 ${isExpanded ? 'overflow-y-auto pr-1' : 'overflow-hidden'}`}>
                            <p
                              className="text-white/88 italic text-sm leading-relaxed"
                              style={!isExpanded ? {
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                              } : undefined}
                            >
                              {review.review}"
                            </p>
                          </div>
                        </div>

                        {/* Author + button — always pinned to bottom */}
                        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0">
                          <p className="font-medium text-sm text-white/90">— {review.name}</p>
                          <button
                            onClick={() => toggleExpanded(index)}
                            className="inline-flex items-center gap-2 group"
                            style={{ color: '#F1B111' }}
                          >
                            <span
                              className="px-3 py-1 rounded-full border text-xs transition-colors duration-200 group-hover:bg-[#F1B111] group-hover:text-black"
                              style={{ borderColor: '#F1B111' }}
                            >
                              {isExpanded ? content[language].seeLess : content[language].seeMore}
                            </span>
                            <ArrowRight
                              className="w-3.5 h-3.5 transition-transform duration-300"
                              style={{ transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)' }}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-[#F1B111]/10 border border-[#F1B111] text-[#F1B111] hover:bg-[#F1B111] hover:text-black transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center rounded-full bg-[#F1B111]/10 border border-[#F1B111] text-[#F1B111] hover:bg-[#F1B111] hover:text-black transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? 'bg-[#F1B111] w-8' 
                    : 'bg-[#F1B111]/30 hover:bg-[#F1B111]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
