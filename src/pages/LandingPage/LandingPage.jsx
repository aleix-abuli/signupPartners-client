import './LandingPage.css';
import { Link } from "react-router-dom";

export default function LandingPage() {
    return(
        <>
        <section className='section1'>
            <div className='landingTextDiv'>
                <h1 className='black'>Welcome, partner!</h1>
                <p className='black'>This is the beginning of your new journey as a business that can reach anyone anywhere.</p>
                <Link to={'/signup'} className='linkBtn white greenBack' >Become a Partner</Link>
            </div>
        </section>
        <section className='whyGlovoSection'>
            <h1 className='black'>Why Glovo?</h1>
            <div className='benefitsFlex'>
                <div className='benefitCard'>
                    <img src={'/glovo1.png'} />
                    <h3>More visibility</h3>
                    <p>Glovo helps discovering your brand to new costumers. This way your business will have a bigger impact. Upload your menu or catalogue and start receiving orders!</p>
                </div>
                <div className='benefitCard' >
                    <img src={'/glovo3.png'} />
                    <h3>Improve your margins</h3>
                    <p>Get more delivery orders without the usual extra cost they come with. Focus on the cooking, we'll take care of the rest!</p>
                </div>
                <div className='benefitCard'>
                    <img src={'/glovo2.png'} />
                    <h3>Professional assistance whenever you need it</h3>
                    <p>Free assistance with real agents, including a 24/7 customer service and dedicated managers.</p>
                </div>
            </div>
        </section>
        </>
    );
};