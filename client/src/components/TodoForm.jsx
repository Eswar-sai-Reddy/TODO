import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <DatePicker className='start'
						selected={startDate}
						onChange={date => setStartDate(date)}
						placeholderText="Select start date"
					/>
					<DatePicker className='end'
						selected={endDate}
						onChange={date => setEndDate(date)}
						placeholderText="Select end date"
					/>
        </form>
    )
}

export default TodoForm;