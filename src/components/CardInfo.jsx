import React from "react";
import styled from "styled-components";
import { Stack, Divider} from "@mui/material";
import CircleStatus from "./CircleStatus";

export default function CardInfo(props) {
  const { menuOpen } = props;

  return (
    <CardContainer>
      <CircleStatus bg='assets/profiles/1.jpeg' small={ menuOpen }/>
        {
          menuOpen ?  <CardUsername>ANKOURI ABDELLAH</CardUsername> : ''
        }
       
        <CardSubUsername>@ankouri</CardSubUsername>
     <Stack
        direction={ menuOpen ? 'row' : 'column' }
        sx={ {margin:'15px auto', transition:"all 0.2s ease-in"}}
        divider={<Divider orientation={ menuOpen ? 'vertical' : 'horizontal'} flexItem sx={{background:'#979797'}} />}
        spacing={ menuOpen ? 2 : 1}
      >
        <StackItem>
            <p>400</p>
            <span> Posts</span>
        </StackItem>
        <StackItem> 
            <p>2.8k</p>
            <span>Followers</span>
        </StackItem>
        <StackItem>
            <p>621</p>
            <span>Following</span>
        </StackItem>
      </Stack> 
    </CardContainer>
  );
}

const CardUsername = styled.h2`
    font-size: 19px;
    color: #fff;
    font-weight: 400;
    font-family: 'Maven Pro';
    margin-top: 2px;
    margin-bottom: 8px;
    text-transform: lowercase;
    text-align: center;
`;
const CardSubUsername = styled.h4`
    font-size: 16px;
    color: #979797;
    font-weight: 400;
    font-family: 'Maven Pro';
    margin-bottom: 10px;
    text-transform: lowercase;
`;
const StackItem = styled.div`
    color:#fff;
    text-align:center;
    span{
        color:#979797;
    }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
