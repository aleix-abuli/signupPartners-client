import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const server = process.env.REACT_APP_API_URL;

export default function NewStore() {
    
    const navigate = useNavigate();
    
    const [newStoreData, setNewStoreData] = useState({
        name: '',
        address: '',
        imageUrl: ''
    });

    const [loadingImage, setLoadingImage] = useState(false);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setNewStoreData({ ...newStoreData, [name]: value });

    }

    function handleSubmit(e) {
         
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/stores`, newStoreData, {
            headers: { Authorization: `Bearer ${storedToken}` },
            "Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'
        })
        .then(({ data }) => navigate(`/partners/${data._id}`))
        .catch((err) => console.log(err));

    }

    //Cloudinary setup
    function handleImageUpload(e) {

        e.preventDefault();
        setLoadingImage(true);

        const uploadData = new FormData();
        uploadData.append('imageData', e.target.files[0]);

        axios
        .post(`${server}/upload`, uploadData, {
            headers: { Authorization: `Bearer ${storedToken}` },
            "Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'
        })
        .then(({ data }) => {
            setLoadingImage(false)
            setNewStoreData({ ...newStoreData, imageUrl: data.cloudinary_url })
        })
        .catch(err => console.log(err));
    };

    const { name, address, imageUrl } = newStoreData;
    
    return(
        <>
            <form onSubmit={handleSubmit} className='formClass'>
                <label htmlFor="name">Name<sup>*</sup></label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="address">Address<sup>*</sup></label>
                <input name='address' value={address} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Cover Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} required />

                {imageUrl && <img src={imageUrl} style={{ 'height' : '100px' }} />}

                {loadingImage ? <p>Please wait, image loading...</p> : <button type="submit" className="formBtn btnBtn white greenBack" >Create</button>}
            </form>
        </>
    );
};