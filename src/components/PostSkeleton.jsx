import React from "react";
import { Skeleton } from "@mui/material";
import styled from "styled-components";

export default function PostSkeleton() {
  return (
    <div>
      <ContentSkeleton variant="rectangular" />
      <ActionSkeleton>
        <Skeleton variant="circular" width={35} height={35} />
        <Skeleton variant="text" width={65} height={25} />
        <ActionSubSkeleton>
          <Skeleton variant="circular" width={25} height={25} />
          <Skeleton variant="circular" width={25} height={25} />
        </ActionSubSkeleton>
      </ActionSkeleton>
    </div>
  );
}

const ContentSkeleton = styled(Skeleton)`
  width: 100% !important;
  height: 300px !important;
  margin-bottom: 9px;
  border-radius:15px;
`;
const ActionSkeleton = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-grow:1;
    width: 100%;

`;
const ActionSubSkeleton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    span{
        margin-left:10px;
    }
`;