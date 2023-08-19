import React from "react";

class ForecastCard extends React.Component{
    render(){
        const {weekDay, day, month, forecastIcon,forecastText,maxTemp} = this.props.card;
        const currentDate = 1;


        return(
            <div className= {currentDate === day ? (
                "forecast__card card--selected"
            ):(
                "forecast__card"
            )}>
                <p className="card__data">{weekDay} <br/> {day} {month}</p>
                <div className="card__icon">
                    <img src={forecastIcon} alt={forecastText} />
                </div>
                <span className="card__temp">{maxTemp}</span>
            </div>
        )
    }
}

export default ForecastCard;