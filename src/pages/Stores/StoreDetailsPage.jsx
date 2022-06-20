import './StoreDetailsPage.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import Loader from "../../components/Loader/Loader";
import ItemCard from '../../components/ItemCard/ItemCard';

const server = process.env.REACT_APP_API_URL;

export default function StoreDetailsPage() {

    const { user } = useContext(AuthContext);
    
    const { storeId } = useParams();
    const navigate = useNavigate();

    const [store, setStore] = useState(null);
    const [items, setItems] = useState(false);

    useEffect(() => {

        const storedToken = localStorage.getItem('authToken');

        axios
        .get(`${server}/stores/${storeId}`, {
            headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then(({ data }) => {
            setStore(data);
            if(data.items.length > 0) setItems(true);
        })
        .catch((err) => console.log(err));

    }, [store.items]);

    function deleteStore(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        navigate(`/partners/${user._id}`);

        axios
        .delete(`${server}/stores/${storeId}`, {
            headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then(() => console.log('deleted'))
        .catch((err) => console.log(err));

    };

    return(
        <>
            { store ? 
            <>
                <img src={store.imageUrl} className='coverImage'/>
                <section className='basicStoreInfo'>
                    <div>
                        <h2 className='black'>{store.name}</h2>
                        <p className='black'>📍 {store.address}</p>
                        <div className='profileLinksDiv'>
                            <Link to={`/stores/${storeId}/edit`} className='greenBack white'>Edit</Link>
                            <button onClick={deleteStore} className='whiteBack black'>Delete</button>
                        </div>
                    </div>
                </section>
                <section className='sotreItems tigerBack'>
                    <h3 className='black'>{store.name}'s Items</h3>
                    {items ? 
                    <div className='itemsList'>
                        {store.items.map((item) => (
                            <>
                                <ItemCard key={item._id} item={item} storeId={storeId} />
                            </>
                        ))}
                        <Link to={`/stores/${storeId}/items/new`} className='linkItemCard whiteBack'>
                            <h1>+</h1>
                            <p>Add a new item</p>
                        </Link>
                    </div>
                    :
                    <>
                        <p>This establishment doesn't have any items yet.</p>
                        <Link to={`/stores/${storeId}/items/new`} className='linkItemCard whiteBack'>
                            <h1>+</h1>
                            <p>Start adding items</p>
                        </Link>
                    </>
                    }
                </section>
            </>
            :
            <Loader />
            }
        </>
    );
};