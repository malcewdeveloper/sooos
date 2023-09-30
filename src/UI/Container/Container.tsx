import React from "react";
import clsx from "clsx";
import { capitalize } from "@mui/material";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getContainerClass } from "./containerClasses";


const useUtilityClasses = (ownerState) => {
    const { maxWidth } = ownerState;

    const slots = {
        root: [
            'root', 
            maxWidth && `maxWidth${capitalize(String(maxWidth))}`
        ]
    }

    return composeClasses(slots, getContainerClass);
}

interface IContainerProps {
    children?: React.ReactNode;
    component?: React.ElementType;
    className?: string;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    style?: React.CSSProperties;
}

const ContainerRoot = styled('div')<{ownerState: IContainerProps}>(({ theme, ownerState }) => ({
    boxSizing: 'border-box',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    ...(ownerState.maxWidth === 'xs' && {
        [theme.breakpoints.up('xs')]: {
            maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        }
    }),
    ...(ownerState.maxWidth && 
        ownerState.maxWidth !== 'xs' && {
            [theme.breakpoints.up(ownerState.maxWidth)]: {
                maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`
            }
        })
}));

const Container:React.FC<IContainerProps> = (props) => {
    const {  
        className,
        component = 'div',
        maxWidth = 'lg',
        ...other
    } = props;

    const ownerState = {  
        maxWidth
    };

    const classes = useUtilityClasses(ownerState);

    return (
        <ContainerRoot 
        ownerState={ ownerState }
        as={ component } 
        className={ clsx(classes.root, className) }
        { ...other } />
    )
}

export default Container;