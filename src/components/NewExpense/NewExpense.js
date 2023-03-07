// below import is not necessary but added as a reminder that JSX (under the hood) use the React library
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

/* The ExpenseForm component is a child of the NewExpense component. The child can communicate up to the parent by using the function saveUserInputHandler assigned to the onSaveUserInput prop. */
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveUserInputHandler = (enteredUserInput) => {
        const userInput = {
            ...enteredUserInput,
            id: Math.random().toString()
        };
        props.onAddExpense(userInput)
        setIsEditing = (false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveUserInput={saveUserInputHandler} onCancel={stopEditingHandler} />}
    </div>
};


export default NewExpense;