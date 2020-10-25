import React from "react";
import {db} from '../../firebase';
import {useHistory} from "react-router-dom";
import DatePickerComponent from "../datePicker/date-picker-component";
import InputComponent from "../Input/Input-component";
import './create-concert-style.scss'
import './concert-preview-style.scss'

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

    handleCreateConcert = (event) => {
        // event.preventDefault();
        // let formData = new FormData(event.target)
        // let newConcert = Object.fromEntries(formData);
        // db.collection('concerts').add(newConcert)
        //     .then(() => {
        //         history.push('/news')
        //     })
        //     .catch(error => {
        //         alert(error.message)
        //     });
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className='wrapper'>
                <h1>enter upcoming concert details</h1>
                <form onSubmit={this.handleCreateConcert} className='concert-input'>
                    <div>
                        <InputComponent
                            type={'text'}
                            label={'Title'}
                            name={'title'}
                            value={this.state.title}
                            id={'title'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label>Select Day And Time</label>
                        <DatePickerComponent
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            name={'startDate'}
                        />

                    </div>
                    <div>
                        <InputComponent
                            type={'text'}
                            label={'Address'}
                            name={'address'}
                            value={this.state.address}
                            id={'address'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <InputComponent
                            type={'text'}
                            label={'Description'}
                            name={'description'}
                            value={this.state.description}
                            id={'description'}
                            required={true}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button type='submit'>Add Concert</button>
                </form>
                <form>
                    <div className="news-page">
                        <header className="news__header">
                            <h2 className='main-header'>Preview</h2>
                        </header>
                        <section className="news">
                            <section className="news__content">
                                <div className='news__row'>
                                    <div className="news__title"><h3>{this.state.title}</h3></div>
                                    <div className="news__description"><p>{this.state.description}</p></div>
                                </div>
                                <div className="news__details-box">
                                    {/*<div className="news__date-time">{this.state.startDate}</div>*/}
                                    <h4 className="news__address">{this.state.address}</h4>
                                </div>
                            </section>
                        </section>
                    </div>
                </form>
            </div>
        )
    }

}

export default CreateConcert;