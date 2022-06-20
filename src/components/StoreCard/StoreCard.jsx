import './StoreCard.css';
import { Link } from "react-router-dom";

export default function StoreCard(props) {

    const { store } = props;

    return(
        <div className='whiteBack containerSotreCard'>
            <Link to={`/stores/${store._id}`}>
                <h4 className='black'>{store.name}</h4>
                <p className='black'>{store.address}</p>
            </Link>
            <img src={store.imageUrl} />
        </div>
    );
};