import React from "react";
import clsx from 'clsx';
import { getTypographyClass } from './typographyClasses';
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { useMediaQuery } from '@mui/material';


const useUtilityClasses = (ownerState) => {
    const { variant } = ownerState;
  
    const slots = {
      root: [
        'root',
        variant
      ],
    };
  
    return composeClasses(slots, getTypographyClass);
};

interface ITypographyProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    variant?: 'button' | 'h1' | 'h2' | 'h3' | 'body1' | 'body2';
    style?: React.CSSProperties;
}

const TypographyRoot = styled('span')<{ ownerState: ITypographyProps }>(({ theme, ownerState }) => ({
    margin: 0,
    ...(theme.typography[ownerState.variant]),
    ...(useMediaQuery(theme.breakpoints.down(970)) && {
        ...(ownerState.variant === 'h1' && {
            fontSize: '3rem'
        }),
        ...(ownerState.variant === 'h2' && {
            fontSize: '2.5rem'
        }),
        ...(ownerState.variant === 'h3' && {
            fontSize: '1.75rem'
        }),
        ...(ownerState.variant === 'body1' && {
            fontSize: '14px'
        }),
        ...(ownerState.variant === 'body2' && {
            fontSize: '14px'
        })
    }),
    ...(useMediaQuery(theme.breakpoints.down(444)) && {
        ...(ownerState.variant === 'h1' && {
            fontSize: '2rem'
        }),
        ...(ownerState.variant === 'h2' && {
            fontSize: '1.75rem'
        }),
        ...(ownerState.variant === 'h3' && {
            fontSize: '18px'
        }),
        ...(ownerState.variant === 'body1' && {
            fontSize: '12px'
        }),
        ...(ownerState.variant === 'body2' && {
            fontSize: '12px'
        })
    }),

}));

const defaultVariantMapping = {
    button: 'button',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body1: 'p',
    body2: 'p'
}

const Typography: React.FC<ITypographyProps> = (props) => {
    const { 
        className,
        component,
        variant='body1',
        ...other
    } = props;

    const Component  = component || defaultVariantMapping[variant] || 'span';

    const ownerState = {
        variant,
        className,
        component
    }

    const classes = useUtilityClasses(ownerState);

    return (
        <TypographyRoot
        as={ Component as React.ElementType }
        ownerState={ ownerState }
        className={ clsx(classes.root, className) }
        { ...other } />
    )
}

export default Typography;