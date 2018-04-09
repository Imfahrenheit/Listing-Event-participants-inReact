import React, { Component } from 'react';
import InputList from './Inputlist/InputList';
import swal from 'sweetalert2'
import Participants from './Participants/Participants'
import styles from './InputContainer.css';
import Modal from './Participants/Modal/Modal';
import EditInput from './Participants/Modal/EditInput/EditInput'
import { participantsList } from './Participants/ListOfParticipants/ListOfParticipants'


// this is the Component which contains all the states used in this app

class InputFields extends Component {



    state = {
        persons: participantsList,
        sortedPerson: false,
        person: {
            email: '',
            name: '',
            phone: '',

        },
        personOnEdit: {
            email: '',
            name: '',
            phone: '',

        },
        editable: false,
        editId: 200

    }

    
    


    onChangeHandler = (e) => {
        e.preventDefault();

        let person;
        console.log(e.target)
        person = this.state.person
        person[e.target.name] = e.target.value

        this.setState({ person: { ...person } })
        console.log(this.state.sortedPerson)
    }




    editInputHandler = (e) => {

        let person

        person = this.state.personOnEdit;
        person[e.target.name] = e.target.value
        this.setState({ personOnEdit: { ...person } })
    }

    addParticipant = (e) => {
        e.preventDefault();
        let regex = /^[0-9]+$/;
        let letter = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/
        let participants = [...this.state.persons];
        
        const person = { ...this.state.person }
        if (person.name === ''
            || !person.name.match(letter)
            || person.email === '' ||
            person.phone === '' ||
            !person.phone.match(regex)
            || person.email.indexOf("@") === -1) {
            swal({
                title: 'Please fill all the fields with valid information!',
                type: 'warning'

            })
            this.setState(
                {
                    persons: participants,
                    person: { name: '', email: '', phone: '' }
                })

            return false;
        }
        else {

            

            // Add item to array
            participants.unshift(person);
           

            this.setState(
                {
                    persons: participants,
                    person: { name: '', email: '', phone: '' }
                })}}



    deletHandler = (e) => {


        let participants = [...this.state.persons];
        const userId = e.target.id
        participants.splice(userId, 1)


        this.setState({ persons: participants })

    }

    displayEdit = (e) => {
        let personOnEdit = this.state.personOnEdit
        let participants = [...this.state.persons]
        let editable = this.state.editable;
        let editId = e.target.id
        personOnEdit.name = participants[editId].name
        personOnEdit.email = participants[editId].email
        personOnEdit.phone = participants[editId].phone

        this.setState({
            editId: editId,
            personOnedit: personOnEdit,
            editable: !editable
        })
        console.log(this.state.personOnEdit)
    }

    updateHandler = (e) => {
        let regex = /^[0-9]+$/;
        let letter = /^\b(?!.*\.{2})[a-zA-Z.]+(?:\s[a-zA-Z.]+)\b$/
        let personOnEdit = this.state.personOnEdit
        if (personOnEdit.name === '' ||
            !personOnEdit.name.match(letter) ||
            personOnEdit.email.indexOf("@") === -1
            || personOnEdit.email === '' ||
            !personOnEdit.phone.match(regex)
            || personOnEdit.phone === '') {
            swal({
                title: 'Please fill all the fields!',
                type: 'warning'

            })
            return false;
        } else {
            let editId = this.state.editId
            let participants = this.state.persons;

            participants[editId].name = personOnEdit.name
            participants[editId].email = personOnEdit.email
            participants[editId].phone = personOnEdit.phone;


            this.setState(
                {
                    persons: participants,
                    personOnEdit: {
                        email: '',
                        name: '',
                        phone: ''
                    },
                    editable: false,
                    editId: 200
                })
        }
    }

    hideModal = () => {
        let participants = this.state.persons;
        this.setState(
            {
                persons: participants,
                personOnEdit: {
                    email: '',
                    name: '',
                    phone: ''
                },
                editable: false,
                editId: 200
            })

    }
    sortPersons = () => {

        let sorted = this.state.sortedPerson
        let participants = this.state.persons
        if (!sorted) {
            participants = participants.sort(function (a, b) {
                let p = a['name'].toLowerCase()
                let q = b['name'].toLowerCase()
                return ((p > q) ? -1 : ((p < q) ? 1 : 0))
            })
        } else {
            participants = participants.sort(function (a, b) {
                let p = a['name'].toLowerCase()
                let q = b['name'].toLowerCase()
                return ((p < q) ? -1 : ((p > q) ? 1 : 0))
            })
        }


        this.setState({
            users: participants,
            sortedPerson: !sorted
        })
    }



    render() {

        let persons = [...this.state.persons]
        let form = (
            <div >

                <InputList
                    change={(evt) => this.onChangeHandler(evt)}
                    personsSort={this.sortPersons}
                    clicked={this.addParticipant}
                    values={this.state.person} />

            </div>
        )

        return (
            <React.Fragment>

                <div className={styles.Form}>
                    <div>  <h1> List of partcipants</h1> </div>
                    <hr />

                    {form}
                </div>

                {

                    persons.map(

                        (el, i) => {

                            return (
                                

                                    <Participants
                                        key={i}
                                        name={el.name}
                                        email={el.email}
                                        phone={el.phone}
                                        i={i}

                                        edit={this.displayEdit}
                                        clicked={(e) => { this.deletHandler(e) }}>


                                    </Participants>


                               




                            )
                        })}

                <Modal show={this.state.editable}
                    clicked={this.hideModal}>
                    <EditInput
                        editData={this.editable}
                        inputValue={this.state.personOnEdit}

                        change={(e) => this.editInputHandler(e)}
                        update={(e) => this.updateHandler(e)}



                    />
                </Modal>


            </React.Fragment>
        )
    }
}
export default InputFields;