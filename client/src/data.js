import { nanoid } from 'nanoid';

//Home Image Slider Images
// import malaysia from './assets/images/malaysia.jpg';
// import singapore from './assets/images/singapore.jpg';
// import thailand from './assets/images/thailand.jpg';
// import veitnam from './assets/images/vietnam.jpg';
// import dubai from './assets/images/dubai.jpg';


//Blog Image
import blogMountain from './assets/images/mountainsBlog.jpg'

//Driver
import driverOneImg from './assets/images/driverOne.jpg'
import driverTwoImg from './assets/images/driverTwo.jpg'
import driverThreeImg from './assets/images/driverThree.jpg'
import driverFourImg from './assets/images/driverFour.jpg'
import driverFiveImg from './assets/images/driverFive.jpg'
import driverSixImg from './assets/images/driverSix.jpg'
import driverSevenImg from './assets/images/driverSeven.jpg'
import driverEightImg from './assets/images/driverEight.jpg'
import driverNineImg from './assets/images/driverNine.jpg'


export const homeProductData = [
    {
        id:nanoid(),
        title:"Malaysia Heritage Tour",
        image: "https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg",
        desc:" Uncover the rich history and cultural heritage of Malaysia with our expertly guided tour. From the colonial architecture of George Town to the ancient ruins of Melaka, this journey will immerse you in the heart and soul of Malaysia"
    },
    {
        id:nanoid(),
        title:"Thailand Island Escape",
        image: "https://i.postimg.cc/zXZjTFND/pexels-oleksandr-p-1007657.jpg",
        desc:"Embark on a tropical getaway with our island-hopping tour of Thailand's most picturesque destinations. Snorkel in the crystal-clear waters of Koh Phi Phi, relax on the pristine beaches of Koh Samui, and experience the laid-back island life that Thailand is famous for.",
    },
    {
        id:nanoid(),
        title:"Singapore City Explorer",
        image: "https://i.postimg.cc/MTxWWDnb/pexels-kin-pastor-777059.jpg",
        desc:"Delve into the vibrant cityscape of Singapore with our comprehensive city tour. From the iconic Merlion Park to the bustling streets of Chinatown, this tour showcases the best that Singapore has to offer, ensuring an unforgettable experience for all.",    
    },
    {
        id:nanoid(),
        title:"Dubai Desert Safari and Bedouin Camp Experience",
        image: "https://i.postimg.cc/NjTxf9hK/pexels-yasin-gdu-2867769.jpg",
        desc:"Embark on an exhilarating desert safari adventure through Dubai's golden sands. Experience the thrill of dune bashing as skilled drivers navigate the undulating desert terrain",    
    },
    {
        id:nanoid(),
        title:"Vietnam: Ha Long Bay Cruise",
        image: "https://i.postimg.cc/8k740Ppn/gary-cacciatore-n-T0-Ds-Yc-Xbb-Y-unsplash.jpg",
        desc:"Set sail on a mesmerizing cruise through the breathtaking landscapes of Ha Long Bay, a UNESCO World Heritage Site. Marvel at the towering limestone karsts rising majestically from the emerald waters as you glide past secluded coves, hidden caves, and floating fishing villages.",    
    },
]

export const homeImgViwerData = [
    
    {
        id: nanoid(),
        img:'/assets/images/malaysia.jpg',
        title: "Malaysia",
        subTitle:"Find your perfect vacation"
    },
    {
        id: nanoid(),
        img:'/assets/images/singapore.jpg',
        title: "Singapore",
        subTitle:"Visit the beautiful city"
    },
    {
        id: nanoid(),
        img:'/assets/images/thailand.jpg',
        title: "Thailand",
        subTitle:"Visit the beautiful landscape"
    },
    {
        id: nanoid(),
        img:'/assets/images/veitnam.jpg',
        title: "Veitnam",
        subTitle:"Visit the beautiful city"
    },
    {
        id: nanoid(),
        img:'/assets/images/dubai.jpg',
        title: "Dubai",
        subTitle:"Visit the beautiful city"
    },
    
]

export const homeCountryData = [
    {
        id: nanoid(),
        img: "https://i.postimg.cc/Gt2x7xkb/malaysia.jpg",
        title: "Malaysia",
        slug:"malaysia"
    },
    {
        id: nanoid(),
        img: "https://i.postimg.cc/L6JVjv9T/thailand.jpg",
        title: "Thailand",
        slug:"thailand"
    },
    {
        id: nanoid(),
        img: "https://i.postimg.cc/WpWnDxvz/singapore.jpg",
        title: "Singapore",
        slug:"singapore"
    },
    {
        id: nanoid(),
        img: "https://i.postimg.cc/q7swzRJH/vietnam.jpg",
        title: "Vietnam",
        slug:"vietnam"
    },
    {
        id: nanoid(),
        img: "https://i.postimg.cc/gJGDRWjX/dubai.jpg",
        title: "Dubai",
        slug:"dubai"
    },


]


export const dealsAndDiscountData = [
    {
        id:nanoid(),
        title: "Adventures in Japan",
        desc:"Get an unforgettable experience from each of our trips! Travel with us!",
        image: "https://i.postimg.cc/ZYrjJ3H6/japan-Adventure.jpg"
    },
    {
        id:nanoid(),
        title: "Extreme Madagascar",
        desc:"Enjoy each of our tours!",
        image: "https://i.postimg.cc/hPsrdBHj/madagascar.jpg"
    },
    {
        id:nanoid(),
        title: "Amazing Colombia",
        desc:"Enjoy each of our tours!",
        image: "https://i.postimg.cc/RV4dhFpy/colombia.jpg"
    },
    {
        id:nanoid(),
        title: "Aristocratic Lithuania",
        desc:"Get an unforgettable experience from each of our trips! Travel with us!",
        image: "https://i.postimg.cc/dV09RfY9/lituanina.jpg"
    },
]


export const tourCategoryData = [
    {
        id:nanoid(),
        title:"Malaysia",
        desc:"Dive into the melting pot of cultures, flavors, and landscapes that Malaysia offers. From the iconic Petronas Twin Towers in Kuala Lumpur to the breathtaking islands of Langkawi, Malaysia is a treasure trove waiting to be explored.",
        imgUrl:"https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg"
    },
    {
        id:nanoid(),
        title:"Thailand",
        desc:"Experience the magic of Thailand, where ancient traditions blend seamlessly with modern marvels. Whether you're wandering through the historic temples of Bangkok or island-hopping through the turquoise waters of Phuket, Thailand promises adventure at every turn.",
        imgUrl:"https://i.postimg.cc/W4B71NYb/pexels-pixabay-208444.jpg"
    },
    {
        id:nanoid(),
        title:"Singapore",
        desc:" Discover the allure of Singapore, where skyscrapers meet lush greenery and vibrant neighborhoods. Indulge in a sensory journey through the city's diverse culinary scene, explore the stunning Gardens by the Bay, or shop 'til you drop on Orchard Road.",
        imgUrl:"https://i.postimg.cc/MTxWWDnb/pexels-kin-pastor-777059.jpg"
    },
    {
        id:nanoid(),
        title:"Vietnam",
        desc:"Immerse yourself in the rich history and breathtaking landscapes of Vietnam. From the bustling streets of Hanoi to the picturesque beauty of Ha Long Bay and the vibrant culture of Ho Chi Minh City, Vietnam offers a truly unforgettable travel experience.",
        imgUrl:"https://i.postimg.cc/YS8fY2Gz/pexels-duytrg-truong-20725259.jpg"
    },
    {
        id:nanoid(),
        title:"Dubai",
        desc:"Enter a world of luxury and opulence in Dubai, where futuristic skyscrapers stand tall against the golden desert backdrop. Marvel at the architectural wonders of Burj Khalifa, indulge in shopping extravaganzas at Dubai Mall, or embark on a desert safari for an adrenaline-pumping adventure.",
        imgUrl:"https://i.postimg.cc/2SQxj7CJ/pexels-the-lazy-artist-gallery-1089645.jpg"
    },
]


export const whyTourData = [
    {
        id:nanoid(),
        title: "2000+ Our Worldwide Guide",
        imgUrl:"/assets/images/whyTravelOne.jpg",
        iconUrl:"/assets/images/whyTravelIconOne.png"
    },
    {
        id:nanoid(),
        title: "100% Trusted Tour Agency",
        imgUrl:"/assets/images/whyTravelTwo.jpg",
        iconUrl:"/assets/images/whyTravelIconTwo.png"
    },
    {
        id:nanoid(),
        title: "12+ Years Of Travel Experience",
        imgUrl:"/assets/images/whyTravelThree.jpg",
        iconUrl:"/assets/images/whyTravelIconTwo.png"
    },
    {
        id:nanoid(),
        title: "98% Our Travelers Are Happy",
        imgUrl:"/assets/images/whyTravelFour.jpg",
        iconUrl:"/assets/images/whyTravelIconThree.png"
    },
]

export const seasonalTourData = [
    {
        id:nanoid(),
        season:"WINTER",
        title:"Happy Winter Holidays",
        desc:"A business strategy is the means by which it sets out to achieve its desired ends. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        imgUrl:"https://i.postimg.cc/85DFGyMP/62c44c55880581c04ede477b-france-1973527-640.jpg"
    },
    {
        id:nanoid(),
        season:"SPRING",
        title:"A Picturesque Trip In The Spring",
        desc:"If you have been selected for a business audit, here is what you need to know. If you have been selected, duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        imgUrl:"https://i.postimg.cc/g2CXSc0h/62c44c51a41e2eb8fc6b0f8f-china-5017648-640.jpg"
    },
    {
        id:nanoid(),
        season:"SUMMER",
        title:"Summer Is The Time For Vacation",
        desc:"Restructuring your company could restore its viability and improve its liquidity position. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        imgUrl:"https://i.postimg.cc/cLgtBtdZ/62c44c52214ae02a7c05ca61-hallstatt-3609863-640.jpg"
    },
    {
        id:nanoid(),
        season:"AUTUMN",
        title:"Autumn Fairy Tale",
        desc:"We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        imgUrl:"https://i.postimg.cc/yN0JwqJb/62c44c52ba7addf80c6d9d43-central-park-1804588-640.jpg"
    },
]


export const guidesData = [
    {
        id:nanoid(),
        name:"Ayyanar",
        imgUrl:driverOneImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Yuvanesh",
        imgUrl:driverTwoImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Karthi",
        imgUrl:driverThreeImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Nantha",
        imgUrl:driverFourImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Siva",
        imgUrl:driverFiveImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Vikram",
        imgUrl:driverSixImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Aru",
        imgUrl:driverSevenImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Segar",
        imgUrl:driverEightImg,
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"MJ",
        imgUrl:driverNineImg,
        title:"Driver Cum Guide"
    },
]


export const toursImgViwerData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/J0pFZzYd/pexels-riccardo-789380-1.jpg",
        title: "Tours",
        subTitle:"All Tours for you"
    },
]

export const toursProductData = [
    {
        id:nanoid(),
        title:"French Autum",
        image: "https://i.postimg.cc/xC3rkW9w/pexels-pixabay-532826.jpg",
        tourPlace:"City Tours",
        country:"France",
        duration:"5 days"
    },
    {
        id:nanoid(),
        title:"Grand Switzerland",
        image: "https://i.postimg.cc/1RMhyhC6/pexels-ketan-kumawat-724948.jpg",
        tourPlace:"Mountain, Snow & Ice",
        country:"Switzerland",
        duration:"6 days"
    },
    {
        id:nanoid(),
        title:"Discover Japan",
        image: "https://i.postimg.cc/j2xpyZ5L/pexels-belle-co-402028.jpg",
        tourPlace:"City Tour",
        country:"Japan",
        duration:"5 days"
    },
    {
        id:nanoid(),
        title:"Hong Kong",
        image: "https://i.postimg.cc/HxgDkp10/pexels-jimmy-chan-2537536.jpg",
        tourPlace:"Iconic, City Tour",
        country:"Hong Kong",
        duration:"8 hours"
    },
    {
        id:nanoid(),
        title:"Great Britain Travel",
        image: "https://i.postimg.cc/7hKp90GX/pexels-oltion-bregu-338454.jpg",
        tourPlace:"City Tour",
        country:"London",
        duration:"5 days"
    },
    {
        id:nanoid(),
        title:"Prague Trip",
        image: "https://i.postimg.cc/8P585K9Y/pexels-pixabay-161077.jpg",
        tourPlace:"City Tour, History Park",
        country:"Czech Republic",
        duration:"5 days"
    },
]


export const destinationImgViwerData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/wTMq9LYC/pexels-pixabay-36717.jpg",
        title: "Destination",
        subTitle:"Explore tours by destination"
    },
]


export const contactImgViwerData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/sxV99pbV/pexels-atbo-245240.jpg",
        title: "ContactUs",
        subTitle:"Get in touch"
    },
]


export const aboutUsImgViwerData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/zXZjTFND/pexels-oleksandr-p-1007657.jpg",
        title: "AboutUs",
        subTitle:"Travelvago"
    },
]


//Blog

export const blogImgViwerData = [
    {
        id: nanoid(),
        img:blogMountain,
        title: "OurBlog",
        subTitle:"News from the world of tourism"
    },
]


export const blogsData = [
    {
        id: nanoid(),
        img:"https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg",
        title: "The Ultimate First-Timer's Guide to Exploring Malaysia",
        desc:"Welcome to Malaysia  a land of vibrant cultures, breathtaking landscapes, and unforgettable experiences. Whether you're a history buff, an adventure seeker, or a food enthusiast, Malaysia has something for everyone. This guide is your ticket to navigating the wonders of this captivating country with ease.",
        slug:"the-ultimate-first-timers-guide-to-exploring-malaysia",
        detailedData:[
            {
                id:nanoid(),
                title:"Visa and Entry Requirements",
                desc:"Before embarking on your Malaysian adventure, ensure you check the visa requirements based on your nationality. Most visitors are granted a visa-free entry for a certain period, but it's essential to verify the latest regulations to avoid any last-minute surprises."
            },
            {
                id:nanoid(),
                title:"Best Time to Visit",
                desc:"Malaysia enjoys a tropical climate, with warm temperatures year-round. The best time to visit depends on your preferences and activities. The dry season, from May to September, is ideal for exploring the beaches and islands on the east coast, while the west coast experiences its dry season from November to April."
            },
            {
                id:nanoid(),
                title:"Packing Essentials",
                desc:"When packing for Malaysia, keep in mind the warm and humid weather. Lightweight, breathable clothing is a must, along with sunscreen, a hat, and insect repellent. Don't forget to pack comfortable walking shoes, as you'll likely be exploring bustling cities and trekking through lush jungles."
            },
            {
                id:nanoid(),
                title:"Health and Safety",
                desc:"Ensure you're up to date on routine vaccinations before traveling to Malaysia. It's also advisable to drink bottled water and avoid street food stalls with questionable hygiene practices. While Malaysia is generally safe for travelers, exercise caution in crowded areas and be mindful of your belongings."
            },
            {
                id:nanoid(),
                title:"Transportation",
                desc:"Getting around Malaysia is convenient, thanks to its well-developed transportation network. From modern highways to efficient public transport systems, including buses, trains, and even domestic flights, traveling between cities and regions is a breeze."
            },
            {
                id:nanoid(),
                title:"Accommodation",
                desc:"Malaysia offers a wide range of accommodation options to suit every budget and preference. Whether you prefer luxury resorts, boutique hotels, or budget-friendly hostels, you'll find plenty of choices in bustling cities like Kuala Lumpur or idyllic beach destinations like Langkawi."
            },
            {
                id:nanoid(),
                title:"Cultural Etiquette",
                desc:"Respect for local customs and traditions is key when visiting Malaysia. Dress modestly when visiting religious sites, remove your shoes before entering someone's home, and greet locals with a warm smile and a friendly 'Selamat sejahtera' (meaning 'peace and prosperity')."
            },
            {
                id:nanoid(),
                title:"Must-See Destinations",
                desc:"No trip to Malaysia is complete without visiting iconic landmarks like the Petronas Twin Towers in Kuala Lumpur, the UNESCO-listed George Town in Penang, and the stunning beaches of the Perhentian Islands. Be sure to explore the rich cultural heritage of Melaka and the lush rainforests of Taman Negara."
            },
            {
                id:nanoid(),
                title:"Local Cuisine",
                desc:"Malaysia is a paradise for food lovers, with its diverse culinary influences and mouthwatering dishes. Don't miss out on sampling local delicacies such as nasi lemak, roti canai, and laksa. Be adventurous and try street food from bustling night markets for an authentic Malaysian dining experience."
            },
            {
                id:nanoid(),
                title:"Language and Communication",
                desc:"While Bahasa Malaysia is the official language, English is widely spoken and understood, especially in tourist areas. Learning a few basic phrases in Bahasa Malaysia, such as 'terima kasih' (thank you) and 'tolong' (please), can go a long way in enhancing your travel experience."
            },
            {
                id:nanoid(),
                title:"Conclusionn",
                desc:"With its fascinating blend of cultures, breathtaking natural beauty, and mouthwatering cuisine, Malaysia promises an unforgettable adventure for first-time visitors. Embrace the warmth and hospitality of its people as you explore the diverse wonders of this enchanting country."
            },
        ]
    },
    {
        id: nanoid(),
        img:"https://i.postimg.cc/W4B71NYb/pexels-pixabay-208444.jpg",
        title: "9 Best Ways to Celebrate Summer in Thailand",
        desc:"As the temperature rises and the sun shines brighter, it's time to embrace the spirit of summer in Thailand! From pristine beaches to vibrant festivals, Thailand offers a plethora of activities to make your summer unforgettable. Whether you're a beach lover, a culture enthusiast, or an adventure seeker, there's something for everyone in the Land of Smiles. Let's dive into the nine best ways to celebrate summer in Thailand.",
        slug:"9-best-ways-to-celebrate-summer-in-thailand",
        detailedData:[
            {
                id:nanoid(),
                title:"Island Hopping in the Andaman Sea",
                desc:"Kick off your summer adventure by exploring the breathtaking islands of the Andaman Sea. From the famous Phi Phi Islands to the lesser-known gems like Koh Lanta and Koh Yao Noi, each island boasts crystal-clear waters, white sandy beaches, and vibrant marine life. Snorkel, dive, or simply relax under the shade of a palm tree – the choice is yours!"
            },
            {
                id:nanoid(),
                title:"Songkran Festival",
                desc:"Experience the world's largest water fight during Thailand's Songkran Festival, celebrated in April. Join the lively street parties, where locals and tourists alike engage in friendly water battles to wash away the past year's misfortunes and welcome the Thai New Year with joy and laughter."
            },
            {
                id:nanoid(),
                title:"Chiang Mai Flower Festival",
                desc:"Immerse yourself in a riot of colors at the Chiang Mai Flower Festival, held annually in February. Marvel at the stunning floral displays, intricately designed floats, and vibrant parades showcasing the beauty of Northern Thai culture. Don't forget to capture Instagram-worthy photos amidst a sea of blossoms!"
            },
            {
                id:nanoid(),
                title:"Muay Thai Training Camps",
                desc:"Channel your inner warrior and embark on a Muay Thai training camp adventure. Whether you're a beginner or a seasoned fighter, Thailand's renowned Muay Thai camps offer professional training in a tropical paradise setting. Strengthen your body, sharpen your skills, and unleash your potential under the guidance of experienced trainers."
            },
            {
                id:nanoid(),
                title:"Temple Hopping in Bangkok",
                desc:"Discover the rich cultural heritage of Thailand by exploring the ancient temples of Bangkok. Marvel at the majestic beauty of Wat Phra Kaew, home to the revered Emerald Buddha, and admire the intricate architecture of Wat Arun, the Temple of Dawn. Don't miss the chance to witness the mesmerizing evening chants at Wat Pho, the Temple of the Reclining Buddha."
            },
            {
                id:nanoid(),
                title:"Night Markets and Street Food",
                desc:"Indulge your senses in the vibrant atmosphere of Thailand's night markets and savor the tantalizing flavors of Thai street food. From the bustling stalls of Bangkok's Chatuchak Weekend Market to the aromatic delicacies of Chiang Mai's Night Bazaar, experience a culinary adventure like no other. Sample exotic fruits, spicy curries, and delectable desserts as you navigate through a maze of colors and aromas."
            },
            {
                id:nanoid(),
                title:"Elephant Sanctuaries",
                desc:"Embark on a journey of compassion and conservation at Thailand's ethical elephant sanctuaries. Interact with these gentle giants in their natural habitat, feed them, bathe them, and learn about their rehabilitation journey. Choose responsible elephant experiences that prioritize the well-being of the animals and support sustainable tourism practices."
            },
            {
                id:nanoid(),
                title:"Waterfalls and National Parks",
                desc:"Escape the heat and reconnect with nature at Thailand's picturesque waterfalls and national parks. Trek through lush jungles, swim in refreshing pools, and marvel at the beauty of cascading waterfalls such as Erawan Falls in Kanchanaburi and Namtok Phlio in Chanthaburi. Embrace the serenity of the great outdoors and immerse yourself in Thailand's natural wonders."
            },
            {
                id:nanoid(),
                title:"Full Moon Parties in Koh Phangan",
                desc:"Dance the night away under the glow of the full moon at Koh Phangan's legendary Full Moon Parties. Join thousands of revelers from around the world as they gather on the shores of Haad Rin Beach to celebrate life, music, and freedom. Lose yourself in the electrifying beats of international DJs, indulge in fire shows, and create memories that will last a lifetime."
            },
            {
                id:nanoid(),
                title:"Language and Communication",
                desc:"While Bahasa Malaysia is the official language, English is widely spoken and understood, especially in tourist areas. Learning a few basic phrases in Bahasa Malaysia, such as 'terima kasih' (thank you) and 'tolong' (please), can go a long way in enhancing your travel experience."
            },
            {
                id:nanoid(),
                title:"Conclusion",
                desc:"With its diverse landscapes, rich cultural heritage, and warm hospitality, Thailand beckons travelers to embrace the magic of summer like never before. Whether you're seeking adventure, relaxation, or cultural immersion, Thailand offers endless possibilities for a summer getaway you'll cherish forever. So pack your bags, embark on an unforgettable journey, and let the wonders of Thailand ignite your spirit of adventure this summer!"
            },
        ]
    },
    {
        id: nanoid(),
        img:"https://i.postimg.cc/tgFqQf44/pexels-pixabay-67559-1.jpg",
        title: "13 Compelling Reasons to Make Malaysia Your Next Vacation Spot",
        desc:"Did you know that Malaysia ranks among the top backpacking destinations in Southeast Asia? Overflowing with captivating attractions and experiences, it's a must-visit destination to add to your travel itinerary. If you need convincing, here are thirteen irresistible charms of this gem in Southeast Asia.",
        slug:"13-compelling-reasons-to-make-malaysia-your-next-vacation-spot",
        detailedData:[
            {
                id:nanoid(),
                title:"Island Hopping in the Andaman Sea",
                desc:"Kick off your summer adventure by exploring the breathtaking islands of the Andaman Sea. From the famous Phi Phi Islands to the lesser-known gems like Koh Lanta and Koh Yao Noi, each island boasts crystal-clear waters, white sandy beaches, and vibrant marine life. Snorkel, dive, or simply relax under the shade of a palm tree – the choice is yours!"
            },
            {
                id:nanoid(),
                title:"Petronas Twin Towers",
                desc:"Rising to an impressive height of 452 meters, the Petronas Twin Towers held the title of the world's tallest building from 1998 to 2004. Take a lift to the 86th-floor observation deck for a breathtaking view of Kuala Lumpur."
            },
            {
                id:nanoid(),
                title:"Food Paradise",
                desc:"Malaysia offers a culinary adventure like no other, with an array of delectable dishes at affordable prices. Whether you're dining at a street food cart, hawker center, café, or restaurant, you'll be treated to a diverse selection of Malay, Chinese, Indian, and Thai cuisine."
            },
            {
                id:nanoid(),
                title:"Multicultural Harmony",
                desc:"Experience the harmonious coexistence of various cultures as you stroll through the streets of Malaysia. From mosques to Chinese temples and churches, Malaysia celebrates festivals like Christmas, Chinese New Year, and Hari Raya with enthusiasm, regardless of ethnic or religious background."
            },
            {
                id:nanoid(),
                title:"Blue Ocean, White Sand",
                desc:"Malaysia boasts stunning beaches with crystal-clear waters and powdery white sands. Destinations like Langkawi, Perhentian Islands, Rendang Island, and Sabah offer idyllic settings for beach lovers."
            },
            {
                id:nanoid(),
                title:"Atas English Tea",
                desc:"Head to Cameron Highlands for a taste of Southeast Asian English tea amidst lush landscapes and Malaysia's largest tea plantation."
            },
            {
                id:nanoid(),
                title:"Malacca World Heritage",
                desc:"Explore the rich historical and cultural heritage of Malacca, a UNESCO World Heritage Site, dotted with colonial-era buildings, Dutch Square, and charming riverside walks."
            },
            {
                id:nanoid(),
                title:"Kinabalu National Park",
                desc:"Discover the natural wonders of Kinabalu National Park, home to diverse flora and fauna, including over 5,000 plant species. Visitors can indulge in activities like mountain climbing, rock climbing, paragliding, and relaxing in hot springs."
            },
            {
                id:nanoid(),
                title:"World's Largest Cave",
                desc:"Explore the awe-inspiring Gunung Mulu National Park, home to the world's largest known underground cave system, showcasing stunning karst landscapes and high biodiversity."
            },
            {
                id:nanoid(),
                title:"The Iban People",
                desc:"Learn about the traditional customs and way of life of the Iban people, known for their past reputation as headhunters. Today, they preserve their cultural heritage while embracing modern amenities."
            },
            {
                id:nanoid(),
                title:"World's Oldest Rainforest",
                desc:"Immerse yourself in the ancient Taman Negara, one of the world's oldest rainforests, teeming with rare wildlife and vegetation."
            },
            {
                id:nanoid(),
                title:"Southeast Asia's Largest Buddhist Temple",
                desc:"Visit the magnificent Kek Lok Si Temple in Penang, the largest Buddhist temple in Southeast Asia, known for its elaborate Chinese New Year celebrations."
            },
            {
                id:nanoid(),
                title:"Sepang International Circuit",
                desc:"Experience the adrenaline rush at Sepang International Circuit, where you can enjoy go-karting on tracks frequented by international racing stars."
            },
            {
                id:nanoid(),
                title:"Diver's Paradise",
                desc:"Explore the vibrant underwater world of Sipadan, one of the world's top dive sites, boasting an abundance of marine life and stunning coral reefs."
            },
            {
                id:nanoid(),
                title:"Conclusion",
                desc:"Whether you're seeking adventure, cultural immersion, or relaxation, Malaysia offers something for every type of traveler."
            },
        ]
    },
]


//Thailand Page
export const thailandPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/W4B71NYb/pexels-pixabay-208444.jpg",
        title: "Thailand",
        subTitle:"Find your perfect vacation"
    },
    {
        id: nanoid(),
        img:"https://i.postimg.cc/zXZjTFND/pexels-oleksandr-p-1007657.jpg",
        title: "Thailand",
        subTitle:"Find your perfect vacation"
    },
]


//Malaysia Page
export const malaysiaPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/Gt2x7xkb/malaysia.jpg",
        title: "Malaysia",
        subTitle:"Find your perfect vacation"
    },
]


export const malaysiaPageDetailsData = [
    {
        id:nanoid(),
        title:"Explore Diverse Cities",
        desc:[
            "Begin your journey in Kuala Lumpur, the capital city, where modern skyscrapers stand alongside colonial buildings. Visit the iconic Petronas Twin Towers, explore the bustling street markets of Chinatown, and immerse yourself in the rich cultural heritage of Little India.",
            "Next, head to Penang, known as the 'Pearl of the Orient,' renowned for its mouthwatering street food, vibrant street art, and UNESCO-listed George Town. Don't miss the opportunity to sample the famous Penang laksa and wander through the historic streets lined with colorful colonial buildings.",
            "In Melaka, delve into the city's rich history as you explore its UNESCO World Heritage-listed sites, including A Famosa fortress, St. Paul's Hill, and the vibrant Jonker Street night market."
        ]
    },
    {
        id:nanoid(),
        title:"Nature's Playground",
        desc:[
            "Nature lovers will be captivated by Malaysia's natural beauty. Trek through the ancient rainforests of Taman Negara, one of the oldest tropical rainforests in the world, where you can spot exotic wildlife, hike through lush jungle trails, and experience the thrill of canopy walks.",
            "For a tranquil escape, head to the idyllic islands of Langkawi or Perhentian, where crystal-clear waters, white sandy beaches, and vibrant marine life await. Snorkel among colorful coral reefs, laze on secluded beaches, or embark on a sunset cruise for breathtaking views."
        ]
    },
    {
        id:nanoid(),
        title:"Cultural Melting Pot",
        desc:[
            "Experience Malaysia's cultural diversity through its festivals, cuisine, and traditions. Celebrate the vibrant Hindu festival of Thaipusam in Batu Caves, witness the dazzling lanterns during Chinese New Year in Penang, or join in the festivities of Hari Raya Aidilfitri, marking the end of Ramadan.",
            "Indulge your taste buds with Malaysia's eclectic culinary scene, from Malay satay and Chinese dim sum to Indian banana leaf rice and Nyonya laksa. Don't forget to try the national dish, nasi lemak, a fragrant rice dish served with spicy sambal, crispy anchovies, and peanuts."
        ]
    },
    {
        id:nanoid(),
        title:"Adventure Awaits",
        desc:[
            "For thrill-seekers, Malaysia offers a plethora of adventure activities. Scale the limestone cliffs of Batu Caves, go white-water rafting in the rivers of Sabah, or embark on a jungle safari in Borneo to spot orangutans in their natural habitat.",
            "Explore the mystical caves of Gunung Mulu National Park, go diving in the world-renowned dive sites of Sipadan, or conquer the challenging trails of Mount Kinabalu, Southeast Asia's highest peak."
        ]
    },
    {
        id:nanoid(),
        title:"Plan Your Malaysian Adventure Today",
        desc:[
            "With its diverse landscapes, rich culture, and warm hospitality, Malaysia beckons travelers to embark on an unforgettable journey. Whether you're seeking adventure, relaxation, or cultural immersion, Malaysia promises an experience like no other. Start planning your Malaysian adventure today and let the magic of this enchanting destination captivate your soul."
        ]
    },
]


//Terms and Condition
export const TermsAndConditionImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/d041cQsB/pexels-pixabay-33545.jpg",
        title: "Terms&Condition",
        subTitle:"Our Conditions"
    },
]


//Privacy
export const PrivacyImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/15ghtftj/pexels-flodahm-1139040.jpg",
        title: "PrivacyPolicy",
        subTitle:"Our Policy"
    },
    
]





//Singapore Page
export const singaporePageImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/WpWnDxvz/singapore.jpg",
        title: "Singapore",
        subTitle:"Find your perfect vacation"
    },
]

export const singaporePageDetailsData = [
    {
        id:nanoid(),
        title:"Discover Urban Marvels",
        desc:[
            "Begin your adventure in the heart of the city at Marina Bay, where iconic landmarks such as the Marina Bay Sands, Gardens by the Bay, and the futuristic Supertree Grove await. Marvel at the stunning architecture, stroll along the waterfront promenade, and immerse yourself in the dazzling light and sound show at Marina Bay Sands.",
            
            "Explore the vibrant neighborhoods of Chinatown, Little India, and Kampong Glam, where you can wander through colorful streets, visit ornate temples, and sample authentic cuisine at bustling hawker centers. Don't miss the chance to shop till you drop on Orchard Road, home to some of the best shopping malls and boutiques in Asia."
        ]
    },
    {
        id:nanoid(),
        title:"Gastronomic Delights",
        desc:[
            "Singapore's culinary scene is a melting pot of flavors, influenced by Chinese, Malay, Indian, and Peranakan cultures. Indulge in a culinary adventure as you feast on local delicacies such as Hainanese chicken rice, laksa, chili crab, and roti prata.",

            "For a unique dining experience, head to one of Singapore's Michelin-starred restaurants, where innovative chefs combine traditional techniques with modern flair to create unforgettable dishes. Or satisfy your cravings at one of the city's many hawker centers, where you can savor a variety of affordable street food delights."
        ]
    },
    {
        id:nanoid(),
        title:"Oases of Tranquility",
        desc:[
            "Escape the hustle and bustle of the city and discover Singapore's lush green spaces. Take a leisurely stroll through the UNESCO-listed Singapore Botanic Gardens, home to a stunning array of tropical flora, including the world-famous Orchid Garden.",

            "Explore the tranquil oasis of Sentosa Island, where pristine beaches, lush rainforests, and world-class attractions await. Relax on the sandy shores of Siloso Beach, soar above the treetops on the Sentosa Skyline Luge, or get up close and personal with marine life at the S.E.A. Aquarium."
        ]
    },
    {
        id:nanoid(),
        title:"Innovation and Entertainment",
        desc:[
            "Immerse yourself in the cutting-edge world of technology and innovation at the futuristic Gardens by the Bay, where you can marvel at the towering Supertrees, explore the Flower Dome and Cloud Forest, and experience the Garden Rhapsody light and sound show.",

            "For a dose of adrenaline-pumping fun, visit Universal Studios Singapore, where you can embark on thrilling rides, meet your favorite movie characters, and enjoy live entertainment for the whole family."
        ]
    },
    {
        id:nanoid(),
        title:"Plan Your Singaporean Adventure Today",
        desc:[
            "With its dynamic blend of culture, cuisine, and innovation, Singapore promises an unforgettable journey for every traveler. Whether you're seeking urban marvels, gastronomic delights, tranquil oases, or adrenaline-pumping entertainment, Singapore has something for everyone. Start planning your Singaporean adventure today and let the magic of this vibrant city-state captivate your senses."
        ]
    },
]


//Vietnam Page
export const vietnamPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/q7swzRJH/vietnam.jpg",
        title: "Vietnam",
        subTitle:"Find your perfect vacation"
    },
]



export const vietnamePageDetailsData = [
    {
        id:nanoid(),
        title:"Immerse Yourself in History and Culture",
        desc:[
            "Begin your journey in Hanoi, the capital city, where ancient temples, colonial architecture, and bustling markets coexist in harmony. Explore the maze-like streets of the Old Quarter, visit the iconic Hoan Kiem Lake, and delve into Vietnam's complex history at the Ho Chi Minh Mausoleum and the Imperial Citadel of Thang Long.",
             
            "In Hue, the former imperial capital, step back in time as you explore the UNESCO-listed Imperial City, with its majestic palaces, temples, and ancient walls. Cruise along the Perfume River, visit the Thien Mu Pagoda, and sample the city's renowned royal cuisine.",

            "Discover the charm of Hoi An, a UNESCO World Heritage-listed town renowned for its well-preserved ancient architecture, lantern-lit streets, and bustling markets. Wander through the enchanting alleys, take a cooking class to learn the secrets of Vietnamese cuisine, and immerse yourself in the vibrant atmosphere of the nightly lantern festival."
        ]
    },
    {
        id:nanoid(),
        title:"Natural Wonders Await",
        desc:[
            "Embark on a journey to Ha Long Bay, a UNESCO World Heritage site known for its emerald waters, towering limestone karsts, and floating villages. Cruise through the maze of islands aboard a traditional junk boat, kayak through hidden lagoons, and marvel at the breathtaking sunset over the bay.",
             
            "For a tranquil escape, head to the Mekong Delta, where lush rice paddies, winding waterways, and floating markets await. Cruise along the Mekong River, visit local villages to experience traditional rural life, and sample fresh tropical fruits at the vibrant markets.",
        ]
    },
    {
        id:nanoid(),
        title:"Culinary Delights",
        desc:[
            "Vietnam's culinary scene is a feast for the senses, with its aromatic herbs, bold flavors, and diverse regional specialties. Indulge in street food delights such as pho, banh mi, and fresh spring rolls, or savor a traditional Vietnamese feast with dishes like bun cha, cao lau, and banh xeo.",
             
            "Don't miss the opportunity to embark on a food tour, where you can taste your way through bustling markets, hidden alleyways, and family-run eateries, learning about the ingredients and techniques that make Vietnamese cuisine so unique.",
        ]
    },
   {
        id:nanoid(),
        title:"Immerse Yourself in History and Culture",
        desc:[
            "Begin your journey in Hanoi, the capital city, where ancient temples, colonial architecture, and bustling markets coexist in harmony. Explore the maze-like streets of the Old Quarter, visit the iconic Hoan Kiem Lake, and delve into Vietnam's complex history at the Ho Chi Minh Mausoleum and the Imperial Citadel of Thang Long.",
             
            "In Hue, the former imperial capital, step back in time as you explore the UNESCO-listed Imperial City, with its majestic palaces, temples, and ancient walls. Cruise along the Perfume River, visit the Thien Mu Pagoda, and sample the city's renowned royal cuisine.",

            "Discover the charm of Hoi An, a UNESCO World Heritage-listed town renowned for its well-preserved ancient architecture, lantern-lit streets, and bustling markets. Wander through the enchanting alleys, take a cooking class to learn the secrets of Vietnamese cuisine, and immerse yourself in the vibrant atmosphere of the nightly lantern festival."
        ]
    },
    {
        id:nanoid(),
        title:"Natural Wonders Await",
        desc:[
            "Embark on a journey to Ha Long Bay, a UNESCO World Heritage site known for its emerald waters, towering limestone karsts, and floating villages. Cruise through the maze of islands aboard a traditional junk boat, kayak through hidden lagoons, and marvel at the breathtaking sunset over the bay.",
             
            "For a tranquil escape, head to the Mekong Delta, where lush rice paddies, winding waterways, and floating markets await. Cruise along the Mekong River, visit local villages to experience traditional rural life, and sample fresh tropical fruits at the vibrant markets.",
        ]
    },
    {
        id:nanoid(),
        title:"Adventure Awaits",
        desc:[
            "For outdoor enthusiasts, Vietnam offers a wealth of adventure activities. Trek through the terraced rice fields of Sapa, home to colorful hill tribes and breathtaking mountain scenery. Cycle through the picturesque countryside of Ninh Binh, known as the 'Halong on land,' where limestone karsts rise from emerald rice paddies.",
             
            "Explore the rugged landscapes of Phong Nha-Ke Bang National Park, home to some of the largest caves in the world, including the spectacular Son Doong Cave. Go trekking in the remote mountains of Ha Giang, where you can meet ethnic minority communities and witness their traditional way of life.",
        ]
    },
    {
        id:nanoid(),
        title:"Plan Your Vietnamese Adventure Today",
        desc:[
            "With its captivating landscapes, rich culture, and warm hospitality, Vietnam invites travelers to embark on an unforgettable journey of discovery. Whether you're seeking history and culture, natural beauty, culinary delights, or adrenaline-pumping adventure, Vietnam promises an experience like no other. Start planning your Vietnamese adventure today and let the magic of this enchanting destination captivate your soul.",
        ]
    },
]


//Dubai Page
export const dubaiPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"https://i.postimg.cc/gJGDRWjX/dubai.jpg",
        title: "Dubai",
        subTitle:"Find your perfect vacation"
    },
]


export const dubaiPageDetailsData = [
    {
        id:nanoid(),
        title:"Iconic Landmarks",
        desc:[
            "Begin your journey with a visit to the iconic Burj Khalifa, the tallest building in the world, where you can ascend to the observation deck for breathtaking views of the city skyline and beyond. Marvel at the stunning architecture of the Burj Al Arab, often hailed as the most luxurious hotel in the world, with its sail-shaped silhouette dominating the coastline.",
             
            "Explore the vibrant neighborhoods of Old Dubai, where you can wander through the narrow alleyways of the historic Al Fahidi District, visit the Dubai Museum housed in the Al Fahidi Fort, and take a traditional abra ride across the Dubai Creek to the bustling souks of Deira."
        ]
    },
    {
        id:nanoid(),
        title:"Luxury and Shopping",
        desc:[
            "Indulge in a shopping extravaganza at the world-renowned Dubai Mall, where you can shop till you drop at over 1,200 retail outlets, including high-end designer boutiques, international brands, and local artisanal stores. Don't miss the opportunity to visit the Dubai Aquarium and Underwater Zoo, where you can marvel at thousands of aquatic creatures, including sharks and rays.",
             
            "For a taste of traditional Arabian hospitality, immerse yourself in the bustling souks of Dubai, where you can haggle for spices, textiles, gold, and other treasures. Experience the intoxicating sights, sounds, and scents of the Gold Souk, Spice Souk, and Perfume Souk, and uncover unique souvenirs to take home."
        ]
    },
    {
        id:nanoid(),
        title:"Desert Adventures",
        desc:[
            "Escape the city and embark on a desert safari adventure, where you can experience the thrill of dune bashing in a 4x4 vehicle, ride camels across the golden sands, and witness a mesmerizing desert sunset. Indulge in a traditional Arabian feast under the stars at a Bedouin-style desert camp, complete with live entertainment, henna painting, and shisha.",
             
            "For a unique perspective of the desert landscape, take to the skies in a hot air balloon and soar above the dunes at dawn, witnessing the breathtaking beauty of the desert as it comes to life with the first light of day."
        ]
    },
    {
        id:nanoid(),
        title:"Culinary Delights",
        desc:[
            "Dubai's culinary scene is as diverse as its population, with a tantalizing array of international cuisines to tempt your taste buds. Indulge in a fine dining experience at one of the city's Michelin-starred restaurants, where world-class chefs showcase their culinary creativity with innovative dishes and exotic flavors.",
             
            "For a more casual dining experience, head to one of Dubai's bustling food markets or street food stalls, where you can sample authentic Emirati cuisine, Middle Eastern delights, and global street food favorites."
        ]
    },
    {
        id:nanoid(),
        title:"Plan Your Dubai Adventure Today",
        desc:[
            "With its unique blend of modernity, tradition, and luxury, Dubai promises an unforgettable journey for every traveler. Whether you're seeking iconic landmarks, luxury shopping, desert adventures, or culinary delights, Dubai offers a wealth of experiences waiting to be discovered. Start planning your Dubai adventure today and let the magic of this glittering city in the desert captivate your imagination."
        ]
    },
]
