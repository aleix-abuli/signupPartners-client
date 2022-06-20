import './ItemCard.css';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import DeleteButton from '../DeleteButton/DeleteButton';

const server = process.env.REACT_APP_API_URL;

export default function ItemCard(props) {

    const navigate = useNavigate();
    
    const { item, storeId } = props;

    function deleteItem(e) {

        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');

        axios
        .delete(`${server}/items/${item._id}`, {
            headers: { Authorization: `Bearer ${storedToken}` }
        })
        .then((__) => navigate(`/stores/${storeId}`))
        .catch((err) => console.log(err));

    };

    return(
        <div className='containerItemCard whiteBack'>
            <h4 className='black'>{item.name}</h4>
            <p className='black'>{item.price}</p>
            <img src={item.imageUrl}/>
            <div className='itemCardLinkDiv'>
                <Link to={`/edit/${item._id}`} className='white greenBack'>Edit</Link>
                <DeleteButton callback={deleteItem} />
            </div>
        </div>
    );
};