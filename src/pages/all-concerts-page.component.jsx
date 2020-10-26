import React from "react";
import {db} from '../firebase.js';
import './all-concerts-style.scss'

class AllConcerts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            concerts: [],
        }
    }

    async componentDidMount() {
        let concertReference = db.collection('concerts');
        concertReference.get().then((querySnapshot) => {
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
                <header className="concerts-header">
                    <h2 className='main-title'>Concerts:</h2>
                </header>
                <section className="event">
                    {
                        concerts.map(item => (
                            <section key={item.id} className="event__container">
                                <h3 className='event__title'>{item.title}</h3>
                                <p className='event__description'>{item.description}</p>
                                {/*<div>{item.dayAndTime}</div>*/}
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