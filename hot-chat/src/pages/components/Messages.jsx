import React from 'react'

const Messages = () => {
    return (
        <div className="Messages flex-1 bg-gray-950 flex flex-col gap-2 overflow-scroll p-2 scrollbar-hidden">
            <div className="recieved bg-[#86C232] place-self-start px-4 py-2 rounded-xl rounded-tl-none">Hi</div>
            <div className="sent bg-[#86C232] place-self-end px-4 py-2 rounded-xl rounded-tr-none">Hello</div>
        </div>
    );
}

export default Messages;