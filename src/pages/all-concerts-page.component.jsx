import React from "react";
import {db} from '../firebase.js';
import './all-concerts-style.scss'
import Moment from "react-moment";

class AllConcerts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            concerts: [],
        }
    }

    async componentDidMount() {
        let concertReference = db.collection('concerts');
        concertReference.orderBy('startDate', 'desc').get().then((querySnapshot) => {
            let concerts = [];
            querySnapshot.forEach((doc) => {
                concerts.push({id: doc.id, ...doc.data()});
            });
            this.setState({concerts: concerts})
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
    }

    render() {
        const {concerts} = this.state;
        return (
            <div className='page-wrapper'>
                <header className="page-header">
                    <h2 className='main-title'>Concerts:</h2>
                </header>
                <section className="event">
                    {
                        concerts.map(item => (
                            <section key={item.id} className="event__container">
                                <h3 className='event__title'>{item.title}</h3>
                                <p className='event__description'>{item.description}</p>
                                <div className="event__day-time"><Moment format="D MMMM yyyy, HH:mm">{item.startDate.toDate()}</Moment></div>
                                <h3 className='event__address'>{item.address}</h3>
                            </section>
                        ))
                    }
                </section>
            </div>
        );
    }

}

export default AllConcerts;