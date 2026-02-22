export enum Languages {
  ENGLISH = "en",
  SPANISH = "es"
}

export interface HeroProps {
  language: Languages;
  onBookingClick?: () => void;
}
