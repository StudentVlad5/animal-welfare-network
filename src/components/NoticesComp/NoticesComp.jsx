import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { WrapperNav } from './NoticesComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

export const NoticesComp = () => {
  return (
    <>
      <Title>Find your favorite pet</Title>
      <NoticesSearch />
      <WrapperNav>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </WrapperNav>
      <NoticesCategoriesList />
    </>
  );
};
