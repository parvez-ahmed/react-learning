import React, { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import './index.css';
import { Button } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
export default function Index() {
    const [state, setState] = useState([
        {
            startDate: (new Date()),
            endDate: addDays(new Date(), 1),
            key: 'selection'
        }
    ]);
    function handleSelect(ranges) {
        // setStartDate(ranges.selection.startDate);
        // setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="DatePicker">
            <DateRangePicker
                onChange={item => setState([item.selection])}
                // showSelectionPreview={true}
                // moveRangeOnFirstSelection={false}
                // months={2}
                ranges={state}
                // direction="horizontal"
            />
            <div className="NumberOfGuests">
                <h2>Number of guests</h2>
                <PeopleIcon />
            </div>
            <div className="PeopleSearchInput">
                <input type="number" min="0" defaultValue="2" />
                <Button variant="outlined" >Search Airbnb</Button>
            </div>
        </div>
    )
}
