import { generateUtilityClass, generateUtilityClasses } from "@mui/material";

interface ISliderMenuCLasses {
    root: string;
    prevButton: string;
    nextButton: string;
    disabledButton: string
}

export function getSliderMenuClass(slot: string): string {
    return generateUtilityClass('SliderMenu', slot, 'SliderMenu')
}

const sliderMenuClasses: ISliderMenuCLasses = generateUtilityClasses('SliderMenu', [
    'root',
    'prevButton',
    'nextButton',
    'disabledButton'
], 'SliderMenu');

export default sliderMenuClasses;