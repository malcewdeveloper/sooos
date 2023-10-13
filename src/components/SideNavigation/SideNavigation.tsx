import React from "react";
import clsx from "clsx";
import Button from "../../UI/Button";
import Paper from "../../UI/Paper";
import Typography from "../../UI/Typography";
import List, { ListItem } from "../../UI/List";
import  sideNavigationClasses, { getSideNavigationClass } from "./sideNavigationClasses";
import { styled } from '@mui/material';
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { useMediaQuery } from '@mui/material';


const useUtilityClasses = (ownerState) => {
    const { selected } = ownerState;

    const slots = {
        root: ['root'],
        button: ['button', selected && 'buttonSelected'],
        ball: ['ball']
    }

    return composeClasses(slots, getSideNavigationClass);
}

interface ISideNavigationProps {
    children?: React.ReactNode;
    className?: string;
    component?: React.ElementType;
    items: {
        id: number;
        categoryName: string;
    }[];
    style?: React.CSSProperties;
}

const SideNavigationRoot = styled(Paper)(({ theme }) => ({
    borderRadius: '32px',
    maxWidth: '380px',
    width: '100%',
    padding: '28px 24px 36px',

}));

const SideNavigationBall = styled('span')(({ theme }) => ({
    width: '12px',
    height: '12px',
    backgroundColor: 'currentColor',
    borderRadius: '50%',
    ...(useMediaQuery(theme.breakpoints.down(970)) && {
        width: '10px',
        height: '10px',
    })
}));

const SideNavigationButton = styled(Button)(({ theme }) => ({
    [`&:hover .${sideNavigationClasses.ball}`]: {
        width: '20px',
        height: '20px'
    },
    [`&.${sideNavigationClasses.buttonSelected} .${sideNavigationClasses.ball}`]: {
        width: '28px',
        height: '28px'
    },
    ...(useMediaQuery(theme.breakpoints.down(970)) && {
        [`&:hover .${sideNavigationClasses.ball}`]: {
            width: '18px',
            height: '18px'
        },
        [`&.${sideNavigationClasses.buttonSelected} .${sideNavigationClasses.ball}`]: {
            width: '22px',
            height: '22px'
        },
    })
}));

const SideNavigation: React.FC<ISideNavigationProps> = (props) => {
    const {  
        className,
        component,
        items,
        ...other
    } = props;

    const [selected, setSelected] = React.useState(0);

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <SideNavigationRoot 
        as={ component }
        className={ clsx(classes.root, className) }
        {...other}>
            <List header={
                <Typography variant='body1' style={{ opacity: 0.4, marginBottom: '18px' }}>Навигация</Typography>
            }>
                {items.map((item, index) => (
                    <ListItem key={ item.id }>
                        <SideNavigationButton 
                        className={ clsx(classes.button, selected === index && sideNavigationClasses.buttonSelected) } 
                        startIcon={ <SideNavigationBall className={ classes.ball } /> } 
                        onClick={() => setSelected(index)} 
                        selected={selected === index }>{ item.categoryName }</SideNavigationButton>
                    </ListItem>
                ))}
            </List>
        </SideNavigationRoot>
    )
}

export default SideNavigation;
