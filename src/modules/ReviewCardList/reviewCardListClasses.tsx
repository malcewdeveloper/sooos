import { generateUtilityClass, generateUtilityClasses } from "@mui/material";


interface IReviewCardListClasses {
    root: string;
}

export function getReviewCardListClass(slot: string): string {
    return generateUtilityClass('ReviewCardList', slot, 'ReviewCardList')
}

const reviewCardListClasses: IReviewCardListClasses = generateUtilityClasses('ReviewCardList', [
    'root'
], 'ReviewCardList');

export default reviewCardListClasses;