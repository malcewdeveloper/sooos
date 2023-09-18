import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ICardContentClasses {
    root: string;
}

export function getCardContentClass(slot: string): string {
    return generateUtilityClass('CardContent', slot, 'CardContent');
}

const cardContentClasses: ICardContentClasses = generateUtilityClasses('CardContent', [
    'root'
], 'CardContent');

export default cardContentClasses;