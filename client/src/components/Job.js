import React, {useState} from 'react';
import '../index.css'

function Job({job}){
  const [hide, updateHide] = useState(true);
  
  if( hide ) {
    return(
      <div>
        <h4>{job.title}</h4>
        <button onClick={() => updateHide(false)}>Show</button>
      </div>
    );
  } else {
    return(
      <div>
        <h4>{job._title}</h4>
        <p>{job._description}</p>
        <a href={job._link}><p>Link</p></a>
        <button onClick={() => updateHide(true)}>Hide</button>
      </div>
    )
  }
}

  export default Job;