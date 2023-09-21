import React from "react";
import clsx from "clsx";
import Card, { CardContent, CardMedia, CardActions, CardHeader } from "../../UI/Card";
import { styled } from '@mui/material';
import toolsCardClasses, { getToolsCardClass } from "./toolsCardClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import ReviewCard from "../ReviewCard";
import { FaArrowRight } from 'react-icons/fa'
import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import Tooltip from "../../UI/Tooltip";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: [
            'root', 
            ownerState.hover && 'hover'
        ]
    }

    return composeClasses(slots, getToolsCardClass);
}

interface IToolsCardProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    style?: React.CSSProperties;
    name?: string;
    category?: string;
    icon?: React.ReactNode;
    tooltip?: React.ReactNode | string;
}

const ToolsCardRoot = styled(Card)(({ theme }) => ({
    borderRadius: '28px',
    backgroundColor: 'transparent',
    maxWidth: '135px',
    height: '206px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    '&:hover': {
        backgroundColor: '#1A1A1A'
    }
}));

const ToolsCustomButton = styled(Button)(({ theme }) => ({
    padding: '2px 8px',
    fontSize: '14px'
}))

const BgArrowButton = styled('div')(({ theme }) => ({
    backgroundColor: '#4B4B4B',
    borderRadius: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px'
}))

const ToolsCard: React.FC<IToolsCardProps> = (props) => {
    const { 
        className,
        component,
        name,
        category, 
        icon,
        tooltip
    } = props;

    const [hover, setHover] = React.useState(false);

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const ownerState = { 
        hover
    };

    const classes = useUtilityClasses(ownerState);

    return (
        <Tooltip title={ tooltip }>
            <div onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
                <ToolsCardRoot as={ component } className={ clsx(classes.root, className) }>
                    { icon }
                    <CardContent style={{ textAlign: 'center', padding: 0 }}>
                        <Typography style={{ fontSize: '20px' }}>{ name }</Typography>
                        <Typography style={{ fontSize: '12px', opacity: '0.5' }}>{ category }</Typography>
                    </CardContent>
                    {hover && 
                    <CardActions style={{ padding: 0 }}>
                        <ToolsCustomButton href="/" variant='contained' endIcon={<BgArrowButton><FaArrowRight color="#222222" /></BgArrowButton>}>Открыть</ToolsCustomButton>
                    </CardActions>}
                </ToolsCardRoot>
            </div>
        </Tooltip>
    )
}

export default ToolsCard;