import React from "react";
import logo from '../assets/svgs/logo.svg'
import facebook from '../assets/svgs/facebook.svg'
import google from '../assets/svgs/google.svg'
import arrow_white from '../assets/svgs/arrow_white.svg'
import menu from '../assets/svgs/menu.svg'
import duration from '../assets/svgs/duration.svg'
import ic_people from '../assets/svgs/ic_people.svg'
import ic_difficulty from '../assets/svgs/ic_difficulty.svg'
import promo from '../assets/svgs/promo.svg'
import basket from '../assets/svgs/basket.svg'
import search from '../assets/svgs/search.svg'
import settings from '../assets/svgs/settings.svg'
import support from '../assets/svgs/support.svg'

const SVGs = {
    logo,
    facebook,
    google,
    arrow_white,
    menu,
    duration,
    ic_difficulty,
    ic_people,
    promo,
    basket,
    search,
    settings,
    support
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}