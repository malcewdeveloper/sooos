import React from "react";
import clsx from "clsx";
import Paper from "../Paper";
import { getCardClasses } from "./cardClasses";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = { root: ['root'] };
    return composeClasses(slots, getCardClasses);
}

interface ICardProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const CardRoot = styled(Paper)(({ theme }) => ({
    overflow: 'hidden'
}));

const Card: React.FC<ICardProps> = (props) => {
    const { 
        className, 
        ...other
    } = props;

    const ownerState = {};

    const classes = useUtilityClasses(ownerState)

    return (
        <CardRoot className={ clsx(classes.root, className) } { ...other } />
    )
}

export default Card;