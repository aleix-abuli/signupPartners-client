import '../Contract/Contract.css';
import './Form2.css';
import Contract from '../Contract/Contract';

export default function Form3(props) {

    const { signupData, nextStage, previousStage, handleInputChange, bankingDetails, handleSubmit, checkTerms, errorMsg } = props;

    return(
        <>
            <h3>Contract</h3>
            <div className='formContainer tigerBack'>
                <Contract />

                <div className='termsDiv'>
                    {errorMsg &&
                        <div>
                            <p className='error'>{errorMsg}</p>
                        </div>
                    }
                    <input type='checkbox' name='terms' onChange={checkTerms}/>
                    <label htmlFor="terms">I have read and accept the terms and conditions</label>
                </div>

                <div className='btnSignupDiv'>
                    <button onClick={previousStage} className='formBtn btnBtn balck whiteBack'>Go back</button>
                    <button type="submit" onClick={handleSubmit} className='formBtn btnBtn white greenBack'>Submit</button>
                </div>

            </div>
        </>
    );
};