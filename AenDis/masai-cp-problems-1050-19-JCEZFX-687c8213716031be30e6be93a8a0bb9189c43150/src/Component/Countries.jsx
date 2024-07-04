import { useEffect, useState } from "react";
import CountriesCard from "./CountriesCard";
import Pagination from "./Pagination";

function Countries() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");

  const getData = () => {
    setLoading(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${page}&limit=10`)
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page, order]);

  const handleOrderChange = (newOrder) => {
    setOrder(newOrder);
    setPage(1);
  };

  return (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        <div>
          <button data-testid="sort-asc" onClick={() => handleOrderChange("asc")}>Ascending</button>
          <button data-testid="sort-desc" onClick={() => handleOrderChange("desc")}>Descending</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((el) => (
            <CountriesCard
              key={el.id}
              id={el.id}
              country={el.country}
              population={el.population}
            />
          ))
        )}
      </div>
      <div>
        <Pagination
          page={page}
          setPage={setPage}
          pagi={data.length}
        />
      </div>
    </div>
  );
}

export default Countries;
