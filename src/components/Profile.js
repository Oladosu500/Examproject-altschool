import React from "react";
import { format } from 'date-fns'

export default function Profile(props) {
    return (
        <>
        <div className="container">
        <article className="item-all">
        <article className="item-art">
            <img src={props.owner.avatar_url} alt="props.owner.login" />
            <h2>{props.owner.login}</h2>
            <p>{props.name}</p>
            {props.private ? <p className="red">Private</p> : <p className="green">Public</p>}
        </article>

        <div className="item-repo">
          <p>this repository was created at {" "} {format (new Date(props.created_at), "dd MMMM yyyy" )} by{" "}{props.owner.login } </p>  
        
        
            <a href={props.html_url} target="_blank" rel="noreferrer noopener">View Repo</a>
            
            
                  <p>{props.watchers_count.toLocaleString()}Watchers</p>  
            
          
            <p>{props.open_issues} issues</p>
        </div>
        </article> 
        </div>   
        </>
    )
};

