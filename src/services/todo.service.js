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
}

export default new todoService();
