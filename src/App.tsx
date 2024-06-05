import React, {useMemo, useState} from 'react';
import './App.css';
import {
    Button,
    Card,
    CardContent,
    Typography
} from "@mui/material";
import {useInput} from "./hooks/useInput";
import TextFieldComponent from "./components/TextFieldComponent";
import TodoList from "./components/TodoList";
import {TodoItemProps} from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';
import ToggleButtonsComponent from "./components/ToggleButtonsComponent";

function App() {
    const filter = useInput()
    const [todos, setTodos] = useState<TodoItemProps[]>([])
    const [alignment, setAlignment] = React.useState<'all' | 'active'| 'completed' | 'null'>('all');

    const onEnter = () => {
        if (!filter.value){
            return
        }
        const todosCopy = [...todos]
        todosCopy.push({ label: filter.value, id: uuidv4(), checked: false })
        setTodos(todosCopy)
        filter.setValue('')
        setAlignment('all')
    }

    const onChecked = (id: string) => {
        const todosCopy = [...todos]
        const current = todosCopy.find((todo) => todo.id === id)
        if (current){
            current.checked = !current.checked;
        }
        setTodos(todosCopy)
    }

    const clearCompleted = () => {
        const todosCopy = [...todos]
        setTodos(todosCopy.filter((todo) => !todo.checked));
    }

    const handleAlignment = (newAlignment: 'all' | 'active'| 'completed' | 'null') => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };

    const filteredTodos = useMemo(() => {
        const todosCopy = [...todos]
        if (alignment === 'all'){
            return todosCopy;
        }
        if (alignment === 'active'){
            return todosCopy.filter((todo) => !todo.checked);
        }
        if (alignment === 'completed'){
            return todosCopy.filter((todo) => todo.checked);
        }
        return todosCopy
    },[alignment, todos])


    return (
        <div className="App">
            <Card sx={{ minWidth: 575 }}>
                <CardContent>
                   <Typography variant="h1" textAlign={'center'} color="text.secondary" gutterBottom>
                        todos
                    </Typography>
                    <TextFieldComponent value={filter.value} onChange={filter.onChange} onEnter={onEnter} label='What needs to be done?'/>
                    <TodoList todos={filteredTodos} onChecked={onChecked}/>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <ToggleButtonsComponent handleAlignment={handleAlignment} alignment={alignment}/>
                        <Button variant="outlined" color="error" onClick={clearCompleted} size="small">Clear completed</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
