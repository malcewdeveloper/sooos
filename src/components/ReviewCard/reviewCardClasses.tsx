import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IReviewCardClasses {
    root: string;
}

export function getReviewCardClass(slot: string): string {
    return generateUtilityClass('ReviewCard', slot, 'ReviewCard');
}

const reviewCardClasses: IReviewCardClasses = generateUtilityClasses('ReviewCard', [
    'root'
], 'ReviewCard');

export default reviewCardClasses;