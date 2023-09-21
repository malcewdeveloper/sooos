import React from "react";
import gsap from 'gsap';
import clsx from "clsx";
import { getAnimatedLogoClass } from './animatedLogoClasses';
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { styled } from '@mui/material';
import Logo from '../../assets/images/logo.svg';


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root'],
        ball: ['ball'],
        ballsWrap: ['ballsWrap'],
        logo: ['logo']
    }

    return composeClasses(slots, getAnimatedLogoClass);
}

interface IAnimatedLogoProps {
    children?: React.ReactNode;
    component?: React.ElementType;
    className?: string;
    style?: React.CSSProperties;
}

const AnimatedLogoRoot = styled('div')(({ theme }) => ({
    color: theme.palette.text.primary,
    display: 'inline-flex',
    ...(theme.typography.h3),
    position: 'relative'
}));

const AnimatedLogoBallsWrap = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '50%', 
    top: '50%',
    display: 'flex',
    gap: '57.26px',
    transform: 'translate3d(-50%, -50%, 0)'
}));

const AnimatedLogoBall = styled('div')(({ theme }) => ({
    borderRadius: '50%',
    backgroundColor: theme.palette.common.white,
    color: theme.palette.text.primary,
    width: '15px',
    height: '15px',
}));

const AnimatedLogo: React.FC<IAnimatedLogoProps> = (props) => {
    const { 
        component,
        className,
        ...other
    } = props;

    const ballOneRef = React.useRef();
    const ballTwoRef = React.useRef();

    React.useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        tl.to(ballOneRef.current, {
            x: -2,
            y: 2,
            duration: 1,
            ease: 'power1.inOut',
        });

        tl.to(ballTwoRef.current, {
            x: -2,
            y: 2,
            duration: 1,
            ease: 'power1.inOut',
        }, '<');

        tl.to(ballOneRef.current, {
            x: 2,
            y: -2,
            duration: 1,
            ease: 'power1.inOut',
        });

        tl.to(ballTwoRef.current, {
            x: 2,
            y: -2,
            duration: 1,
            ease: 'power1.inOut',
        }, '<');

        tl.to(ballOneRef.current, {
            x: 2,
            y: 2,
            duration: 1,
            ease: 'power1.inOut',
        });

        tl.to(ballTwoRef.current, {
            x: 2,
            y: 2,
            duration: 1,
            ease: 'power1.inOut',
        }, '<');

        tl.to(ballOneRef.current, {
            x: 0,
            y: -2,
            duration: 1,
            ease: 'power1.inOut',
        });

        tl.to(ballTwoRef.current, {
            x: 0,
            y: -2,
            duration: 1,
            ease: 'power1.inOut',
        }, '<');
    });

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);
    
    return (
        <AnimatedLogoRoot as={ component } className={ clsx(classes.root, className) }>
            <Logo className={ classes.logo } />
            <AnimatedLogoBallsWrap className={ classes.ballsWrap }>
                <AnimatedLogoBall className={ classes.ball } ref={ ballOneRef } />
                <AnimatedLogoBall className={ classes.ball } ref={ ballTwoRef } />
            </AnimatedLogoBallsWrap>
        </AnimatedLogoRoot>
    )
}

export default AnimatedLogo;