import React, { useState } from 'react';
import './index.css';
import { Button } from '@material-ui/core'
import DatePicker from '../datepicker/index';
// import { DateRangePicker } from 'react-date-range';
export default function Index() {
    const [toggle, setToggle] = useState(true);
    return (
        <div className="Banner">
            {!toggle ? <DatePicker/> : "" }
            <div className="BannerSearch">
                <Button variant="outlined" className="BannerSearchButton" onClick={() => setToggle(!toggle)}>{toggle ? "Search Dates" : "Hide Dates"}</Button>
            </div>
            <div className="BannerInfo">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button variant="outlined">Explore nearby stays</Button>
            </div>
        </div>
    )
}
