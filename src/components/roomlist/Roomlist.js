import React from 'react';
import Roomitem from './Roomitem';

const Roomlist = () => {
    const roomlist = [1,2,3,4,5]
    return(
        <div className="roomlist">
            {roomlist.map((n)=><Roomitem/>)}
        </div>
    )
}

export default Roomlist;