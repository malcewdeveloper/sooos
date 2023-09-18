import React from "react";
import clsx from "clsx";
import cardHeaderClasses, { getCardHeaderClass } from "./cardHeaderClasses";
import { styled } from '@mui/material';
import { unstable_composeClasses as composeClasses } from "@mui/material";
import Typography from "../../../Typography";


const useUtilityClasses = (ownerState) => {
    const slots = { 
        root: ['root'],
        action: ['action'],
        avatar: ['avatar'],
        content: ['content'],
        title: ['title'],
        subheader: ['subheader']
    };
    return composeClasses(slots, getCardHeaderClass);
}

interface ICardHeaderProps {
    action?: React.ReactNode;
    avatar?: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
    component?: React.ElementType;
    subheader?: React.ReactNode;
    title?: React.ReactNode;
    style?: React.CSSProperties;
}

const CardHeaderRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 0'
}));

const CardHeaderAvatar = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '0 0 auto',
    marginRight: '16px'
}));

const CardHeaderAction = styled('div')(({ theme }) => ({
    flex: '0 0 auto',
    alignSelf: 'flex-start',

}));

const CardHeaderContent = styled('div')(({ theme }) => ({
    flex: '1 1 auto'
}));

const CardHeader:React.FC<ICardHeaderProps> = (props) => {
    const { 
        action,
        avatar,
        className,
        component = 'div',
        subheader: subheaderProp,
        title: titleProp,
        ...other
    } = props;

    const ownerState = {}

    const classes = useUtilityClasses(ownerState);

    let title = titleProp;
    if(title !== null) {
        title = (
            <Typography
            variant='h3'
            className={ classes.title }
            component={ 'span' }
            style={{ display: 'block' }}>
                { title }
            </Typography>
        )
    }

    let subheader = subheaderProp;
    if(subheader !== null) {
        subheader = (
            <Typography
            variant='body1'
            className={ classes.subheader }
            component={ 'span' }
            style={{ display: 'block' }}>
                { subheader }
            </Typography>
        )
    }

    return (
        <CardHeaderRoot 
        className={ clsx(classes.root, className) }
        as={ component }
        { ...other }>
            { avatar && (
                <CardHeaderAvatar className={ classes.avatar }>
                    { avatar }
                </CardHeaderAvatar>
            )}
            <CardHeaderContent className={ classes.content }>
                { title }
                { subheader }
            </CardHeaderContent>
            {action && (
                <CardHeaderAction className={ classes.action }>
                    { action }
                </CardHeaderAction>
            )}
        </CardHeaderRoot>
    )
}

export default CardHeader;