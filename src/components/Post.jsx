import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { CardMedia, IconButton, Avatar, Skeleton } from "@mui/material";
import {
  ChatBubbleOutline,
  BookmarkBorder,
  Favorite,
} from "@mui/icons-material";
import PostSkeleton from './PostSkeleton';



export default function Post(props) {
  const { post, profile, likes, comments } = props;
  const [likePost, setLikePost] = useState(false);
  const [loading, setLoading] = useState(true);
  const imgEl = useRef();


  const handleLikePost = () => {
    setLikePost(!likePost);
  };
  useEffect(()=>{
    const timer = setTimeout(() => {
        setLoading(false)
      }, 3000);
      return () => clearTimeout(timer);
  }, []);
  return (
    <PostContainer>
      {loading ? (
         <PostSkeleton/>
      ) : (
        <>
          <PostContent onDoubleClick={handleLikePost}>
            <LikePost
              style={
                likePost
                  ? { animationName: "like-heart-animation" }
                  : { animationName: "like-heart" }
              }
            />
            <PostAsset
              component="img"
              ref={ imgEl }
              src={post}
              alt="post"
            />
          </PostContent>
          <PostFooter>
            <PostPublisher>
              <Avatar
                src={profile.image}
                alt={profile.username}
                sx={{ width: 35, height: 35 }}
              />
              <span>{profile.username}</span>
            </PostPublisher>
            <PostActions>
              <IconButton>
                <ChatBubbleOutline />
              </IconButton>
              <IconButton>
                <BookmarkBorder />
              </IconButton>
            </PostActions>
          </PostFooter>
        </>
      )}
    </PostContainer>
  );
}
const LikePost = styled(Favorite)`
  position: absolute;
  top: calc(40% - 2rem);
  left: calc(50% - 3rem);
  font-size: 6rem;
  color: white;
  animation-duration: 1000ms;
  animation-timing-function: ease-in-out;
  opacity: 0;
  transform: scale(0);
  @keyframes like-heart-animation {
    0%,
    to {
      opacity: 0;
      transform: scale(0);
    }
    15% {
      opacity: 0.9;
      transform: scale(1.2);
    }
    30% {
      transform: scale(0.95);
    }
    45%,
    80% {
      opacity: 0.9;
      transform: scale(1);
    }
  }
`;

const PostPublisher = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-left: 15px;
  span {
    margin-left: 6px;
    color: white;
  }
`;
const PostContainer = styled.div`
  border-radius: 5px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;
`;

const PostContent = styled.div`
  width: 100%;
  height: 90%;
`;
const PostAsset = styled(CardMedia)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

const PostFooter = styled.div`
  width: 100%;
  height: 10%;
  padding-top: 10px;
  padding-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PostActions = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
  width: 50%;
  margin-right: 15px;
  svg {
    color: white;
  }
`;
