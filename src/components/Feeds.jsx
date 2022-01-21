import React from 'react';
import Post from './../components/Post';
import Masonry from '@mui/lab/Masonry';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Stack } from "@mui/material";
import { profiles } from '../dummyData';


export default function Feeds() {
    const md = useMediaQuery(useTheme().breakpoints.up('sm'));;
    const xs = useMediaQuery(useTheme().breakpoints.up('sm'));;

    return (
        <Masonry columns={md ? 3 : xs ? 1 : 1} spacing={1}>
                {itemData.map((item, index) => (
                  
                  <Stack key={index} sx={{transition: "all 0.2s ease-out"}}>
                    <Post
                      post={`${item.img}?w=962&auto=format`}
                      profile={
                        profiles[index]
                      }
                      comments={12}
                      likes={120}
                    />
                  </Stack>
                ))}
              </Masonry>
    )
}

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
      title: 'Camping Car',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
      title: 'Mountain',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];
