import React from "react";
import clsx from "clsx";
import ReviewCard from "../../components/ReviewCard";
import Typography from "../../UI/Typography";
import Box from "../../UI/Box";
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getReviewCardListClass } from "./reviewCardListClasses";


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root']
    }

    return composeClasses(slots, getReviewCardListClass)
}

interface IReviewCardListProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    data?: {
        id: number;
        category: string;
        content: {
            id: number;
            iconUrl: React.ReactNode | string;
            imageUrl: string;
            name: string;
            description: string;
            url: string;
        }[]
    }[];
    style?: React.CSSProperties;
}

const ReviewCardListRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '36px'
}));

const ReviewCardListContent = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px'
}));

const ReviewCardList: React.FC<IReviewCardListProps> = (props) => {
    const {  
        className,
        children,
        data,
        component,
        ...other
    } = props;

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <ReviewCardListRoot 
        as={ component }
        className={ clsx(classes.root, className) }
        { ...other }>
            { data.map(item => (
                <Box>
                    <Typography key={ item.id } style={{ fontSize: '32px', marginBottom: '32px' }}>{ item.category }</Typography>
                    <ReviewCardListContent>
                        {item.content.map(content => (
                            <ReviewCard 
                            key={ content.id }
                            icon={ <div style={{ fontSize: '52px' }}>Be</div> }
                            image={ content.imageUrl }
                            title={ content.name } 
                            content={ content.description } />
                        ))}
                    </ReviewCardListContent>
                </Box>
            )) }
        </ReviewCardListRoot>
    )
}

export default ReviewCardList;