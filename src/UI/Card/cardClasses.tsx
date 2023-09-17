import { generateUtilityClass, generateUtilityClasses } from "@mui/material";

interface ICardClasses {
    root: string;
}

export function getCardClasses(slot: string): string {
    return generateUtilityClass('Card', slot, 'Card')
}

const cardClasses:ICardClasses = generateUtilityClasses('Card', [
    'root'
], 'Card');

export default cardClasses;