import React from 'react';

function updateNotification(stateFunction, messsage, time) {
    stateFunction(messsage);
    
    setTimeout(function() {
      stateFunction(null);
    }, time);
  }

function Notification({ message }) {
    if (message === null) {
        return null;
    } else {
        return(
            <div className="container-fluid">
            <div className="row">
                <div className="col">
                    {message}
                </div>
            </div>
        </div>
        );
        
    }
}

export {Notification, updateNotification};