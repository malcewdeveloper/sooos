import React from "react";
import clsx from "clsx";
import { styled } from "@mui/system";
import buttonClasses, { getButtonClass } from "./buttonClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { useMediaQuery } from "@mui/material";


const useUtilityClasses = (ownerState) => {
    const { disabled, fullWidth, variant, selected } = ownerState;

    const slots = {
        root: [
            'root', 
            variant,
            selected && 'selected',
            disabled && 'disabled',
            fullWidth && 'fullWidth'
        ],
        startIcon: ['startIcon'],
        endIcon: ['endIcon']
    }

    return composeClasses(slots, getButtonClass, );
}

interface IButtonProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    tabIndex?: number;
    type?: 'button' | 'submit' | 'reset';
    style?: React.CSSProperties;
    selected?: boolean;
    fullWidth?: boolean;
    variant?: 'contained' | 'text';
    href?: string;
}

const ButtonRoot = styled('button')<{ownerState: IButtonProps}>(({ theme, ownerState }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    minWidth: '36px',
    padding: '12px 24px',
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    transition: 'background-color 0.3s',
    '&:hover': {
        ...(ownerState.variant === 'text' && {
            color: 'rgba(255, 255, 255, 0.7)', 
            textDecoration: 'none',
        }),
        ...(ownerState.variant === 'contained' && {
            backgroundColor: '#222527'
        }),
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
    },
    ...(ownerState.variant === 'text' && {
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: '18px',
        padding: 0,
        ...(useMediaQuery(theme.breakpoints.up(970)) && {
            fontSize: '24px',
        }),
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
    }),
    ...(ownerState.variant === 'contained' && {
        backgroundColor: '#151718',
        border: '1px solid #222527',
        color: '#FFFFFF',
        fontSize: '24px',
        padding: '8px 14px',
        ...(useMediaQuery(theme.breakpoints.up(444)) && {
            fontSize: '28px',
            padding: '10px 20px',
        }),
        ...(useMediaQuery(theme.breakpoints.up(970)) && {
            fontSize: '32px',
            padding: '12px 24px',
        }),
        '@media (hover: none)': {
            backgroundColor: 'transparent'
        }
    }),
    ...(ownerState.fullWidth && {
        width: '100%'
    }),
    '&::-moz-focus-inner': {
        borderStyle: 'none'
    },
    [`&.${buttonClasses.disabled}`]: {
        pointerEvents: 'none',
        cursor: 'default',
        color: 'rgba(255, 255, 255, 0.25)',
        ...(ownerState.variant === 'contained' && {
            border: '1px solid rgba(255, 255, 255, 0.25)',
        })
    },
    [`&.${buttonClasses.selected}`]: {
        cursor: 'default',
        ...(ownerState.variant === 'text' && {
            color: '#FFFFFF',
        }),
        ...(ownerState.variant === 'contained' && {
            backgroundColor: '#97F223',
            border: '1px solid #97F223',
            color: '#000000',
        })
    },
    '@media print': {
        colorAdjust: 'exact',
    }
}));

const ButtonStartIcon = styled('span')<{ ownerState }>(({ theme }) => ({
    display: 'inherit',
    alignItems: 'center',
    justifyContent:'center',
    marginRight: '12px',
    width: '28px',
    height: '28px',
}));

const ButtonEndIcon = styled('span')<{ ownerState }>(({ theme }) => ({
    display: 'inherit',
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: '12px',
    width: '28px',
    height: '28px',
}));

const Button: React.FC<IButtonProps> = (props) => {
    const { 
        children,
        className,
        component = 'button',
        endIcon: endIconProp,
        fullWidth = false,
        selected,
        startIcon: startIconProps,
        onClick,
        disabled = false,
        tabIndex = 0,
        type,
        variant = 'text',
        ...other
    } = props;
    
    const buttonRef = React.useRef(null);

    const ownerState = {
        component,
        fullWidth,
        disabled,
        tabIndex,
        variant,
        selected
    }

    const buttonProps:any = {};

    let Component = component;

    if(Component === 'button' && other.href) {
        Component = 'a'
    }

    if (Component === 'button') {
      buttonProps.type = type === undefined ? 'button' : type;
      buttonProps.disabled = disabled;
    } else {
      if (!other.href) {
        buttonProps.role = 'button';
      }
      if (disabled) {
        buttonProps['aria-disabled'] = disabled;
      }
    }

    const classes = useUtilityClasses(ownerState);

    const startIcon = startIconProps && (
        <ButtonStartIcon className={ classes.startIcon } ownerState={ ownerState }>
            { startIconProps }
        </ButtonStartIcon>
    )

    const endIcon = endIconProp && (
        <ButtonEndIcon className={ classes.endIcon } ownerState={ ownerState }>
            { endIconProp }
        </ButtonEndIcon>
    );

    return (
        <ButtonRoot 
        as={ Component }
        ownerState={ ownerState }
        onClick={ onClick }
        tabIndex={disabled ? -1 : tabIndex} 
        className={ clsx(classes.root, className) }
        type={ type }
        ref={ buttonRef }
        {...buttonProps}
        {...other}>
            { startIcon }
            { children }
            { endIcon }
        </ButtonRoot>
    )
}

export default Button;


