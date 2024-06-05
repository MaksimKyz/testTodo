import React from 'react';
import {Checkbox, ListItem, ListItemButton, ListItemIcon} from "@mui/material";

export interface TodoItemProps {
    label: string;
    checked: boolean;
    id: string;
}

interface TodoProps {
    todo: TodoItemProps
    onChecked: (id: string) => void;
}

const Todo = (props: TodoProps) => {
    return (
        <ListItem disablePadding>
            <ListItemButton role={undefined} onClick={() => props.onChecked(props.todo.id)} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.todo.checked}
                        disableRipple
                    />
                </ListItemIcon>
                {props.todo.checked ? <s>{props.todo.label}</s> : <span>{props.todo.label}</span>}
            </ListItemButton>
        </ListItem>
    );
};

export default Todo;