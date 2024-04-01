import { nanoid } from 'nanoid';
import iceland from './assets/images/iceland.jpg';
import malaysia from './assets/images/malaysia.jpg';
import singapore from './assets/images/singapore.jpg';
import thailand from './assets/images/thailand.jpg';

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