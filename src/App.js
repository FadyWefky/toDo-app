import React from "react";
import "./app.css";
import TodoList from './component/todoList/todoList.js';
import 'font-awesome/css/font-awesome.min.css';


const App = () => {
    return(
        <div className="container">
            <TodoList />
        </div>
    );
}
export default App;