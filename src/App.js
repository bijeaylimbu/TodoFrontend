import Form from '../src/components/Form/index';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import UpdateTodo from './page/updateTodo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path='/update' element={<UpdateTodo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
