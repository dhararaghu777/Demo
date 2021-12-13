import React, {useState} from 'react'

function AddImage() {

    const [image, setImage] = useState(null);
    const onChangeHandler=(e)=>{
        console.log(e);
        if(e.target.files && e.target.files[0])
        {
            let img= e.target.files[0];
            const newImg= URL.createObjectURL(img)
            console.log('new Image', newImg);
            setImage(newImg);
            console.log(image);
        }
        else{
            console.log("file not uploaded");
        }

    }

    return (
        <div>
            <input type="file" id="myFile"  onChange={onChangeHandler}/>
            <div style={{background:"blue"}}>
              {image &&  <img src={image} alt="" style={{width:'100px', height:'100px'}}/>}
            </div>
        </div>
    )
}

export default AddImage;
