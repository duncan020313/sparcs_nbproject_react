import React from 'react';
import Chat from './Chat';
import Masterinfo from './Masterinfo';

const Joinroom = () => {
    return(
        <div className="joinroom">
            <div>
                <Chat/>
            </div>
            <div>
                <Masterinfo/>
            </div>            
        </div>
    )
}

export default Joinroom;