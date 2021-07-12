import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { featuredPosts } from '../../constants/home-page-data';
import HomePageCard from '../../components/card';
import { useHomeSceneStyles } from './styles';

export const HomeScene = () => {
  const classes = useHomeSceneStyles();

  return (
    <Container maxWidth="lg">
      <div className={classes.mainWrapper}>
        <Grid container spacing={4} alignContent="center">
          {featuredPosts.map(post => (
            <HomePageCard key={post.title} post={post} />
          ))}
        </Grid>
      </div>
    </Container>
  );
};
