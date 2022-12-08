import { useState } from "react";
const PracticeForm = () => {

    const [enteredName,setEnteredName] = useState('');

    const valueChangeHandler = event =>{
        setEnteredName(event.target.value);
    }

    const submitHandler = (event) => {
       
        console.log(enteredName)
    }

    return (
        <>
        <form>
            <div className="form-control">
            <h2>{enteredName}</h2>

            <input onChange={valueChangeHandler} type='text' id="practice"/>

            </div>
            <div className="form-actions">

            <button onClick={submitHandler}>Submit</button>

            </div>
            

        </form>
        
        </>
    )

}
export default PracticeForm;