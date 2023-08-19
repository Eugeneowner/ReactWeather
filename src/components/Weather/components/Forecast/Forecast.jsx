import React from "react";
import ForecastCard from "./ForecastCard.jsx";
import './Forecast.scss'
class Forecast extends React.Component{
    render(){
        const {data} = this.props;
        const forecastCards = data.map((card, index) => <ForecastCard
          card = {card}
          key = {index}
        />)
        return(
            <div className="forecast">
                {forecastCards}
            </div>
        )
    }
}
export default Forecast;