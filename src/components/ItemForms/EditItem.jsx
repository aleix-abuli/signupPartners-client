export default function EditItem(props) {

    const { itemData, loadingImage, handleInputChange, handleSubmit, handleImageUpload } = props;
    const { name, price, imageUrl } = itemData;
    
    return(
        <>
            <form onSubmit={handleSubmit} className='formClass'>
                <label htmlFor="name">Name<sup>*</sup></label>
                <input name='name' value={name} onChange={handleInputChange} required />
                
                <label htmlFor="price">Price<sup>*</sup></label>
                <input name='price' value={price} onChange={handleInputChange} required />
                
                <label htmlFor="imageUrl">Image</label>
                <input name='imageUrl' type='file' onChange={handleImageUpload} />

                {imageUrl && <img src={imageUrl} style={{ 'height' : '100px' }} />}

                {loadingImage ? <p>Please wait, image loading...</p> : <button type="submit" className="formBtn btnBtn white greenBack" >Edit item</button>}
            </form>
        </>
    );
};