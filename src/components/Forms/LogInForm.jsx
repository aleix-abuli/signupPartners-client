import { useState } from "react";

export default function LogInForm(props) {

    const { data, handleInputChange, handleSubmit } = props;
    const { email, password } = data;

    return(
        <>
            <form onSubmit={handleSubmit} className='formClass'>
                <label htmlFor="email">e-mail</label>
                <input name='email' value={email} onChange={handleInputChange} required />
                
                <label htmlFor="password">Password</label>
                <input name='password' value={password} onChange={handleInputChange} type='password' required />

                <button type="submit" className="formBtn btnBtn white greenBack">Log In</button>
            </form>
        </>
    );
};