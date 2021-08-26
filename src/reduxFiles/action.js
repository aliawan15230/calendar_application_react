import {
  FETCH_HOLIDAYS
} from './actionTypes'

export const fetchHolidays = (country) => {
  return (dispatch) => {
    let myevent = []
    const Calendarific = require('calendarific');

    // Initlize with an API key
    const clapi = new Calendarific("2686f09663f3d12987528a0f9fc0dba63efeb88c");

    const parameters = {
      country,
      year: 2021,
    };

    clapi.holidays(parameters, function (data) {
      let myevents = data.response.holidays

      // console.log(myevents)

      for (let i = 0; i < myevents.length; i++) {
        let obj = {
          'title': myevents[i].name,
          'start': new Date(myevents[i].date.iso),
          'end': new Date(myevents[i].date.iso)
        }
        myevent.push(obj)
      }

      dispatch(fetchHolidaySuccess(myevent))
    });
  }
}



export const fetchHolidaySuccess = myevent => {
  return {
    type: FETCH_HOLIDAYS,
    payload: myevent
  }
}
