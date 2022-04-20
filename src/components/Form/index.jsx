import React, { useState, useEffect } from 'react';
import TodoCreator from "../FormInput/index";
import TodoList from "../TodoList/index";
import { createMuiTheme } from "@material-ui/core/styles";
import todoService from "../../services/todo.service";

const theme = createMuiTheme({
    palette: {
        primary: { main: '#000000' },
    },
});

const Form = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        todoService.getAllTodos()
            .then((res) => setTodos(res.data));
    }, [])

    return (
        <form className="form">

            <TodoCreator
                theme={theme}
            />
               <TodoList
                theme={theme}
                todos={todos}
            />
        </form>
    )
}
export default Form;
