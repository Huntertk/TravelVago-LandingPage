import '../styles/teamMember.scss';
import thailandTeamImg from '../assets/images/thailandteam.jpeg';

const TeamMember = () => {
  return (
    <section className='teamMemberMainSection'>
        <div className="teamMemberMainContainer">
            <div className="teamMenberContentContainer">
                <h1>Meet Our Thailand Team at Travelvago</h1>
                <p>Discover the faces behind your Thailand adventure at Travelvago. With a passion for travel and a commitment to exceptional service, our Thailand team is dedicated to ensuring every aspect of your journey exceeds expectations. From crafting tailor-made itineraries to leading immersive tours, our team members bring warmth, knowledge, and enthusiasm to every interaction. With Travelvago, you're not just booking a trip—you're gaining trusted partners who are committed to making your Thailand experience unforgettable. Contact us today and let our experienced team turn your travel dreams into reality!</p>
            </div>
            <div className="teamMemberImgContainer">
                <img src={thailandTeamImg} alt="Thailand Team Members Image" />
            </div>
        </div>
    </section>
  )
}

export default TeamMember