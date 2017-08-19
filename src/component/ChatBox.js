/**
 * Created by mehmet on 19/08/2017.
 */

import React, {Component} from 'react'
import Messages from './Messages';
import ChatInput from './ChatInput';

class ChatBox extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Messages/>
                <ChatInput/>
            </div>
        );
    }
}

export default ChatBox;