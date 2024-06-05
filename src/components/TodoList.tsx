import React from 'react';
import Todo, {TodoItemProps} from "./Todo";
import {List} from "@mui/material";


interface TodoListProps {
    todos: TodoItemProps[]
    onChecked: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {props.todos.map((todo) => <Todo key={todo.id} todo={todo} onChecked={props.onChecked}/>)}
        </List>
    );
};

export default TodoList;