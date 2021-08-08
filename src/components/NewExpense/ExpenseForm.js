import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    //instead of above 3 separate states, you can use 1 as an object capturing all 3 variables
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    })

    // below event parameter is a default browser object
    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        //the spread operator (3 leading dots) is used below
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: new Date(event.target.value) };
        });
    };

    const submitHandler = (event) => {
        // when submitted, forms automatically send a request to the server and reload the page. below prevents that.
        event.preventDefault();
        props.onSaveUserInput(userInput);
        setUserInput({
            title: '',
            amount: '',
            date: ''
        })
    }
    // in below form input element, the value assignmnent is known as two-way binding
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type='text'
                    value={userInput.title}
                    onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type='number'
                    min="0.01"
                    step="0.01"
                    value={userInput.amount}
                    onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;