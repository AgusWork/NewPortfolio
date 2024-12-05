import React from 'react';
import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import {  GiUsaFlag  } from 'react-icons/gi';

const LanguageSwitcher = ({ 
  className = '' 
}: { 
  className?: string 
}) => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const changeLanguage = (lang: 'en' | 'es') => {
    router.replace({ pathname }, { locale: lang });
  };

  const isEnglish = locale === 'en';

  return (
    <button 
      onClick={() => changeLanguage(isEnglish ? 'es' : 'en')}
      className={`relative w-10 h-10 rounded-full border-2 border-teal-500 overflow-hidden transition-all duration-500 ease-in-out transform ${className}`}
    >
      <div 
        className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
          isEnglish 
            ? 'translate-y-0' 
            : '-translate-y-full'
        }`}
      >
        {/* UK Flag */}
        <div className="w-full h-full relative flex items-center justify-center hover:bg-slate-700">
         < GiUsaFlag className='w-full h-full object-cover' />
        </div>
        
        {/* Spanish Flag */}
        <div className="w-full h-full flex flex-col">
          <div className="w-full h-full bg-red-600"></div>
          <div className="w-full h-full bg-yellow-500"></div>
          <div className="w-full h-full bg-red-600"></div>
        </div>
      </div>
    </button>
  );
};

export default LanguageSwitcher;