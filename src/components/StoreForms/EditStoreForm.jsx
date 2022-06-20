import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const server = process.env.REACT_APP_API_URL;

export default function EditStoreForm(props) {

    const { store, loadingImage, handleInputChange, handleSubmit, handleImageUpload } = props;
     const { name, address, imageUrl } = store;
    
    return(
        <>
            <form onSubmit={handleSubmit} className='formClass'>
                <label htmlFor="name">Name</label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="address">Address</label>
                <input name='address' value={address} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Cover Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} />
                <img src={imageUrl} style={{ 'height' : '100px' }} />

                {loadingImage ? <p>Please wait, image loading...</p> : <button type="submit"  className="formBtn btnBtn white greenBack" >Update</button>}
            </form>
        </>
    );
};