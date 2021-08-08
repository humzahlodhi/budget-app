import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function Expenses(props) {

    //forward the picked year to this Expenses component and store it in a state
    const [yearSelected, setYearSelected] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setYearSelected(selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} onChangeFilter={filterChangeHandler} />
                <ExpenseItem
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                />
            </Card>
        </div>
    )
}


export default Expenses;