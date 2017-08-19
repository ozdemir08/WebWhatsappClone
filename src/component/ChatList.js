/**
 * Created by mehmet on 18/08/2017.
 */

// @flow weak

import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import issiziJpg from '../img/issizi.jpg'

const styles = {
        width: '100%',
        height: '100%',
        maxWidth: 360,
        float: 'left',
    };

class ChatList extends Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        console.log("clicked");
        console.log(event);
    }

    handleChange = param => e => {
        console.log('handle change');
        console.log(param);
    };

    render(){
        return (
            <List style={styles}>
                <Subheader>Recent chats</Subheader>
                <ListItem
                    onClick={() => this.handleClick(1)}
                    key="1"
                    primaryText="Brendan Lim"
                    secondaryText="Hi Mehmet, how are you"
                    leftAvatar={<Avatar src="http://image.minyanville.com/assets/FCK_Jan2011/Image/cory/a3.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    key="2"
                    primaryText="Eric Hoffman"
                    leftAvatar={<Avatar src="http://www.kentminigolfclub.co.uk/dave%20avatar.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                    onClick={this.handleChange(2)}
                />
                <ListItem
                    primaryText="Grace Ng"
                    leftAvatar={<Avatar src="http://4.bp.blogspot.com/-SRSVCXNxbAc/UrbxxXd06YI/AAAAAAAAFl4/332qncR9pD4/s1600/default-avatar.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                    onClick={this.handleClick}
                />
                <ListItem
                    primaryText="Devlet Bahceli"
                    leftAvatar={<Avatar src={issiziJpg} />}
                    rightIcon={<CommunicationChatBubble />}
                />
                <ListItem
                    primaryText="Raquel Parrado"
                    leftAvatar={<Avatar src="images/raquelromanp-128.jpg" />}
                    rightIcon={<CommunicationChatBubble />}
                />
            </List>
        );
    }
}

export default ChatList;