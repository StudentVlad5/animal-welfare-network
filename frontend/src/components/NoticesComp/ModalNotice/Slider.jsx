// export const SliderData = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
//   },
// ];

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { modalComponent } from 'redux/modal/selectors';

export const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [data, setData] = useState([]);
  const length = slides.length;
  const modal = useSelector(modalComponent);
  const { BASE_URL } = window.global;
  let itemForFetch = `${BASE_URL}/notices/byid/${modal.id}`;

  useEffect(() => {
    async function fetchNoticesList() {
      await fetch(itemForFetch)
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error(`Can't find anything`));
        })
        .then(value => setData(value))
        .catch(error => {
          setData(false);
        });
    }
    if (modal.id !== '') {
      fetchNoticesList();
    }
  }, [itemForFetch, modal.id]);

  const SliderData = [
    {
      image: img,
    },
    {
      image: imageUrl_1,
    },
    {
      image: imageUrl_2,
    },
  ];

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <button type="button" className="left-arrow" onClick={prevSlide}>
        left
      </button>
      <button type="button" className="right-arrow" onClick={nextSlide}>
        right
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && <img src={slide.image} className="image" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
