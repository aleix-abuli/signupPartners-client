import '../../Form.css';
import NewStore from '../../components/StoreForms/NewStore';

export default function NewStorePage() {
    return(
        <>
            <div className='formContainer tigerBack' style={{'min-height': '80vh'}}>
                <h2>Add a new establishment for your business</h2>
                <NewStore />
            </div>
        </>
    );
};