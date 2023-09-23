import React from "react";
import clsx from "clsx";
import Button from "../../UI/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { styled } from "@mui/material";
import { unstable_composeClasses as composeClasses } from "@mui/material";
import { getSliderMenuClass } from "./sliderMenuClasses";
import 'swiper/css/bundle';


const useUtilityClasses = (ownerState) => {
    const slots = {
        root: ['root'],
        prevButton: ['prevButton', ownerState.disabled && 'disabledButton'],
        nextButton: ['nextButton', ownerState.disabled && 'disabledButton']
    }

    return composeClasses(slots, getSliderMenuClass);
}

interface ISliderMenuProps {
    component?: React.ElementType;
    children?: React.ReactNode;
    className?: string;
    items?: { id: number, name: string }[]
}

const SliderMenuButtonNext = styled(Button)(({ theme }) => ({
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    '&:disabled': {
        opacity: 0,
        pointerEvents: 'none'
    },
    '&:before': {
        display: 'block',
        content: '""',
        width: '40px',
        height: '40px',
        margin: '0px',
        backgroundColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '50%',
        transition: 'background-color 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s'
    },
    '&:after': {
        display: 'block',
        width: '63px',
        height: '65px',
        content: '""',
        position: 'absolute',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(90deg, rgba(1, 1, 1, 0) 0%, rgba(1, 1, 1, 0.7) 40.25%, rgba(1, 1, 1, 0.965) 86.32%, rgb(1, 1, 1) 100%)'
    },
    zIndex: 100
}));

const SliderMenuButtonPrev = styled(Button)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    '&:disabled': {
        opacity: 0,
        pointerEvents: 'none'
    },
    '&:before': {
        display: 'block',
        content: '""',
        width: '40px',
        height: '40px',
        margin: '0px',
        backgroundColor: 'transparent',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '50%',
        transition: 'background-color 0.25s ease-in-out 0s, box-shadow 0.25s ease-in-out 0s'
    },
    '&:after': {
        display: 'block',
        width: '63px',
        height: '65px',
        content: '""',
        position: 'absolute',
        zIndex: -1,
        pointerEvents: 'none',
        backgroundImage: 'linear-gradient(-90deg, rgba(1, 1, 1, 0) 0%, rgba(1, 1, 1, 0.7) 40.25%, rgba(1, 1, 1, 0.965) 86.32%, rgb(1, 1, 1) 100%)'
    },
    zIndex: 100
}))

const SliderMenu:React.FC<ISliderMenuProps> = (props) => {
    const {  
        className,
        items,
        ...other
    } = props;

    const [selected, setSelected] = React.useState(0);
    const [swiper, setSwiper] = React.useState(null);

    const ownerState = {  };

    const classes = useUtilityClasses(ownerState);

    return (
        <Swiper
        onSwiper={setSwiper}
        modules={[FreeMode, Mousewheel, Navigation]}
        navigation={{
            nextEl: `.${classes.nextButton}`,
            prevEl: `.${classes.prevButton}`,
            disabledClass: 'SliderMenu-disabledButton',
        }}
        spaceBetween={12}
        mousewheel={true}
        slidesPerView="auto"
        watchOverflow={true}
        freeMode={true}
        className={  clsx(classes.root, className) } {...other}>
            { items.map((item, index) => (
                <SwiperSlide style={{ width: 'auto' }} key={ item.id }>
                    <Button variant='contained' onClick={ () => setSelected(index) } selected={index === selected}>{ item.name }</Button>
                </SwiperSlide>
            )) }
            <SliderMenuButtonPrev  onClick={() => swiper.slidePrev()} className={ classes.prevButton } />
            <SliderMenuButtonNext  onClick={() => swiper.slideNext()} className={ classes.nextButton } />
        </Swiper>
    )
}

export default SliderMenu;


