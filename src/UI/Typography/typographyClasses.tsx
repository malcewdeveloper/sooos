import { generateUtilityClasses, generateUtilityClass } from '@mui/material';


interface ITypographyClasses {
    h1: string;
    h2: string;
    h3: string;
    body1: string;
    body2: string;
    button: string;
}

export function getTypographyClass(slot: string): string {
    return generateUtilityClass('Typography', slot);
}

const typographyClasses: ITypographyClasses = generateUtilityClasses('Typography', [
    'root',
    'h1',
    'h2',
    'h3',
    'body1',
    'body2',
    'button'
]);

export default typographyClasses;