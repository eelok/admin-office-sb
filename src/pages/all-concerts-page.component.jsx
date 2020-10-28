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

    onDelete =() => {
        console.log("delete was called")
        let concertReference = db.collection('concerts').doc(this.state.doc.id).delete();
        // let data = concertReference.get();
        // console.log(data)
        // concertReference.doc(concert.id).delete()

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
                                <div className='event__info'>
                                    <h3 className='event__title'>{item.title}</h3>
                                    <p className='event__description'>{item.description}</p>
                                    <div className="event__dt"><Moment className="event__day-time"
                                            format="D MMMM yyyy, HH:mm">{item.startDate.toDate()}</Moment></div>
                                    <p className='event__address'>{item.address}</p>
                                </div>
                                <div className='event__control'>
                                    <button onClick={this.onDelete} className="button-delete">&times;</button>
                                    <button className="button-edit">></button>
                                </div>
                            </section>
                        ))
                    }
                </section>
            </div>
        );
    }

}

export default AllConcerts;