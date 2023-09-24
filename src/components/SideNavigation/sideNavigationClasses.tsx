import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ISideNavigationClasses {
    root: string;
    ball: string;
    buttonSelected: string;
}

export function getSideNavigationClass(slot: string): string {
    return generateUtilityClass('SideNavigation', slot, 'SideNavigation');
}

const sideNavigationClasses: ISideNavigationClasses = generateUtilityClasses('SideNavigation', [
    'root',
    'ball',
    'buttonSelected'
], 'SideNavigation');

export default sideNavigationClasses;