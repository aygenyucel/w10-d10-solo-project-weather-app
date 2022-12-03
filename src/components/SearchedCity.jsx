import { Link } from "react-router-dom";

const SearchedCity = (props) => {
  return (
    <Link to={`/${props.countryName}/${props.cityName}`}>
      <div>
        {props.cityName}, {props.stateName}, {props.countryName}
      </div>
    </Link>
  );
};

export default SearchedCity;
