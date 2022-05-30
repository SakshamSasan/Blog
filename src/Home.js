import React,{useState,useEffect} from 'react';
import {collection,query,onSnapshot} from 'firebase/firestore';
import db from './index'
import { Link } from 'react-router-dom';
function Home() {

    var [posts,setPosts]=useState([])
    var [loading,setStatus]=useState(true)
    useEffect(()=>{

        var collectionRef=collection(db,'posts');
        try{
            var changes = onSnapshot(collectionRef,(snapshot)=>{
            let foo = snapshot.docs.map((item)=>{
                let newArr=item.data();
                newArr.id = item.id;
                return newArr;
            })
            setPosts(foo)
         
          })
        }
        catch(e) {
          alert('Error occured: ',e);
        }
        setStatus(false)
       return ()=>{
           changes && changes();
       }
    },[])
    

    return (
        <>
            <div className="container rounded p-3 my-5" style={{backgroundColor:'rgba(250,250,250,0.7)'}}>
                <h3>Fiction</h3>
                {loading&&<p><i>Content is being loaded....</i></p>}
                {!loading&&
                <div className="row">
                    {posts.map((item)=>{
                        if(item.type=='fiction'){
                           
                            return (
                                
                                    <div className="col-12 bg-white rounded col-md-6 my-4 mx-md-5 effect" key={item.id}>
                                        <Link to={`/Blog/posts/${item.id}`} style={{textDecoration:'none',color:'black'}} >
                                        <div className="row">
                                            <div className="col-3 blog-image" style={item.img}>
                                            </div>
                                            <div className="col-8 pt-2">
                                            <h3><b>{item.title}</b></h3>
                                           
                                             <p><i>{item.author}</i></p>
                                            <br />
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                
                                
                            )
                        }
                    })}
                </div>}

            </div>

            <div className="container rounded p-3 my-5" style={{backgroundColor:'rgba(250,250,250,0.7)'}}>
                <h3>Non-Fiction</h3>
                {loading&&<p><i>Content is being loaded....</i></p>}
                {!loading&&
                    <div className="row">
                    {posts.map((item)=>{
                        if(item.type=='non-fiction'){
                        
                            return (
                                
                                    <div className="col-12 bg-white rounded col-md-6 my-4 mx-md-5 effect" key={item.id}>
                                        <Link to={`/Blog/posts/${item.id}`} style={{textDecoration:'none',color:'black'}}>
                                        <div className="row">
                                            <div className="col-3 blog-image" style={item.img}>
                                            </div>
                                            <div className="col-8 pt-2">
                                                <h3><b>{item.title}</b></h3>
                                        
                                                <p><i>{item.author}</i></p>
                                                <br />
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                
                                
                            )
                        }
                    })}
                </div>}


            </div>
        
        
        
        
        
        
        </>
    );

}
export default Home;