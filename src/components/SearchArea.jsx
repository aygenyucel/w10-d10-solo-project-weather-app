import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import SearchedCity from "./SearchedCity";

function SearchArea() {
  const [search, setSearch] = useState("");
  const [citiesData, setCitiesData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=6b41d2f6d99bc61d1df7964f2d8e7146`
      );

      if (response.ok) {
        console.log("response:", response);
        const data = await response.json();
        setCitiesData(data);
        console.log("citiesData:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="city name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </Form>
      <div>
        <div>
          {citiesData.map((city) => (
            <SearchedCity
              cityName={city.name}
              stateName={city.state}
              countryName={city.country}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default SearchArea;
