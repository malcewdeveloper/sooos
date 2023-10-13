import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import { getListItemClass } from "./listItemClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { useMediaQuery } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }

    return composeClasses(slots, getListItemClass)
}

interface IListItemProps {
    children?: React.ReactNode;
    className?: string;
    component? :React.ElementType;
    style?: React.CSSProperties;
}

const ListItemRoot = styled('li')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    textDecoration: 'none',
    width: '100%',
    boxSizing: 'border-box',
    textAlign: 'left',
    fontSize: '24px',
    '&:not(:last-child)': {
        marginBottom: '24px'
    },
    ...(useMediaQuery(theme.breakpoints.down(970)) && {
        '&:not(:last-child)': {
            marginBottom: '16px'
        },
    })
}));

const ListItem: React.FC<IListItemProps> = (props) => {
    const {  
        children,
        className,
        component = 'li',
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <ListItemRoot 
        as={ component } 
        className={ clsx(classes.root, className) } 
        {...other}>
            { children }
        </ListItemRoot>
    )
}

export default ListItem;