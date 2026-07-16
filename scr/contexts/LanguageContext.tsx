import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Lang = 'bn' | 'fr';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  bn: {
    // Navigation
    'nav.home': 'হোম',
    'nav.courses': 'আমাদের কোর্স',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    'nav.portal': 'শিক্ষার্থী পোর্টাল',
    'nav.connection': 'কনেকশন',

    // Hero
    'hero.label': 'অনলাইন ফরাসি ভাষা স্কুল',
    'hero.title': 'FN Formation',
    'hero.desc': 'ফরাসি ভাষা শিখুন এবং DELF পরীক্ষায় সফল হোন',
    'hero.btn1': 'আমাদের কোর্স দেখুন',
    'hero.btn2': 'যোগাযোগ করুন',

    // About
    'about.label': 'আমাদের সম্পর্কে',
    'about.title': 'ফরাসি ভাষা শেখার সঙ্গী',
    'about.desc': 'FN Formation একটি অনলাইন ফরাসি ভাষা স্কুল যা DELF পরীক্ষার প্রস্তুতির জন্য বিশেষায়িত। আমরা অভিজ্ঞ শিক্ষকদের মাধ্যমে আপনাকে ফরাসি ভাষায় দক্ষ করে তুলতে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হল প্রতিটি শিক্ষার্থীকে তাদের লক্ষ্য অর্জনে সাহায্য করা।',
    'about.link': 'আরও জানুন',
    'about.stat1.num': '৫০০+',
    'about.stat1.label': 'শিক্ষার্থী',
    'about.stat2.num': '৫+',
    'about.stat2.label': 'বছরের অভিজ্ঞতা',
    'about.stat3.num': '৯৮%',
    'about.stat3.label': 'সন্তুষ্টি',

    // Courses
    'courses.label': 'আমাদের কোর্স',
    'courses.title': 'DELF কোর্সসমূহ',
    'courses.desc': 'আমাদের বিশেষায়িত DELF প্রস্তুতি কোর্সগুলো আপনাকে লক্ষ্য অর্জনে সাহায্য করবে',
    'courses.btn': 'সব কোর্স দেখুন',
    'course.buy': 'ক্রয় করুন',

    // Course details
    'course.a1.title': 'DELF A1 কোর্স',
    'course.a1.desc': 'ফরাসি ভাষায় প্রথম পদক্ষেপ। মৌলিক যোগাযোগ দক্ষতা অর্জন করুন।',
    'course.a2.title': 'DELF A2 কোর্স',
    'course.a2.desc': 'প্রাথমিক স্তর। দৈনন্দিন পরিস্থিতিতে ফরাসি ভাষায় কথা বলুন।',
    'course.b1.title': 'DELF B1 কোর্স',
    'course.b1.desc': 'মধ্যম স্তর। স্বাধীনভাবে ফরাসি ভাষায় যোগাযোগ করুন।',
    'course.b2.title': 'DELF B2 কোর্স',
    'course.b2.desc': 'উচ্চ মধ্যম স্তর। জটিল বিষয়ে আত্মবিশ্বাসের সঙ্গে কথা বলুন।',

    // Why Choose Us
    'why.label': 'কেন আমরা',
    'why.title': 'প্রতিটি ধাপে উৎকর্ষতা',
    'why.1.title': 'অভিজ্ঞ শিক্ষক',
    'why.1.desc': 'আমাদের শিক্ষকরা ফরাসি ভাষায় উচ্চশিক্ষিত এবং বহু বছরের অভিজ্ঞতা সম্পন্ন।',
    'why.2.title': 'গুণগত মানের সিলেবাস',
    'why.2.desc': 'DELF পরীক্ষার জন্য বিশেষভাবে তৈরি সিলেবাস যা সম্পূর্ণ কারিকুলাম অনুসরণ করে।',
    'why.3.title': 'যোগাযোগের সুবিধা',
    'why.3.desc': '২৪/৭ সাপোর্ট এবং ব্যক্তিগত পরামর্শ প্রতিটি শিক্ষার্থীর জন্য।',
    'why.4.title': 'সফলতার হার',
    'why.4.desc': 'আমাদের ৯৮% শিক্ষার্থী প্রথম চেষ্টাতেই DELF পরীক্ষায় উত্তীর্ণ হন।',

    // Testimonials
    'trust.title': 'তারা আমাদের বিশ্বাস করে',

    // CTA
    'cta.title': 'ফরাসি শেখার যাত্রা শুরু করুন',
    'cta.desc': 'যেকোনো স্তরের ফরাসি শিক্ষার্থীর জন্য আমাদের বিশেষায়িত কোর্স রয়েছে। আজই যোগাযোগ করুন!',
    'cta.whatsapp': 'যোগাযোগ করুন',

    // Footer
    'footer.tagline': 'ফরাসি শিখুন এবং সাফল্যের দিকে এগিয়ে চলুন',
    'footer.nav': 'নেভিগেশন',
    'footer.legal': 'আইনগত তথ্য',
    'footer.siret': 'SIRET: 98259717100015',
    'footer.tva': 'TVA: FR9787348734',
    'footer.phone': 'Tél: +33 7 51 32 61 18',
    'footer.rights': '© 2026 FN Formation. সর্বস্বত্ব সংরক্ষিত।',
    'footer.privacy': 'গোপনীয়তা নীতি',
    'footer.legal2': 'আইনি বিজ্ঞপ্তি',

    // Courses Page
    'coursespage.title': 'DELF প্রস্তুতি কোর্স',
    'coursespage.desc': 'আমাদের সমস্ত কোর্স প্রি-রেকর্ড করা ভিডিও যা YouTube-ে স্ট্রিম করা হয়',
    'coursespage.how': 'কিভাবে কাজ করে',
    'coursespage.step1': 'কোর্স নির্বাচন করুন',
    'coursespage.step1d': 'আপনার স্তর অনুযায়ী সঠিক DELF কোর্সটি বেছে নিন।',
    'coursespage.step2': 'WhatsApp-ে যোগাযোগ করুন',
    'coursespage.step2d': 'কোর্স কিনতে আমাদের WhatsApp-ে মেসেজ করুন।',
    'coursespage.step3': 'শেখা শুরু করুন',
    'coursespage.step3d': 'পেমেন্ট নিশ্চিত হলে কোর্স অ্যাক্সেস পেয়ে যাবেন।',

    // Course card features
    'course.feature1': 'প্রি-রেকর্ড করা ভিডিও লেকচার',
    'course.feature2': 'অভিজ্ঞ শিক্ষকদের দ্বারা',
    'course.feature3': 'অনুশীলনী ও মডেল টেস্ট',
    'course.feature4': 'সার্টিফিকেট',
    'course.buy2': 'কোর্স কিনুন',
    'course.demo': 'ডেমো ক্লাস দেখুন',

    // Order / Contact form modal
    'form.buy.title': 'কোর্স অর্ডার করুন',
    'form.name': 'পুরো নাম',
    'form.phone': 'ফোন নম্বর',
    'form.email': 'ইমেইল',
    'form.course': 'কোর্সের নাম',
    'form.submit': 'WhatsApp-এ পাঠান',

    // Footer social
    'footer.social': 'আমাদের ফলো করুন',

    // About Page
    'aboutpage.title': 'FN Formation — আপনার ফরাসি শেখার সঙ্গী',
    'aboutpage.story.title': 'আমাদের গল্প',
    'aboutpage.story.desc': 'FN Formation ফরাসি ভাষা শিক্ষায় একটি নতুন দিগন্ত উন্মোচন করেছে। আমরা বিশ্বাস করি যে প্রতিটি মানুষের ফরাসি ভাষা শেখার সুযোগ থাকা উচিত, যেখানেই থাকুন না কেন। আমাদের অনলাইন প্ল্যাটফর্ম আপনাকে নিজের গতিতে ফরাসি শিখতে সাহায্য করে।',
    'aboutpage.mission.title': 'আমাদের লক্ষ্য',
    'aboutpage.mission.desc': 'ফরাসি ভাষা শিক্ষাকে সবার জন্য সহজলভ্য এবং কার্যকর করে তোলা। আমরা DELF পরীক্ষার্থীদের সর্বোচ্চ প্রস্তুতি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।',
    'aboutpage.team.title': 'আমাদের টীম',

    // Contact Page
    'contact.title': 'আমাদের সাথে যোগাযোগ করুন',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.btn': 'চ্যাট শুরু করুন',
    'contact.email.title': 'Email',
    'contact.phone.title': 'Téléphone',
    'contact.address.title': 'Adresse',
    'contact.address': 'France',
    'contact.quick': 'যেকোনো প্রশ্নের জন্য আমাদের WhatsApp-ে মেসেজ করুন',

    // Portal Page
    'portal.title': 'আপনার লাইভ ক্লাস রেকর্ডিং',
    'portal.desc': 'আপনার লাইভ Zoom ক্লাসের রেকর্ডিং এখানে পাবেন',
    'portal.login.title': 'লগইন করুন',
    'portal.login.desc': 'আপনার ক্লাস রেকর্ডিং অ্যাক্সেস করতে লগইন করুন',
    'portal.login.btn': 'লগইন পেজে যান',
    'portal.all': 'সব রেকর্ডিং',

    // Connection Page
    'connection.title': 'আপনার অ্যাক্উন্টে লগইন করুন',
    'connection.welcome': 'স্বাগতম',
    'connection.email': 'ইমেইল',
    'connection.password': 'পাসওয়ার্ড',
    'connection.login': 'লগইন',
    'connection.or': 'অথবা',
    'connection.demo': 'ডেমো অ্যাক্সেস',
    'connection.forgot': 'পাসওয়ার্ড ভুলে গেছেন?',
    'connection.new': 'নতুন অ্যাক্উন্ট',

    // Common
    'lang.bn': 'বাংলা',
    'lang.fr': 'Français',
    'price': '€৯৯',
    'eur': '€',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.courses': 'Nos Cours',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.portal': 'Portail Étudiant',
    'nav.connection': 'Connexion',

    // Hero
    'hero.label': 'ÉCOLE DE FRANÇAIS EN LIGNE',
    'hero.title': 'FN Formation',
    'hero.desc': 'Apprenez le français et réussissez votre examen DELF',
    'hero.btn1': 'VOIR NOS COURS',
    'hero.btn2': 'NOUS CONTACTER',

    // About
    'about.label': 'À PROPOS DE NOUS',
    'about.title': 'Votre Partenaire d\'Apprentissage du Français',
    'about.desc': 'FN Formation est une école de français en ligne spécialisée dans la préparation aux examens DELF. Nous nous engageons à vous rendre compétent en français grâce à nos enseignants expérimentés. Notre objectif est d\'aider chaque étudiant à atteindre ses objectifs.',
    'about.link': 'EN SAVOIR PLUS',
    'about.stat1.num': '500+',
    'about.stat1.label': 'Étudiants',
    'about.stat2.num': '5+',
    'about.stat2.label': 'Années d\'Expérience',
    'about.stat3.num': '98%',
    'about.stat3.label': 'Satisfaction',

    // Courses
    'courses.label': 'NOS COURS',
    'courses.title': 'Cours de Préparation DELF',
    'courses.desc': 'Nos cours de préparation DELF spécialisés vous aideront à atteindre vos objectifs',
    'courses.btn': 'VOIR TOUS LES COURS',
    'course.buy': 'ACHETER',

    // Course details
    'course.a1.title': 'Cours DELF A1',
    'course.a1.desc': 'Premiers pas en français. Acquérez les compétences de communication de base.',
    'course.a2.title': 'Cours DELF A2',
    'course.a2.desc': 'Niveau élémentaire. Parlez français dans des situations quotidiennes.',
    'course.b1.title': 'Cours DELF B1',
    'course.b1.desc': 'Niveau intermédiaire. Communiquez en français de manière autonome.',
    'course.b2.title': 'Cours DELF B2',
    'course.b2.desc': 'Niveau intermédiaire supérieur. Discutez avec assurance de sujets complexes.',

    // Why Choose Us
    'why.label': 'POURQUOI NOUS',
    'why.title': 'L\'Excellence à Chaque Étape',
    'why.1.title': 'Enseignants Expérimentés',
    'why.1.desc': 'Nos enseignants sont hautement qualifiés en français avec de nombreuses années d\'expérience.',
    'why.2.title': 'Programme de Qualité',
    'why.2.desc': 'Un syllabus spécialement conçu pour l\'examen DELF suivant le curriculum complet.',
    'why.3.title': 'Support Dédié',
    'why.3.desc': 'Support 24/7 et conseils personnels pour chaque étudiant.',
    'why.4.title': 'Taux de Réussite',
    'why.4.desc': '98% de nos étudiants réussissent l\'examen DELF du premier coup.',

    // Testimonials
    'trust.title': 'Ils Nous Font Confiance',

    // CTA
    'cta.title': 'Prêt à Commencer Votre Apprentissage du Français ?',
    'cta.desc': 'Nous avons des cours spécialisés pour les apprenants de français de tous niveaux. Contactez-nous dès aujourd\'hui !',
    'cta.whatsapp': 'CONTACTEZ-NOUS',

    // Footer
    'footer.tagline': 'Apprenez le français et conduisez vers le succès',
    'footer.nav': 'Navigation',
    'footer.legal': 'Informations Légales',
    'footer.siret': 'SIRET: 98259717100015',
    'footer.tva': 'TVA: FR9787348734',
    'footer.phone': 'Tél: +33 7 51 32 61 18',
    'footer.rights': '© 2026 FN Formation. Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.legal2': 'Mentions Légales',

    // Courses Page
    'coursespage.title': 'Cours de Préparation DELF',
    'coursespage.desc': 'Tous nos cours sont des vidéos pré-enregistrées diffusées sur YouTube',
    'coursespage.how': 'Comment Ça Marche',
    'coursespage.step1': 'Choisissez Votre Cours',
    'coursespage.step1d': 'Choisissez le bon cours DELF selon votre niveau.',
    'coursespage.step2': 'Contactez-nous sur WhatsApp',
    'coursespage.step2d': 'Envoyez-nous un message sur WhatsApp pour acheter le cours.',
    'coursespage.step3': 'Commencez à Apprendre',
    'coursespage.step3d': 'Une fois le paiement confirmé, vous aurez accès au cours.',

    // Course card features
    'course.feature1': 'Vidéos pré-enregistrées',
    'course.feature2': 'Par des enseignants expérimentés',
    'course.feature3': 'Exercices et tests modèles',
    'course.feature4': 'Certificat',
    'course.buy2': 'ACHETER LE COURS',
    'course.demo': 'VOIR UNE DÉMO CLASSE',

    // Order / Contact form modal
    'form.buy.title': 'Commander le cours',
    'form.name': 'Nom complet',
    'form.phone': 'Numéro de téléphone',
    'form.email': 'Email',
    'form.course': 'Nom du cours',
    'form.submit': 'Envoyer sur WhatsApp',

    // Footer social
    'footer.social': 'Suivez-nous',

    // About Page
    'aboutpage.title': 'FN Formation — Votre Partenaire d\'Apprentissage du Français',
    'aboutpage.story.title': 'Notre Histoire',
    'aboutpage.story.desc': 'FN Formation a ouvert un nouvel horizon dans l\'enseignement du français en ligne. Nous croyons que chacun devrait avoir la possibilité d\'apprendre le français, où qu\'il soit. Notre plateforme en ligne vous aide à apprendre le français à votre propre rythme.',
    'aboutpage.mission.title': 'Notre Mission',
    'aboutpage.mission.desc': 'Rendre l\'apprentissage du français accessible et efficace pour tous. Nous nous engageons à assurer la meilleure préparation possible aux candidats au DELF.',
    'aboutpage.team.title': 'Notre Équipe',

    // Contact Page
    'contact.title': 'Contactez-Nous',
    'contact.whatsapp.title': 'WhatsApp',
    'contact.whatsapp.btn': 'Démarrer le Chat',
    'contact.email.title': 'Email',
    'contact.phone.title': 'Téléphone',
    'contact.address.title': 'Adresse',
    'contact.address': 'France',
    'contact.quick': 'Envoyez-nous un message sur WhatsApp pour toute question',

    // Portal Page
    'portal.title': 'Vos Enregistrements de Cours en Direct',
    'portal.desc': 'Retrouvez ici les enregistrements de vos cours Zoom en direct',
    'portal.login.title': 'Connectez-Vous',
    'portal.login.desc': 'Connectez-vous pour accéder à vos enregistrements de cours',
    'portal.login.btn': 'ALLER À LA CONNEXION',
    'portal.all': 'Tous',

    // Connection Page
    'connection.title': 'Connectez-Vous à Votre Compte',
    'connection.welcome': 'Bienvenue',
    'connection.email': 'Email',
    'connection.password': 'Mot de passe',
    'connection.login': 'CONNEXION',
    'connection.or': 'OU',
    'connection.demo': 'ACCÈS DÉMO',
    'connection.forgot': 'Mot de passe oublié?',
    'connection.new': 'Nouveau Compte',

    // Common
    'lang.bn': 'বাংলা',
    'lang.fr': 'Français',
    'price': '€99',
    'eur': '€',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('bn');

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    document.documentElement.lang = newLang === 'bn' ? 'bn' : 'fr';
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || key;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
