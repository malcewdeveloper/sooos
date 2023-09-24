import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IListClasses {
    root: string;
    header: string;
}

export function getListClass(slot: string): string {
    return generateUtilityClass('List', slot, 'List')
}

const listClasses: IListClasses = generateUtilityClasses('List', [
    'root',
    'header'
], 'List');

export default listClasses;