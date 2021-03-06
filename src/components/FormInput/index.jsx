import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import todoService from '../../services/todo.service';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, gray 30%, black 90%)',
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 10px',
        whiteSpace: 'nowrap',
        margin: '15px 0 0 20px',
    },
    label: {
        width: '80%'
    }
});
const TodoCreator = () => {
    const [description, setDescription] = useState("");
    const [isCompleted, setIsCompleted] = useState();
    const classes = useStyles();
    const onSubmit = async (e) => {
        e.preventDefault();
        todoService.createTodo(description, isCompleted);
       window.location.reload();
    }
    return (
        <div className="form__input">
            <ThemeProvider>
                <FormControl className={classes.label}>
                    <TextField
                        id="outlined-basic"
                        label="What's need to be done?" // better accessibility with Material UI
                        value={description}
                        variant="outlined"
                        onChange={(e) => setDescription(e.target.value)}
                        aria-describedby="component-error-text"
                    />
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className={classes.root}
                    onClick={onSubmit}
                >
                    Add task
                </Button>
            </ThemeProvider>
        </div>
    )
}
export default TodoCreator;
