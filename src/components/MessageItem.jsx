import React from 'react';
import styled from "styled-components";
import { Avatar } from "@mui/material";

export default function MessageItem(props) {
    const { sender, msg, timeslaps, own} = props;
    return (
        <MessageContainer own={own}>
            <MessageAvatar src={ sender.img } alt={ sender.username } />
            <MessageContentArea>
                <MessageContent >{ msg }</MessageContent>
                <MessageTime >{ timeslaps }</MessageTime>
            </MessageContentArea>
        </MessageContainer>
    )
}
const MessageContentArea = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    margin-top:15px;

`;
const MessageContainer = styled.div`
    display: flex;
    justify-content: ${props => props.own ? 'end' : 'start'};
    flex-direction: ${ props => props.own ? 'row-reverse' : 'row'};
    padding:9px;
`;
const MessageAvatar = styled(Avatar)`
    margin-left:10px;
`;
const MessageContent = styled.div`
    background:rgba(255, 255, 255, 0.15);
    display:inline-block;
    padding:8px;
    border-radius:10px;
    color:white;
`;
const MessageTime = styled.div`
    font-size:13px;
    color:rgb(163 150 152);
    margin-left:3px;
`;