import InputComponent from "../../components/Input/Input-component";
import {db} from '../../firebase';
import React from 'react';
import DatePickerComponent from "../../components/datePicker/date-picker-component";
import {firestore} from 'firebase';
import './edit-page-style.scss';
import WithNav from "../with-nav/with-nav";

class EditConcert extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            address: '',
            startDate: firestore.Timestamp.now()
        };

    }

    componentDidMount() {
        let documentReference = db.collection('concerts').doc(this.props.match.params.id);
        let documentPromise = documentReference.get();
        documentPromise.then((documentSnapshot) => {
            if (documentSnapshot.exists) {
                this.setState(documentSnapshot.data()); //пришло с сервера
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    handleChange = (event) => {
        let v = event.target.value;
        if (event.target.name === 'startDate') {
            v = firestore.Timestamp.fromDate(v);
        }
        this.setState({
            [event.target.name]: v
        })
    }

    handleSave = (event) => {
        event.preventDefault()
        db.collection('concerts').doc(this.props.match.params.id).set(this.state)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(error => {
                alert(error.message);
            });

    }

    render() {
        const {title, description, address, startDate} = this.state;

        return (
            <WithNav>
                <div className='page-wrapper'>
                    <div className='edit-header'>
                        <button onClick={() => {
                            this.props.history.push('/')
                        }} className='btn-small'>Назад
                        </button>
                    </div>
                    <form onSubmit={this.handleSave} className='content-box'>
                        <InputComponent
                            type={'text'}
                            label={'Название'}
                            name={'title'}
                            value={title}
                            id={'title'}
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            type={'text'}
                            label={'Описание'}
                            name={'description'}
                            value={description}
                            id={'description'}
                            onChange={this.handleChange}
                        />
                        <DatePickerComponent
                            label={'День и Время'}
                            name={'startDate'}
                            value={startDate.toDate()}
                            onChange={this.handleChange}
                        />
                        <InputComponent
                            type={'text'}
                            label={'Адрес'}
                            name={'address'}
                            value={address}
                            id={'address'}
                            onChange={this.handleChange}
                        />
                        <div className='button-box'>
                            <button className='btn-big' type='submit'>Сохранить</button>
                        </div>
                    </form>
                </div>
            </WithNav>
        )
    }


}

export default EditConcert;