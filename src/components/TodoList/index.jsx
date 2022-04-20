import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
const TodoList = ({ theme, todos }) => {
    return (
        <ThemeProvider theme={theme}>
            <List >
                {todos.map((todo) => {
                    const labelId = `list-todo-${todo}`;
                    return (
                        <ListItem
                            dense
                            button
                        >
                            <ListItemText
                                id={labelId}
                                primary={`${todo.description}`}
                                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
                            />
                            <ListItemIcon>
                                <Link to='/update' state={{ id: todo.id, description: todo.description, isCompleted: todo.isCompleted }} >
                                    <EditIcon />
                                </Link>
                                <DeleteIcon />
                            </ListItemIcon>
                        </ListItem>
                    );
                })}
            </List>
        </ThemeProvider >
    );
}

export default TodoList;
