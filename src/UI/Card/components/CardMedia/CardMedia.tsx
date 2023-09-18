import React from "react";
import clsx from "clsx";
import { getCardMediaClass } from "./cardMediaClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { styled } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }
    return composeClasses(slots, getCardMediaClass)
}

interface ICardMediaProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    src?: string;
    style?: React.CSSProperties;
}

const CardMediaRoot = styled('img')(({ theme }) => ({
    display: 'block',
    borderRadius: '16px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    maxWidth: '100%',
    objectFit: 'cover'
}));

const CardMedia: React.FC<ICardMediaProps> = (props) => {
    const {
        className, 
        component, 
        style,
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <CardMediaRoot 
        as={ component }
        className={ clsx(classes.root, className) }
        style={ style }
        { ...other } />
    )
}

export default CardMedia;