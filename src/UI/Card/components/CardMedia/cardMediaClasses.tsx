import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ICardMediaClasses {
    root: string;
}

export function getCardMediaClass(slot: string): string {
    return generateUtilityClass('CardMedia', slot, 'CardMedia');
}

const cardMediaClasses: ICardMediaClasses = generateUtilityClasses('CardMedia', [
    'root'
], 'CardMedia');

export default cardMediaClasses;