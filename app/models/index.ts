interface BaseProps {
  language: Languages;
}

export enum Languages {
  ENGLISH = "en",
  SPANISH = "es"
}

export interface HeroProps extends BaseProps {
  onBookingClick: () => void;
}
export interface BookingModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
}
export interface FormData {
  // Step 1
  fullName: string;
  email: string;
  phone: string;
  // Step 2
  styles: string[];
  color: 'color' | 'blackwhite';
  location: string;
  size: string;
  idea: string;
  artist: string;
  reference: string;
  // Step 3
  allergies: string;
  preferredDate: string;
  preferredTime: string;
  isOver18: boolean;
  acceptsPrivacy: boolean;

  // Captcha
  captchaToken?: string;
}
export interface BookingFormProps extends BaseProps {
  formData: FormData;
  isSubmitted: boolean;
  onClose: () => void;
  onSubmit?: () => void | Promise<void>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  toggleStyle: (style: string) => void;
  step: number;
  error: string | null;
  clearError?: () => void;
}
export interface BookingProcessProps extends BaseProps {
  onBookingClick: () => void;
}
export interface FloatingHelpButtonProps extends BaseProps {
  onBookingClick: () => void;
}
export interface AboutProps extends BaseProps {}
export interface ReviewsProps extends BaseProps {}  
export interface ProductsProps extends BaseProps {}
export interface FAQProps extends BaseProps {}
export interface AftercareProps extends BaseProps {}
export interface CoursesProps extends BaseProps {}
export interface ContactProps extends BaseProps {}
export interface SeminarSectionProps extends BaseProps {}
export interface Review {
  image: string;
  name: string;
  review: string;
}

export interface ReviewCardProps {
  review: Review;
  language: Languages;
  isExpanded: boolean;
  toggleExpanded: (index: number) => void;
  index: number;
}