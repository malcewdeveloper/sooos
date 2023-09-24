import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import listClasses, { getListClass } from "./listClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const { header } = ownerState;

    const slots = {
        root: ['root', header && 'header']
    }

    return composeClasses(slots, getListClass)
}

interface IListProps {
    children?: React.ReactNode;
    className?: string;
    component? :React.ElementType;
    header?: React.ReactNode | string;
    style?: React.CSSProperties;
}

const ListRoot = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
}));

const List: React.FC<IListProps> = (props) => {
    const {  
        children,
        className,
        header,
        component = 'ul',
        ...other
    } = props;

    const ownerState = {  
        header
    }

    const classes = useUtilityClasses(ownerState);

    return (
        <ListRoot 
        as={ component } 
        className={ clsx(classes.root, className) }
        {...other}>
            { header }
            { children }
        </ListRoot>
    )
}

export default List;