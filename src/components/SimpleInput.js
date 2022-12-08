import {  useEffect, useState } from 'react';

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid,setFormIsValid] = useState(false)
  const [emailIsTouched , setEmailIsTouched] = useState(false)
  const [enteredEmail , setEnteredEmail] = useState('');

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = enteredNameIsValid && enteredNameTouched;

  const emailFocused = !emailIsTouched
  ? 'form-control invalid'
  : 'form-control';

  const emailIsValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !emailIsValid;


  useEffect( () => {
    if(enteredNameIsValid){
      setFormIsValid(true);
    }
    else{
      setFormIsValid(false)
    }
  },[enteredNameIsValid])

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    if(event.target.value === '')
    setEnteredNameTouched(true)
  }

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
    if(event.target.value.length > 1){
      setEnteredEmail(true)
    }
    else{
      setEnteredEmail(false)
    }
  };
  const onEmailBlurHandler = (event) => {
    if(event.target.value === ''){
      setEmailIsTouched(true)
    }
    
  }

  
  

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
     
      return;
    }



    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    setEnteredName('');
  };

  

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

    const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  

    

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
        
          type='text'
          id='name'
          onChange={nameInputChangeHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className='error-text'>Name must not be empty.</p>
        )}
        </div>
        <div className={emailInputClasses}>
       <label>Your Email</label>
         <input 
         onChange={emailInputChangeHandler}
         onBlur={onEmailBlurHandler}
         type="email"/>
         {emailInputIsInvalid && <p className='error-text'>Email Must Contain @</p>}
         {emailIsTouched && <p className='error-text'>Email Must Not be Empty</p>}
         </div>
      
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;