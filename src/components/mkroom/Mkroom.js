import React, { useState } from 'react';

const Mkroom = () => {
    const [maxMember, setMaxMember] = useState(3);
    const incMaxMember = () => {
        setMaxMember(maxMember+1);
    }
    const decMaxMember = () => {
        setMaxMember(maxMember-1);
    }
    return(
        <div className="mkroom">
            <form>
                <textarea defaultValue="Roomname"></textarea>
                <div className="counter">
                    <button type="button" onClick={incMaxMember}>+</button>
                    {maxMember}
                    <button type="button" onClick={decMaxMember}>-</button>
                </div>
                <textarea defaultValue="eating house name"></textarea>
                <div>
                    <button className="submitbutton" type="submit">Submit</button>
                </div>   
            </form>
                
        </div>
    )
}

export default Mkroom;