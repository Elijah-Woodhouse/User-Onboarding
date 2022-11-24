import React from 'react'


export default function Form(props) {
  const {
    values,
    setValues,
    submitHandlers: {putNewCard, formSubmit },
    change,
    disabled,
    errors,
    cardlist
  } = props

  
  const onSubmit = evt => {
    evt.preventDefault()
    cardlist.id
      ? putNewCard(cardlist)
      : formSubmit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse);
  }


  return (
    <div className="container">
    <form className="form container" onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Spill The Tea</h2>

        <button id="submitBtn" disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.firstName}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.lastName}</div>
          <div>{errors.password}</div>
          <div>{errors.lastName}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>


        <label>First Name:&nbsp;
          <input
            value={values.firstName}
            onChange={onChange}
            name='firstName'
            type='text'
          />
        </label>

        <label>Last Name:&nbsp;
          <input
            value={values.lastName}
            onChange={onChange}
            name='lastName'
            type='text'
          />
        </label>

        <label>Password:&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>

        <label>Email:
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>


        <label>Role:
          <select
            onChange={onChange}
            value={values.role}
            name='role'
            id="roleSelect"
          >
            <option value=''>- Select an option -</option>
            <option value='Bears'>Bears</option>
            <option value='Beats'>Beats</option>
            <option value='BattleStar Galactica'>BattleStar Galactica</option>
            <option value='Apples'>Apples</option>
            <option value='Bananas'>Banananarammma</option>
          </select>
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Pick 2</h4>
    
        <label>Good Looking
          <input
              type="checkbox"
              name="happy"
              checked={values.happy}
              onChange={onChange}
            />
        </label>

        <label>Educated
          <input
              type="checkbox"
              name="educated"
              checked={values.educated}
              onChange={onChange}
            />
        </label>

        <label>Mentally Stable
          <input
              type="checkbox"
              name="mentallystable"
              checked={values.mentallystable}
              onChange={onChange}
            />
        </label>
      </div>
    </form>
    </div>
  )
}
