import {User} from './types';

/**
 * Class to represet an Travel API
 */
export default class TravelServiceApi {
  /**
   * Get User
   * @return {User} user
   */
  static getUser() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          name: 'name',
          email: 'mail@example.com',
        });
      }, 3000);
    });
  }

  /**
   * Get Departure
   * @param {User} user user
   * @return {Depature} departure
   */
  static getDeparture(user: User) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userID: user.email,
          flightID: 'FL123',
          date: Date.now(),
        });
      }, 2500);
    });
  }

  /**
   * Get Departure
   * @param {string} flightID user
   * @return {Depature} departure
   */
  static getFlight(flightID: string) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          id: flightID,
          pilot: 'Pilot',
          plane: {
            make: 'Boeing 767',
            model: '300',
          },
          state: 'onTime',
        });
      }, 4500);
    });
  }

  /**
   * Get Forescast
   * @param {Date} date date
   * @return {Forecast} forecast
   */
  static getForecast(date: Date) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          date: date,
          forecast: 'rain',
        });
      }, 2000);
    });
  }
}
