/**
 * Created by mehmet on 19/08/2017.
 */

import React, {Component} from 'react';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';

class ChatInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            chatInput : "",
        };

        this.submitHandler = this.submitHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
    }

    submitHandler(event) {
        console.log(this.state.chatInput + ' is sent.');
        // Stop the form from refreshing the page on submit
        event.preventDefault();

        // Clear the input box
        this.setState({ chatInput: '' });

        // Call the onSend callback with the chatInput message
        // this.props.onSend(this.state.chatInput);
    }

    textChangeHandler(event){
        const text = event.target.value;
        this.setState({
            chatInput : text,
        });
    }

    render(){
        return (
            <form className="chat-input" onSubmit={this.submitHandler}>
                <input type="text"
                       onChange={this.textChangeHandler}
                       value={this.state.chatInput}
                       placeholder="Write a message..."
                    required />
                <CommunicationChatBubble onClick={this.submitHandler}/>
            </form>
        );
    }
}

export default ChatInput;