import '../styles/whyVisitDestion.scss';
import { FaDotCircle } from "react-icons/fa";

const WhyVisitDestination = ({data}) => {
  return (
    <div className="whyVisitDestinationContainer">
            <div className="whyVisitDestinationContentContainer">
                {data.map((d, i) => (
                    <div className="whyVisitDestinationContent" key={i}>
                        <h1 ><FaDotCircle /> {d.title}</h1>
                        <div className="whyVisitDestinationParaContainer">
                        {
                            d.desc.map((desc, index) => (
                                <p key={index}>{desc}</p>
                            ))
                        }
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default WhyVisitDestination