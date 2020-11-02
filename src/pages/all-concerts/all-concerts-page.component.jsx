import React from "react";
import {db} from '../../firebase.js';
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

    onDelete = (id) => {
        if (!window.confirm('are sure you want to delete')) {
            return;
        }
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
            <div className='page-wrapper'>
                <header className="concerts-header">
                    <h2 className='main-title'>Concerts:</h2>
                    <div className="add-concert">
                        {/*<AddIcon onClick={this.onAddConcert}/>*/}
                        &#43;
                    </div>
                </header>
                <section className="event">
                    {
                        concerts.map(item => (
                            <section key={item.id} className="event__container">

                                <h3 className='event__title' onClick={() => this.onEdit(item.id)} >{item.title}</h3>
                                <p className='event__description' onClick={() => this.onEdit(item.id)}>{item.description}</p>
                                <div className="event__dt" onClick={() => this.onEdit(item.id)}><Moment className="event__day-time"
                                                                   format="D MMMM yyyy, HH:mm">{item.startDate.toDate()}</Moment>
                                </div>
                                <p className='event__address' onClick={() => this.onEdit(item.id)}>{item.address}</p>
                                <button onClick={() => this.onDelete(item.id)}
                                        className="button-delete">&times;</button>
                                {/*<button onClick={() => this.onEdit(item.id)} className="button-edit">></button>*/}
                                {/*</div>*/}
                            </section>
                        ))
                    }
                </section>
            </div>
        );
    }

}

export default AllConcerts;