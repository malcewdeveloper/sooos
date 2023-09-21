import { generateUtilityClass, generateUtilityClasses } from '@mui/material';

interface IAnimatedLogoClasses {
    root: string;
    ball: string;
    ballsWrap: string;
    logo: string;
}

export function getAnimatedLogoClass(slot: string): string {
    return generateUtilityClass('AnimatedLogo', slot, 'AnimatedLogo')
}

const animatedLogoClasses: IAnimatedLogoClasses = generateUtilityClasses('AnimatedLogo', [
    'root',
    'ball',
    'ballsWrap',
    'logo'
], 'AnimatedLogo');

export default animatedLogoClasses;