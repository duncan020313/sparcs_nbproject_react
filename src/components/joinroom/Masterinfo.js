import React, { useState } from 'react';

const Masterinfo = () => {
    const [master, setMaster] = useState({name:'default name', 
    address:'default address', account:'default account'});
    return (
        <div>
            <h1>
                Master Name : {master.name}
            </h1>
            <h3>
                Master address : {master.address}
            </h3>
            <h3>
                Master account : {master.account}
            </h3>
        </div>
    );
}

export default Masterinfo;