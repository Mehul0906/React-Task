function Pagination({ page, setPage, totalPages }) {
  const prev = (
    <button
      data-testid="prev-page"
      disabled={page === 1}
      onClick={() => {
        setPage(page - 1);
      }}
    >
      Prev
    </button>
  );

  const next = (
    <button
      data-testid="next-page"
      disabled={page === totalPages}
      onClick={() => {  
        setPage(page + 1);
      }}
    >
      Next
    </button>
  );

  return (
    <div data-testid="page-container" style={{textAlign:"center"}}>
      <div>
        {prev}
        <button data-testid="current-page">{page}</button>
        {next}
      </div>
      <div>
        Total Pages: <b data-testid="total-pages">{page}</b>
      </div>
    </div>
  );
}

export default Pagination;
