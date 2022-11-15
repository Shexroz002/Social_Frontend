import axios from "axios";
import { useState, useEffect } from "react";
import Feed from "./Feed";
import { Link } from "react-router-dom";
export default function FavoritePost(){
    const [isPosts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/feeds/api/favorite/post/all',{
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        .then(data=>{
            console.log(data,'Feed')
            setPosts(data.data)
        })
        .catch(error=>{
            console.log(error)
        })

    },[])
    function delete_post(post_id){
        setPosts(prev=>{
            let last = prev.filter(item=>item.favorite_post.id !== post_id)
        return last
    })
    }

    return(
        <>
         <main >
        <div className="container">
            <div className="left"></div>
            <div className="middle">
            <Link to={`/feed/`} className="back-icon" ><i className="fas fa-arrow-left"></i></Link>

                <form className="create-post">
                   <h2>Your fovarite posts</h2>
                </form>

                <div className="feeds">
                {isPosts.length ? isPosts.map((item) =>(
            <Feed
            status = 'favorite'  
            key={item.id}
            id={item.favorite_post.id}
            username={item.favorite_post.post_creator.username} 
            user_image={item.favorite_post.post_creator} 
            post_image={item.favorite_post.post_image} 
            post_title={item.favorite_post.post_title}
            create_by = {item.favorite_post.create_by}
            like = {item.favorite_post.like}
            delete_post = {delete_post}
            userid = {item.favorite_post.post_creator.id}
            favorite_post = {true}

            />
        )

       )   : ''}
                </div>
            </div>

            <div className="right"> </div>
        </div>
    </main>
        </>
    )
}