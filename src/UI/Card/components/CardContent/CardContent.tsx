import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import { getCardContentClass } from "./cardContentClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }
    return composeClasses(slots, getCardContentClass);
}

interface ICardContentProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const CardContentRoot = styled('div')(({ theme }) => ({
    padding: '16px 8px 4px',
}));

const CardContent:React.FC<ICardContentProps> = (props) => {
    const { 
        component, 
        className, 
        ...other 
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <CardContentRoot 
        as={ component }
        className={ clsx(classes.root, className) } 
        { ...other }/>
    )
}

export default CardContent;