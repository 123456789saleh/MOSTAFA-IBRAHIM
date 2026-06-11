# API Documentation - توثيق API

## المقدمة | Introduction

هذه الوثيقة تصف جميع نقاط نهاية API المتاحة في منصة جائزة مدى للابتكار.

**Base URL:** `http://localhost:5000/api/v1`

---

## المصادقة | Authentication

### JWT Token
جميع الطلبات المحمية تتطلب رمز JWT في الرأس:

```bash
Authorization: Bearer <your_jwt_token>
```

---

## نقاط النهاية | Endpoints

### 1. الصحة | Health Check

#### GET /health
```bash
curl http://localhost:5000/health

# Response
{
  "status": "alive",
  "timestamp": "2026-06-11T10:00:00Z",
  "environment": "production"
}
```

### 2. المصادقة | Authentication

#### POST /api/v1/auth/register
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePassword123!",
    "name": "محمد أحمد",
    "language": "ar"
  }'
```

#### POST /api/v1/auth/login
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "SecurePassword123!"
  }'
```

### 3. قارئ الويب | Web Reader

#### POST /api/v1/reader/analyze
```bash
curl -X POST http://localhost:5000/api/v1/reader/analyze \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "language": "ar",
    "options": {
      "summarize": true,
      "extractLinks": true
    }
  }'
```

### 4. تحليل الصور | Image Analysis

#### POST /api/v1/images/analyze
```bash
curl -X POST http://localhost:5000/api/v1/images/analyze \
  -H "Authorization: Bearer <token>" \
  -F "image=@/path/to/image.jpg" \
  -F "language=ar"
```

### 5. فحص النفاذ | Accessibility Check

#### POST /api/v1/accessibility/check
```bash
curl -X POST http://localhost:5000/api/v1/accessibility/check \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "standard": "WCAG2AA"
  }'
```

---

## أكواد الحالة | Status Codes

| Code | المعنى |
|------|--------|
| 200 | نجاح |
| 201 | تم الإنشاء |
| 400 | طلب غير صحيح |
| 401 | غير مصرح |
| 403 | محظور |
| 404 | غير موجود |
| 500 | خطأ في الخادم |

---

## معدل الحد | Rate Limiting

- **الحد:** 100 طلب/ساعة لكل مستخدم
- **الرأس:** `X-RateLimit-Remaining`

---

## الأخطاء | Error Handling

```json
{
  "error": true,
  "message": "خطأ في معالجة الطلب",
  "code": "INVALID_INPUT",
  "details": {
    "field": "email",
    "issue": "صيغة البريد غير صحيحة"
  }
}
```

---

**آخر تحديث:** 2026-06-11
