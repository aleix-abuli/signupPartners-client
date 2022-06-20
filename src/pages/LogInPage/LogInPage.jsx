import '../../Form.css';
import axios from 'axios';
import { useContext} from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../../components/Forms/LogInForm';
import { AuthContext } from '../../context/auth.context';

const server = process.env.REACT_APP_API_URL;

export default function LogInPage() {

    const navigate = useNavigate();

    const { storeToken, authenticateUser, user, logOutUser } = useContext(AuthContext);

    const [logInData, setLogInData] = useState({
        email: '',
        password: ''
    });

    function handleInputChange(e) {

        const { value, name } = e.currentTarget;
        setLogInData({ ...logInData, [name]: value });

    };

    function handleSubmit(e) {

        e.preventDefault();

        axios
        .post(`${server}/auth/login`, logInData, {"Access-Control-Allow-Origin": 'https://aleix-partners-server.herokuapp.com'})
        .then(({ data }) => {
            console.log(data.authToken);
            storeToken(data.authToken);
            authenticateUser();
            console.log('Logeade chique')
        })
        .catch((err) => console.log(err));

    };

    useEffect(() => {
        if(user) navigate(`/partners/${user._id}`)
    }, [user]);

    return(
        <div className='formContainer tigerBack fullHeight'>
            <LogInForm data={logInData} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
    );
};