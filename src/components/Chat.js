import React from 'react'
import "../Styles/Chat.css";
import {useParams} from 'react-router-dom';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoIcon from '@material-ui/icons/Info';
function Chat() {
const {roomId} = useParams();

    return (
        <div className='chat'>
<div className='chat_header'>
    <div className='chat_header_left'>
<h4 className='chat_channelName'>
    <strong>#general</strong>
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
        </div>
    )
}

export default Chat
