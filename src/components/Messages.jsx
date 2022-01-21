import React from "react";
import {
  Badge,
  Grid,
  Button,
  InputBase,
  IconButton,
  Divider,
  ListItemAvatar,
  List,
  ListItem,
  Stack,
  ListItemText,
  Avatar,
} from "@mui/material";
import { styled as muiStyled, alpha } from "@mui/material/styles";
import styled from "styled-components";
import { Edit } from "@mui/icons-material";
import MessageItem from "./MessageItem";
import { profiles } from "../dummyData";

export default function Messages() {
  return (
    <Grid container>
      <Grid item md={8} xs={12}>
        <ChatContainerArea>
          <ChatHeader>
            <Avatar sx={{ width: 35, height: 35 }} src="assets/profiles/1.jpeg">
              I
            </Avatar>
            <Stack>
              <h4>Abdellah</h4>
              <h6>6 min ago</h6>
            </Stack>
          </ChatHeader>
          <ChatTextarea>
            {[...new Array(14)].map((item, key) => {
              return (
                <>
                  <MessageItem
                    sender={{
                      img: "assets/profiles/1.jpeg",
                      username: "ankouri",
                    }}
                    own={false}
                    msg="Hi Ali !"
                    timeslaps="5min ago"
                  />
                  <MessageItem
                    sender={{ img: "assets/profiles/3.jpeg", username: "Ali" }}
                    own={true}
                    msg="Hi 3bal !"
                    timeslaps="5min ago"
                  />
                </>
              );
            })}
          </ChatTextarea>
          <ChatActions>
            <ChatField />
            <ChatSend>Send</ChatSend>
          </ChatActions>
        </ChatContainerArea>
      </Grid>
      <Grid item md={4} xs={12}>
        <ListChatContainer>
          <ListChatHeader>
            <h4>Inbox</h4>
            <IconButton>
              <Edit />
            </IconButton>
          </ListChatHeader>
          <ListChatContent>
            <ListChat>
              {[...new Array(11)].map((item, key) => {
                return (
                  <>
                    <ListItem
                      secondaryAction={
                        <Badge color="secondary" variant="dot"></Badge>
                      }
                    >
                      <ListItemAvatar>
                        <Avatar src={profiles[key].image}></Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ fontFamily: "Maven Pro" }}
                        primary={profiles[key].username}
                        secondary="Hi Ankouri!"
                      />
                    </ListItem>
                    <Divider />
                  </>
                );
              })}
            </ListChat>
          </ListChatContent>
        </ListChatContainer>
      </Grid>
    </Grid>
  );
}
const ChatSend = styled(Button)`
  color: white;
  font-family: "Maven Pro" !important;
  border-radius: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;
const ChatField = styled(InputBase)`
  flex-grow: 1;
  border: 1px solid #5a5c6a;
  border-radius: 20px;
  padding-left: 10px;
  padding-top: 3px;
  padding-right: 3px;
  padding-bottom: 3px;
  margin-left: 10px;
  color: white;
  font-family: "Maven Pro" !important;
`;
const ChatActions = styled.div`
  display: flex;
  justify-content: "space-between";
  align-items: center;
`;
const ChatHeader = muiStyled("div")(({ theme }) => ({
  height: "5vh",
  paddingLeft: "16px",
  paddingRight: "6px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  color: "white",

  background: alpha(theme.palette.common.white, 0.15),
  div: {
    color: "white",
    marginLeft: "12px",
    h4: {
      fontWeight: "400",
    },
    h6: {
      fontWeight: "400",
    },
  },
}));
const ChatTextarea = styled.div`
  height: 86%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ListChatContent = styled.div`
  height: 70vh;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ListChat = styled(List)`
  span {
    font-family: "Maven Pro" !important;
    color: white !important;
    font-size: 18px;
  }
  li > div > p {
    font-family: "Maven Pro" !important;
    color: #bdbdbd !important;
  }
`;
const ListChatHeader = muiStyled("div")(({ theme }) => ({
  height: "5vh",
  paddingLeft: "16px",
  paddingRight: "6px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "white",
  background: alpha(theme.palette.common.white, 0.15),
  svg: {
    color: "white",
  },
}));
const ListChatContainer = styled.div`
  /* height:100vh; */
  border: 1px solid #5a5c6a;
`;
const ChatContainerArea = styled.div`
  height: 75vh;
  width: 99%;
  border: 1px solid #5a5c6a;
`;
