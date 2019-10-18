import React, { useState } from 'react';

function Job({ title, description, email, link, date, id, savePost}) {
  const [hide, changeHidden] = useState(true);
  if(hide) {
    return(
      <div className="col-10 col-md-8 col-lg-7">
        <div className="card mb-4 shadow border-dark">
          <div className="card-body text-info">
            <h4 className="card-title">{title}</h4>
            <button type="button" className="btn btn-dark" onClick={ (event => changeHidden(!hide)) }>Show</button>
          </div>
        </div>
        </div>
    );
  }

  return(
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow border-info">
        <div className="card-body text-dark">
          <h4 className="card-title">{ title} </h4>
          <p className="card-text">description: { description }</p>
          <p className="card-text">email: { email }</p>
          <a href={ link } className="card-link"><p>LINK</p></a>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-info" onClick={ (event) => changeHidden(!hide) }>Hide</button>
            <button type="button" className="btn btn-info" onClick={(event) => savePost(id)}>Save</button>
          </div>
          
        </div>
        <div className="card-footer small text-muted text-right">
          { date }
        </div>
      </div>
    </div>
  );
}

export default Job;