import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { PlayCircle,  } from "@mui/icons-material";
import CircleStatus from "./CircleStatus";
import { profiles } from '../dummyData';
import { useHistory } from "react-router";



export default function Stories() {
  const history = useHistory();
  return (
    <StoriesWrapper>
      <StoriesHeader>
        <h3>Stories</h3>
        <Button startIcon={<PlayCircle />} onClick={() => {
            history.push("/stories");
          }}>Watch all</Button>
      </StoriesHeader>
      <StoriesContent>
        {[...new Array(11)].map((item, key) => {
        return <StoryItem key={key}>
          <CircleStatus bg={ profiles[key].image } />
          </StoryItem>;
            
        })}
       
      </StoriesContent>
    </StoriesWrapper>
  );
}
const StoryItem = styled.div`
    width:100%;

`;
const StoriesContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  overflow-x: scroll;
  -ms-overflow-style: none; 
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  box-sizing: content-box;
  
`;
const StoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-family: "Maven Pro";
    font-weight: 400;
    color: white;
  }
  button {
    background: transparent;
    color: white;
    font-family: "Maven Pro";
  }
`;

const StoriesWrapper = styled.div`
  width: 100% !important;
  margin-top: 20px;
  margin-bottom: 20px;
`;
