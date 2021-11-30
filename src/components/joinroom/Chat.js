import React, { useState } from 'react';

const Chat = () => {
    return (
        <div>
            <div>For chatbox</div>
            <form>
                <textarea defaultValue='Chat input'>                    
                </textarea>
                <button type = 'submit'>
                    Send
                </button>
            </form>
        </div>
    );
}

export default Chat;