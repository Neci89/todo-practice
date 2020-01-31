import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addNewPost } from '../../redux/posts/posts.actions';

const InputTodo = ({ addNewPost }) => {
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = event => {
        event.preventDefault()
        addNewPost(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" onChange={event => setInputValue(event.target.value)} value={inputValue} />
            <button>Add</button>
        </form>
    );
};

export default connect(null, {
    addNewPost
})(InputTodo);