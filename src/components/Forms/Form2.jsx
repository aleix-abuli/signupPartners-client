import './Form2.css';

export default function Form2(props) {

    const { signupData, nextStage, previousStage, handleInputChangeBanking, bankingDetails } = props;
    const { legalName, taxID, address, bank, accNumber, ownerName, ownerSurname } = bankingDetails;
    
    function goToNext(e) {
        /* if(Object.values(bankingDetails).every(key => key !== null && key !== "")) {
            nextStage(e);
        }; */
        nextStage(e);
    }

    return(
        <>
            <div className='proposalText'>
                <div>
                    <h3>Our proposal</h3>
                    <h4>Terms of our collaboration</h4>
                    <p>You are a step closer to join Glovo! Together we’ll increase your sales and reach new customers. Currently we are proposing you:</p>
                </div>
            </div>
            <div className='proposalContainer'>
                <div className='proposalDiv whiteBack'>
                    <p className='proposalHeader'>Activation fee</p>
                    <h3>0€</h3>
                    <p>One time payment</p>
                </div>
                <div className='proposalDiv whiteBack'>
                    <p className='proposalHeader'>Platform + Courier Access fees</p>
                    <h3>30%</h3>
                    <p>For every order</p>
                </div>
            </div>

            <div className="formContainer whiteBack">
                <form className="formClass form2">
                    <h4 className='formTitle'>Billing details</h4>
                    
                    <label htmlFor="legalName">Legal entity name<sup>*</sup></label>
                    <input name='legalName' value={legalName} onChange={handleInputChangeBanking} required />
                    
                    <label htmlFor="taxID">Tax ID number of your legal entity<sup>*</sup></label>
                    <input name='taxID' value={taxID} onChange={handleInputChangeBanking} required />
                    
                    <label htmlFor="address">Billing Address<sup>*</sup></label>
                    <input name='address' value={address} onChange={handleInputChangeBanking} required />

                </form>

                <form className="formClass form2">
                    <h4 className='formTitle'>Payment details</h4>

                    <label htmlFor="bank">Bank name<sup>*</sup></label>
                    <input name='bank' value={bank} onChange={handleInputChangeBanking} required />
                    
                    <label htmlFor="accNumber">Account number<sup>*</sup></label>
                    <input name='accNumber' value={accNumber} onChange={handleInputChangeBanking} required />
                    
                    <label htmlFor="ownerName">Owner name<sup>*</sup></label>
                    <input name='ownerName' value={ownerName} onChange={handleInputChangeBanking} required />
                    
                    <label htmlFor="ownerSurname">Owner last name<sup>*</sup></label>
                    <input name='ownerSurname' value={ownerSurname} onChange={handleInputChangeBanking} required />

                </form>

                <div className='termsDiv'>
                    <input type='checkbox' name='terms' />
                    <label htmlFor="terms">I have read and accept the <a href="https://glovoapp.com/en/legal/privacy/">terms and conditions</a></label>
                </div>

                <div className='btnSignupDiv'>
                    <button onClick={previousStage} className='formBtn btnBtn black whiteBack'>Go back</button>
                    <button type="submit" onClick={goToNext} className='formBtn btnBtn white greenBack'>Next</button>
                </div>
            </div>
        </>
    );
};