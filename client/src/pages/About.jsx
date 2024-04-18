import '../styles/about.scss';
import { ImageSlider, TeamMember, TitleContainer, VideoContainer } from '../components';
import { aboutUsImgViwerData } from '../data';
import thailandTeamImg from '../assets/images/thailandteam.jpeg';
const About = () => {
  return (  
    <section className='aboutUsPageMainSection'>
      <ImageSlider imgData={aboutUsImgViwerData} />
      <TitleContainer title={"About Us"} para={"Travelvago"} />
      <div className="companyDetailsAboutUsContainer">
        <p>At Travelvago, we're passionate about exploring the world and helping others create
        unforgettable travel experiences. Our journey began with a simple idea: to provide
        travelers with a platform where they can discover, plan, and book their dream
        vacations with ease.</p>
        <p>Who We Are: Travelvago is more than just a travel website; we're a team of avid
        travelers, adventurers, and dreamers who understand the transformative power of
        travel. From the bustling streets of urban metropolises to the serene landscapes of
        remote destinations, we've roamed far and wide, seeking out the best experiences to
        share with you.</p>
        <p>Our Mission: Our mission is to inspire and empower travelers to venture beyond their
        comfort zones, discover new cultures, and create lasting memories. We believe that
        travel is not just about visiting new places but about immersing oneself in diverse
        cultures, forging connections with locals, and embracing the beauty of our planet.</p>
        <p>What We Offer: At Travelvago, we strive to make travel planning seamless and
        stress-free. Whether you're seeking a relaxing beach getaway, an adrenaline-
        pumping adventure, or a cultural immersion, we've got you covered. Our platform
        offers a curated selection of destinations, activities, accommodations, and travel tips
        to help you craft the perfect itinerary tailored to your interests and preferences.</p>
        <p>Why Choose Us: With so many travel options available, why choose Travelvago?
        Here are a few reasons:</p>
        <ol>
          <li>Expertise: Our team consists of seasoned travelers and industry experts who
are passionate about sharing their knowledge and insights to help you make
informed decisions.</li>
          <li>Personalized Service: We understand that every traveler is unique, which is
why we offer personalized recommendations and assistance to ensure that
your travel experience exceeds expectations.</li>
          <li>Trust and Reliability: With years of experience in the travel industry, we&#39;ve
built a reputation for trustworthiness, reliability, and transparency. When you
book with Travelvago, you can rest assured that you&#39;re in good hands.</li>
<li>Community: Join our vibrant community of fellow travelers who share your
passion for exploration and adventure. Connect with like-minded individuals,
share travel tips, and inspire each other to embark on new adventures.</li>
        </ol>

        <p>Get in Touch: Ready to embark on your next adventure? Explore our website,
discover exciting destinations, and start planning your dream vacation today! Have
questions or need assistance? Our friendly team is here to help. Contact us anytime,
and let&#39;s make your travel dreams a reality!</p>
      </div>
      <TeamMember 
        heading={"Meet Our Thailand Team at Travelvago"}  
        desc={"Discover the faces behind your Thailand adventure at Travelvago. With a passion for travel and a commitment to exceptional service, our Thailand team is dedicated to ensuring every aspect of your journey exceeds expectations. From crafting tailor-made itineraries to leading immersive tours, our team members bring warmth, knowledge, and enthusiasm to every interaction. With Travelvago, you're not just booking a trip—you're gaining trusted partners who are committed to making your Thailand experience unforgettable. Contact us today and let our experienced team turn your travel dreams into reality!"}
        image={thailandTeamImg} 
      />
      <VideoContainer />
    </section>
  )
}

export default About