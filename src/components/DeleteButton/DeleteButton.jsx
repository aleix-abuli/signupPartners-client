export default function DeleteButton(props) {

    const { callback } = props;

    return(
        <button onClick={callback} className='black tigerBack'>Delete</button>
    );
};