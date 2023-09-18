import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getCardActionClass } from "./cardActionsClasses";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }
    return composeClasses(slots, getCardActionClass);
}

interface ICardActionsProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const CardActionsRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    '& > :not(:first-of-type)': {
        marginLeft: 8,
    },
}));

const CardActions: React.FC<ICardActionsProps> = (props) => {
    const { 
        className, 
        component, 
        ...other 
    } = props;

    const ownerState = {  }

    const classes = useUtilityClasses(ownerState);

    return (
        <CardActionsRoot as={ component } className={ clsx(classes.root, className) } { ...other } />
    )
}

export default CardActions;