
import React from 'react';
export function PostItem({ data }) {

    
    return(
    <>
    <p> PostItem </p>

    {data.map((post)=>{
        
        return (
            <div style={{border: " 1px solid black", borderRadius : "20px", padding: "10px", margin: "10px", fontFamily: "sans-serif"  }} key={post.id}>

           <div style={{display: 'flex',width: "100%" }}>
             <p style={{display: 'flex',width: "10%" }}>{post.id}</p>
            <h3 style={{display: 'flex',width: "60%" }}>{post.title}</h3></div>
            <p>{post.body}</p>
        </div>
        )
        
    })}
    </>
    )
}