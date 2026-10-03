export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  duration: string;
  sessions: string;
  recovery: string;
  benefits: string[];
  features: string[];
  idealFor: string[];
  startingPrice: string;
  image: string;
  badge?: string;
}

export interface Doctor {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  experienceYears: number;
  licenseNumber: string;
  education: string[];
  memberships: string[];
  photo: string;
}

export interface ClinicCase {
  id: string;
  title: string;
  category: string;
  patientInfo: string;
  treatmentName: string;
  duration: string;
  beforeDesc: string;
  afterDesc: string;
  testimonialExcerpt: string;
  beforeImage: string;
  afterImage: string;
}

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  role?: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneClean: string;
  whatsapp: string;
  whatsappMessage: string;
  email: string;
  address: {
    street: string;
    suite: string;
    district: string;
    city: string;
    references: string;
    parking: string;
  };
  schedules: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  metrics: {
    googleRating: number;
    reviewCount: number;
    patientsCount: string;
    satisfactionRate: string;
    yearsExperience: number;
  };
  monthlyPromotion: {
    enabled: boolean;
    title: string;
    discountHighlight: string;
    description: string;
    includes: string[];
    validUntil: string;
    serviceId: string;
  };
}

export interface BookingSubmission {
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  treatmentId: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  isFirstVisit: boolean;
}
