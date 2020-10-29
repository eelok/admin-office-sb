import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Input/input-component-style.scss';

const DatePickerComponent = ({onChange, name, value}) => {
    console.log('date value', value);
    let startDate = value;
    return (
        <div className='input-group'>
            <label className='input-group__label'>Select Day And Time</label>
            <DatePicker className='input-group__input'
                selected={startDate}
                onChange={(date) => {
                    startDate = date;
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