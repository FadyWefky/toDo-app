import React from "react";
import './todoListItems.css';

function TodoListItems(props){

    const {todos} = props;

    const todoItem = todos.map((todo, index) =>{
        return(
            <div className="todoComponenet d-flex w-75 mx-auto" key={todo.id}>
                <div className="todoCompLeft">
                    <label>
        

                        <input type="checkbox" />
                    </label>
                </div>


                <div className="todoCompRight d-flex justify-content-between flex-grow-1 px-3">
                    <div className="todoTitle">
                        <span >
                            {todo.title}

                        </span>

                    </div>

                    <div>
                    <i className="fa fa-pencil mr-4"
                        aria-hidden="true"
                        onClick={() => props.handleOnEdit(index)}></i>

                        <i onClick={() => props.handleOnRemove(index)}
                        className="fa fa-trash"
                        aria-hidden="true"></i>
                    </div>

                </div>
            </div>
        );
    })

    return(

        <div className="todoListItems w-full">
            <hr />
            {todos.length === 0 && (
                <h3 className="noTodos">Let's get some work done!</h3>
            )}
            {todos.length > 0 && (todoItem)}
        </div>
    );

}


export default TodoListItems;