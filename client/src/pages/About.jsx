import '../styles/about.scss';
import { DynamicHeading, ImageSlider, TeamMember, TitleContainer, VideoContainer } from '../components';
import { aboutUsImgViwerData } from '../data';
import thailandTeamImg from '../assets/images/thailandteam.jpeg';
const About = () => {
  return (  
    <>
      <DynamicHeading title={"About Us"} />
      <section className='aboutUsPageMainSection'>
        <ImageSlider imgData={aboutUsImgViwerData} />
        <TitleContainer title={"About Us"} para={"Travelvago"} />
        <div className="founderDetialsContainer">
          <div className="founderImgContainer">
            <div className="founderImgWrapper">
              <img src="/assets/images/Founder.jpg" alt="Sooria Prakas" />
              <h3>Sooria Prakash</h3>
              <p>Founder / Managing Director</p>
            </div>
            <div className="founderImgWrapper">
              <img src="/assets/images/Co-Founder.jpg" alt="Thiruchelvan Balakrishnan" />
              <h3>Thiruchelvan Balakrishnan</h3>
              <p>Co-Founder / Director</p>
            </div>
            
          </div>
          <p><span>Welcome to Travelvago,</span> where extraordinary travel experiences become a reality. As a pioneering force in the travel industry, we are dedicated to delivering unique and unforgettable journeys to explorers around the globe. With a profound passion for travel, we have established ourselves as a premier online travel platform, reshaping the way people discover, plan, and embark on their adventures.</p>
            <p><span>Founded by Sooria Prakash,</span> with Thiruchelvan Balakrishnan as Co-founder, Travelvago represents the culmination of their shared vision and unwavering commitment to excellence in the travel sector. Sooria Prakash, as Founder and Managing Director, brings a wealth of experience and leadership to the company, steering its growth and success. Thiruchelvan Balakrishnan, serving as Co-founder and Director, has been instrumental in shaping the company's strategic direction and cultivating key partnerships</p>
            <p><span>At Travelvago,</span> we believe travel should be seamless and effortless. That,s why we leverage cutting-edge technology to provide our clients with an intuitive, user-friendly booking platform. With just a few clicks, you can explore our extensive inventory, receive instant tour confirmations, and benefit from secure payment options. Our commitment to convenience ensures a stress-free planning experience, allowing you to focus on what truly matters - creating lasting memories</p>
            <p>Collaboration and partnerships are at the heart of Travelvago. We understand the importance of teamwork and work closely with travel agencies and tour operators to expand their offerings and deliver exceptional value to their customers. Our exclusive inventory, integrated seamlessly into your website through our XML interface, allows you to present a diverse range of travel products under your brand.</p>
        </div>
        <div className="companyDetailsAboutUsContainer">
          <p><span className='bold-text'>At Travelvago</span>, we're passionate about exploring the world and helping others create
          unforgettable travel experiences. Our journey began with a simple idea: to provide
          travelers with a platform where they can discover, plan, and book their dream
          vacations with ease.</p>

          <p><span className='bold-text'>Who We Are</span>: Travelvago is more than just a travel website; we're a team of avid
          travelers, adventurers, and dreamers who understand the transformative power of
          travel. From the bustling streets of urban metropolises to the serene landscapes of
          remote destinations, we've roamed far and wide, seeking out the best experiences to
          share with you.</p>

          <p><span className='bold-text'>Our Mission</span>: Our mission is to inspire and empower travelers to venture beyond their
          comfort zones, discover new cultures, and create lasting memories. We believe that
          travel is not just about visiting new places but about immersing oneself in diverse
          cultures, forging connections with locals, and embracing the beauty of our planet.</p>

          <p><span className='bold-text'>What We Offer</span>: At Travelvago, we strive to make travel planning seamless and
          stress-free. Whether you're seeking a relaxing beach getaway, an adrenaline-
          pumping adventure, or a cultural immersion, we've got you covered. Our platform
          offers a curated selection of destinations, activities, accommodations, and travel tips
          to help you craft the perfect itinerary tailored to your interests and preferences.</p>

          <p><span className='bold-text'>Why Choose Us</span>: With so many travel options available, why choose Travelvago?
          Here are a few reasons:</p>
          <ol>

            <li><span className='bold-text'>Expertise</span>: Our team consists of seasoned travelers and industry experts who
  are passionate about sharing their knowledge and insights to help you make
  informed decisions.</li>

            <li><span className='bold-text'>Personalized Service</span>: We understand that every traveler is unique, which is
  why we offer personalized recommendations and assistance to ensure that
  your travel experience exceeds expectations.</li>

            <li><span className='bold-text'>Trust and Reliability</span>: With years of experience in the travel industry, we&#39;ve built a reputation for trustworthiness, reliability, and transparency. When you book with Travelvago, you can rest assured that you&#39;re in good hands.</li>

          <li><span className='bold-text'>Community</span>: Join our vibrant community of fellow travelers who share your
          passion for exploration and adventure. Connect with like-minded individuals,
          share travel tips, and inspire each other to embark on new adventures.</li>
          </ol>

          <p><span className='bold-text'>Get in Touch</span>: Ready to embark on your next adventure? Explore our website, discover exciting destinations, and start planning your dream vacation today! Have questions or need assistance? Our friendly team is here to help. Contact us anytime, and let&#39;s make your travel dreams a reality!</p>
        </div>
        <TeamMember 
          heading={"Meet Our Thailand Team at Travelvago"}  
          desc={"Discover the faces behind your Thailand adventure at Travelvago. With a passion for travel and a commitment to exceptional service, our Thailand team is dedicated to ensuring every aspect of your journey exceeds expectations. From crafting tailor-made itineraries to leading immersive tours, our team members bring warmth, knowledge, and enthusiasm to every interaction. With Travelvago, you're not just booking a trip—you're gaining trusted partners who are committed to making your Thailand experience unforgettable. Contact us today and let our experienced team turn your travel dreams into reality!"}
          image={thailandTeamImg} 
        />
        <VideoContainer />
      </section>
    </>
  )
}

export default About