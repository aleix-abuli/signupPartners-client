import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EditItem from '../../components/ItemForms/EditItem';
import Loader from '../../components/Loader/Loader';
import { AuthContext } from '../../context/auth.context';

const server = process.env.REACT_APP_API_URL;

export default function NewItemPage() {

    const { user } = useContext(AuthContext)

    const { itemId } = useParams();
    const navigate = useNavigate();

    const [itemData, setItemData] = useState(null);
    const [loadingImage, setLoadingImage] = useState(false);

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/items/${itemId}`, {
            headers: { Authorization: `Bearer ${storedToken}` },
            "Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'
        })
        .then(({ data }) => setItemData(data))
        .catch((err) => console.log(err));

    }, []);

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setItemData({ ...itemData, [name]: value });

    };

    function handleSubmit(e) {
         
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${server}/items/${itemId}`, itemData, {
            headers: { Authorization: `Bearer ${storedToken}` },
            "Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'
        })
        .then((__) => navigate(`/partners/${user._id}`))
        .catch((err) => console.log(err));

    };

    function handleImageUpload(e) {

        e.preventDefault();
        setLoadingImage(true);

        const storedToken = localStorage.getItem('authToken');

        const uploadData = new FormData();
        uploadData.append('imageData', e.target.files[0]);

        axios
        .post(`${server}/upload`, uploadData, {
            headers: { Authorization: `Bearer ${storedToken}` },
            "Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'
        })
        .then(({ data }) => {
            setLoadingImage(false)
            setItemData({ ...itemData, imageUrl: data.cloudinary_url })
        })
        .catch(err => console.log(err));
    };

    return(
        <>
            { itemData ?
            <>
                <div className='formContainer tigerBack' style={{'min-height': '80vh'}} >
                    <h2>Edit item</h2>
                    <EditItem
                    itemData={itemData} loadingImage={loadingImage}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleImageUpload={handleImageUpload} />
                </div>
            </>
            :
            <Loader />
            }
        </>
    );
};