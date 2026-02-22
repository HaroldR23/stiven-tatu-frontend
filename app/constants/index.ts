import { Award, Facebook, Instagram, Shield, Sparkles, TicketCheckIcon, Twitter, Youtube } from "lucide-react";
import { TikTok } from "./icons";
import { FormData } from "../models";


export const networkLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/stiventatu?igsh=MWNxemUwbjZwcmtnMg' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/stiventatuu' },
  { name: 'TikTok', icon: TikTok, url: 'https://www.tiktok.com/@stiventatu' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@stiventatu' }
];
export const navItems = {
    es: ['Inicio', 'Acerca', 'Trabajos', 'Productos', 'Cursos', 'Contacto'],
    en: ['Home', 'About', 'Work', 'Products', 'Courses', 'Contact']
  };
export const sections = ['hero', 'about', 'reviews', 'products', 'courses', 'contact'];
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
        styleOptions: ['Fine line', 'Micro realismo', 'Handpoke', 'Solid lines', 'Otro'],
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
        preferredDate: 'Preferencias de fecha y horario',
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
        styleOptions: ['Fine line', 'Micro realism', 'Handpoke', 'Solid lines', 'Other'],
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
        preferredDate: 'Date and time preferences',
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
      reviews: [
        {
          name: 'María González',
          review: 'El diseño superó mis expectativas. Profesionalismo y arte real.',
          image: 'https://images.unsplash.com/photo-1764698072654-b8c360ff480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzE1MDQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Carlos Ramírez',
          review: 'Increíble experiencia de principio a fin. Totalmente recomendado.',
          image: 'https://images.unsplash.com/photo-1758404255679-9afd847ede1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBibGFjayUyMGluayUyMGFydGlzdGljfGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Ana Martínez',
          review: 'Atención personalizada y resultado impecable. Volveré sin duda.',
          image: 'https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdGF0dG9vJTIwYXJ0JTIwZGV0YWlsZWR8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Diego López',
          review: 'Trabajo detallado y limpio. Los mejores artistas de la ciudad.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
        }
      ]
    },
    en: {
      title: 'Client Reviews',
      reviews: [
        {
          name: 'María González',
          review: 'The design exceeded my expectations. True professionalism and art.',
          image: 'https://images.unsplash.com/photo-1764698072654-b8c360ff480e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdGF0dG9vJTIwZGVzaWduJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzE1MDQ3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Carlos Ramírez',
          review: 'Amazing experience from start to finish. Highly recommended.',
          image: 'https://images.unsplash.com/photo-1758404255679-9afd847ede1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjB0YXR0b28lMjBibGFjayUyMGluayUyMGFydGlzdGljfGVufDF8fHx8MTc3MTUwNDcxOHww&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Ana Martínez',
          review: 'Personalized attention and impeccable results. Will return for sure.',
          image: 'https://images.unsplash.com/photo-1623792085620-1f3160a255e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwdGF0dG9vJTIwYXJ0JTIwZGV0YWlsZWR8ZW58MXx8fHwxNzcxNTA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080'
        },
        {
          name: 'Diego López',
          review: 'Detailed and clean work. The best artists in the city.',
          image: 'https://images.unsplash.com/photo-1607943917700-18ec6ff5a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXR0b28lMjBhcnRpc3QlMjB3b3Jrc3BhY2UlMjBzdHVkaW8lMjBkYXJrfGVufDF8fHx8MTc3MTUwNDcxM3ww&ixlib=rb-4.1.0&q=80&w=1080'
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
          question: '¿Duele tatuarse?',
          answer: 'El nivel de dolor varía según la zona del cuerpo y la tolerancia personal. Utilizamos técnicas que minimizan las molestias y nuestros artistas trabajan con cuidado para hacer la experiencia lo más cómoda posible.'
        },
        {
          question: '¿Cómo preparo mi piel?',
          answer: 'Mantén la piel hidratada días antes, evita el alcohol 24h antes de la sesión, descansa bien y come antes de tu cita. No uses cremas el día de la sesión.'
        },
        {
          question: '¿Cuánto tarda en sanar?',
          answer: 'La cicatrización superficial toma 2-3 semanas, mientras que la sanación completa puede tardar 2-3 meses. Sigue nuestras instrucciones de cuidado para mejores resultados.'
        },
        {
          question: '¿Puedo llevar mi diseño?',
          answer: 'Sí, puedes traer ideas y referencias. Nuestros artistas trabajarán contigo para adaptar o crear un diseño único que se ajuste a tu visión y anatomía.'
        },
        {
          question: '¿Cuidados posteriores?',
          answer: 'Limpia suavemente con agua y jabón neutro, aplica crema especial 2-3 veces al día, evita el sol directo, no sumerjas en agua (piscinas, mar) durante 2-3 semanas.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'Does it hurt to get a tattoo?',
          answer: 'Pain levels vary depending on body area and personal tolerance. We use techniques that minimize discomfort and our artists work carefully to make the experience as comfortable as possible.'
        },
        {
          question: 'How do I prepare my skin?',
          answer: 'Keep your skin moisturized days before, avoid alcohol 24h before the session, rest well and eat before your appointment. Don\'t use creams on the day of the session.'
        },
        {
          question: 'How long does it take to heal?',
          answer: 'Superficial healing takes 2-3 weeks, while complete healing can take 2-3 months. Follow our care instructions for best results.'
        },
        {
          question: 'Can I bring my own design?',
          answer: 'Yes, you can bring ideas and references. Our artists will work with you to adapt or create a unique design that fits your vision and anatomy.'
        },
        {
          question: 'Aftercare?',
          answer: 'Gently clean with water and neutral soap, apply special cream 2-3 times a day, avoid direct sun, don\'t submerge in water (pools, sea) for 2-3 weeks.'
        }
      ]
    }
  };
