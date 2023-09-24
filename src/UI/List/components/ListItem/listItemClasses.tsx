import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IListItemClasses {
    root: string;
}

export function getListItemClass(slot: string): string {
    return generateUtilityClass('ListItem', slot, 'ListItem')
}

const listItemClasses: IListItemClasses = generateUtilityClasses('ListItem', [
    'root'
], 'ListItem');

export default listItemClasses;