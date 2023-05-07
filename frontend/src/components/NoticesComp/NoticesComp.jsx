import { NoticesSearch } from './NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from './NoticesCategoriesNav/NoticesCategoriesNav';
import { AddNoticeButton } from './AddNoticeButton/AddNoticeButton';
import { NoticesCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { WrapperNav } from './NoticesComp.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const NoticesComp = () => {
  const [page, setPages] = useState(1);
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('Find your favorite pet')}</Title>
      <NoticesSearch setPages={setPages} />
      <WrapperNav>
        <NoticesCategoriesNav />
        <AddNoticeButton />
      </WrapperNav>
      <NoticesCategoriesList page={page} setPages={setPages} />
    </>
  );
};
