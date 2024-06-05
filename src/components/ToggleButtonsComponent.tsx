import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";


interface ToggleButtonsComponentProps {
    handleAlignment: (newAlignment: 'all' | 'active'| 'completed' | 'null') => void;
    alignment: 'all' | 'active'| 'completed' | 'null'
}

const ToggleButtonsComponent = (props: ToggleButtonsComponentProps) => {

    return (
        <ToggleButtonGroup
            value={props.alignment}
            exclusive
            onChange={(event, value) => props.handleAlignment(value)}
            aria-label="text alignment"
        >
            <ToggleButton color='primary' value="all">All</ToggleButton >
            <ToggleButton color='primary' value="active">Active</ToggleButton >
            <ToggleButton color='primary' value="completed">Completed</ToggleButton >
        </ToggleButtonGroup>
    );
};

export default ToggleButtonsComponent;