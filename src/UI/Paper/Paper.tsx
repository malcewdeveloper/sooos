import React from "react";
import clsx from "clsx";
import { getPaperClass } from "./paperClasses";
import { styled } from "@mui/system";
import { unstable_composeClasses as composeClasses } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = {root: ['root']};
    
    return composeClasses(slots, getPaperClass);
}

interface IPaperProps {
    className?: string;
    children?: React.ReactNode;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const PaperRoot = styled('div')(({ theme }) => ({
    backgroundColor: '#1A1A1A',
    color: '#FFFFFF',
    borderRadius: theme.shape.borderRadius,

}));

const Paper:React.FC<IPaperProps> = (props) => {
    const { 
        className,
        component,
        style,
        ...other
    } = props;

    const ownerState = {};

    const classes = useUtilityClasses(ownerState);

    return (
        <PaperRoot 
        as={ component }
        className={ clsx(classes.root, className) }
        style={ style } 
        { ...other }/>
    )
}

export default Paper;