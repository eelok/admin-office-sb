import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({selected, onChange, name}) => {
    // const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker
                selected={selected}
                // onChange={date => setStartDate(date)}
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