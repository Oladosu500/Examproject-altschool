import React from "react";
import {Link} from "react-router-dom"

function Error() {
  return (<>
    <div className="rep">
      <h1>Error 404 page not found</h1>
    </div>
     <div className="">
     <Link to="/">home</Link>
   </div></>
  );
}

export default Error;
