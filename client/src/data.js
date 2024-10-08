import { nanoid } from 'nanoid';

//Home Image Slider Images
// import malaysia from './assets/images/malaysia.jpg';
// import singapore from './assets/images/singapore.jpg';
// import thailand from './assets/images/thailand.jpg';
// import veitnam from './assets/images/vietnam.jpg';
// import dubai from './assets/images/dubai.jpg';


//Blog Image
import blogMountain from './assets/images/mountainsBlog.jpg'



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
        img: "/assets/images/countryMalaysia.jpg",
        title: "Malaysia",
        slug:"malaysia"
    },
    {
        id: nanoid(),
        img: "/assets/images/countryThailand.jpg",
        title: "Thailand",
        slug:"thailand"
    },
    {
        id: nanoid(),
        img: "/assets/images/countrySingapore.jpg",
        title: "Singapore",
        slug:"singapore"
    },
    {
        id: nanoid(),
        img: "/assets/images/countryVietnam.jpg",
        title: "Vietnam",
        slug:"vietnam"
    },
    {
        id: nanoid(),
        img: "/assets/images/countryDubai.jpg",
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
        imgUrl:"/assets/images/categoryMalaysia.jpg"
    },
    {
        id:nanoid(),
        title:"Thailand",
        desc:"Experience the magic of Thailand, where ancient traditions blend seamlessly with modern marvels. Whether you're wandering through the historic temples of Bangkok or island-hopping through the turquoise waters of Phuket, Thailand promises adventure at every turn.",
        imgUrl:"/assets/images/categoryThailand.jpg"
    },
    {
        id:nanoid(),
        title:"Singapore",
        desc:" Discover the allure of Singapore, where skyscrapers meet lush greenery and vibrant neighborhoods. Indulge in a sensory journey through the city's diverse culinary scene, explore the stunning Gardens by the Bay, or shop 'til you drop on Orchard Road.",
        imgUrl:"/assets/images/categorySingapore.jpg"
    },
    {
        id:nanoid(),
        title:"Vietnam",
        desc:"Immerse yourself in the rich history and breathtaking landscapes of Vietnam. From the bustling streets of Hanoi to the picturesque beauty of Ha Long Bay and the vibrant culture of Ho Chi Minh City, Vietnam offers a truly unforgettable travel experience.",
        imgUrl:"/assets/images/categoryVietnam.jpg"
    },
    {
        id:nanoid(),
        title:"Dubai",
        desc:"Enter a world of luxury and opulence in Dubai, where futuristic skyscrapers stand tall against the golden desert backdrop. Marvel at the architectural wonders of Burj Khalifa, indulge in shopping extravaganzas at Dubai Mall, or embark on a desert safari for an adrenaline-pumping adventure.",
        imgUrl:"/assets/images/categoryDubai.jpg"
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
        imgUrl:"/assets/images/winter.jpg"
    },
    {
        id:nanoid(),
        season:"SPRING",
        title:"A Picturesque Trip In The Spring",
        desc:"If you have been selected for a business audit, here is what you need to know. If you have been selected, duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        imgUrl:"/assets/images/spring.jpg"
    },
    {
        id:nanoid(),
        season:"SUMMER",
        title:"Summer Is The Time For Vacation",
        desc:"Restructuring your company could restore its viability and improve its liquidity position. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        imgUrl:"/assets/images/summer.jpg"
    },
    {
        id:nanoid(),
        season:"AUTUMN",
        title:"Autumn Fairy Tale",
        desc:"We go deep to unlock insight and have the courage to act. We bring the right people together to challenge established thinking and drive transformation. We work with our clients to build the capabilities that enable organizations to achieve sustainable advantage.Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
        imgUrl:"/assets/images/autumn.jpg"
    },
]


export const guidesData = [
    {
        id:nanoid(),
        name:"Ayyanar",
        imgUrl:'/assets/images/driverOne.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Yuvanesh",
        imgUrl:'/assets/images/driverTwo.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Karthi",
        imgUrl:'/assets/images/driverThree.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Nantha",
        imgUrl:'/assets/images/driverFour.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Siva",
        imgUrl:'/assets/images/driverFive.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Vikram",
        imgUrl:'/assets/images/driverSix.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Aru",
        imgUrl:'/assets/images/driverSeven.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"Segar",
        imgUrl:'/assets/images/driverEight.jpg',
        title:"Driver Cum Guide"
    },
    {
        id:nanoid(),
        name:"MJ",
        imgUrl:'/assets/images/driverNine.jpg',
        title:"Driver Cum Guide"
    },
]


export const toursImgViwerData = [
    {
        id: nanoid(),
        img:"/assets/images/toursCoverImg.jpg",
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
        img:"/assets/images/destinationCoverImg.jpg",
        title: "Destination",
        subTitle:"Explore tours by destination"
    },
]


export const contactImgViwerData = [
    {
        id: nanoid(),
        img:"/assets/images/contactCoverImg.jpg",
        title: "ContactUs",
        subTitle:"Get in touch"
    },
]


export const aboutUsImgViwerData = [
    {
        id: nanoid(),
        img:"/assets/images/contactCoverImg.jpg",
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
                desc:[
                    "Before embarking on your Malaysian adventure, ensure you check the visa requirements based on your nationality. Most visitors are granted a visa-free entry for a certain period, but it's essential to verify the latest regulations to avoid any last-minute surprises."
                ]
            },
            {
                id:nanoid(),
                title:"Best Time to Visit",
                desc:[
                    "Malaysia enjoys a tropical climate, with warm temperatures year-round. The best time to visit depends on your preferences and activities. The dry season, from May to September, is ideal for exploring the beaches and islands on the east coast, while the west coast experiences its dry season from November to April."
                ]
            },
            {
                id:nanoid(),
                title:"Packing Essentials",
                desc:[
                    "When packing for Malaysia, keep in mind the warm and humid weather. Lightweight, breathable clothing is a must, along with sunscreen, a hat, and insect repellent. Don't forget to pack comfortable walking shoes, as you'll likely be exploring bustling cities and trekking through lush jungles."
                ]
            },
            {
                id:nanoid(),
                title:"Health and Safety",
                desc:[
                    "Ensure you're up to date on routine vaccinations before traveling to Malaysia. It's also advisable to drink bottled water and avoid street food stalls with questionable hygiene practices. While Malaysia is generally safe for travelers, exercise caution in crowded areas and be mindful of your belongings."
                ]
            },
            {
                id:nanoid(),
                title:"Transportation",
                desc:[
                    "Getting around Malaysia is convenient, thanks to its well-developed transportation network. From modern highways to efficient public transport systems, including buses, trains, and even domestic flights, traveling between cities and regions is a breeze."
                ]
            },
            {
                id:nanoid(),
                title:"Accommodation",
                desc:[
                    "Malaysia offers a wide range of accommodation options to suit every budget and preference. Whether you prefer luxury resorts, boutique hotels, or budget-friendly hostels, you'll find plenty of choices in bustling cities like Kuala Lumpur or idyllic beach destinations like Langkawi."
                ]
            },
            {
                id:nanoid(),
                title:"Cultural Etiquette",
                desc:[
                    "Respect for local customs and traditions is key when visiting Malaysia. Dress modestly when visiting religious sites, remove your shoes before entering someone's home, and greet locals with a warm smile and a friendly 'Selamat sejahtera' (meaning 'peace and prosperity')."
                ]
            },
            {
                id:nanoid(),
                title:"Must-See Destinations",
                desc:[
                    "No trip to Malaysia is complete without visiting iconic landmarks like the Petronas Twin Towers in Kuala Lumpur, the UNESCO-listed George Town in Penang, and the stunning beaches of the Perhentian Islands. Be sure to explore the rich cultural heritage of Melaka and the lush rainforests of Taman Negara."
                ]
            },
            {
                id:nanoid(),
                title:"Local Cuisine",
                desc:[
                    "Malaysia is a paradise for food lovers, with its diverse culinary influences and mouthwatering dishes. Don't miss out on sampling local delicacies such as nasi lemak, roti canai, and laksa. Be adventurous and try street food from bustling night markets for an authentic Malaysian dining experience."
                ]
            },
            {
                id:nanoid(),
                title:"Language and Communication",
                desc:[
                    "While Bahasa Malaysia is the official language, English is widely spoken and understood, especially in tourist areas. Learning a few basic phrases in Bahasa Malaysia, such as 'terima kasih' (thank you) and 'tolong' (please), can go a long way in enhancing your travel experience."
                ]
            },
            {
                id:nanoid(),
                title:"Conclusionn",
                desc:[
                    "With its fascinating blend of cultures, breathtaking natural beauty, and mouthwatering cuisine, Malaysia promises an unforgettable adventure for first-time visitors. Embrace the warmth and hospitality of its people as you explore the diverse wonders of this enchanting country."
                ]
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
                desc:[
                    "Kick off your summer adventure by exploring the breathtaking islands of the Andaman Sea. From the famous Phi Phi Islands to the lesser-known gems like Koh Lanta and Koh Yao Noi, each island boasts crystal-clear waters, white sandy beaches, and vibrant marine life. Snorkel, dive, or simply relax under the shade of a palm tree - the choice is yours!"
                ]
            },
            {
                id:nanoid(),
                title:"Songkran Festival",
                desc:[
                    "Experience the world's largest water fight during Thailand's Songkran Festival, celebrated in April. Join the lively street parties, where locals and tourists alike engage in friendly water battles to wash away the past year's misfortunes and welcome the Thai New Year with joy and laughter."
                ]
            },
            {
                id:nanoid(),
                title:"Chiang Mai Flower Festival",
                desc:[
                    "Immerse yourself in a riot of colors at the Chiang Mai Flower Festival, held annually in February. Marvel at the stunning floral displays, intricately designed floats, and vibrant parades showcasing the beauty of Northern Thai culture. Don't forget to capture Instagram-worthy photos amidst a sea of blossoms!"
                ]
            },
            {
                id:nanoid(),
                title:"Muay Thai Training Camps",
                desc:[
                    "Channel your inner warrior and embark on a Muay Thai training camp adventure. Whether you're a beginner or a seasoned fighter, Thailand's renowned Muay Thai camps offer professional training in a tropical paradise setting. Strengthen your body, sharpen your skills, and unleash your potential under the guidance of experienced trainers."
                ]
            },
            {
                id:nanoid(),
                title:"Temple Hopping in Bangkok",
                desc:[
                    "Discover the rich cultural heritage of Thailand by exploring the ancient temples of Bangkok. Marvel at the majestic beauty of Wat Phra Kaew, home to the revered Emerald Buddha, and admire the intricate architecture of Wat Arun, the Temple of Dawn. Don't miss the chance to witness the mesmerizing evening chants at Wat Pho, the Temple of the Reclining Buddha."
                ]
            },
            {
                id:nanoid(),
                title:"Night Markets and Street Food",
                desc:[
                    "Indulge your senses in the vibrant atmosphere of Thailand's night markets and savor the tantalizing flavors of Thai street food. From the bustling stalls of Bangkok's Chatuchak Weekend Market to the aromatic delicacies of Chiang Mai's Night Bazaar, experience a culinary adventure like no other. Sample exotic fruits, spicy curries, and delectable desserts as you navigate through a maze of colors and aromas."
                ]
            },
            {
                id:nanoid(),
                title:"Elephant Sanctuaries",
                desc:[
                    "Embark on a journey of compassion and conservation at Thailand's ethical elephant sanctuaries. Interact with these gentle giants in their natural habitat, feed them, bathe them, and learn about their rehabilitation journey. Choose responsible elephant experiences that prioritize the well-being of the animals and support sustainable tourism practices."
                ]
            },
            {
                id:nanoid(),
                title:"Waterfalls and National Parks",
                desc:[
                    "Escape the heat and reconnect with nature at Thailand's picturesque waterfalls and national parks. Trek through lush jungles, swim in refreshing pools, and marvel at the beauty of cascading waterfalls such as Erawan Falls in Kanchanaburi and Namtok Phlio in Chanthaburi. Embrace the serenity of the great outdoors and immerse yourself in Thailand's natural wonders."
                ]
            },
            {
                id:nanoid(),
                title:"Full Moon Parties in Koh Phangan",
                desc:[
                    "Dance the night away under the glow of the full moon at Koh Phangan's legendary Full Moon Parties. Join thousands of revelers from around the world as they gather on the shores of Haad Rin Beach to celebrate life, music, and freedom. Lose yourself in the electrifying beats of international DJs, indulge in fire shows, and create memories that will last a lifetime."
                ]
            },
            {
                id:nanoid(),
                title:"Language and Communication",
                desc:[
                    "While Bahasa Malaysia is the official language, English is widely spoken and understood, especially in tourist areas. Learning a few basic phrases in Bahasa Malaysia, such as 'terima kasih' (thank you) and 'tolong' (please), can go a long way in enhancing your travel experience."
                ]
            },
            {
                id:nanoid(),
                title:"Conclusion",
                desc:[
                    "With its diverse landscapes, rich cultural heritage, and warm hospitality, Thailand beckons travelers to embrace the magic of summer like never before. Whether you're seeking adventure, relaxation, or cultural immersion, Thailand offers endless possibilities for a summer getaway you'll cherish forever. So pack your bags, embark on an unforgettable journey, and let the wonders of Thailand ignite your spirit of adventure this summer!"
                ]
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
                desc:[
                    "Kick off your summer adventure by exploring the breathtaking islands of the Andaman Sea. From the famous Phi Phi Islands to the lesser-known gems like Koh Lanta and Koh Yao Noi, each island boasts crystal-clear waters, white sandy beaches, and vibrant marine life. Snorkel, dive, or simply relax under the shade of a palm tree - the choice is yours!"
                ]
            },
            {
                id:nanoid(),
                title:"Petronas Twin Towers",
                desc:[
                    "Rising to an impressive height of 452 meters, the Petronas Twin Towers held the title of the world's tallest building from 1998 to 2004. Take a lift to the 86th-floor observation deck for a breathtaking view of Kuala Lumpur."
                ]
            },
            {
                id:nanoid(),
                title:"Food Paradise",
                desc:[
                    "Malaysia offers a culinary adventure like no other, with an array of delectable dishes at affordable prices. Whether you're dining at a street food cart, hawker center, café, or restaurant, you'll be treated to a diverse selection of Malay, Chinese, Indian, and Thai cuisine."
                ]
            },
            {
                id:nanoid(),
                title:"Multicultural Harmony",
                desc:[
                    "Experience the harmonious coexistence of various cultures as you stroll through the streets of Malaysia. From mosques to Chinese temples and churches, Malaysia celebrates festivals like Christmas, Chinese New Year, and Hari Raya with enthusiasm, regardless of ethnic or religious background."
                ]
            },
            {
                id:nanoid(),
                title:"Blue Ocean, White Sand",
                desc:[
                    "Malaysia boasts stunning beaches with crystal-clear waters and powdery white sands. Destinations like Langkawi, Perhentian Islands, Rendang Island, and Sabah offer idyllic settings for beach lovers."
                ]
            },
            {
                id:nanoid(),
                title:"Atas English Tea",
                desc:[
                    "Head to Cameron Highlands for a taste of Southeast Asian English tea amidst lush landscapes and Malaysia's largest tea plantation."
                ]
            },
            {
                id:nanoid(),
                title:"Malacca World Heritage",
                desc:[
                    "Explore the rich historical and cultural heritage of Malacca, a UNESCO World Heritage Site, dotted with colonial-era buildings, Dutch Square, and charming riverside walks."
                ]
            },
            {
                id:nanoid(),
                title:"Kinabalu National Park",
                desc:[
                    "Discover the natural wonders of Kinabalu National Park, home to diverse flora and fauna, including over 5,000 plant species. Visitors can indulge in activities like mountain climbing, rock climbing, paragliding, and relaxing in hot springs."
                ]
            },
            {
                id:nanoid(),
                title:"World's Largest Cave",
                desc:[
                    "Explore the awe-inspiring Gunung Mulu National Park, home to the world's largest known underground cave system, showcasing stunning karst landscapes and high biodiversity."
                ]
            },
            {
                id:nanoid(),
                title:"The Iban People",
                desc:[
                    "Learn about the traditional customs and way of life of the Iban people, known for their past reputation as headhunters. Today, they preserve their cultural heritage while embracing modern amenities."
                ]
            },
            {
                id:nanoid(),
                title:"World's Oldest Rainforest",
                desc:[
                    "Immerse yourself in the ancient Taman Negara, one of the world's oldest rainforests, teeming with rare wildlife and vegetation."
                ]
            },
            {
                id:nanoid(),
                title:"Southeast Asia's Largest Buddhist Temple",
                desc:[
                    "Visit the magnificent Kek Lok Si Temple in Penang, the largest Buddhist temple in Southeast Asia, known for its elaborate Chinese New Year celebrations."
                ]
            },
            {
                id:nanoid(),
                title:"Sepang International Circuit",
                desc:[
                    "Experience the adrenaline rush at Sepang International Circuit, where you can enjoy go-karting on tracks frequented by international racing stars."
                ]
            },
            {
                id:nanoid(),
                title:"Diver's Paradise",
                desc:[
                    "Explore the vibrant underwater world of Sipadan, one of the world's top dive sites, boasting an abundance of marine life and stunning coral reefs."
                ]
            },
            {
                id:nanoid(),
                title:"Conclusion",
                desc:[
                    "Whether you're seeking adventure, cultural immersion, or relaxation, Malaysia offers something for every type of traveler."
                ]
            },
        ]
    },
    {
        id: nanoid(),
        img:"/assets/images/tripadvisorimg.jpg",
        title: "Travelvago Named Tripadvisor Travelers' Choice Awards Best of the Best Winner for 2024",
        desc:"Travelvago Named Tripadvisor Travelers' Choice Awards Best of the Best Winner for 2024 Travelvago Recognized as a Top-Rated Cultural and Historical Tours in Worldwide.",
        slug:"travelvago-named-tripadvisor-travelers-choice-awards-best-of-the-best-winner-for-2024",
        detailedData:[
            {
                id:nanoid(),
                title:"BANDAR SUNWAY, MALAYSIA",
                desc:[
                    "June 28, 2024 - Travelvago is pleased to announce today that it has been recognized in Tripadvisor's® Travelers' Choice® Awards Best of the Best for 2024, ranking No. 18 in the Cultural and Historical Tours category worldwide. The highest level of Tripadvisor's awards, the Best of the Best winners are among the top 1% of listings around the world on Tripadvisor.",

                    "As the world's largest travel guidance platform, Tripadvisor has unparalleled authority with travelers and diners. This award is based on genuine feedback from anyone in the community who has visited and left an authentic, first-hand review on Tripadvisor over a 12-month period, making it a valuable and trustworthy designation of travelers' favorites.",
                    "We are honored to be included among travelers' favorites this year,” said a spokesperson from Travelvago. “Travelers' Choice is one of the most recognized and coveted awards in the travel space, so it is very valuable to us…",

                    "Congratulations to Travelvago on its recognition in Tripadvisor's Travelers' Choice Awards Best of the Best for 2024,” said John Boris, Chief Growth Officer at Tripadvisor. Ranking among the top percentage of businesses globally means you have made such a memorable impact on your visitors that many of them took time to go online and leave a glowing review about their experience. Travelers rely on Tripadvisor's Best of the Best lists to help them navigate the myriad things to see, eat and do across the globe. We hope this recognition continues to drive business to you in 2024 and beyond"
                ]
            },
        ]
    },
]


//Thailand Page
export const thailandPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"/assets/images/thailandDestinationOne.jpg",
        title: "Thailand",
        subTitle:"Find your perfect vacation"
    },
    {
        id: nanoid(),
        img:"/assets/images/thailandDestinationTwo.jpg",
        title: "Thailand",
        subTitle:"Find your perfect vacation"
    },
]


//Malaysia Page
export const malaysiaPageImgViwerData = [
    
    {
        id: nanoid(),
        img:"/assets/images/countryMalaysia.jpg",
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
        img:"/assets/images/termsAndConditionCoverImg.jpg",
        title: "Terms&Condition",
        subTitle:"Our Conditions"
    },
]


//Privacy
export const PrivacyImgViwerData = [
    
    {
        id: nanoid(),
        img:"/assets/images/privacyPolicyCoverImg.jpg",
        title: "PrivacyPolicy",
        subTitle:"Our Policy"
    },
    
]





//Singapore Page
export const singaporePageImgViwerData = [
    
    {
        id: nanoid(),
        img:"/assets/images/countrySingapore.jpg",
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
        img:"/assets/images/countryVietnam.jpg",
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
        img:"/assets/images/countryDubai.jpg",
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



//Packages Page
export const packagesImgViwerData = [
    {
        id: nanoid(),
        img:"/assets/images/packageVietnamOneImgOne.jpg",
        title: "Packages",
        subTitle:"Best Packages for you"
    },
]


export const allPackageData = [
    {
        id:nanoid(),
        title:"1 Week in Northern Vietnam",
        image: "/assets/images/packageVietnamOneImgOne.jpg",
        slug:"1-week-in-northern-vietnam",
    },
]

export const packageDetails = [
    {
        id:nanoid(),
        title:"1 Week in Northern Vietnam",
        imageCover: "/assets/images/packagesCoverImgOne.png",
        slug:"1-week-in-northern-vietnam",
        locations:"Vietnam",
        duration:"8 Days",
        sections:[
            {
                sectionTitle:"Overview",
                sectionData:[
                    {
                        title :"Itinerary in brief",
                        sectionImg:"/assets/images/packageVietnamOneImgOne.jpg",
                        rowReverse:false,
                        listItems:[
                            "Day 01: Hanoi arrival",
                            "Day 02: Hanoi city tour in jeep car - Night train to Lao Cai",
                            "Day 03: Sapa - Villages",
                            "Day 04: Sapa - Fanxipan peak - Drive to Hanoi",
                            "Day 05: Hanoi - Tam Coc - Bich Dong - Mua Cave",
                            "Day 06: Tam Coc - Ha Long Bay",
                            "Day 07: Lan Ha bay - Halong - Hanoi",
                            "Day 08: Hanoi free - Departure"
                        ]
                    },
                    {
                        title :"Services include",
                        sectionImg:"/assets/images/packageVietnamOneImgTwo.jpg",
                        rowReverse:true,
                        listItems:[
                            "Accommodation with breakfast as mentioned in the program (on basis of 02 and 03 people/room)",
                            "A sweet night onboard in a deluxe cabin with traditional design.",
                            "Fanxipan cable car fee",
                            "Night train Hanoi - Sapa (2 private cabins)",
                            "Luxury limosine Sapa - Hanoi",
                            "Travel on private, modern & comfortable air-conditioned vehicles with a caring driver for all transfers and ground transportation (except the break time or program clearly mentioned 'WITHOUT DRIVER')",
                            "Meals as mentioned in the program (B = Breakfast, L = Lunch, D = Dinner)",
                            "Entry fee for all mentioned sites for visit",
                            "Boat trips as mentioned in the program",
                            "Qualified local tour guides during the whole trip (except the break time or program clearly mentioned 'WITHOUT GUIDE') "
                        ]
                    }
                ]
                
            },
            {
                sectionTitle:"Detailed Program",
                sectionData:[
                    {
                        title :"Day 01 Hanoi arrival",
                        sectionImg:"/assets/images/packageVietnamDetailsOneImg.jpg",
                        rowReverse:false,
                        listItems:[
                            "Arrival in Noi Bai airport with flight, you will be picked up and then transferred to the hotel in the city center. The check-in is available at 2pm. The day is free for your own exploration and shopping. Overnight at hotel"
                        ]
                    },
                    {
                        title :"Day 02 Hanoi city tour in jeep car - Night train to Lao Cai (B)",
                        sectionImg:"/assets/images/packageVietnamDetailsTwoImg.jpg",
                        rowReverse:true,
                        listItems:[
                            "You will be picked up at the hotel at 8:00am",
                            "Starting the day trip will be a visit of the Ho Chi Minh Complex, which compromises Ho Chi Minh's mausoleum (closed on Mondays & Fridays), his former stilt-house residence, the Presidential Palace and Ho Chi Minh Museum",
                            "We will then visit the Temple of Literature, which served as the first Royal National University in Vietnam",
                            "In the afternoon, we will visit the Museum of Ethnology (closed on Mondays, the alternative being the History Museum), which offers informative and well-documented displays of the country's 54 ethnic groups.",
                            "Then back to the Old Quarter for a 1.5-hour walking tour, then you will have a deeper insight of local daily life. We then head to Ngoc Son Temple on a tiny island in the middle of Hoan Kiem Lake.",
                            "Then transfer to the station for the night train to Sapa, private cabins for you."
                        ]
                    },
                    {
                        title :"Day 03 Sapa - Villages (B)",
                        sectionImg:"/assets/images/packageVietnamDetailsThreeImg.jpg",
                        rowReverse:false,
                        listItems:[
                            "On arrival, you will have time to take a bath and have breakfast.",
                            "After that, descending into the Muong Hoa Valley, you will reach the picturesque Lao Chai village home to the Black H'mong ethnic minority and Ta Van village inhabited by Dzay.",
                            "Enjoy stunning views of rice terraces curving around the hillside, winding rivers and streams glistening in the sunshine. Then we visit Cat Cat village.",
                            "Overnight in hotel.",
                        ]
                    },
                    {
                        title :"Day 04 Sapa - Fanxipan peak - Drive to Hanoi (B)",
                        sectionImg:"/assets/images/packageVietnamDetailsFourImg.jpg",
                        rowReverse:true,
                        listItems:[
                            "After breakfast, we will be transferred to a cable car station where we will have 25 minutes to travel to Fanxipan Mountain, considered the most beautiful landscape of Vietnam.",
                            "the altitude of 2800 meters, you have a good time to see the view and take photos, visit pagoda the spiritual destinations and trek up to 600 steps you will reach the peak of Fansipan - the Roof of Indochina. (Spend about 1,5 hours hiking and taking photos).",
                            "Then we take a sharing limousine back to Hanoi. Overnite in Hanoi."
                        ]
                    },
                    {
                        title :"Day 05 Hanoi - Tam Coc - Bich Dong - Mua Cave (B)",
                        sectionImg:"/assets/images/packageVietnamDetailsFiveImg.jpg",
                        rowReverse:false,
                        listItems:[
                            "In the morning, our car and guide will pick you up to travel to Hoa Lu - the former capital of Vietnam, about a two-hour drive from Hanoi.",
                            "After lunch at a local restaurant, you will visit Tam Coc (three caves), a peaceful valley among limestone 'karst' hills",
                            "After the boat trip in Tam Coc, for the rest of the day, visit Mua Caves and learn about its exciting stories told by our guide",
                            " Continue to climb 500 stone steps, you are on the top of the mountain where you can enjoy a stunning panoramic view of the countryside and wonderful Ngo Dong River.",
                            "Overnight in hotel in Tam Coc.",
                        ]
                    },
                    {
                        title :"Day 06 Tam Coc - Ha Long Bay (B, L, D)",
                        sectionImg:"/assets/images/packageVietnamDetailsSixImg.jpg",
                        rowReverse:true,
                        listItems:[
                            "After breakfast, transfer to Ha Long bay.",
                            "12:00 - 12:30: Check-in and enjoy Welcome drink, meet the crew to get a brief introduction about cruise and safety guidelines.",
                            "13:00: Enjoy Vietnamese seafood and vegetarian lunch",
                            "Continue cruising through Duck Islet, Thumb islet and Gia Luan Harbor. Discover lagoon natural area, drop anchor for swimming or sunbathe",
                            "15:45: Kayaking, then swim or just sunbathe on our cruise. Heading back toward the sleeping area.",
                            "18.00: Come back to our La Casta Cruise and participate in our Sunset party.",
                            "19:00: Time for dinner enjoying special seafood and Vietnamese typical food on the cruise.",
                            "21:00: Evening entertainments: cards game, squid fishing, relaxing with massage service and overnight on the La Casta Cruise.",
                        ]
                    },
                    {
                        title :"Day 07 Lan Ha bay - Halong - Hanoi (B, L)",
                        sectionImg:"/assets/images/packageVietnamDetailsSeventImg.jpg",
                        rowReverse:false,
                        listItems:[
                            "7:00 - 7:45: Have breakfast. Morning view of bay's landscape with a cup of tea or coffee.",
                            "8:00: Mingling yourself in the stunning views of the Bay and it's dramatic limestone islets. visit the famous Frog Pond. Here you can freely kayak and explore the landscape, or swim.",
                            "9:15: Back to your cabin, relax, and check all the luggage carefully before leaving.",
                            "9:30: Check-out from the private cabin and enjoy a fantastic cruise on the bay for room service. Complete the check-out procedure and enjoy your last lunch at the La Casta cruise.",
                            "11:30: La Casta Cruise are landing Tuan Chau Harbor, tourist say goodbye to sailors and finish the cruise.",
                            "12:00 - 12:30: Return to Hanoi by the luxury limousine.",
                            "15:00 - 15:30: Arrive in Hanoi.",
                            "Overnight in Hanoi."
                        ]
                    },
                    {
                        title :"Day 08 Hanoi free - Departure (B)",
                        sectionImg:"/assets/images/packageVietnamDetailsEighttImg.jpg",
                        rowReverse:true,
                        listItems:[
                            "After breakfast, at 09h00, you will transfer to the airport for the departure flight back home."
                        ]
                    },
                ]
                
            },
        ],
        hotelList:[
            {
                title:"Acoustic Hotel",
                hotelLocation:"Hanoi, Vietnam",
                imageUrl:"/assets/images/packageHotelImgOne.jpg"
            },
            {
                title:"Lalita Boutique hotel & Spa",
                hotelLocation:"Ninh Binh, Vietnam",
                imageUrl:"/assets/images/packageHotelImgTwo.jpg"
            },
            {
                title:"La Casta",
                hotelLocation:"Lan Ha Bay, Vietnam",
                imageUrl:"/assets/images/packageHotelImgThree.jpg"
            },
        ]
            
    },

    
]


export const aboutPageDetials = "Welcome to Travelvago, where extraordinary travel experiences become a reality. As a pioneering force in the travel industry, we are dedicated to delivering unique and unforgettable journeys to explorers around the globe. With a profound passion for travel, we have established ourselves as a premier online travel platform, reshaping the way people discover, plan, and embark on their adventures.Founded by Sooria Prakash, with Thiruchelvan Balakrishnan as Co-founder, Travelvago represents the culmination of their shared vision and unwavering commitment to excellence in the travel sector. Sooria Prakash, as Founder and Managing Director, brings a wealth of experience and leadership to the company, steering its growth and success. Thiruchelvan Balakrishnan, serving as Co-founder and Director, has been instrumental in shaping the company's strategic direction and cultivating key partnerships.At Travelvago, we believe travel should be seamless and effortless. That,s why we leverage cutting-edge technology to provide our clients with an intuitive, user-friendly booking platform. With just a few clicks, you can explore our extensive inventory, receive instant tour confirmations, and benefit from secure payment options. Our commitment to convenience ensures a stress-free planning experience, allowing you to focus on what truly matters - creating lasting memories.Collaboration and partnerships are at the heart of Travelvago. We understand the importance of teamwork and work closely with travel agencies and tour operators to expand their offerings and deliver exceptional value to their customers. Our exclusive inventory, integrated seamlessly into your website through our XML interface, allows you to present a diverse range of travel products under your brand."