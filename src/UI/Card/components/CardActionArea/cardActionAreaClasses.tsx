import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ICardActionAreaClasses {
    root: string;
}

export function getCardActionAreaClass(slot: string): string {
    return generateUtilityClass('CardActionArea', slot, 'CardActionArea');
}

const cardActionAreaClasses: ICardActionAreaClasses = generateUtilityClasses('CardActionArea', [
    'root'
], 'CardActionArea');

export default cardActionAreaClasses;