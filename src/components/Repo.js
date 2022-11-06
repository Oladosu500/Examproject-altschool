import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Profile from "./Profile";
import  axios  from "axios";
import "./style.css"

function Repo() {
    const [items, setItems] = useState([])
    const [user] = useState("Oladosu500")

    useEffect(() => {
        axios.get("https://api.github.com/users/Oladosu500/repos") 
         .then((res) => {setItems(res.data)})
    }, [])

    
    
   
  return (
    <> 
      <div className="rep">
        <h1>
          Viewing {user}'s repositories
        </h1>
      </div>

      {!items ? (
        <Loading />
      ) : (
        <div className="item-cont">
          {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
        </div>
      )}
    </>
  )
	
}

export default Repo

//const res =  await fetch('https://api.github.com/users/Oladosu500/repos')
