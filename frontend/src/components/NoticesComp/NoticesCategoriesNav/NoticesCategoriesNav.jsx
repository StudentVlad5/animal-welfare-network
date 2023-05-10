import { useAuth } from 'hooks/useAuth';
import { useSearchParams } from 'react-router-dom';
import { BtnFilterNotices } from '../FilterNotices/BtnFilterNotices/BtnFilterNotices';

import {
  BtnCategory,
  ContainerCategoryBtn,
  StyledLi,
} from './NoticesCategoriesNav.styled';
import { useTranslation } from 'react-i18next';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);
  const { t } = useTranslation();

  const navItemsPublick = [
    {
      href: `/notices/needs-care?${searchParams}`,
      text: t('needs-care'),
    },
    {
      href: `/notices/for-free?${searchParams}`,
      text: t('for-free'),
    },
    { href: `/notices/sell?${searchParams}`, text: t('sell') },
  ];
  const navItemsPrivate = [
    {
      href: `/notices/favorite?${searchParams}`,
      text: t('favorite ads'),
    },
    { href: `/notices/own?${searchParams}`, text: 'my ads' },
  ];

  // useEffect(() => {
  //   const item = ref.current;
  //   item &&
  //     item.addEventListener('click', () => {
  //       dispatch(addPage(1));
  //     });
  // }, [dispatch]);

  return (
    <>
      <ContainerCategoryBtn>
        {navItemsPublick.map(({ href, text }) => (
          <StyledLi key={href}>
            <BtnCategory to={href}>{t(text)}</BtnCategory>
          </StyledLi>
        ))}
        {isLoggedIn && (
          <>
            {navItemsPrivate.map(({ href, text }) => (
              <StyledLi key={href}>
                <BtnCategory to={href}>{t(text)}</BtnCategory>
              </StyledLi>
            ))}
          </>
        )}
      </ContainerCategoryBtn>
      <BtnFilterNotices />
    </>
  );
};
