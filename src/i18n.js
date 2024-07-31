import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        welcome: 'Welcome Yuvraj!',
        dashboard: 'Dashboard',
        user: 'User',
        learningCourses: 'Learning Courses',
        blog: 'Blog',
        login: 'Login',
        notFound: 'Not Found',
        quiz: 'Quiz',
        topPerformer: 'Top Performer',
        weeklyVolume: 'Weekly Volume',
        tradingVolume: 'Trading Volume',
        tradeAlerts: 'Trade Alerts',
        marketTrends: 'Market Trends',
        tradingTypesPerformance: 'Trading Types Performance',
        stockPerformance: 'Stock Performance',
        currentMarketTrends: 'Current Market Trends',
        newsUpdate: 'News Update',
        orderTimeline: 'Order Timeline',
        esg:'Top ESG Companies',
        leaderboard:'Leaderboard',
        // add other translations as needed
      },
    },
    hi: {
      translation: {
        welcome: 'स्वागत हे!',
        dashboard: 'डैशबोर्ड',
        user: 'उपयोगकर्ता',
        learningCourses: 'लर्निंग कोर्स',
        blog: 'ब्लॉग',
        login: 'लॉगिन',
        notFound: 'नहीं मिला',
        quiz: 'प्रश्नोत्तरी',
        topPerformer: 'शीर्ष प्रदर्शनकर्ता',
        weeklyVolume: 'साप्ताहिक मात्रा',
        tradingVolume: 'व्यापार मात्रा',
        tradeAlerts: 'व्यापार अलर्ट',
        marketTrends: 'बाजार रुझान',
        tradingTypesPerformance: 'व्यापार प्रकार प्रदर्शन',
        stockPerformance: 'स्टॉक प्रदर्शन',
        currentMarketTrends: 'वर्तमान बाजार रुझान',
        newsUpdate: 'समाचार अपडेट',
        orderTimeline: 'आदेश टाइमलाइन',
        esg:'शीर्ष ईएसजी कंपनियां',
        leaderboard:'लीडरबोर्ड',
        // add other translations as needed
      },
    },
  },
});

export default i18n;
