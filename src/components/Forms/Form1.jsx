export default function Form1(props) {

    const { signupData, nextStage, previousStage, handleInputChangeData } = props;
    const { businessName, country, city, userName, userSurname, email, password, phone, type } = signupData;

    function goToNext(e) {
        /* if(Object.values(signupData).every(key => key !== null && key !== "")) {
            nextStage(e);
        }; */
        nextStage(e);
    };

    return(
        <>
            <div className="formContainer tigerBack">
            <p>Tell us a little bit more about you and your business.</p>
                <form onSubmit={goToNext} className='formClass'>
                    <label htmlFor="country">Country<sup>*</sup></label>
                    <select name='country' value={country} onChange={handleInputChangeData} >
                        <option></option>
                        <option value='Spain'>Spain</option>
                        <option value='Georgia'>Georgia</option>
                        <option value='Croatia'>Croatia</option>
                        <option value='Italia'>Italia</option>
                        <option value='Kenya'>Kenya</option>
                        <option value='Kazakhstan'>Kazakhstan</option>
                        <option value='Ivory Coast'>Ivory Coast</option>
                        <option value='Morocco'>Morocco</option>
                        <option value='Poland'>Poland</option>
                        <option value='Portugal'>Portugal</option>
                        <option value='Romania'>Romania</option>
                        <option value='Serbia'>Serbia</option>
                        <option value='Ukraine'>Ukraine</option>
                        <option value='Kyrgyzstan'>Kyrgyzstan</option>
                        <option value='Moldavia'>Moldavia</option>
                        <option value='Uganda'>Uganda</option>
                        <option value='Ghana'>Ghana</option>
                        <option value='Bulgaria'>Bulgaria</option>
                        <option value='Bosnia and Herzegovina'>Bosnia and Herzegovina</option>
                        <option value='Montenegro'>Montenegro</option>
                        <option value='Tunisia'>Tunisia</option>
                        <option value='Belarus'>Belarus</option>
                        <option value='Nigeria'>Nigeria</option>
                        <option value='Armenia'>Armenia</option>
                        <option value='Slovenia'>Slovenia</option>
                        <option value='Andorra'>Andorra</option>
                    </select>
                    
                    <label htmlFor="city">City<sup>*</sup></label>
                    <input name='city' value={city} onChange={handleInputChangeData} required />
                    
                    <label htmlFor="businessName">Business name<sup>*</sup></label>
                    <input name='businessName' value={businessName} onChange={handleInputChangeData} required />
                    
                    <label htmlFor="userName">Name<sup>*</sup></label>
                    <input name='userName' value={userName} onChange={handleInputChangeData} required />
                    
                    <label htmlFor="userSurname">Last name<sup>*</sup></label>
                    <input name='userSurname' value={userSurname} onChange={handleInputChangeData} required />
                    
                    <label htmlFor="email">e-mail<sup>*</sup></label>
                    <input name='email' value={email} onChange={handleInputChangeData} required />
                    
                    <label htmlFor="password">Password (8 characters or more)<sup>*</sup></label>
                    <input name='password' value={password} onChange={handleInputChangeData} type='password' required />
                    
                    <label htmlFor="phone">Phone number<sup>*</sup></label>
                    <input name='phone' value={phone} onChange={handleInputChangeData} required />

                    <label htmlFor="type">Type of establishment<sup>*</sup></label>
                    <select name='type' value={type} onChange={handleInputChangeData} >
                        <option></option>
                        <option value='restaurant'>Restaurant</option>
                        <option value='pharmacy'>Pharmacy</option>
                        <option value='store'>Store</option>
                        <option value='supermarket'>Supermarket</option>
                    </select>

                    <button type="submit" className="formBtn btnBtn white greenBack">Next</button>
                </form>
            </div>
        </>
    );
};