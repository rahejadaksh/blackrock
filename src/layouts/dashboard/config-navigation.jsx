import { useTranslation } from 'react-i18next';
import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const useNavConfig = () => {
  const { t } = useTranslation();

  return [
    {
      title: t('dashboard'),
      path: '/',
      icon: icon('ic_analytics'),
    },
    {
      title: t('user'),
      path: '/user',
      icon: icon('ic_user'),
    },
    {
      title: t('learningCourses'),
      path: '/products',
      icon: icon('ic_cart'),
    },
    {
      title: t('blog'),
      path: '/blog',
      icon: icon('ic_blog'),
    },
    {
      title: t('login'),
      path: '/login',
      icon: icon('ic_lock'),
    },
    {
      title: t('notFound'),
      path: '/404',
      icon: icon('ic_disabled'),
    }
  ];
};

export default useNavConfig;
