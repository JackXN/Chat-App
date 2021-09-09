import React, {useEffect, useState} from 'react'
import "../Styles/Chat.css";
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoIcon from '@material-ui/icons/Info';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';



function Chat() {
const {roomId} = useParams();
const [roomDetails, setRoomDetails] = useState(null);
const [roomMessages, setRoomMessages] = useState([]);



useEffect(() => {
if(roomId) {
    db.collection('rooms')
    .doc(roomId)
    .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
}
db.collection('rooms')
.doc(roomId)
.collection('messages')
.orderBy('timestamp', 'asc')
.onSnapshot((snapshot) =>
setRoomMessages(snapshot.docs.map((doc) => doc.data()))
)
}, [roomId])




    return (
        <div className='chat'>
<div className='chat_header'>
    <div className='chat_header_left'>
<h4 className='chat_channelName'>
    <strong>#{roomDetails?.name}</strong>
    <StarBorderOutlinedIcon/>
</h4>
    </div>
    <div className='chat_header_right'>
<p>
<InfoIcon/>
Details
</p>
    </div>
</div>

<div className='chat_messages'>
{roomMessages.map(({message,timestamp,user,userImage}) => (
    <Message
    message={message}
    timestamp={timestamp}
    user={user}
    userImage={userImage}
    />
))}
</div>
<ChatInput channelName={roomDetails?.name}/>
        </div>
    )
}

export default Chat
