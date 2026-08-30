import { 
  Award, 
  BookOpen, 
  Clock, 
  Droplet, 
  Facebook, 
  GraduationCap, 
  Instagram, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Pen, 
  Shield, 
  Sparkles, 
  Sun,
  Zap,
  Youtube,
  Users,
  Star
} from "lucide-react";
import { TikTok } from "./icons";
import { FormData, Languages } from "../models";


export const networkLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/stiventatu?igsh=MWNxemUwbjZwcmtnMg' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/stiventatuu' },
  { name: 'TikTok', icon: TikTok, url: 'https://www.tiktok.com/@stiventatu' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@stiventatu' }
];
export const navItems = {
    es: ['Inicio', 'Acerca', 'Trabajos', 'Productos', 'Cursos', 'Seminario', 'Contacto'],
    en: ['Home', 'About', 'Work', 'Products', 'Courses', 'Seminar', 'Contact']
  };
export const sections = ['hero', 'about', 'reviews', 'products', 'courses', 'seminar', 'contact'];
export const studyName = ["STIVEN", "TATU"];
export const footerContent = {
    es: {
      rights: '© 2026 Stiventatu. Todos los derechos reservados.',
      tagline: 'Arte que vive en tu piel'
    },
    en: {
      rights: '© 2026 Stiventatu. All rights reserved.',
      tagline: 'Art that lives on your skin'
    }
  };
export const heroContent = {
    es: {
      title: 'Arte que vive en tu piel',
      subtitle: 'Diseños únicos. Experiencias memorables.',
      cta1: 'Reservar turno',
      cta2: 'Ver trabajos'
    },
    en: {
      title: 'Art that lives on your skin',
      subtitle: 'Unique designs. Memorable experiences.',
      cta1: 'Book Appointment',
      cta2: 'View Work'
    }
  };
export const formContent = {
    es: {
      step1: {
        title: 'Datos personales',
        fullName: 'Nombre completo',
        email: 'Email',
        phone: 'Celular',
        next: 'Siguiente'
      },
      step2: {
        title: 'Sobre tu tattoo',
        styles: 'Estilos',
        styleOptions: ['Realismo', 'Surealismo', 'Ilustrativo', 'Geometría', 'Personalizado'],
        color: 'Color',
        colorOptions: ['Color', 'Blanco & Negro'],
        location: 'Ubicación del tatuaje',
        size: 'Tamaño (cm)',
        idea: 'Idea del tatuaje',
        artist: 'Elegir artista / sugerencia del estudio',
        reference: 'Subir imagen de referencia o link',
        next: 'Siguiente',
        back: 'Atrás'
      },
      step3: {
        title: 'Información adicional',
        allergies: 'Alergias o condiciones médicas',
        preferredDate: 'Fecha de preferencia',
        preferredTime: 'Horario de preferencia',
        over18: 'Soy mayor de 18 años',
        privacy: 'Acepto políticas de privacidad',
        submit: 'Enviar solicitud',
        back: 'Atrás'
      },
      success: {
        title: '¡Solicitud enviada!',
        message: 'Nos pondremos en contacto contigo pronto.',
        close: 'Cerrar'
      }
    },
    en: {
      step1: {
        title: 'Personal Information',
        fullName: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        next: 'Next'
      },
      step2: {
        title: 'About Your Tattoo',
        styles: 'Styles',
        styleOptions: ['Realism', 'Surrealism', 'Illustrative', 'Geometry', 'Customized'],
        color: 'Color',
        colorOptions: ['Color', 'Black & White'],
        location: 'Tattoo Location',
        size: 'Size (cm)',
        idea: 'Tattoo Idea',
        artist: 'Choose artist / studio suggestion',
        reference: 'Upload reference image or link',
        next: 'Next',
        back: 'Back'
      },
      step3: {
        title: 'Additional Information',
        allergies: 'Allergies or medical conditions',
        preferredDate: 'Date preferences',
        preferredTime: 'Time preferences',
        over18: 'I am over 18 years old',
        privacy: 'I accept privacy policies',
        submit: 'Submit Request',
        back: 'Back'
      },
      success: {
        title: 'Request Sent!',
        message: 'We will contact you soon.',
        close: 'Close'
      }
    }
  };

export const initFormData: FormData = {
    fullName: '', 
    email: '',
    phone: '',
    styles: [],
    color: 'blackwhite',
    location: '',
    size: '',
    idea: '',
    artist: '',
    reference: '',
    allergies: '',
    preferredDate: '',
    preferredTime: '',
    isOver18: false,
    acceptsPrivacy: false
};
export const aboutContent = {
    es: {
      title: 'Acerca de Stiventatu',
      description: 'Stiventatu es un estudio donde el arte, la precisión y la identidad personal se unen. Creamos tatuajes únicos diseñados para acompañarte toda la vida.',
      values: [
        {
          icon: Sparkles,
          title: 'Originalidad',
          description: 'Cada diseño es único y personalizado'
        },
        {
          icon: Shield,
          title: 'Higiene',
          description: 'Protocolos de seguridad profesionales'
        },
        {
          icon: Award,
          title: 'Experiencia',
          description: 'Artistas con años de trayectoria'
        }
      ]
    },
    en: {
      title: 'About Stiventatu',
      description: 'Stiventatu is a studio where art, precision and personal identity come together. We create unique tattoos designed to accompany you for a lifetime.',
      values: [
        {
          icon: Sparkles,
          title: 'Originality',
          description: 'Each design is unique and personalized'
        },
        {
          icon: Shield,
          title: 'Hygiene',
          description: 'Professional safety protocols'
        },
        {
          icon: Award,
          title: 'Experience',
          description: 'Artists with years of experience'
        }
      ]
    }
  };
export const reviewsContent = {
    es: {
      title: 'Reseñas de clientes',
      seeMore: 'Ver más',
      seeLess: 'Ver menos',
      reviews: [
        {
          name: 'Martín',
          review: 'Llegué con una idea bastante clara, pero no esperaba que el resultado final superara tanto lo que tenía en mente. Desde la primera consulta Stiven entendió perfectamente lo que buscaba y, sobre todo, supo adaptar el diseño a mi anatomía. El proyecto llevó varias sesiones y durante todo el proceso mantuvo el mismo nivel de atención y detalle. El resultado del brazo completo es impresionante. Mucha gente me pregunta quién me lo hizo y para mí eso ya dice bastante.',
          image: '/martin_review.jpeg'
        },
        {
          name: 'Axel',
          review: 'Mi proyecto de torso completo terminó siendo mucho más grande de lo que originalmente imaginaba. Lo trabajamos durante varios meses y fui viendo cómo cada sesión iba construyendo el resultado final. Lo que más valoro es que Stiven no se limita a tatuar lo que uno pide. Hay un verdadero trabajo de composición, proporciones, movimiento y adaptación al cuerpo.',
          image: '/axel_review.jpeg'
        },
        {
          name: 'Alejandro',
          review: 'Soy bastante exigente con los detalles y, sinceramente, tenía mis dudas antes de empezar porque buscaba un nivel de realismo muy específico. Desde la primera conversación me sorprendió la seguridad con la que Stiven planteó el proyecto. Durante la sesión fue muy profesional y cuidadoso, pero lo que realmente me sorprendió fue ver el tatuaje terminado. La calidad de los detalles y la forma en que el tatuaje se integra con el cuerpo superaron mis expectativas.',
          image: '/alejandro_review.jpeg'
        },
        {
          name: 'Juliana',
          review: 'Era mi primer tatuaje grande y estaba bastante nerviosa. Desde que entré al estudio la experiencia fue completamente diferente a lo que esperaba. El ambiente es muy agradable, el trato es cercano y al mismo tiempo extremadamente profesional. Stiven se tomó el tiempo necesario para explicarme cada parte del proyecto y nunca sentí que estuviera apurado por terminar. El resultado fue espectacular. Salí pensando que había tomado una muy buena decisión.',
          image: '/juliana_review.jpeg'
        },
        {
          name: 'Massimiliano',
          review: 'Comenzamos este proyecto pensando en hacer solamente algunas piezas y terminó convirtiéndose en un brazo completo. Fueron varias sesiones a lo largo del año y en cada una mantuvimos una línea estética coherente. Algo que me gustó mucho fue que el proyecto no se sintió como una colección de tatuajes independientes. Todo tiene conexión y sentido dentro del brazo. Además del resultado artístico, destaco muchísimo la seriedad y organización de Stiven durante todo el proceso.',
          image: '/massimiliano_review.jpeg'
        },
        {
          name: 'Aarón',
          review: 'He trabajado con Stiven en más de un proyecto y cada vez termino más conforme. Lo que más me sorprendió la primera vez fue la diferencia entre ver un diseño en pantalla y verlo finalmente adaptado al cuerpo. Hay un nivel de criterio artístico que se nota muchísimo. El estudio también tiene un ambiente muy cómodo. Para proyectos largos, donde tienes que pasar varias horas y volver varias veces, eso hace una diferencia enorme.',
          image: '/aaron_review.jpeg'
        },
        {
          name: 'Horacio',
          review: 'No buscaba simplemente un tatuaje bonito. Quería algo que tuviera una identidad propia y que estuviera pensado específicamente para mí. Stiven hizo muchas preguntas antes de comenzar y eso me dio mucha confianza. Se nota que hay un proceso detrás de cada decisión. El proyecto llevó varias sesiones y el resultado final fue exactamente lo que esperaba, pero con una calidad que sinceramente no sabía que podía conseguir.',
          image: '/horacio_review.jpeg'
        },
        {
          name: 'León',
          review: 'Mi brazo nos llevó prácticamente un año entre sesiones, cicatrización y ajustes del proyecto. Y creo que justamente eso demuestra el nivel de dedicación. Nunca tuve la sensación de que hubiera que correr para terminar. Cada sesión tenía un objetivo y el resultado se iba construyendo progresivamente. La calidad del tatuaje es excelente, pero también quiero destacar muchísimo el trato durante todo el proceso. Después de tantas horas y tantas visitas, terminas sintiéndote muy cómodo en el estudio.',
          image: '/leon_review.jpeg'
        },
        {
          name: 'Julián',
          review: 'He visto muchísimos trabajos de tatuajes antes de decidirme y por eso tenía expectativas bastante altas. Lo que me sorprendió fue que la experiencia completa estuvo a la altura del trabajo que había visto en redes. Desde la atención inicial hasta la planificación del proyecto y las sesiones, todo fue muy profesional. El tatuaje terminado tiene una presencia increíble y varios meses después sigo descubriendo detalles que me encantan.',
          image: '/julian_review.jpeg'
        },
        {
          name: 'Cristian',
          review: 'Mi proyecto requirió varias sesiones y fue una inversión importante, así que quería estar seguro de elegir al tatuador correcto. Desde el primer encuentro sentí que estaba tratando con alguien que realmente entiende el tatuaje como una obra completa y no simplemente como una imagen que se coloca sobre la piel. El resultado superó mis expectativas. Pero si tuviera que destacar una sola cosa, sería la combinación entre calidad artística, profesionalismo y el trato cálido durante todo el proceso.Sin dudas volvería a hacerme otro proyecto con Stiven.',
          image: '/cristian_review.jpeg'
        }
      ]
    },
    en: {
      title: 'Client Reviews',
      seeMore: 'See more',
      seeLess: 'See less',
      reviews: [
        {
          name: 'Martín',
          review: 'I came in with a fairly clear idea, but I didn’t expect the final result to surpass what I had in mind by so much. From the very first consultation, Stiven understood exactly what I was looking for and, above all, knew how to adapt the design to my anatomy. The project took several sessions, and throughout the entire process he maintained the same level of attention and detail. The result of the full sleeve is impressive. A lot of people ask me who did it, and for me, that already says a lot.',
          image: '/martin_review.jpeg'
        },
        {
          name: 'Axel',
          review: 'My full torso project ended up being much bigger than I originally imagined. We worked on it over several months, and I was able to see how each session gradually built the final result. What I value most is that Stiven doesn’t simply tattoo what you ask for. There is real attention to composition, proportions, movement, and how the design adapts to the body.',
          image: '/axel_review.jpeg'
        },
        {
          name: 'Alejandro',
          review: 'I’m quite demanding when it comes to details and, honestly, I had my doubts before starting because I was looking for a very specific level of realism. From our first conversation, I was impressed by the confidence with which Stiven approached the project. During the session, he was very professional and careful, but what really surprised me was seeing the finished tattoo. The quality of the details and the way the tattoo integrates with the body exceeded my expectations.',
          image: '/alejandro_review.jpeg'
        },
        {
          name: 'Juliana',
          review: 'It was my first large tattoo and I was pretty nervous. From the moment I walked into the studio, the experience was completely different from what I expected. The atmosphere is very pleasant, the service is friendly, and at the same time extremely professional. Stiven took the time needed to explain every part of the project to me, and I never felt like he was in a rush to finish. The result was spectacular. I left feeling that I had made a very good decision.',
          image: '/juliana_review.jpeg'
        },
        {
          name: 'Massimiliano',
          review: 'We started this project thinking we would only do a few pieces, and it ended up becoming a full sleeve. There were several sessions throughout the year, and in each one we maintained a consistent aesthetic. Something I really liked was that the project never felt like a collection of independent tattoos. Everything connects and makes sense as part of the arm. Beyond the artistic result, I also really appreciate Stiven’s professionalism and organization throughout the entire process.',
          image: '/massimiliano_review.jpeg'
        },
        {
          name: 'Aarón',
          review: 'I’ve worked with Stiven on more than one project, and every time I end up even more satisfied. What surprised me the most the first time was the difference between seeing a design on a screen and finally seeing it adapted to the body. There is a level of artistic judgment that really stands out. The studio also has a very comfortable atmosphere. For long projects, where you have to spend several hours there and come back multiple times, that makes a huge difference.',
          image: '/aaron_review.jpeg'
        },
        {
          name: 'Horacio',
          review: 'I wasn’t simply looking for a nice tattoo. I wanted something with its own identity that was specifically designed for me. Stiven asked many questions before getting started, and that gave me a lot of confidence. You can tell there is a process behind every decision. The project took several sessions, and the final result was exactly what I expected, but with a level of quality that I honestly didn’t know was possible to achieve.',
          image: '/horacio_review.jpeg'
        },
        {
          name: 'León',
          review: 'My arm took practically a year between sessions, healing, and adjustments to the project. And I think that really shows the level of dedication involved. I never felt like we had to rush to finish. Every session had a purpose, and the result was built progressively. The quality of the tattoo is excellent, but I also want to highlight how great the experience was throughout the entire process. After so many hours and so many visits, you end up feeling very comfortable at the studio.',
          image: '/leon_review.jpeg'
        },
        {
          name: 'Julián',
          review: 'I had seen countless tattoo pieces before deciding, so I had pretty high expectations. What surprised me was that the entire experience lived up to the quality of the work I had seen on social media. From the initial consultation to the project planning and the sessions, everything was very professional. The finished tattoo has an incredible presence, and even several months later, I’m still discovering details that I love.',
          image: '/julian_review.jpeg'
        },
        {
          name: 'Cristian',
          review: 'My project required several sessions and was a significant investment, so I wanted to make sure I chose the right tattoo artist. From the first meeting, I felt like I was dealing with someone who truly understands tattooing as a complete work of art, rather than simply an image placed on the skin. The result exceeded my expectations. But if I had to highlight just one thing, it would be the combination of artistic quality, professionalism, and the warm treatment throughout the entire process. Without a doubt, I would work on another project with Stiven.',
          image: '/cristian_review.jpeg'
        }
]
    }
  };
export const productsContent = {
    es: {
      title: 'Productos',
      products: [
        {
          name: 'Crema de Cuidado',
          price: '$25',
          description: 'Crema especializada para el cuidado de tatuajes',
          image: 'https://images.unsplash.com/photo-1707395293453-26231b245d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBjYXJlJTIwYWZ0ZXJjYXJlJTIwY3JlYW0lMjBza2lufGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Aftercare Kit',
          price: '$45',
          description: 'Kit completo de cuidados posteriores',
          image: 'https://images.unsplash.com/photo-1761276297688-bc67f27c2577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBzdHVkaW8lMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Merch del Estudio',
          price: '$35',
          description: 'Camisetas y accesorios exclusivos',
          image: 'https://images.unsplash.com/photo-1682406585851-d81daab79411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBtYWNoaW5lJTIwbmVlZGxlcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE1MDQ3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Gift Card',
          price: '$50-$500',
          description: 'Tarjeta de regalo para sesiones',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ],
      addToCart: 'Agregar'
    },
    en: {
      title: 'Products',
      products: [
        {
          name: 'Care Cream',
          price: '$25',
          description: 'Specialized tattoo care cream',
          image: 'https://images.unsplash.com/photo-1707395293453-26231b245d51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBjYXJlJTIwYWZ0ZXJjYXJlJTIwY3JlYW0lMjBza2lufGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Aftercare Kit',
          price: '$45',
          description: 'Complete aftercare kit',
          image: 'https://images.unsplash.com/photo-1761276297688-bc67f27c2577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBzdHVkaW8lMjBlcXVpcG1lbnQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Studio Merch',
          price: '$35',
          description: 'Exclusive t-shirts and accessories',
          image: 'https://images.unsplash.com/photo-1682406585851-d81daab79411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBtYWNoaW5lJTIwbmVlZGxlcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzE1MDQ3MTl8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Gift Card',
          price: '$50-$500',
          description: 'Gift card for sessions',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ],
      addToCart: 'Add to Cart'
    }
  };
export const FAQContent = {
    es: {
      title: 'Preguntas Frecuentes',
      faqs: [
        {
          question: '¿Cómo se calcula el precio de un tatuaje?',
          answer: 'Cada proyecto es único. El presupuesto depende del tamaño, nivel de detalle, ubicación en el cuerpo y cantidad de sesiones necesarias. Antes de comenzar recibirás un presupuesto claro y sin costos ocultos.'
        },
        {
          question: '¿Cómo reservo una cita?',
          answer: 'Solo tenés que escribir por WhatsApp, contarme tu idea y enviar referencias si las tenés. Una vez definido el proyecto, se reserva la fecha mediante una seña que luego se descuenta del valor total del tatuaje.'
        },
        {
          question: '¿Hacés diseños personalizados?',
          answer: 'Sí. Cada diseño se desarrolla pensando en la persona que lo va a llevar. Mi objetivo es crear una composición que se adapte a tu anatomía, tenga buena lectura visual y conserve su calidad con el paso de los años.'
        },
        {
          question: '¿Realizás coberturas de tatuajes?',
          answer: 'Sí. Analizo cada caso de manera individual para determinar qué posibilidades existen. En muchos casos es posible transformar un tatuaje antiguo en una pieza completamente nueva, aprovechando la composición y el contraste para obtener el mejor resultado.'
        },
        {
          question: '¿Cuántas sesiones puede llevar mi proyecto?',
          answer: 'Depende del tamaño y la complejidad. Algunas piezas se completan en una sola sesión y otras requieren varias para lograr el nivel de detalle y acabado que buscan mis clientes. Antes de comenzar te explicaré el plan completo.'
        },
        {
          question: '¿Qué estilos de tatuaje realizás?',
          answer: 'Estoy especializado en realismo en color, black & grey, surrealismo y composición artística. También realizo proyectos de geometría, blackwork, neotribal, anime y coberturas, siempre adaptando el diseño a cada cliente.'
        },
        {
          question: '¿Qué hace diferente tu forma de trabajar?',
          answer: 'No me limito a copiar imágenes. Cada proyecto se estudia desde la composición, la anatomía y la longevidad del tatuaje para crear una pieza personalizada que se vea bien tanto el día que se hace como muchos años después.'
        },
        {
          question: '¿Duele tatuarse?',
          answer: 'La sensación varía según la zona del cuerpo y la tolerancia al dolor de cada persona. La mayoría de mis clientes describen la experiencia como totalmente soportable. Durante la sesión hacemos pausas cuando es necesario para que estés cómodo y disfrutes el proceso.'
        },
        {
          question: '¿Cómo preparo mi piel antes de la sesión?',
          answer: 'Dormí bien la noche anterior, mantenete hidratado y comé normalmente antes de venir. Evitá consumir alcohol durante las 24 horas previas y no expongas la zona al sol. Si la piel llega en buenas condiciones, el tatuaje cicatriza mejor y el resultado es más limpio.'
        },
        {
          question: '¿Cuánto tarda en cicatrizar?',
          answer: 'La piel suele cerrar entre 2 y 4 semanas, aunque la recuperación completa de las capas profundas puede tardar algunas semanas más. Te entregaré una guía detallada de cuidados para que el tatuaje cicatrice correctamente y conserve la mejor calidad posible.'
        },
        {
          question: '¿Puedo traer mi propio diseño?',
          answer: 'Sí. Podés traer una idea, referencias o un diseño propio. Mi trabajo consiste en adaptarlo a tu anatomía, mejorar la composición y asegurar que el resultado funcione como un tatuaje de calidad y no solo como una imagen bonita.'
        },
        {
          question: '¿Qué cuidados debo seguir después del tatuaje?',
          answer: 'Durante la cicatrización es importante mantener la zona limpia e hidratada, evitar piscinas, mar, exposición al sol y no retirar las costras. Al finalizar la sesión recibirás todas las indicaciones para cuidar tu tatuaje paso a paso.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'How is the price of a tattoo calculated?',
          answer: 'Every project is unique. The quote depends on the size, level of detail, location on the body, and number of sessions required. Before we begin, you’ll receive a clear quote with no hidden costs.'
        },
        {
          question: 'How do I book an appointment?',
          answer: 'Just message me on WhatsApp, tell me your idea, and send any references you have. Once the project is finalized, the date is reserved with a deposit, which is later deducted from the total cost of the tattoo.'
        },
        {
          question: 'Do you create custom designs?',
          answer: 'Yes. Each design is developed with the person who will be wearing it in mind. My goal is to create a composition that adapts to your anatomy, is visually appealing, and maintains its quality over the years.'
        },
        {
          question: 'Do you cover up existing tattoos?',
          answer: 'Yes. I analyze each case individually to determine what options are available. In many cases, it’s possible to transform an old tattoo into a completely new piece, using the composition and contrast to achieve the best result.'
        },
        {
          question: 'How many sessions will my project take?',
          answer: 'It depends on the size and complexity. Some pieces are completed in a single session, while others require several sessions to achieve the level of detail and finish my clients are looking for. I’ll explain the full plan to you before we begin.'
        },
        {
          question: 'What tattoo styles do you do?',
          answer: 'I specialize in color realism, black & gray, surrealism, and artistic composition. I also do geometric, blackwork, neo-tribal, anime, and cover-up projects, always adapting the design to each client.'
        },
        {
          question: 'What makes your approach different?',
          answer: 'I don’t just copy images. I approach each project by considering composition, anatomy, and the tattoo’s longevity to create a personalized piece that looks great both on the day it’s done and many years later.'
        },
        {
          question: 'Does getting a tattoo hurt?', 
          answer: 'The sensation varies depending on the area of the body and each person’s pain tolerance. Most of my clients describe the experience as completely bearable. During the session, we take breaks as needed so you can be comfortable and enjoy the process.'
        },
        {
          question: 'How do I prepare my skin before the session?',
          answer: 'Get a good night’s sleep the night before, stay hydrated, and eat normally before coming in. Avoid alcohol for 24 hours beforehand and don’t expose the area to the sun. If your skin is in good condition, the tattoo will heal better and the result will be cleaner.'
        },
        {
          question: 'How long does it take to heal?',
          answer: 'The skin usually heals within 2 to 4 weeks, although full recovery of the deeper layers may take a few more weeks. I’ll provide you with a detailed aftercare guide to ensure your tattoo heals properly and maintains the best possible quality.'
        },
        {
          question: 'Can I bring my own design?',
          answer: 'Yes. You can bring an idea, references, or your own design. My job is to adapt it to your anatomy, improve the composition, and ensure that the result works as a high-quality tattoo—not just as a pretty picture.'
        },
        {
          question: 'What aftercare should I follow after getting a tattoo?',
          answer: 'During the healing process, it’s important to keep the area clean and moisturized, avoid swimming pools, the ocean, and sun exposure, and do not pick at the scabs. At the end of the session, you’ll receive step-by-step instructions on how to care for your tattoo.'
        }
      ]
    }
  };  
export const aftercareContent = {
    es: {
      title: 'Cuidados Posteriores',
      subtitle: 'Guía paso a paso para el cuidado de tu tatuaje',
      steps: [
        {
          icon: Shield,
          title: 'Limpieza y Protección',
          description: 'Lava suavemente con agua tibia y jabón neutro 2-3 veces al día. Seca con toques suaves.',
          day: 'Días 1-3'
        },
        {
          icon: Droplet,
          title: 'Hidratación Adecuada',
          description: 'Aplica crema especializada en capa fina. No excedas la cantidad ni la frecuencia.',
          day: 'Días 4-14'
        },
        {
          icon: Sun,
          title: 'Evitar Sol y Agua',
          description: 'No expongas al sol directo. Evita piscinas, mar y baños prolongados.',
          day: 'Días 1-21'
        },
        {
          icon: Clock,
          title: 'Proceso de Cicatrización',
          description: 'Es normal que se forme costra y pele. No rasques ni arranques la piel.',
          day: 'Días 7-21'
        }
      ]
    },
    en: {
      title: 'Aftercare',
      subtitle: 'Step-by-step guide for tattoo care',
      steps: [
        {
          icon: Shield,
          title: 'Cleaning and Protection',
          description: 'Gently wash with warm water and neutral soap 2-3 times a day. Pat dry gently.',
          day: 'Days 1-3'
        },
        {
          icon: Droplet,
          title: 'Proper Hydration',
          description: 'Apply specialized cream in a thin layer. Don\'t exceed the amount or frequency.',
          day: 'Days 4-14'
        },
        {
          icon: Sun,
          title: 'Avoid Sun and Water',
          description: 'Don\'t expose to direct sunlight. Avoid pools, sea and prolonged baths.',
          day: 'Days 1-21'
        },
        {
          icon: Clock,
          title: 'Healing Process',
          description: 'It\'s normal for it to scab and peel. Don\'t scratch or pick at the skin.',
          day: 'Days 7-21'
        }
      ]
    }
  };
export const coursesContent = {
    es: {
      title: 'Cursos de Tatuaje',
      subtitle: 'Aprende el arte del tatuaje con profesionales',
      courses: [
        {
          icon: BookOpen,
          title: 'Curso Inicial',
          description: 'Fundamentos del tatuaje, equipamiento y primeros trazos',
          duration: '8 semanas',
          level: 'Principiante'
        },
        {
          icon: Pen,
          title: 'Técnicas de Líneas Finas',
          description: 'Domina el arte del fine line y micro tatuajes',
          duration: '6 semanas',
          level: 'Intermedio'
        },
        {
          icon: Shield,
          title: 'Higiene y Seguridad',
          description: 'Protocolos profesionales y manejo de equipos',
          duration: '4 semanas',
          level: 'Todos los niveles'
        },
        {
          icon: Award,
          title: 'Certificación Profesional',
          description: 'Completa tu formación y obtén tu certificado',
          duration: '12 semanas',
          level: 'Avanzado'
        }
      ],
      cta: 'Ver Programa Completo'
    },
    en: {
      title: 'Tattoo Courses',
      subtitle: 'Learn the art of tattooing with professionals',
      courses: [
        {
          icon: BookOpen,
          title: 'Initial Course',
          description: 'Tattoo fundamentals, equipment and first strokes',
          duration: '8 weeks',
          level: 'Beginner'
        },
        {
          icon: Pen,
          title: 'Fine Line Techniques',
          description: 'Master the art of fine line and micro tattoos',
          duration: '6 weeks',
          level: 'Intermediate'
        },
        {
          icon: Shield,
          title: 'Hygiene and Safety',
          description: 'Professional protocols and equipment handling',
          duration: '4 weeks',
          level: 'All levels'
        },
        {
          icon: Award,
          title: 'Professional Certification',
          description: 'Complete your training and get certified',
          duration: '12 weeks',
          level: 'Advanced'
        }
      ],
      cta: 'View Full Program'
    }
  };
export const phoneNumber = "+54 9 117364-7165";
export const contactContent = {
    es: {
      title: 'Contacto',
      subtitle: 'Visítanos o escríbenos',
      info: {
        address: 'San Telmo, Buenos Aires',
        phone: phoneNumber,
        email: 'info@stiventatu.com',
        instagram: '@stiventatu',
        hours: 'Lun-Sáb: 10:00 - 20:00'
      },
      labels: {
        address: 'Dirección',
        phone: 'WhatsApp',
        email: 'Email',
        instagram: 'Instagram',
        hours: 'Horarios'
      }
    },
    en: {
      title: 'Contact',
      subtitle: 'Visit us or write to us',
      info: {
        address: 'San Telmo, Buenos Aires',
        phone: phoneNumber,
        email: 'info@stiventatu.com',
        instagram: '@stiventatu',
        hours: 'Mon-Sat: 10:00 - 20:00'
      },
      labels: {
        address: 'Address',
        phone: 'WhatsApp',
        email: 'Email',
        instagram: 'Instagram',
        hours: 'Hours'
      }
    }
  };
export const contactItems = (language: Languages) => [
    { icon: MapPin, label: contactContent[language].labels.address, value: contactContent[language].info.address, isLink: false },
    { icon: MessageCircle, label: contactContent[language].labels.phone, value: contactContent[language].info.phone, isLink: true, linkPrefix: 'https://wa.me/' },
    { icon: Mail, label: contactContent[language].labels.email, value: contactContent[language].info.email, isLink: true, linkPrefix: 'mailto:info@stiventatu.com' },
    { icon: Instagram, label: contactContent[language].labels.instagram, value: contactContent[language].info.instagram, isLink: true, linkPrefix: 'https://www.instagram.com/stiventatu?igsh=MWNxemUwbjZwcmtnMg' },
    { icon: Clock, label: contactContent[language].labels.hours, value: contactContent[language].info.hours, isLink: false }
  ];
export const bookingContent = {
  es: {
    title: 'Hacer una reserva',
    steps: [
      {
        title: 'Haz clic en Agendar una cita',
        description: 'Para el mejor Agendamiento para ti, con la información y detalles de tu cita.',
      },
      {
        title: 'Introduce tus datos',
        description: 'Así podremos contactar tu solicitud y completar tu formulario, solo completalo.',
      },
      {
        title: 'Sube las fotos',
        description: 'Sube todas las fotos que quieras: un boceto o la ubicación que deseas.',
      },
      {
        title: 'Te contactaremos',
        description: 'Te contactaremos para presentar toda la información alternativa y confirmar tu cita.',
      },
    ],
    button: 'Agendar una cita',
  },
  en: {
    title: 'Make a reservation',
    steps: [
      {
        title: 'Click on Book an appointment',
        description: 'For the best scheduling for you, with all the information and details of your appointment.',
      },
      {
        title: 'Enter your details',
        description: "We'll be able to contact you and complete your form, just fill it out.",
      },
      {
        title: 'Upload photos',
        description: 'Upload all the photos you want: a sketch or the location you desire.',
      },
      {
        title: 'We will contact you',
        description: 'We will contact you to present all the information and confirm your appointment.',
      },
    ],
    button: 'Book an appointment',
  },
};
export const floatingContent = {
  es: {
    title: '¿Necesitás ayuda?',
    subtitle: 'Escribinos o reservá tu turno directamente',
    whatsapp: 'Chatear por WhatsApp',
    form: 'Reservar turno',
    whatsappMessage: '¡Hola! Me gustaría consultar sobre un tatuaje en Stiventatu'
  },
  en: {
    title: 'Need help?',
    subtitle: 'Message us or book your appointment directly',
    whatsapp: 'Chat on WhatsApp',
    form: 'Book appointment',
    whatsappMessage: 'Hi! I would like to inquire about a tattoo at Stiventatu'
  },
};
export const whatsappUrl = `https://wa.me/5491173647165`;
export const SeminarSecionContent = {
    es: {
      eyebrow: 'Seminario Exclusivo',
      title: 'Inicia Tu Camino en el Tatuaje',
      subtitle:
        'Un programa intensivo diseñado para artistas que están comenzando. Aprende de forma estructurada, con metodología probada y acompañamiento real.',
      highlights: [
        { icon: GraduationCap, label: '4 módulos completos' },
        { icon: Users, label: 'Cupos limitados' },
        { icon: Star, label: 'Certificado incluido' },
        { icon: Zap, label: 'Acceso de por vida' },
      ],
      teaser:
        'Desde los fundamentos del arte hasta tu primera sesión real con cliente. Sin vueltas, sin relleno. Solo lo que necesitás saber para arrancar con confianza.',
      cta: 'Ver Contenido del Seminario',
    },
    en: {
      eyebrow: 'Exclusive Seminar',
      title: 'Start Your Tattoo Journey',
      subtitle:
        'An intensive program designed for artists who are just starting out. Learn in a structured way, with a proven methodology and real support.',
      highlights: [
        { icon: GraduationCap, label: '4 complete modules' },
        { icon: Users, label: 'Limited spots' },
        { icon: Star, label: 'Certificate included' },
        { icon: Zap, label: 'Lifetime access' },
      ],
      teaser:
        'From the fundamentals of the art to your first real client session. No fluff, no filler. Just what you need to know to start with confidence.',
      cta: 'View Seminar Content',
    },
  };