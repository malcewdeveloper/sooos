import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getBoxClass } from "./boxClasses";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }

    return composeClasses(slots, getBoxClass)
}

interface IBoxProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const BoxRoot = styled('div')(({ theme }) => ({

}));

const Box: React.FC<IBoxProps> = (props) => {
    const {  
        component,
        className,
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <BoxRoot 
        as={ component } 
        className={ clsx(classes.root, className) }
        { ...other } />
    )
}

export default Box;
