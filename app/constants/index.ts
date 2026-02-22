import { Facebook, Instagram, TicketCheckIcon, Twitter, Youtube } from "lucide-react";
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
