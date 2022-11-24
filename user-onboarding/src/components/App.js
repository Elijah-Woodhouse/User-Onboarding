import React, { useState, useEffect } from 'react'
import Form from './Form';
import User from './User';
import axios from "axios";
import schema from "../validation/formSchema";
import * as yup from "yup";
import '../App.css';




//disable the submit button and enable the submit button?

const initialFormValues = {
  firstName: '',
  lastName: '',
  password: '',
  email: '',
  role: '',
  happy: false,
  educated: false,
  mentallystable: false,
  id: ''
}
const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  role: '',
}
const initialFriends = [];
const initialDisabled = true;


export default function App() {

  const [cards, setCards] = useState(initialFriends)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean
  const handleError = err => {debugger};

  const resetForm = () => {
    setFormValues(initialFormValues);
  }

  const postNewCard = newCard => {
    axios.post("https://reqres.in/api/users", newCard)
    .then( res => {
      console.log(res.data);
      setCards([ res.data, ...cards ]);
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const putNewCard = ({ card, id }) => {
    axios.put(`https://reqres.in/api/users/${id}`)
    .then(res => {
      setCards(cards.map(card => {
        return card.id === id ? res.data : card;
        console.log(card);
      }))
     console.log(id);
    })
    .catch(handleError)
    .finally(resetForm)
  }

  const handleChecked = () => {
    if (initialFormValues.educated && initialFormValues.happy === true) {
      initialFormValues.mentallystable = false;
    }
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newCard = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      password: formValues.password.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      hobbies: ["happy", "educated", "mentallystable"].filter(hobby => !!formValues[hobby])
    }
    postNewCard(newCard);
    console.log(newCard);
  }

  const editUser = (id) => {
    const user = cards.find(card => card.id === id)
    setFormValues({...user })
  }


  // useEffect(() => {
  //   //getFriends();
  //   postNewCard();
  // }, [])


  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Form Practice</h1></header>

      <Form
        cardlist={cards}
        values={formValues}
        setValues={setFormValues}
        change={onChange}
        submitHandlers={{ formSubmit, putNewCard }}
        disabled={disabled}
        errors={formErrors}
        checkChange={handleChecked}
        rest={resetForm}
      />

      {
        cards.map((card, index) => {
          return (
            <>
            <User key={card.id} details={card} />
            <button data-cy={`editBtn${index}`} onClick={() => editUser(card.id)}>Edit User</button>
            </>
          )
        })
      }
    </div>
  )
}
