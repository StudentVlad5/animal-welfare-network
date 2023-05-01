import { useAuth } from 'hooks/useAuth';
import { useSearchParams } from 'react-router-dom';
import { BtnFilterNotices } from '../FilterNotices/BtnFilterNotices/BtnFilterNotices';

import {
  BtnCategory,
  ContainerCategoryBtn,
  StyledLi,
} from './NoticesCategoriesNav.styled';

export const NoticesCategoriesNav = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  searchParams.set('perPage', 12);
  searchParams.set('page', 1);

  const navItemsPublick = [
    {
      href: `/notices/needs-care?${searchParams}`,
      text: 'needs-care',
    },
    {
      href: `/notices/for-free?${searchParams}`,
      text: 'for-free',
    },
    { href: `/notices/sell?${searchParams}`, text: 'sell' },
  ];
  const navItemsPrivate = [
    {
      href: `/notices/favorite?${searchParams}`,
      text: 'favorite ads',
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
            <BtnCategory to={href}>{text}</BtnCategory>
          </StyledLi>
        ))}
        {isLoggedIn && (
          <>
            {navItemsPrivate.map(({ href, text }) => (
              <StyledLi key={href}>
                <BtnCategory to={href}>{text}</BtnCategory>
              </StyledLi>
            ))}
          </>
        )}
      </ContainerCategoryBtn>
      <BtnFilterNotices />
    </>
  );
};
