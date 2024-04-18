import '../styles/teamMember.scss';


const TeamMember = ({heading, desc, image}) => {
  return (
    <section className='teamMemberMainSection'>
        <div className="teamMemberMainContainer">
            <div className="teamMenberContentContainer">
                <h1>{heading}</h1>
                <p>{desc}</p>
            </div>
            <div className="teamMemberImgContainer">
                <img src={image} alt={heading} />
            </div>
        </div>
    </section>
  )
}

export default TeamMember