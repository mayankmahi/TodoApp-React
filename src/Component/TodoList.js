import React, {useEffect, useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { db } from './fire';
import firebase from 'firebase';


function TodoList() {
    
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();    
    }, []);

    function getTodos() {
        db.collection("todos").onSnapshot(function (querySnapshot) {
         setTodos(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                todo: doc.data().todo,
                inProgress: doc.data().inProgress
                }))
         );
        });
    }



    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return; 
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        // console.log(todo, ...todos); 
    };


    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.test)) {
            return;
        }

        setTodos(prev => prev.map(item=> (item.id ===todoId ? newValue : item))
        );
    };


    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
        // db.collection("todos").doc(id).delete();
    };



    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if(todo.id === id ) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
    };

    return (
        <div>
            <h1>Whats the plan for today</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos = {todos.map((todo) => (
                <p>{todo.todo}</p>
            ))}
             completeTodo = {completeTodo}
             removeTodo={removeTodo} 
             updateTodo={updateTodo}
            />
        </div>
    )
}

export default TodoList;
