import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ICardHeaderClasses {
    root: string;
    avatar: string;
    action: string;
    content: string;
    title: string;
    subheader: string;
}

export function getCardHeaderClass(slot: string): string {
    return generateUtilityClass('CardHeader', slot, 'CardHeader');
}

const cardHeaderClasses: ICardHeaderClasses = generateUtilityClasses('CardHeader', [
    'root',
    'avatar',
    'action',
    'content',
    'title',
    'subheader'
], 'CardHeader');

export default cardHeaderClasses;