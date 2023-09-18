import React from "react";
import clsx from "clsx";
import Button from "../../../Button";
import { getCardActionAreaClass } from "./cardActionAreaClasses";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }
    return composeClasses(slots, getCardActionAreaClass);
}

interface ICardActionAreaProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
}

const CardActionAreaRoot = styled(Button)(({ theme }) => ({
    color: '#FFFFFF',
    display: 'block',
    width: '100%',
    transition: '0.3s ease',
    '&:hover': {
        backgroundColor: '#1A1A1A',
        color: '#FFFFFF',
        '@media (hover: none)': {
            opabackgroundColorcity: 'transparent'
        },
    }
}));

const CardActionArea: React.FC<ICardActionAreaProps> = (props) => {
    const { 
        className, 
        component,
        ...other 
    } = props;

    const ownerState = {  }

    const classes = useUtilityClasses(ownerState);

    return (
        <CardActionAreaRoot className={ clsx( classes.root, className ) } { ...other } />
    )
}

export default CardActionArea;