import '../../Form.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import EditStoreForm from '../../components/StoreForms/EditStoreForm';
import Loader from '../../components/Loader/Loader';

const server = process.env.REACT_APP_API_URL;

export default function EditStorePage() {
    
    const [storeData, setStoreData] = useState(null);
    const [loadingImage, setLoadingImage] = useState(false);

    const { storeId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/stores/${storeId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(({ data }) => {
            setStoreData(data);
        })
        .catch((err) => console.log(err));

    }, []);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setStoreData({ ...storeData, [name]: value });    
        
    };

    function handleSubmit(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/stores/${storeId}`, storeData, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(({ data }) => navigate(`/stores/${data._id}`))
        .catch((err) => console.log(err))

    };

    function handleImageUpload(e) {

        e.preventDefault();
        setLoadingImage(true);

        const uploadData = new FormData();
        uploadData.append('imageData', e.target.files[0]);

        axios
        .post(`${server}/upload`, uploadData)
        .then(({ data }) => {
            setLoadingImage(false)
            setStoreData({ ...storeData, imageUrl: data.cloudinary_url })
        })
        .catch(err => console.log(err));
    };
    
    return(
        <>
            <div className='formContainer tigerBack' style={{'min-height': '80vh'}} >
                <h2>Edit profile</h2>
                { storeData ? 
                <EditStoreForm store={storeData} loadingImage={loadingImage} handleInputChange={handleInputChange} handleSubmit={handleSubmit} handleImageUpload={handleImageUpload} />
                :
                <Loader />
                }
            </div>
        </>
    );
};