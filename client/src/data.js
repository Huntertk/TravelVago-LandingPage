import { nanoid } from 'nanoid';
import iceland from './assets/images/iceland.jpg';
import malaysia from './assets/images/malaysia.jpg';
import singapore from './assets/images/singapore.jpg';
import thailand from './assets/images/thailand.jpg';


import northAmeraicaImg from './assets/images/country/north-america.jpg';
import southAmeraicaImg from './assets/images/country/south-america.jpg';
import europeImg from './assets/images/country/europe.jpg';
import africaImg from './assets/images/country/africa.jpg';
import asiaImg from './assets/images/country/asia.jpg';
import australiaImg from './assets/images/country/australia.jpg';

export const homeImgViwerData = [
    {
        id: nanoid(),
        img:iceland,
        title: "Iceland"
    },
    {
        id: nanoid(),
        img:malaysia,
        title: "Malaysia"
    },
    {
        id: nanoid(),
        img:singapore,
        title: "Singapore"
    },
    {
        id: nanoid(),
        img:thailand,
        title: "Thailand"
    },
]

export const homeCountryData = [
    {
        id: nanoid(),
        img: northAmeraicaImg,
        title: "NorthAmerica"
    },
    {
        id: nanoid(),
        img: southAmeraicaImg,
        title: "SouthAmerica"
    },
    {
        id: nanoid(),
        img: europeImg,
        title: "Europe"
    },
    {
        id: nanoid(),
        img: asiaImg,
        title: "Asia"
    },
    {
        id: nanoid(),
        img: africaImg,
        title: "Africa"
    },
    {
        id: nanoid(),
        img: australiaImg,
        title: "Australia"
    },

]