import { Calendar, momentLocalizer } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from 'moment'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { fetchHolidays } from '../reduxFiles/action'
import './MyCalendar.css'
import Select from 'react-select'


const localizer = momentLocalizer(moment)

const MyCalendar = ({ events, fetchHolidays }) => {
    const [Selectcountry, setCountry] = useState('')
    const options = [
        { value: 'pk', label: 'Pakistan' },
        { value: 'us', label: 'United States' },
        { value: 'ae', label: 'United Arab Emirates' },
        { value: 'in', label: 'India' },
        { value: 'af', label: 'Afghanistan' },
    ]
    function change(e) {
        let country = e.value
        setCountry(e.value)
        fetchHolidays(country)
    }
    return <div className="App">
        <h1>Select Any Country From these 5</h1>
        <div className='divStyle'>
            <Select options={options}
                onChange={change}
                className='selectStyle' />
        </div>
        {events.length > 0 && <h1> Total No Of Holidays in - {Selectcountry} - are {events.length} in the year 2021</h1>}
        {events.length > 0 && <Calendar
            localizer={localizer}
            events={events}
            startAccessor='start'
            style={{ height: 500 }}
        />}
    </div>
}

const mapStateToProps = state => {
    console.log(state.myEvents)
    return {
        events: state.myEvents
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHolidays: (country) => dispatch(fetchHolidays(country))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyCalendar)

