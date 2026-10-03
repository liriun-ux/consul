import { ClinicConfig, Treatment, Doctor, ClinicCase, Testimonial, FaqItem } from '../types';

export const clinicConfig: ClinicConfig = {
  name: "Clínica Dental Sonrisa Serena",
  tagline: "Odontología Especializada & Estética Dental de Vanguardia",
  phone: "+34 912 345 678",
  phoneClean: "34912345678",
  whatsapp: "34612345678",
  whatsappMessage: "¡Hola Clínica Sonrisa Serena! Me gustaría solicitar información y agendar una cita de evaluación.",
  email: "contacto@sonrisaserena.com",
  address: {
    street: "Paseo de la Castellana 128",
    suite: "Edificio Médico Zenith, Planta 3ª - Consulta 304",
    district: "Salamanca / Chamartín",
    city: "Madrid, España",
    references: "A 100m de la estación de Metro Santiago Bernabéu (Línea 10).",
    parking: "Estacionamiento cubierto gratuito para pacientes (2 horas de cortesía)."
  },
  schedules: {
    weekdays: "Lunes a Viernes: 08:30 – 20:00 h",
    saturday: "Sábados: 09:00 – 14:30 h",
    sunday: "Domingos: Urgencias odontológicas con cita previa"
  },
  metrics: {
    googleRating: 4.9,
    reviewCount: 384,
    patientsCount: "+1,450",
    satisfactionRate: "99.4%",
    yearsExperience: 14
  },
  monthlyPromotion: {
    enabled: true,
    title: "Especial del Mes: 2x1 en Blanqueamiento LED Clínico + Diagnóstico Digital",
    discountHighlight: "40% de descuento",
    description: "Recupera hasta 6 tonos de luminosidad en una sola sesión de 60 minutos con tecnología de luz fría sin dolor ni sensibilidad extrema.",
    includes: [
      "Diagnóstico clínico con cámara intraoral 4K",
      "Limpieza profiláctica ultrasónica profunda",
      "Sesión completa de Blanqueamiento LED con gel remineralizante",
      "Kit de mantenimiento para el hogar"
    ],
    validUntil: "Válido hasta final de mes",
    serviceId: "estetica-dental"
  }
};

export const treatmentsData: Treatment[] = [
  {
    id: "ortodoncia",
    slug: "ortodoncia",
    name: "Ortodoncia Avanzada & Invisible",
    category: "Alineación y Oclusión",
    shortDesc: "Alineadores transparentes invisibles, brackets de zafiro de alta estética y ortodoncia autoligable rápida.",
    fullDesc: "Corregimos apiñamientos, mordidas cruzadas y diastemas con la máxima precisión biomecánica y discreción estética. Planificamos tu movimiento dental en 3D antes de comenzar.",
    duration: "6 a 18 meses según complejidad",
    sessions: "Revisiones cada 4 a 6 semanas",
    recovery: "Sin dolor, adaptación en menos de 48 horas",
    benefits: [
      "Alineación dental armónica sin afectar tu rutina diaria",
      "Alineadores removibles: come y cepíllate con total libertad",
      "Visualización digital 3D de tu resultado final antes de iniciar",
      "Tratamiento guiado por ortodoncistas certificados"
    ],
    features: [
      "Escaneo digital iTero intraoral (sin moldes de pasta incómodos)",
      "Alineadores de poliuretano médico biocompatible",
      "Brackets cerámicos transparentes que no se manchan",
      "Retenedores finales de alta durabilidad incluidos"
    ],
    idealFor: [
      "Adultos que buscan discreción en su entorno laboral",
      "Adolescentes que desean alineación rápida y confortable",
      "Casos de mordida abierta, apiñamiento o sobremordida"
    ],
    startingPrice: "Desde 85 €/mes en cuotas",
    image: "/src/assets/images/dental_smile_before_after_1790993790512.jpg",
    badge: "Más Solicitado"
  },
  {
    id: "estetica-dental",
    slug: "estetica-dental",
    name: "Estética Dental & Diseño de Sonrisa",
    category: "Cosmética y Perfeccionamiento",
    shortDesc: "Blanqueamiento LED de alta intensidad sin sensibilidad, carillas de porcelana estratificada y recontorneo gingival.",
    fullDesc: "Creamos sonrisas proporcionadas, naturales y luminosas respetando la fisionomía facial de cada paciente. Utilizamos microfotografía digital y mock-up en vivo.",
    duration: "1 a 3 sesiones clínicas",
    sessions: "1 sesión (Blanqueamiento) o 2-3 sesiones (Carillas)",
    recovery: "Inmediata, sin periodo de baja ni molestias",
    benefits: [
      "Dientes hasta 6 tonos más blancos y brillantes en 1 hora",
      "Corrección de manchas intrínsecas, fracturas y desgastes",
      "Prueba estética directa en boca antes de colocar carillas definitivas",
      "Materiales con translucidez idéntica al esmalte dental natural"
    ],
    features: [
      "Sistema de lámpara LED de luz fría fotoactivada",
      "Carillas de porcelana ultradelgadas (0.3 mm) con mínimo tallado",
      "Resinas nanoparticuladas de alta resistencia al pulido",
      "Fotografía odontológica de estudio clínico"
    ],
    idealFor: [
      "Dientes oscurecidos por café, té, tabaco o el paso del tiempo",
      "Bordes dentales desgastados, astillados o asimétricos",
      "Eventos especiales como bodas o presentaciones profesionales"
    ],
    startingPrice: "Desde 190 €",
    image: "/src/assets/images/dental_smile_before_after_1790993811224.jpg",
    badge: "Promoción Activa"
  },
  {
    id: "implantes",
    slug: "implantes",
    name: "Implantes & Rehabilitación Oral",
    category: "Cirugía e Implantes",
    shortDesc: "Recupera la fuerza masticatoria y estética natural de tus dientes perdidos con titanio biocompatible de grado médico.",
    fullDesc: "Solución definitiva y fija para la pérdida de una, varias o todas las piezas dentales. Realizamos cirugía guiada por ordenador con mínimo postoperatorio y carga inmediata en casos seleccionados.",
    duration: "Cirugía en 45 min por implante",
    sessions: "2 a 3 etapas de osteointegración",
    recovery: "Retorno a la vida normal en 24 a 48 horas",
    benefits: [
      "Firmeza y seguridad total al hablar, reír y masticar cualquier alimento",
      "Preservación de la estructura ósea facial y prevención del envejecimiento prematuro",
      "No requiere desgastar los dientes vecinos sanos como en puentes antiguos",
      "Garantía de oseointegración de por vida en aditamentos protésicos"
    ],
    features: [
      "Planificación 3D con Tomografía Computarizada (CBCT)",
      "Guías quirúrgicas de precisión milimétrica",
      "Coronas de zirconio monolítico libre de metal",
      "Protocolo de sedación consciente para pacientes ansiosos"
    ],
    idealFor: [
      "Pérdida de piezas individuales o múltiples",
      "Portadores de prótesis removibles inestables o incómodas",
      "Fracturas radiculares irreparables"
    ],
    startingPrice: "Financiación a medida hasta 36 meses",
    image: "/src/assets/images/dental_clinic_facility_1790993823056.jpg",
    badge: "Cirugía Guiada 3D"
  },
  {
    id: "odontopediatria",
    slug: "odontopediatria",
    name: "Odontopediatría & Limpieza Profiláctica",
    category: "Prevención Familiar",
    shortDesc: "Atención cálida y sin dolor para niños, selladores de fosas, y limpieza dental ultrasónica profunda para adultos.",
    fullDesc: "La base de una sonrisa saludable para toda la vida. Diseñamos un ambiente lúdico y sin estrés para que los más pequeños amen ir al dentista, combinando tecnología de profilaxis Air-Flow ultrasónica sin molestias para adultos.",
    duration: "45 a 60 minutos por sesión",
    sessions: "1 sesión profiláctica semestral",
    recovery: "Inmediata",
    benefits: [
      "Eliminación total de sarro supra y subgingival con ultrasonido",
      "Pulido y eliminación de manchas superficiales con spray de glicina",
      "Prevención activa contra caries y enfermedades periodontales",
      "Educación interactiva en técnicas de higiene bucodental"
    ],
    features: [
      "Equipo Air-Flow de micropartículas no abrasivas",
      "Selladores protectores con liberación prolongada de flúor",
      "Gafas de realidad virtual y ambiente relajado para niños",
      "Test bacteriano de saliva para control de riesgo cariogénico"
    ],
    idealFor: [
      "Mantenimiento semestral preventivo para toda la familia",
      "Niños a partir de la erupción de los primeros dientes",
      "Pacientes con encías inflamadas, sangrado o mal aliento"
    ],
    startingPrice: "Desde 55 €",
    image: "/src/assets/images/hero_dental_clinic_1790993790512.jpg"
  }
];

export const doctorData: Doctor = {
  name: "Dra. Valentina Arismendi",
  role: "Directora Médica & Especialista en Estética y Ortodoncia",
  specialty: "Odontología Restauradora, Máster en Ortodoncia Digital y Estética Mínimamente Invasiva",
  bio: "Con más de 14 años de práctica clínica y docencia de posgrado, la Dra. Arismendi enfoca la odontología desde la empatía y la precisión tecnológica. Su filosofía de trabajo prioriza tratamientos conservadores, indoloros y orientados a una armonía facial natural y duradera.",
  experienceYears: 14,
  licenseNumber: "Colegiado Oficial Nº 28009142",
  education: [
    "Licenciada en Odontología por la Universidad Complutense de Madrid (Premio Extraordinario)",
    "Máster Oficial en Ortodoncia y Ortopedia Dentofacial (3 años dedicación exclusiva)",
    "Diploma de Especialización en Estética Dental y Rehabilitación Adhesiva Avanzada",
    "Certificación Internacional Diamante en Sistemas de Alineadores Invisibles"
  ],
  memberships: [
    "Sociedad Española de Ortodoncia (SEDO)",
    "Sociedad Española de Prótesis Estomatológica y Estética (SEPES)",
    "European Orthodontic Society (EOS)"
  ],
  photo: "/src/assets/images/doctor_portrait_1790993802335.jpg"
};

export const clinicCases: ClinicCase[] = [
  {
    id: "caso-1",
    title: "Diseño de Sonrisa Integral & Blanqueamiento LED",
    category: "Estética Dental",
    patientInfo: "Camila V., 29 años",
    treatmentName: "Blanqueamiento LED + 4 Microcarillas de Porcelana",
    duration: "2 semanas (3 visitas)",
    beforeDesc: "Tinción severa por tetraciclinas de la infancia, diastema interincisal y asimetría en bordes desgastados.",
    afterDesc: "Tono B1 natural homogéneo, cierre de espacios y armonización con el arco del labio inferior.",
    testimonialExcerpt: "Tenía años tapándome la boca al reír. El trato de la doctora y la ausencia de dolor me devolvieron la seguridad.",
    beforeImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg",
    afterImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg"
  },
  {
    id: "caso-2",
    title: "Corrección de Apiñamiento Severo sin Extracciones",
    category: "Ortodoncia Invisible",
    patientInfo: "Rodrigo M., 33 años",
    treatmentName: "Alineadores Transparentes Digitales",
    duration: "11 meses",
    beforeDesc: "Apiñamiento severo en arcada anterior superior e inferior, colapso transversal y dificultad de masticación.",
    afterDesc: "Oclusión de clase I equilibrada, arcos expandidos fisiológicamente y sonrisa ancha y luminosa.",
    testimonialExcerpt: "Nadie en mi oficina notó que llevaba alineadores. En menos de un año mis dientes quedaron perfectamente rectos.",
    beforeImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg",
    afterImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg"
  },
  {
    id: "caso-3",
    title: "Reposición Inmediata de Incisivo Central con Implante",
    category: "Implantes Dentales",
    patientInfo: "Elena S., 45 años",
    treatmentName: "Implante de Titanio Guiado 3D + Corona Zirconio",
    duration: "Día único de cirugía + cicatrización guiada",
    beforeDesc: "Fractura coronal no restaurable de incisivo central tras caída accidental en bicicleta.",
    afterDesc: "Reemplazo exacto con corona de zirconio sobre implante, con perfecta recreación de la papila gingival.",
    testimonialExcerpt: "Llegué asustadísima y salí el mismo día con un diente provisional perfecto. La corona final es idéntica a mis propios dientes.",
    beforeImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg",
    afterImage: "/src/assets/images/dental_smile_before_after_1790993811224.jpg"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    author: "María José Fernández",
    initials: "MJ",
    role: "Paciente de Ortodoncia",
    rating: 5,
    date: "Hace 2 semanas",
    service: "Alineadores Invisibles",
    comment: "Increíble experiencia en Sonrisa Serena. Siempre le tuve pánico al dentista y la Dra. Valentina me explicó cada paso con una calidez excepcional. No sentí nada de dolor y las instalaciones son impecables.",
    verified: true
  },
  {
    id: "test-2",
    author: "Carlos De La Hoz",
    initials: "CH",
    role: "Paciente de Estética Dental",
    rating: 5,
    date: "Hace 1 mes",
    service: "Blanqueamiento LED Clínico",
    comment: "Aproveché la promoción 2x1 con mi pareja. En una sola sesión de una hora notamos un cambio radical, sin esa sensibilidad punzante que me habían causado en otras clínicas. 100% recomendado.",
    verified: true
  },
  {
    id: "test-3",
    author: "Lucía Santillán",
    initials: "LS",
    role: "Mamá de paciente",
    rating: 5,
    date: "Hace 3 semanas",
    service: "Odontopediatría & Limpieza",
    comment: "Llevé a mi hijo de 6 años para su primera revisión y quedó encantado. Le dieron gafas especiales, dibujos animados y la doctora fue tan dulce que ahora pregunta cuándo vuelve. Excelente servicio humano.",
    verified: true
  },
  {
    id: "test-4",
    author: "Javier M. Navarro",
    initials: "JN",
    role: "Paciente de Implantes",
    rating: 5,
    date: "Hace 2 meses",
    service: "Implante Guiado por Ordenador",
    comment: "La tecnología que tienen es de otro nivel: te escanean la boca en 3D en 2 minutos sin pastas molestas. El implante no me dolió absolutamente nada al día siguiente. Cumplieron con todo el presupuesto pactado.",
    verified: true
  }
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "Tratamientos",
    question: "¿Cómo sé si soy candidato para brackets tradicionales o alineadores invisibles?",
    answer: "Durante la primera consulta realizamos un escaneo intraoral 3D de alta definición. Con este estudio evaluamos la complejidad de la maloclusión, mordida y posición radicular. Hoy en día, más del 92% de los casos pueden resolverse con alineadores invisibles con la misma eficacia y mayor comodidad que los brackets tradicionales."
  },
  {
    id: "faq-2",
    category: "Procedimientos",
    question: "¿El blanqueamiento dental debilita el esmalte o causa sensibilidad extrema?",
    answer: "No. Utilizamos tecnología LED de luz fría y geles de peróxido remineralizados con nitrato de potasio y flúor bioactivo. Este protocolo no desmineraliza el esmalte ni genera calor pulpar. Cualquier sensación leve es transitoria y desaparece en 12 a 24 horas gracias a nuestro gel protector."
  },
  {
    id: "faq-3",
    category: "Pagos y Financiación",
    question: "¿Aceptan seguros médicos, tarjetas y planes de financiación en cuotas?",
    answer: "Sí. Aceptamos tarjetas de débito, crédito, transferencias y efectivo. Además, disponemos de convenios de financiación directa de hasta 24 y 36 meses sin intereses para tratamientos de ortodoncia e implantes dentales. Te entregamos un presupuesto claro y cerrado sin sorpresas."
  },
  {
    id: "faq-4",
    category: "Atención y Tiempos",
    question: "¿Cuánto dura una cita de evaluación inicial y qué incluye?",
    answer: "La primera consulta dura aproximadamente 45 minutos. Incluye exploración clínica integral, serie de fotos intraorales, escaneo digital 3D o radiografía digital diagnóstica según necesidad, informe detallado del estado de tu salud bucal y propuesta de tratamiento personalizada."
  },
  {
    id: "faq-5",
    category: "Miedo al Dentista",
    question: "¿Cómo atienden a pacientes con odontofobia o miedo a los tratamientos dentales?",
    answer: "Contamos con un protocolo especializado 'Cero Dolor y Cero Ansiedad'. Explicamos con calma cada procedimiento, usamos geles anestésicos tópicos con sabor agradable antes de cualquier punción, anestesia computarizada indolora y opciones de sedación consciente supervisada para intervenciones mayores."
  },
  {
    id: "faq-6",
    category: "Ubicación y Acceso",
    question: "¿Disponen de estacionamiento y facilidades de acceso para personas con movilidad reducida?",
    answer: "Sí. El Edificio Médico Zenith cuenta con rampas de acceso directo a nivel de calle, ascensores amplios adaptados para sillas de ruedas o carritos de bebé, y estacionamiento subterráneo con 2 horas de cortesía para todos nuestros pacientes citados."
  }
];

export const trustPillars = [
  {
    iconName: "ShieldCheck",
    title: "Diagnóstico Digital 3D",
    desc: "Escaneo intraoral en tiempo real sin moldes incómodos ni radiación innecesaria."
  },
  {
    iconName: "Sparkles",
    title: "Tecnología Sin Dolor",
    desc: "Anestesia computarizada indolora y protocolos clínicos mínimamente invasivos."
  },
  {
    iconName: "CreditCard",
    title: "Financiación en Cuotas",
    desc: "Planes a tu medida de hasta 24 meses sin intereses con presupuesto cerrado."
  },
  {
    iconName: "Car",
    title: "Parking Gratuito & Accesibilidad",
    desc: "2 horas de estacionamiento de cortesía en edificio médico con acceso universal."
  }
];
