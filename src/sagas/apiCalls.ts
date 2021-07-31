import TravelServiceApi from '../api/api';
import {User} from '../api/types';

export const loadUser = () => {
  console.log('Getting User..');
  return TravelServiceApi.getUser().then(response => response);
};

export const loadDeparture = (user: User) => {
  console.log('Getting Departure..');
  return TravelServiceApi.getDeparture(user).then(response => response);
};

export const loadFlight = (flightID: string) => {
  console.log('Getting Flight..');
  return TravelServiceApi.getFlight(flightID).then(response => response);
};

export const loadForecast = (date: Date) => {
  console.log('Getting Forecast..');
  return TravelServiceApi.getForecast(date).then(response => response);
};
