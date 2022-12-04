import { Link } from "react-router-dom";

const SearchedCity = (props) => {
  return (
    <Link to={`/${props.countryName.toString()}/${props.cityName.toString()}`}>
      <div>
        {props.cityName}, {props.stateName}, {props.countryName}
      </div>
    </Link>
  );
};

export default SearchedCity;
