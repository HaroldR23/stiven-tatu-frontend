export enum Languages {
  ENGLISH = "en",
  SPANISH = "es"
}

export interface HeroProps {
  language: Languages;
  onBookingClick: () => void;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Languages;
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
  isOver18: boolean;
  acceptsPrivacy: boolean;
}
export interface BookingFormProps {
  language: Languages;
  formData: FormData;
  isSubmitted: boolean;
  onClose: () => void;
  onSubmit?: () => void | Promise<void>;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  toggleStyle: (style: string) => void;
  step: number;
}
export interface AboutProps {
  language: Languages;
}
