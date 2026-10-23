import { useLanguage } from '../i18n/useLanguage';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <select
      aria-label={t('Language')}
      value={language}
      onChange={(event) => setLanguage(event.target.value)}
      className="shrink-0 rounded border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-700"
      dir="ltr"
    >
      <option value="fa" lang="fa">فارسی</option>
      <option value="en" lang="en">English</option>
    </select>
  );
}
