import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../Input/input-component-style.scss';

const DatePickerComponent = ({onChange, name}) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className='group'>
            <label className='group__label'>Select Day And Time</label>
            <DatePicker className='group__input'
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    onChange({
                        target: {
                            name,
                            value: date.toDateString()
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
                name={'date-picker'}
            />
        </div>
    )
};
export default DatePickerComponent;