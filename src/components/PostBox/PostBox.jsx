import React, { useState } from 'react'
import "./PostBox.css"
import { FaRegImage } from "react-icons/fa6";


const PostBox = ({setedit, setdatas, datas}) => {
    const [imgPost, setImgPost] = useState()
    const [Input, setInput] = useState()

    const imgShow = (e) =>{
        const file = e.target.files[0]
        const img = URL.createObjectURL(file)
        setImgPost(img)
    }

    const addPost = () => {
        setedit(false)
        const newPost = {text: Input, img: imgPost}
        setdatas([...datas, newPost])
    }

  return (
    <div className='PostHolder'>
        <div className="PostHoldIt">
            <div className="PostTop">
                <div className="PostTopRight"></div>
                <span className='SpanTopX' onClick={()=> setedit(false)}> X </span>
            </div>

            <div className="PostDetails">
                <div className="PostTextHolder">
                    <textarea onChange={(e)=> setInput(e.target.value)} placeholder='What do you have on your mind?'> </textarea>
                </div>

                <div className="PostImgHolder">
                    <img src={imgPost} alt="" />
                </div>
            </div>

            <div className='PostBottom'> 
                <input type="file" id='1' hidden onChange={imgShow}/>  
                <label htmlFor="1"> <FaRegImage />  </label>  
                <button onClick={addPost}>Post now</button>
            </div>
            </div>
        </div>
  )
}

export default PostBox