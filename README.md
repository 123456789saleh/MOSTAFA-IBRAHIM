# 🎯 مشروع جائزة مدى للابتكار - إمكانية النفاذ الرقمي الذكية
# Mada Innovation Award - Smart Digital Accessibility Project

![Arabic Support](https://img.shields.io/badge/Language-العربية-blue)
![AI Powered](https://img.shields.io/badge/AI%20Powered-GPT--4-brightgreen)
![WCAG Compliant](https://img.shields.io/badge/WCAG%202.1-AA%20Compliant-success)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📋 نظرة عامة | Project Overview

### الفكرة الأساسية | Core Concept
**منصة ذكية شاملة لتحسين النفاذ الرقمي للأشخاص ذوي الإعاقة باستخدام الذكاء الاصطناعي**

A comprehensive intelligent platform that uses AI to enhance digital accessibility for people with disabilities, with complete Arabic language support and culturally-adapted solutions.

---

## 🎁 المميزات الرئيسية | Key Features

### 1. **قارئ الويب الذكي بالعربية** 🔊
- تحويل محتوى الويب إلى صوت عالي الجودة بالعربية
- فهم سياقي متقدم للمحتوى
- دعم مكامل للغة العربية والنصوص المركبة
- تقديم الملخصات الذكية للصفحات الطويلة

### 2. **نظام الوصف الذكي للصور** 🖼️
- وصف تلقائي للصور بالعربية باستخدام Vision AI
- تحديد العناصر المهمة والنصوص في الصور
- دعم الصور التاريخية والثقافية العربية
- وصف شامل يتناسب مع السياق الثقافي

### 3. **مساعد التنقل الذكي** 🧭
- تحسين بنية التنقل للمستخدمين
- اقتراحات ذكية للعناصر المهمة
- اختصارات لوحة المفاتيح محسّنة
- دعم قارئات الشاشة الرائدة (NVDA, JAWS)

### 4. **محلل إمكانية النفاذ** ✅
- فحص WCAG 2.1 AA/AAA تلقائي
- تقارير شاملة بالعربية والإنجليزية
- توصيات محددة للإصلاح
- تتبع التحسينات عبر الوقت

### 5. **التصميم الشامل الثقافي** 🌍
- واجهة مستخدم محسّنة للعربية
- ألوان ذات تباين عالي
- أحجام خطوط قابلة للتخصيص
- دعم الأوضاع الليلية والنهارية

---

## 🛠️ المكدس التقني | Technology Stack

### Frontend
```
- React.js 18+ (واجهة المستخدم الحديثة)
- TypeScript (أمان النوع)
- TailwindCSS (تصميم استجابي)
- Zustand (إدارة الحالة)
- Accessibility Libraries (axe-core, jsx-a11y)
```

### Backend
```
- Node.js + Express.js
- Python (معالجة AI)
- PostgreSQL (قاعدة البيانات)
- Redis (التخزين المؤقت)
- Docker (العزل والنشر)
```

### AI & NLP
```
- GPT-4 API (معالجة اللغة الطبيعية)
- OpenAI Vision (تحليل الصور)
- Google Cloud Text-to-Speech (تحويل النص إلى صوت)
- Custom Arabic NLP Models
```

### Quality & Compliance
```
- Jest (اختبارات الوحدة)
- Cypress (اختبارات E2E)
- axe-core (فحص النفاذ)
- SonarQube (جودة الكود)
- OWASP (الأمان)
```

---

## 📁 بنية المشروع | Project Structure

```
mia-innovation/
├── 📂 frontend/                    # تطبيق React
│   ├── src/
│   │   ├── components/             # مكونات معاد استخدامها
│   │   ├── pages/                  # صفحات التطبيق
│   │   ├── services/               # خدمات API
│   │   ├── hooks/                  # React Hooks مخصص
│   │   ├── utils/                  # دوال مساعدة
│   │   ├── styles/                 # أنماط TailwindCSS
│   │   └── App.tsx                 # المكون الرئيسي
│   └── package.json
│
├── 📂 backend/                     # خادم Express
│   ├── src/
│   │   ├── routes/                 # المسارات
│   │   ├── controllers/            # معالجات الطلبات
│   │   ├── services/               # منطق الأعمال
│   │   ├── middleware/             # البرامج الوسيطة
│   │   ├── models/                 # نماذج البيانات
│   │   ├── config/                 # التكوينات
│   │   └── server.js               # نقطة الدخول
│   └── package.json
│
├── 📂 ai-service/                  # خدمة الذكاء الاصطناعي
│   ├── models/                     # نماذج مخصص
│   ├── processors/                 # معالجات AI
│   ├── utils/                      # أدوات مساعدة
│   └── requirements.txt
│
├── 📂 docker/                      # ملفات Docker
│   ├── Dockerfile.frontend
│   ├── Dockerfile.backend
│   └── docker-compose.yml
│
├── 📂 docs/                        # التوثيق
│   ├── API.md                      # توثيق API
│   ├── ARCHITECTURE.md             # البنية المعمارية
│   ├── ACCESSIBILITY.md            # معايير النفاذ
│   └── ARABIC_SUPPORT.md           # دعم اللغة العربية
│
├── 📂 tests/                       # الاختبارات
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── 📂 .github/                     # إعدادات GitHub
│   └── workflows/                  # GitHub Actions
│
└── docker-compose.yml              # قالب Docker Compose
```

---

## 🚀 البدء السريع | Quick Start

### المتطلبات | Requirements
- Node.js 18+
- Python 3.9+
- PostgreSQL 14+
- Docker & Docker Compose

### التثبيت | Installation

```bash
# استنساخ المستودع
git clone https://github.com/123456789saleh/MOSTAFA-IBRAHIM.git
cd MOSTAFA-IBRAHIM

# التثبيت باستخدام Docker
docker-compose up -d

# أو التثبيت اليدوي
# تثبيت الـ Frontend
cd frontend
npm install
npm start

# تثبيت الـ Backend (في terminal جديد)
cd backend
npm install
npm start

# تثبيت خدمة AI (في terminal جديد)
cd ai-service
pip install -r requirements.txt
python main.py
```

### متغيرات البيئة | Environment Variables

```bash
# Backend (.env)
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://user:password@localhost:5432/mia
REDIS_URL=redis://localhost:6379
OPENAI_API_KEY=your_openai_key
GOOGLE_CLOUD_API_KEY=your_google_cloud_key

# Frontend (.env.local)
REACT_APP_API_URL=http://localhost:5000
REACT_APP_ENVIRONMENT=development
```

---

## ✅ معايير النفاذ | Accessibility Standards

### WCAG 2.1 AA Compliance
- ✅ نصوص بتباين عالي (4.5:1)
- ✅ أحجام خطوط قابلة للتغيير
- ✅ ملصقات نصية واضحة
- ✅ دعم لوحة المفاتيح الكاملة
- ✅ أدوار ARIA صحيحة
- ✅ تركيبة بؤري منطقية

### دعم اللغة العربية 🇸🇦
- ✅ اتجاه RTL محسّن
- ✅ أسماء مفصلة بالعربية
- ✅ رسائل خطأ واضحة
- ✅ توثيق كامل بالعربية

### الأمان والخصوصية 🔒
- ✅ تشفير المعلومات الحساسة
- ✅ عدم الاحتفاظ بالبيانات الشخصية
- ✅ HTTPS على كل الاتصالات
- ✅ معايير OWASP

---

## 🧪 الاختبارات | Testing

```bash
# اختبارات الوحدة
npm run test:unit

# اختبارات التكامل
npm run test:integration

# اختبارات E2E
npm run test:e2e

# فحص النفاذ
npm run test:a11y

# التغطية الكاملة
npm run test:coverage
```

---

## 📊 معدل النجاح | Success Metrics

### المؤشرات المستهدفة
- ✅ **تحسن 80%** في سهولة الوصول
- ✅ **وقت تحميل < 2 ثانية**
- ✅ **معدل رضا المستخدمين > 95%**
- ✅ **دعم 100% للغة العربية**
- ✅ **توافق 99.9% مع WCAG**

---

## 🤝 المساهمة | Contributing

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

### معايير المساهمة
- ✅ اتبع معايير ESLint
- ✅ أضف اختبارات للميزات الجديدة
- ✅ تحديث التوثيق
- ✅ تأكد من توافق WCAG

---

## 📄 الترخيص | License

MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل

---

## 👥 الفريق | Team

- **المشروع**: جائزة مدى للابتكار 🇸🇦
- **الهدف**: تسريع الابتكار في النفاذ الرقمي
- **المنصة**: جائزة مدى - قطر

---

## 📞 التواصل | Contact

- 📧 البريد الإلكتروني: support@mia-innovation.qa
- 🌐 الموقع الرسمي: https://mada.org.qa
- 💬 Discord: [انضم للمجتمع]
- 🐦 تويتر: [@MadaQatar]

---

## 🙏 شكر خاص

شكراً لـ:
- 🏛️ مركز مدى - قطر للتكنولوجيا المساعدة
- 👥 جميع الأشخاص ذوي الإعاقة الذين شاركوا في الاختبار
- 🤖 فريق OpenAI وتقنيات الذكاء الاصطناعي
- 🌟 المجتمع العربي الداعم

---

**🎯 هدفنا: عالم رقمي شامل وسهل الوصول للجميع**

---

*آخر تحديث: 2026-06-11*
