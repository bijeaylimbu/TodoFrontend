import { Link } from "react-router-dom";
import axiosInstance from "../utils/helpers/axiosInstance";
class todoService {
    createTodo(description, isCompleted) {
        return axiosInstance.post("/todo", {
            description,
            isCompleted
        });
    }
    getAllTodos() {
        return axiosInstance.get("/todo/getList");
    }
    updateTodo(id, description, isCompleted) {
        return axiosInstance.put(`/todo/${id}`, {
            description,
            isCompleted
        });
    }
}

export default new todoService();
