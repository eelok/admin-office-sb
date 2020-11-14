import React from "react";
import {db} from '../../firebase.js';
import './all-concerts-style.scss'
import Moment from "react-moment";
import WithNav from "../with-nav/with-nav";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

class AllConcerts extends React.Component {
    constructor(props) {
        super(props);
        this.concertReference = null;

        this.state = {
            concerts: [],
        }
    }

    async componentDidMount() {
        this.concertReference = db.collection('concerts');
        this.concertReference.orderBy('startDate', 'desc').get().then((querySnapshot) => {
            let concerts = [];
            querySnapshot.forEach((doc) => {
                concerts.push({id: doc.id, ...doc.data()});
            });
            this.setState({concerts: concerts})
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }


    alertDialog = (id) => {
        confirmAlert({
            title: 'Удалить Это Мероприятие?',
            message: '',
            buttons: [
                {
                    label: 'да',
                    onClick: () => {
                        this.onDelete(id)
                    }
                },
                {
                    label: 'нет'
                }
            ]
        });
    };

    onDelete = (id) => {
        db.collection('concerts').doc(id).delete()
            .then(() => {
                let filteredConcerts = this.state.concerts.filter(item => item.id !== id);
                this.setState({concerts: filteredConcerts})
            });
    }

    onEdit = (id) => {
        this.props.history.push(`/concerts/${id}`)
    }

    onAddConcert = () => {
        this.props.history.push('/addconcert');
    }

    render() {
        const {concerts} = this.state;
        return (
            <WithNav>
                <div className='page-wrapper'>
                    <header className="concerts-header">
                        <h2 className='main-title'>Концерты:</h2>
                        <div className="btn-small add-concert" onClick={this.onAddConcert}>
                            Добавить
                        </div>
                    </header>
                    <section className="event">
                        {
                            concerts.map(item => (
                                <section key={item.id} className="event__container">

                                    <h3 className='event__title'  >{item.title}</h3>
                                    <p className='event__description'>{item.description}</p>
                                    <div className="event__dt">
                                        <Moment className="event__day-time"
                                               format="D MMMM yyyy, HH:mm">{item.startDate.toDate()}</Moment>
                                    </div>
                                    <p className='event__address'>{item.address}</p>
                                    <div className='event__control'>
                                    <button className="btn-small event__control-delete" onClick={() => this.alertDialog(item.id)}>
                                        Удалить
                                    </button>
                                    <button className="btn-small event__control-edit" onClick={() => this.onEdit(item.id)}>
                                        Изменить
                                    </button>
                                    </div>
                                </section>
                            ))
                        }
                    </section>
                </div>
            </WithNav>
        );
    }

}

export default AllConcerts;