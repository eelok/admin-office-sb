import React from "react";
import Moment from 'react-moment';
import {db} from '../../firebase';
import DatePickerComponent from "../datePicker/date-picker-component";
import InputComponent from "../Input/Input-component";
import './create-concert-style.scss'

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
            <div className='page-wrapper'>
                <header className="page-header">
                    <h2 className="main-title">Enter Upcoming Concert Details:</h2>
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
                    <header className="page-header padding-small">
                        <h2 className='main-header'>Preview (Please check the data)</h2>
                    </header>
                    <section className="news">
                        <section className="news__content">
                            <div className="news__title"><h3>{this.state.title}</h3></div>
                            <div className="news__description"><p>{this.state.description}</p></div>
                            <div className="news__date-time">
                                <Moment format="d MMMM yyyy, HH:mm">{this.state.startDate}</Moment>
                            </div>
                            <p className="news__address">{this.state.address}</p>
                        </section>
                    </section>
                    <div className="button-group">
                        <button className='btn' type='submit'>Add Concert</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateConcert;