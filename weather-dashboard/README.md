// weather-dashboard/README.md
# 🌤️ لوحة معلومات الطقس الذكية | Smart Weather Dashboard

تطبيق ويب حديث لعرض بيانات الطقس الحالية والتنبؤات المستقبلية من API OpenWeatherMap

**Live Demo:** [Weather Dashboard](https://weather-dashboard-demo.vercel.app)

---

## ✨ المميزات | Features

- ✅ عرض الطقس الحالي بتفاصيل شاملة
- ✅ توقعات الطقس لمدة 5 أيام
- ✅ البحث عن أي مدينة في العالم
- ✅ تحديد الموقع الجغرافي التلقائي
- ✅ حفظ المدن المفضلة
- ✅ سجل البحث الأخير
- ✅ دعم اللغة العربية الكامل
- ✅ واجهة استجابية وجميلة
- ✅ معالجة أخطاء شاملة
- ✅ PWA جاهز

---

## 🚀 البدء السريع | Quick Start

### المتطلبات | Requirements

```bash
Node.js 16+
npm أو yarn
حساب مجاني في OpenWeatherMap API
```

### التثبيت | Installation

```bash
# استنساخ المستودع
git clone https://github.com/123456789saleh/MOSTAFA-IBRAHIM.git
cd weather-dashboard

# تثبيت الحزم
npm install

# إنشاء ملف البيئة
cp .env.example .env.local

# إضافة مفتاح API الخاص بك
# عدل REACT_APP_OPENWEATHER_API_KEY في .env.local

# بدء التطوير
npm run dev
```

### بناء للإنتاج | Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 الحصول على مفتاح API | Getting API Key

1. اذهب إلى [OpenWeatherMap](https://openweathermap.org/api)
2. قم بإنشاء حساب مجاني
3. انسخ مفتاح API الخاص بك
4. ضعه في ملف `.env.local`

```env
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
```

---

## 📁 هيكل المشروع | Project Structure

```
weather-dashboard/
├── src/
│   ├── components/          # مكونات React
│   ├── hooks/              # React Hooks مخصصة
│   ├── services/           # خدمات API
│   ├── store/              # متجر Zustand
│   ├── types/              # أنواع TypeScript
│   ├── utils/              # دوال مساعدة
│   ├── App.tsx             # المكون الرئيسي
│   └── index.tsx           # نقطة الدخول
├── public/                 # ملفات عامة
├── .env.example            # نموذج متغيرات البيئة
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ المكدس التقني | Technology Stack

### Frontend
- **React 18** - مكتبة UI
- **TypeScript** - لغة البرمجة
- **Tailwind CSS** - تصميم الواجهة
- **Zustand** - إدارة الحالة
- **Axios** - طلبات HTTP
- **Recharts** - رسوم بيانية

### Tools
- **Vite** - بناء الآلات
- **ESLint** - فحص الكود
- **Prettier** - تنسيق الكود
- **TypeScript** - التحقق من النوع

### API
- **OpenWeatherMap API** - بيانات الطقس

---

## 📱 الاستخدام | Usage

### البحث عن مدينة
```typescript
// اكتب اسم المدينة واضغط Enter أو انقر البحث
```

### تحديد الموقع الحالي
```typescript
// انقر على زر📍 لتحديد موقعك التلقائي
```

### إضافة للمفضلة
```typescript
// انقر على ⭐ لحفظ المدينة المفضلة
```

---

## 🎯 Hook مخصص | Custom Hook Usage

```typescript
import { useWeather } from '@/hooks/useWeather';

function MyComponent() {
  const {
    currentWeather,
    forecast,
    loading,
    error,
    fetchWeatherByCity,
    fetchCurrentLocation,
  } = useWeather();

  return (
    // استخدم البيانات هنا
  );
}
```

---

## 🌐 متجر Zustand | Zustand Store Usage

```typescript
import { useWeatherStore } from '@/store/weatherStore';

function MyComponent() {
  const { 
    favorites, 
    addFavorite, 
    removeFavorite,
    isFavorite 
  } = useWeatherStore();

  return (
    // استخدم المتجر هنا
  );
}
```

---

## 🚀 النشر | Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# ثم اسحب مجلد dist على Netlify
```

### GitHub Pages
```bash
npm run build
# ثم ادفع dist إلى فرع gh-pages
```

---

## 📊 معلومات عن API

### Endpoints المستخدمة

1. **الطقس الحالي**
   ```
   GET /data/2.5/weather?q={city}&appid={api_key}&lang=ar&units=metric
   ```

2. **التوقعات**
   ```
   GET /data/2.5/forecast?q={city}&appid={api_key}&lang=ar&units=metric
   ```

3. **البحث الجغرافي**
   ```
   GET /geo/1.0/direct?q={city}&appid={api_key}
   ```

---

## 🐛 المشاكل الشائعة | Common Issues

### مفتاح API غير صحيح
```
الحل: تأكد من نسخ المفتاح بشكل صحيح في .env.local
```

### لم يتم العثور على المدينة
```
الحل: تحقق من تهجئة اسم المدينة بالإنجليزية
```

### خطأ في تحديد الموقع
```
الحل: تأكد من السماح للمتصفح بالوصول إلى الموقع
```

---

## 📞 التواصل | Contact

**مدير المشروع: احمد صالح**

- 📧 البريد: [ahmedsalehnew2000@gmail.com](mailto:ahmedsalehnew2000@gmail.com)
- 📱 الواتس: [+20 1011110607](https://wa.me/201011110607)
- ☎️ الهاتف: [+201011110607](tel:+201011110607)

---

## 📄 الترخيص | License

هذا المشروع مرخص تحت MIT License - انظر [LICENSE](LICENSE) للتفاصيل

---

## 🙏 شكر | Acknowledgments

- [OpenWeatherMap](https://openweathermap.org) - بيانات الطقس
- [React](https://react.dev) - مكتبة UI
- [Tailwind CSS](https://tailwindcss.com) - تصميم الواجهة
- [Zustand](https://github.com/pmndrs/zustand) - إدارة الحالة

---

**تم الإنشاء بواسطة: احمد صالح**  
*آخر تحديث: 2026-06-11*
