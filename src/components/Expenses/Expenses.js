import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import React, { useState } from 'react';

function Expenses(props) {

    //forward the picked year to this Expenses component and store it in a state
    const [yearSelected, setYearSelected] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setYearSelected(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === yearSelected;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={yearSelected}
                    onChangeFilter={filterChangeHandler}
                />
                {/* map method runs on each element in in array and returns a new array
                this works because react is capable of rendering an array of jsx elements.
                For example: {[<Card />, <Card />]}. Below is an alternative to {ExpensesContent}

                {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))}*/}
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}


export default Expenses;