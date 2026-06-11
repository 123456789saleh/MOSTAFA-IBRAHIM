/**
 * ملف البيانات الأساسية للمشروع
 * Project Metadata File
 */

module.exports = {
  // معلومات المشروع الأساسية
  project: {
    name: 'مشروع جائزة مدى للابتكار',
    englishName: 'Mada Innovation Award Project',
    version: '1.0.0',
    description:
      'منصة ذكية شاملة لتحسين النفاذ الرقمي للأشخاص ذوي الإعاقة باستخدام الذكاء الاصطناعي',
    year: 2026,
  },

  // معلومات مدير المشروع
  manager: {
    fullName: 'السيد / احمد احمد عبد الحميد صالح',
    shortName: 'احمد صالح',
    englishName: 'Ahmed Saleh',
    country: 'جمهورية مصر العربية',
    countryCode: 'EG',
    countryFlag: '🇪🇬',
  },

  // وسائل التواصل
  contact: {
    email: 'ahmedsalehnew2000@gmail.com',
    emailLabel: 'البريد الإلكتروني',
    phone: {
      countryCode: '+20',
      areaCode: '101',
      number: '1110607',
      full: '+201011110607',
      displayFormat: '+20 (0) 101 111 0607',
      label: 'الهاتف',
    },
    whatsapp: {
      link: 'https://wa.me/201011110607',
      number: '+201011110607',
      label: 'الواتس آب',
    },
    phoneLinks: {
      tel: 'tel:+201011110607',
      mailto: 'mailto:ahmedsalehnew2000@gmail.com',
      whatsapp: 'https://wa.me/201011110607',
    },
  },

  // ساعات العمل
  workingHours: {
    sunday: '9:00 AM - 6:00 PM',
    monday: '9:00 AM - 6:00 PM',
    tuesday: '9:00 AM - 6:00 PM',
    wednesday: '9:00 AM - 6:00 PM',
    thursday: '9:00 AM - 6:00 PM',
    friday: 'Closed',
    saturday: '10:00 AM - 4:00 PM',
  },

  // أوقات الاستجابة
  responseTimes: {
    urgent: '< 1 hour',
    high: '< 24 hours',
    medium: '< 48 hours',
    low: '< 7 days',
  },

  // الأولويات
  priorities: {
    urgent: {
      label: 'عاجل',
      color: '#FF0000',
      responseTime: '< 1 hour',
    },
    high: {
      label: 'سريع',
      color: '#FF6600',
      responseTime: '< 24 hours',
    },
    medium: {
      label: 'عادي',
      color: '#FFAA00',
      responseTime: '< 48 hours',
    },
    low: {
      label: 'منخفض',
      color: '#00AA00',
      responseTime: '< 7 days',
    },
  },

  // روابط مهمة
  links: {
    github: 'https://github.com/123456789saleh/MOSTAFA-IBRAHIM',
    website: 'https://mada.org.qa',
    issues: 'https://github.com/123456789saleh/MOSTAFA-IBRAHIM/issues',
    discussions:
      'https://github.com/123456789saleh/MOSTAFA-IBRAHIM/discussions',
  },

  // ملفات التوثيق
  documentation: {
    readme: 'README.md',
    requirements: 'REQUIREMENTS.md',
    architecture: 'ARCHITECTURE.md',
    accessibility: 'ACCESSIBILITY.md',
    arabicSupport: 'ARABIC_SUPPORT.md',
    api: 'API.md',
    contributing: 'CONTRIBUTING.md',
    contact: 'CONTACT.md',
    support: 'SUPPORT.md',
  },

  // المميزات الرئيسية
  features: [
    'قارئ الويب الذكي',
    'تحليل الصور الذكي',
    'مساعد التنقل',
    'محلل النفاذ',
    'تصميم شامل',
  ],

  // المكدس التقني
  techStack: {
    frontend: ['React.js', 'TypeScript', 'TailwindCSS', 'Zustand'],
    backend: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis'],
    ai: ['GPT-4', 'Vision API', 'Text-to-Speech'],
    testing: ['Jest', 'Cypress', 'axe-core'],
  },

  // المعايير والمتطلبات
  standards: {
    wcag: 'WCAG 2.1 AA',
    arabic: 'Full Arabic Support',
    security: 'OWASP Top 10',
    privacy: 'GDPR & CCPA Compliant',
  },
};
