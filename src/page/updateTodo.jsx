import { useLocation, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import todoService from "../services/todo.service";
export default function UpdateTodo() {
    const navigate=useNavigate();
    const location = useLocation();
    const [description, setDescription] = useState(location.state.description);
    const [isCompleted, setIsCompleted] = useState(location.state.isCompleted);
    const id = location.state.id;
    const updateTodo = () => {
        todoService.updateTodo(id, description, isCompleted);
        navigate("/")
    }
    return (
        <>
            <div>
                <TextField
                    style={{
                        marginTop: '100px',
                        marginLeft: "50px",
                        width: "60%"
                    }}
                    id="outlined-helperText"
                    label="Description"
                    defaultValue={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </div>
            <div>
                <FormGroup>
                    <FormControlLabel
                        style={{
                            marginTop: '10px',
                            marginLeft: "50px",
                            width: "20%"
                        }}
                        control={<Checkbox
                            defaultChecked={isCompleted}
                            onChange={() => setIsCompleted(!isCompleted)}
                        />} label="Is Completed" />
                </FormGroup>
            </div>
            <Button
                style={{
                    marginTop: '10px',
                    marginLeft: "50px",
                    width: "20%"
                }}
                variant="contained"
                onClick={updateTodo}
            >Update</Button>
        </>
    );
}