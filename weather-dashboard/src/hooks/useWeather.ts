// src/hooks/useWeather.ts
/**
 * Hook مخصص لإدارة بيانات الطقس
 * Custom Hook for Weather Management
 */

import { useEffect, useCallback } from 'react';
import { useWeatherStore } from '../store/weatherStore';
import {
  getWeatherByCity,
  getWeatherByCoordinates,
  getForecast,
  getForecastByCoordinates,
} from '../services/weatherApi';

export const useWeather = () => {
  const {
    currentWeather,
    forecast,
    loading,
    error,
    selectedCity,
    temperatureUnit,
    setCurrentWeather,
    setForecast,
    setLoading,
    setError,
    clearError,
    addRecentSearch,
  } = useWeatherStore();

  /**
   * جلب بيانات الطقس باستخدام اسم المدينة
   */
  const fetchWeatherByCity = useCallback(async (city: string) => {
    if (!city.trim()) {
      setError('يرجى إدخال اسم مدينة صحيح');
      return;
    }

    setLoading(true);
    clearError();

    try {
      const weather = await getWeatherByCity(city);
      const forecast = await getForecast(city);

      setCurrentWeather(weather);
      setForecast(forecast);
      addRecentSearch(city);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'حدث خطأ غير متوقع';
      setError(errorMessage);
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  }, [setCurrentWeather, setForecast, setLoading, setError, clearError, addRecentSearch]);

  /**
   * جلب بيانات الطقس باستخدام الإحداثيات الجغرافية
   */
  const fetchWeatherByCoordinates = useCallback(
    async (lat: number, lon: number) => {
      setLoading(true);
      clearError();

      try {
        const weather = await getWeatherByCoordinates(lat, lon);
        const forecast = await getForecastByCoordinates(lat, lon);

        setCurrentWeather(weather);
        setForecast(forecast);
        addRecentSearch(weather.name);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'حدث خطأ غير متوقع';
        setError(errorMessage);
        setCurrentWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    },
    [setCurrentWeather, setForecast, setLoading, setError, clearError, addRecentSearch]
  );

  /**
   * جلب الموقع الجغرافي الحالي
   */
  const fetchCurrentLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('المتصفح الخاص بك لا يدعم خدمة تحديد الموقع');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoordinates(latitude, longitude);
      },
      (error) => {
        console.error('خطأ في الحصول على الموقع:', error);
        setError('لم نتمكن من الحصول على موقعك. يرجى السماح بالوصول للموقع');
      }
    );
  }, [fetchWeatherByCoordinates, setError]);

  /**
   * جلب البيانات عند تغيير المدينة المختارة
   */
  useEffect(() => {
    if (selectedCity) {
      fetchWeatherByCity(selectedCity);
    }
  }, [selectedCity, fetchWeatherByCity]);

  return {
    // البيانات
    currentWeather,
    forecast,
    loading,
    error,
    selectedCity,
    temperatureUnit,

    // الإجراءات
    fetchWeatherByCity,
    fetchWeatherByCoordinates,
    fetchCurrentLocation,
  };
};

export default useWeather;
