import React, {useState} from "react";
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Input/input-component-style.scss';

const DatePickerComponent = ({onChange, name}) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='input-group'>
            <label className='input-group__label'>Select Day And Time</label>
            <DatePicker className='input-group__input'
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    onChange({
                        target: {
                            name,
                            value: date
                        }
                    });
                }}
                minDate={new Date()}
                showDisabledMonthNavigation
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="d MMMM yyyy, HH:mm"
                name={name}
            />
        </div>
    )
};
export default DatePickerComponent;