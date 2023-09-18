import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface ICardActionsClasses {
    root: string;
}

export function getCardActionClass(slot: string): string {
    return generateUtilityClass('CardActions', slot, 'CardActions');
}

const cardActionsClasses: ICardActionsClasses = generateUtilityClasses('CardActions', [
    'root'
], 'CardActions');

export default cardActionsClasses;