import React from 'react';

import './Card.scss';

interface CardProps {
  title: string;
  user: any;
  data: any;
}

const Card: React.FC<CardProps> = ({title, user, data = {}}: CardProps) => {
  const {departure, flight, forecast} = data;

  /**
   *
   * @param {Date} date date
   * @return {string} date
   */
  function getDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(date);
  }
  const displayUserName = () => {
    return !!user ? user.email : null;
  };

  const displayFlight = () => {
    return !!flight ? flight.plane.make : null;
  };

  const displayDeparture = () => {
    return !!departure ? getDate(departure.date) : null;
  };

  const displayForecast = () => {
    return !!forecast ? forecast.forecast : null;
  };

  return (
    <div className="card">
      <div className="card-heading">
        <div className="card-title">{title}</div>
      </div>
      <div className="card-body">
        <div className="card-user-name">
          <div>Here is your itinerary:</div>
          👥 {displayUserName() || <span className="loading"></span>}
        </div>
        <div className="data">
          <span>Your Departure:</span>{' '}
          {displayDeparture() || <span className="loading"></span>}
        </div>
        <div className="data">
          <strong>Your Flight:</strong>{' '}
          {displayFlight() || <span className="loading"></span>}
        </div>
        <div className="data">
          <strong>Weather Forecast:</strong>{' '}
          {displayForecast() || <span className="loading"></span>}
        </div>
      </div>
    </div>
  );
};

export default Card;
