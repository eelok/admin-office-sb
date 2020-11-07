import React from "react";
import {db} from '../../firebase';
import DatePickerComponent from "../datePicker/date-picker-component";
import InputComponent from "../Input/Input-component";
import './create-concert-style.scss'
import WithNav from "../../pages/with-nav/with-nav";

class CreateConcert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            startDate: new Date(),
            address: '',
        }
    }

    handleAddConcert = (event) => {
        event.preventDefault();
        db.collection('concerts').add(this.state)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(error => {
                alert(error.message)
            });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <WithNav>
                <div className='page-wrapper'>
                    <header className="create-concert-header">
                        <button onClick={() => {
                            this.props.history.push('/')
                        }} className='btn-small'>Back
                        </button>
                        <h2 className="main-title">Upcoming Concert</h2>
                    </header>
                    <form onSubmit={this.handleAddConcert} className='concert-input'>
                        <InputComponent
                            type={'text'}
                            label={'Title'}
                            name={'title'}
                            value={this.state.title}
                            id={'title'}
                            required={true}
                            onChange={this.handleChange}
                        />
                        <DatePickerComponent
                            onChange={this.handleChange}
                            name={'startDate'}
                        />
                        <InputComponent
                            type={'text'}
                            label={'Address'}
                            name={'address'}
                            value={this.state.address}
                            id={'address'}
                            required={true}
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            type={'text'}
                            label={'Description'}
                            name={'description'}
                            value={this.state.description}
                            id={'description'}
                            required={true}
                            onChange={this.handleChange}
                        />
                        <div className="button-group">
                            <button className='btn-big' type='submit'>Add Concert</button>
                        </div>
                    </form>
                </div>
            </WithNav>
        )
    }

}

export default CreateConcert;