import React from "react";
import clsx from "clsx";
import Card, { CardContent, CardMedia, CardActions, CardHeader } from "../../UI/Card";
import { styled } from '@mui/material';
import reviewCardClasses, { getReviewCardClass } from "./reviewCardClasses";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import Typography from "../../UI/Typography";
import Button from "../../UI/Button";
import Tooltip from "../../UI/Tooltip";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: [
            'root'
        ]
    }

    return composeClasses(slots, getReviewCardClass);
}

interface IReviewCardProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    content?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    title?: string;
    image?: string;
}

const ReviewCardRoot = styled(Card)(({ theme }) => ({
    maxWidth: '376.5px',
    padding: '12px'
}));

const ReviewCard: React.FC<IReviewCardProps> = (props) => {
    const {
        className,
        component,
        content,
        icon,
        title,
        image,
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <ReviewCardRoot className={ clsx( classes.root, className ) } { ...other }>
            <CardHeader title={ title } avatar={ icon } />
            <CardMedia src={ image } />
            <CardContent>
                <Typography style={{ fontSize: '14px' }} variant='body2'>
                    { content }
                </Typography>
            </CardContent>
        </ReviewCardRoot>
    )
}

export default ReviewCard;