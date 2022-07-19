import React, { useState } from 'react';
import db from './index.js'
import {collection,addDoc} from 'firebase/firestore'
import App from './App';
function CreatePost() {
    var [sent,setSent]=useState(false)
    var [title,setTitle]=useState('')
    var [author,setAuthor]=useState('')
    var [content,setContent]=useState('')
    var [img,setImage]=useState('')
    var [type,setType]=useState('fiction');
    var [disabled,setDisabled]=useState(true)

    function SubmitButton() {
        if(title&&author&&content) {
            return <button data-testid="dedo" type="submit" onClick={handleSubmit} className="btn btn-success" >Create Post</button>
        }
        else {
            return <button data-testid="dedo" type="submit" onClick={handleSubmit} className="btn btn-success" disabled>Create Post</button>
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        var collectionRef = collection(db,'posts')
        try{
            await addDoc(collectionRef,{
              title,
              author,
              content,
              img:{
                  backgroundImage:`url(${img})`
              },
              type
            })
            alert('Your post has been added successfully!')
            setSent(true)
        
          }
          catch(error){
            alert('Sorry. Some error has occured:',error)
          }
          
        
    }

    return(
        <div className="container rounded bg-create my-4">
            {sent&&<p className="p-3"><i>Your form has been submitted successfully. Return to Home</i></p>}
            {!sent&&<form >
            <div className="row">
                <div className="col-12 p-3">
                    <label for="title"><strong>Title:</strong></label>
                    <input id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className='d-block w-100 my-2 border border-black rounded' type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <label for="author"><strong>Author:</strong></label>
                    <input id="author" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className='d-block w-100 my-2 border border-black rounded' type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <label for="cov-img"><strong>Cover Image Address:</strong></label>
                    <input id="cov-img" value={img} onChange={(e)=>{setImage(e.target.value)}} className='d-block w-100 my-2 border border-black rounded' type="text" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <label><strong>Type:</strong></label>
                    <select  className='d-block py-1 w-100 my-2 border border-black rounded' value={type} onChange={(e)=>{setType(e.target.value)}}>
                        <option value="fiction">fiction</option>
                        <option value="non-fiction">non-fiction</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <label for="content"><strong>Content:</strong></label>
                    <textarea id="content" value={content} onChange={(e)=>{setContent(e.target.value)}}  className='d-block w-100 my-2 border border-black rounded' style={{height:400}} type="text" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 p-3">
                <SubmitButton />
                </div>
            </div>
            </form>}
            
            

        </div>
    );



}
export default CreatePost;