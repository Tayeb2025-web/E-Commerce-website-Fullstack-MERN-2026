import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './useLanguage';
import persian from './fa.json';

const storageKey = 'store-language';

function initialLanguage() {
  try {
    return localStorage.getItem(storageKey) === 'en' ? 'en' : 'fa';
  } catch {
    return 'fa';
  }
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);
  const isRTL = language === 'fa';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title = isRTL ? 'فروشگاه | خرید آنلاین' : 'E-Commerce';
    try {
      localStorage.setItem(storageKey, language);
    } catch { /* Language switching also works when storage is unavailable. */ }
  }, [language, isRTL]);

  const value = useMemo(() => ({
    language,
    isRTL,
    setLanguage: (next) => { if (next === 'fa' || next === 'en') setLanguage(next); },
    t: (key) => {
      const text = typeof key === 'string' ? key : key?.message || 'Something went wrong. Please try again.';
      return language === 'fa' ? persian[text] || text : text;
    },
    localizeProduct: (product, field = 'name') =>
      (language === 'fa' && product?.[`${field}Fa`]) || product?.[field] || '',
    formatDate: (date) => {
      const parsed = new Date(date);
      return Number.isNaN(parsed.getTime()) ? '—' : parsed.toLocaleDateString(language === 'fa' ? 'fa-IR' : 'en-US');
    },
  }), [language, isRTL]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
