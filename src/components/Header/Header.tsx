import React from "react";
import clsx from "clsx";
import { styled, unstable_composeClasses as composeClasses } from "@mui/material";
import { capitalize } from "@mui/material";
import { getHeaderClass } from "./headerClasses";


const useUtilityClasses = (ownerState) => {
    const {  
        position
    } = ownerState;

    const slots = {
        root: [
            'root',
            `position${capitalize(position)}`
        ]
    }

    return composeClasses(slots, getHeaderClass)
}

interface IHeaderProps {
    component?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    position?: 'absolute' | 'fixed' | 'sticky' | 'relative' |'static';
    style?: React.CSSProperties;
}

const HeaderRoot = styled('header')<{ ownerState: IHeaderProps }>(({ theme, ownerState }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    ...(ownerState.position === 'absolute' && {
        position: 'absolute',
        zIndex: theme.zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
    }),
    ...(ownerState.position === 'fixed' && {
        position: 'fixed',
        zIndex: theme.zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
        '@media print': {
            position: 'absolute',
        },
    }),
    ...(ownerState.position === 'sticky' && {
        position: 'sticky',
        zIndex: theme.zIndex.appBar,
        top: 0,
        left: 'auto',
        right: 0,
    }),
    ...(ownerState.position === 'relative' && {
        position: 'relative'
    }),
    ...(ownerState.position === 'static' && {
        position: 'static'
    }),
}));

const Header: React.FC<IHeaderProps> = (props) => {
    const { 
        component = 'header',
        position = 'static',
        className,
        ...other
    } = props;

    const ownerState = { 
        position
    };

    const classes = useUtilityClasses(ownerState);

    return (
        <HeaderRoot as={ component } ownerState={ ownerState } className={ clsx(classes.root, className) } { ...other } />
    )
}

export default Header;