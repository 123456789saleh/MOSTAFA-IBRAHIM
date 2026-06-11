// src/services/weatherApi.ts
/**
 * خدمة API الطقس
 * Weather API Service
 */

import axios, { AxiosInstance } from 'axios';
import {
  CurrentWeatherResponse,
  ForecastResponse,
} from '../types/weather';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const LANGUAGE = 'ar';
const UNITS = 'metric';

if (!API_KEY) {
  throw new Error(
    'خطأ: لم يتم توفير REACT_APP_OPENWEATHER_API_KEY في متغيرات البيئة'
  );
}

/**
 * إنشاء مثيل Axios مع الإعدادات الافتراضية
 */
const weatherApi: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  params: {
    appid: API_KEY,
    lang: LANGUAGE,
    units: UNITS,
  },
});

/**
 * معالج الأخطاء
 */
weatherApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          throw new Error('المدينة المطلوبة لم تُعثر عليها');
        case 401:
          throw new Error('مفتاح API غير صحيح');
        case 429:
          throw new Error('تم تجاوز عدد الطلبات المسموح. يرجى الانتظار');
        case 500:
          throw new Error('خطأ في خادم API');
        default:
          throw new Error(`خطأ API: ${error.response.statusText}`);
      }
    } else if (error.request) {
      throw new Error('لا توجد استجابة من الخادم. تحقق من اتصالك بالإنترنت');
    } else {
      throw new Error(`خطأ: ${error.message}`);
    }
  }
);

/**
 * الحصول على الطقس الحالي باستخدام اسم المدينة
 */
export const getWeatherByCity = async (
  city: string
): Promise<CurrentWeatherResponse> => {
  try {
    const response = await weatherApi.get<CurrentWeatherResponse>('/weather', {
      params: { q: city },
    });
    return response.data;
  } catch (error) {
    throw new Error(`خطأ في جلب بيانات الطقس للمدينة ${city}: ${error}`);
  }
};

/**
 * الحصول على الطقس الحالي باستخدام الإحداثيات
 */
export const getWeatherByCoordinates = async (
  lat: number,
  lon: number
): Promise<CurrentWeatherResponse> => {
  try {
    const response = await weatherApi.get<CurrentWeatherResponse>('/weather', {
      params: { lat, lon },
    });
    return response.data;
  } catch (error) {
    throw new Error(`خطأ في جلب بيانات الطقس للإحداثيات: ${error}`);
  }
};

/**
 * الحصول على توقعات لمدة 5 أيام
 */
export const getForecast = async (city: string): Promise<ForecastResponse> => {
  try {
    const response = await weatherApi.get<ForecastResponse>('/forecast', {
      params: { q: city },
    });
    return response.data;
  } catch (error) {
    throw new Error(`خطأ في جلب التنبؤات للمدينة ${city}: ${error}`);
  }
};

/**
 * الحصول على توقعات باستخدام الإحداثيات
 */
export const getForecastByCoordinates = async (
  lat: number,
  lon: number
): Promise<ForecastResponse> => {
  try {
    const response = await weatherApi.get<ForecastResponse>('/forecast', {
      params: { lat, lon },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      `خطأ في جلب التنبؤات للإحداثيات ${lat}, ${lon}: ${error}`
    );
  }
};

/**
 * تحويل رمز الطقس إلى رابط صورة
 */
export const getWeatherIconUrl = (iconCode: string, size: '1x' | '2x' | '4x' = '2x'): string => {
  return `https://openweathermap.org/img/wn/${iconCode}@${size}.png`;
};

/**
 * تحويل اتجاه الريح إلى اتجاهات بوصلة
 */
export const getWindDirection = (degrees: number): string => {
  const directions = [
    'شمال',
    'شمال شرقي',
    'شرقي',
    'جنوب شرقي',
    'جنوبي',
    'جنوب غربي',
    'غربي',
    'شمال غربي',
  ];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
};

export default weatherApi;
