import '../styles/terms.scss';
import { TermsAndConditionImgViwerData } from '../data';
import { DynamicHeading, ImageSlider } from '../components';
import { FaDotCircle } from "react-icons/fa";

const Terms = () => {
  return (
    <>
        <DynamicHeading title={"Terms and Condition"} />
        <section className='termsAndConditionMainSection'>
            <ImageSlider imgData={TermsAndConditionImgViwerData} />
            <div id="titleContainer">
                <h1 className='homeMainTitle'>Travelvago Terms and Conditions</h1>
                <p className='homeMainPara'>Welcome to Travelvago, your trusted partner for exploring the vibrant destinations of Malaysia, Thailand, and Singapore. Before embarking on your adventure with us, please read and understand the following terms and conditions that govern your travel experience.</p>
        </div>
        <div className="TermsContainer">
                <div className="TermsContentContainer">
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Booking and Confirmation</h1>
                        <p>To confirm your booking with Travelvago, a deposit is required as outlined in the specific terms for each tour package.</p>
                        <p>The balance payment must be settled according to the agreed-upon schedule prior to your arrival date.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Payment</h1>
                        <p>Payments for our tour packages can be made in cash, traveler's checks, bank transfer, or credit card.</p>
                        <p>Any additional fees incurred through these payment methods will be the responsibility of the customer.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Insurance</h1>
                        <p>Travelvago does not provide insurance coverage. However, we can assist as an intermediary between you and your insurer, facilitating communication with our service suppliers if necessary.</p>
                        <p>It is your responsibility to ensure that you have adequate travel insurance coverage for the duration of your trip.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Liability</h1>
                        <p>While Travelvago endeavors to deliver exceptional travel experiences, we shall not be held liable for any incidents, accidents, or losses that occur beyond the scope of our contractual agreement.</p>
                        <p>We expect our customers to comply with the regulations and instructions provided by our guides or service providers during the trip.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Complaints and Disputes</h1>
                        <p>In the event of disputes or complaints, both parties are encouraged to seek an amicable resolution.</p>
                        <p>If litigation becomes necessary, the jurisdiction shall lie with the appropriate legal authorities as per the laws of the respective countries involved.</p>
                        <p>All complaints must be submitted in writing to Travelvago within 30 days after the completion of services provided.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Additional Terms</h1>
                        <p>All tour packages offered by Travelvago are subject to availability and may be subject to change without prior notice.</p>
                        <p>By booking a trip with Travelvago, you agree to abide by these terms and conditions as well as any specific terms outlined for your chosen tour package.</p>
                    </div>
                    <div className="TermsContent">
                        <h1><FaDotCircle /> Cancellation Policy</h1>
                        <p>If you need to cancel your confirmed trip, cancellation fees will apply based on the specific terms outlined for each tour package.</p>
                        <p>Cancellation fees will be deducted from your deposit or payment, and any remaining balance will be refunded via bank transfer, with charges borne by you.</p>
                        <p>Travelvago reserves the right to cancel a confirmed trip due to force majeure circumstances. In such cases, appropriate alterations will be made, or full reimbursement will be provided.</p>
                    </div>
                    <div className="TermsContent">
                        <h1>Thank you for choosing Travelvago for your travel adventures in Malaysia, Thailand, and Singapore. We look forward to creating unforgettable memories with you!</h1>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Terms