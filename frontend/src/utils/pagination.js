import ReactPaginate from 'react-paginate';

export function Pagination({ totalPage, changePage, page }) {
  const handlePageClick = event => {
    changePage(event.selected + 1);
  };
  const upToTop = event => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      forcePage={page - 1}
      // initialPage={page - 1}
      previousLabel="<"
      renderOnZeroPageCount={null}
      containerClassName="paginate__container"
      pageClassName="paginate__page"
      pageLinkClassName="paginate__link"
      previousClassName="paginate__page--prev"
      nextClassName="paginate__page--next"
      previousLinkClassName="paginate__link--prev"
      nextLinkClassName="paginate__link--next"
      disabledClassName="paginate__page--disabled"
      disabledLinkClassName="paginate__link--disabled"
      activeClassName="paginate__page--active"
      activeLinkClassName="paginate__link--active"
      breakClassName="paginate__page--break"
      breakLinkClassName="paginate__link--break"
      onClick={upToTop}
    />
  );
}
