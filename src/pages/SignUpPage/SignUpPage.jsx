import axios from 'axios';
import { useEffect } from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Form1 from "../../components/Forms/Form1";
import Form2 from "../../components/Forms/Form2";
import Form3 from "../../components/Forms/Form3";

const server = process.env.REACT_APP_API_URL;

export default function SignUpPage() {

    const navigate = useNavigate();

    const [stage, setStage] = useState(1);
    const [checked, setChecked] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const [requestBody, setRequestBody] = useState({
        partner: null,
        banking: null
    });

    const [signupData, setSignupData] = useState({
        businessName: '',
        city: '',
        country: '',
        userName:'',
        userSurname:'',
        password: '',
        email: '',
        phone: '',
        type: ''
    });

    const [bankingDetails, setBankingDetails] = useState({
        legalName: '',
        taxID: '',
        address: '',
        bank: '',
        accNumber: '',
        ownerName: '',
        ownerSurname: '',
    });

    function nextStage(e) {

        e.preventDefault();

        if(stage < 3) setStage(stage+1);
        else return;
    };

    function previousStage(e) {

        e.preventDefault();

        if (stage > 1) setStage(stage-1);
        else return;
    };

    function handleInputChangeData(e) {

        const { value, name } = e.currentTarget;
        setSignupData({ ...signupData, [name]: value });

    };

    function handleInputChangeBanking(e) {

        const { value, name } = e.currentTarget;
        setBankingDetails({ ...bankingDetails, [name]: value });

    };

    function handleSubmit(e) {
       
        e.preventDefault();

        if(checked) {
            axios
            .post(`${server}/auth/signup`, requestBody, { "Access-Control-Allow-Origin" : "https://aleix-partners-server.herokuapp.com" })
            .then((newUser) => navigate('/login'))
            .catch((err) => console.log(err));
        } else {
            setErrorMsg('You need to agree to the terms and conditions.');
        }

    };

    function checkTerms(e) {
        setChecked(!checked);
        setRequestBody({
            partner: signupData,
            banking: bankingDetails
        });
    };

    return (
        <div className='tigerBack formBack'>
        <h1>Become a Partner</h1>
        {(() => {
            switch(stage) {
                case 1: return <Form1 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleInputChangeData={handleInputChangeData} />;
                case 2: return <Form2 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleInputChangeBanking={handleInputChangeBanking} bankingDetails={bankingDetails} />;
                case 3: return <Form3 signupData={signupData} nextStage={nextStage} previousStage={previousStage} handleSubmit={handleSubmit} checkTerms={checkTerms} errorMsg={errorMsg} />;
            }
        })()}
        </div>
    );
};