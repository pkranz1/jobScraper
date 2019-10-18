import React, { useState } from 'react';

function Job({ title, description, email, link, date}) {
  const [hide, changeHidden] = useState(true);

  return(
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <h4>{ title} </h4>
          <p>description: { description }</p>
          <p>email: { email }</p>
          <a href={ link }><p>Link</p></a>
        </div>
        <div className="card-footer small text-muted text-right">
          { date }
        </div>
      </div>
    </div>
  );
}

export default Job;