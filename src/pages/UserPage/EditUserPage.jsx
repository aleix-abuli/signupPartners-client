import '../../Form.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import EditPartnerForm from '../../components/EditPartnerForm/EditPartnerForm';
import Loader from '../../components/Loader/Loader';

const server = process.env.REACT_APP_API_URL;

export default function EditUserPage() {
    
    const [partnerData, setPartnerData] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/partners/${id}`, {
            headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then(({ data }) => {
            setPartnerData(data);
        })
        .catch((err) => console.log(err));

    }, []);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setPartnerData({ ...partnerData, [name]: value });    
        
    };

    function handleSubmit(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/partners/${id}/edit`, partnerData, {
            headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then(({ data }) => navigate(`/partners/${data._id}`))
        .catch((err) => console.log(err))

    }
    
    return(
        <>
            <div className='formContainer tigerBack'>
            <h2>Edit profile</h2>
            { partnerData ? 
            <EditPartnerForm partner={partnerData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
            :
            <Loader />
            }
            </div>
        </>
    );
};