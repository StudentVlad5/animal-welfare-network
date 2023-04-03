import { BsArrowUpCircleFill } from 'react-icons/bs';
import { ScrollBtn } from './ScrollToTop.styled';

const ScrollToTop = () => {
  const handleScrollToTop = () => {
    const start = document.querySelector('#header');
    return window.scrollTo({ top: start, behavior: 'smooth' });
  };

  return (
    <ScrollBtn type="button" aria-label="Arrow up" onClick={handleScrollToTop}>
      <BsArrowUpCircleFill size={30} />
    </ScrollBtn>
  );
};

// const ScrollBy = () => {
//   const { height: cardHeight } = document
//     .querySelector('main')
//     .firstElementChild.getBoundingClientRect();

//   return window.scrollBy({
//     top: cardHeight * 2,
//     behavior: 'smooth',
//   });
// };

export { ScrollToTop }; // ScrollBy
