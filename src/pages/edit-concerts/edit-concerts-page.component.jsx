// import React, {useState, useEffect} from 'react'
import InputComponent from "../../components/Input/Input-component";
import {db} from '../../firebase';
import React from 'react';

class EditConcert extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            // description: '',
            // startDate: new Date(),
            // address: '',
        }

    }

    componentDidMount() {
        let documentReference = db.collection('concerts').doc(this.state.id);
        let documentPromise = documentReference.get();
        documentPromise.then((documentSnapshot) => {
            if (documentSnapshot.exists) {
                console.log(documentSnapshot.data());
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });


        // documentReference.get().then(function(doc){
        //     if (documentReference.exists) {
        //         console.log("Document data:" + documentReference.data())
        //     } else {
        //         // doc.data() will be undefined in this case
        //         console.log("No such document!");
        //     }
        // }).catch(function(error) {
        //     console.log("Error getting document:", error);
        // });



    }


    render() {
        const {title} = this.state;

        return (
            <div>
                <InputComponent
                    type={'text'}
                    label={'Title'}
                    defaultValue={title}
                    id={'title'}
                />

            </div>
        )
    }


}

export default EditConcert;