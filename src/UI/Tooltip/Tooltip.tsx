import React from "react";
import clsx from "clsx";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getTooltipClass } from "./tooltipClasses";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root'],
        content: ['content']
    }
    return composeClasses(slots, getTooltipClass);
}

interface ITooltipProps {
    children: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    title?: React.ReactNode;
    style?: React.CSSProperties;
    position?: 'top' | 'bottom';
    delay?: number;
}

const TooltipRoot = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer'
}));

const TooltipContent = styled('div')(({ theme }) => ({
    position: "absolute",
    display: 'inline-block',
    padding: '4px 8px',
    color: "#FFFFFF",
    borderRadius: "4px",
    zIndex: 1000,
    pointerEvents: "none",
    whiteSpace: "nowrap",
}));

const Tooltip:React.FC<ITooltipProps> = (props) => {
    const { 
        className,
        children, 
        title, 
        position = 'bottom',
        component,
        delay = 1000,
        ...other 
    } = props;

    const [isTooltipOpen, setTooltipOpen] = React.useState(false);
    const [tooltipPosition, setTooltipPosition] = React.useState({ top: 0, left: 0 });
    const tooltipRef = React.useRef<HTMLDivElement>(null);
    const tooltipContentRef = React.useRef(null);
    const timerRef = React.useRef(null);

    const handleMouseEnter = () => {
        timerRef.current = setTimeout(() => {
            setTooltipOpen(true);
        }, delay)
    }

    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
        setTooltipOpen(false)
    }

    React.useEffect(() => {
        if(isTooltipOpen) {
            const tooltipRect = tooltipRef.current.getBoundingClientRect();
            const contentRect = tooltipContentRef.current.getBoundingClientRect();
            const top = position === 'top' ? tooltipRect.top - contentRect.height + 16 : tooltipRect.height + 16;
            const left = (tooltipRect.width - contentRect.width) / 2;

            if(tooltipRect.left + ((tooltipRect.width - contentRect.width) / 4) <= 0) {
                setTooltipPosition({ top, left: 0 });
            }else if(contentRect.right >= window.innerWidth) {
                setTooltipPosition({ top, left: (tooltipRect.width - contentRect.width) + (window.innerWidth - tooltipRect.right) })
            } else {
                setTooltipPosition({ top, left });
            }
        }
    }, [isTooltipOpen, position]);

    const ownerState = {  }

    const classes = useUtilityClasses(ownerState);

    return (
        <TooltipRoot 
        ref={ tooltipRef }
        className={ clsx(classes.root, className) }
        onMouseEnter={ handleMouseEnter }
        onMouseLeave={ handleMouseLeave }
        { ...other }>
            { children }
            { isTooltipOpen && (
                <TooltipContent ref={ tooltipContentRef } style={{ left: `${tooltipPosition.left}px`, top: `${tooltipPosition.top}px` }} className={ classes.content }>{ title }</TooltipContent>
            )}
        </TooltipRoot>
    )
}

export default Tooltip;