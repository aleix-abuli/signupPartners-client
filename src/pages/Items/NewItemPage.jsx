import '../../Form.css';
import NewItem from '../../components/ItemForms/NewItem';

export default function NewItemPage() {
    return(
        <>
            <div className='formContainer tigerBack' style={{'min-height': '80vh'}} >
                <h2>Add a new item</h2>
                <NewItem />
            </div>
        </>
    );
};