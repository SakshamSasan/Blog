import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {doc,getDoc} from 'firebase/firestore'
import db from './index'

function Post() {

    var [post,setPost]=useState({})
    var [loading,setLoading]=useState(true)
    var {id} = useParams()
    useEffect(()=>{
        async function getDatafromDB(){
            let docRef = doc(db,"posts",id)
            try{
                let document=await getDoc(docRef)
                setPost(document.data())
            }
            catch{
            alert("Sorry, there was some error in retreiving documents")
            }
            setLoading(false)
        }
        getDatafromDB();
    },[])

    return(
        
        <div className="container p-3 p-md-5 bg-white rounded my-5">
            {loading&&<p><i>The content is being loaded....</i></p>}
            {!loading&&
                <div className="w-100">
                    <h1 className="my-3">{post.title}</h1>
                    <p className="mt-4 mb-5"><i><strong>{post.author}</strong></i></p>
                    <div className="d-block m-auto blog-image dim" style={post.img}>

                    </div>
                    <p className="my-5">{post.content}</p>

                </div>
               
            }
        </div>
        
    );
}
export default Post;