import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CityWeather = () => {
  let params = useParams();

  const [weatherData, setWeatherData] = useState([]);

  const [temp, setTemp] = useState(null);
  const [tempMax, setTempMax] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempFeels, setTempFeels] = useState("");
  const [windSpeed, setWindSpeed] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    try {
      let response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName},${params.countryCode}&appid=6b41d2f6d99bc61d1df7964f2d8e7146
    `);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setTemp(convertTemp(data.main.temp));
        setWeatherDesc(data.weather[0].description);
        setWeatherIcon(data.weather[0].icon);
        setTempFeels(convertTemp(data.main.feels_like));
        setWindSpeed(data.wind.speed);
        setTempMax(convertTemp(data.main.temp_max));
        setTempMin(convertTemp(data.main.temp_min));

        // console.log("temp", temp);
      } else {
        console.log("something went wrong :(");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const convertTemp = (k) => {
    return Math.floor(((k - 273.15) * 9) / 5 + 32).toString();
  };

  // useEffect(() => {
  //   setTemp(weatherData.main.temp);
  // }, [weatherData]);
  return (
    <Container>
      <Container className="weather-card">
        <Row>
          <Col xs={12}>
            <div className="mb-3 d-flex flex-column align-items-start">
              <div>CURRENT WEATHER</div>
              <div>6:28 AM</div>
            </div>
          </Col>
          <Col xs={5} className="d-flex justify-content-start">
            <img
              src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
              alt="weather icon"
            />{" "}
            <div className="d-flex flex-column justify-content-between">
              <div className="d-flex justify-content-center align-items-end ">
                <div style={{ fontSize: "2rem" }}>
                  <strong>{temp} </strong>
                  <span style={{ fontSize: "1rem" }}>°C</span>
                </div>
              </div>
              <div>
                RealFeel® <strong>{tempFeels}</strong>°
              </div>
            </div>
          </Col>
          <Col xs={7} className="d-flex flex-column justify-content-center">
            <Row>
              <Col className=" d-flex justify-content-between">
                <div>Maximum Temperature</div> <div>{tempMax}</div>
              </Col>
            </Row>
            <hr style={{ margin: "4px" }} />
            <Row>
              <Col className=" d-flex justify-content-between">
                <div>Wind</div> <div>{windSpeed} km/h</div>
              </Col>
            </Row>
            <hr style={{ margin: "4px" }} />
            <Row>
              <Col className=" d-flex justify-content-between">
                <div>Mininum Temperature</div> <div>{tempMin}</div>
              </Col>
            </Row>
          </Col>
          <Col className="mt-3 d-flex justify-content-between">
            <div className="d-flex justify-content-start">{weatherDesc}</div>
            <div>MORE DETAILS</div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

// <Row>
//         {/* <Col xs={4}>{weatherIcon}</Col> */}
//         <Col xs={4}>
//           <Col>
//             <img
//               src={`https://openweathermap.org/img/wn/${weatherIcon}.png`}
//               alt="weather icon"
//             />
//           </Col>
//           <Col>{temp}°</Col>
//         </Col>
//         <Col xs={8}>{weatherDesc}</Col>
//       </Row>

export default CityWeather;
