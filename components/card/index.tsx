import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from 'next/link';
import { useHomePageCardStyles } from './style';

export default function HomePageCard(props) {
  const classes = useHomePageCardStyles();
  const { post } = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link href={`/module${post.linkToModule}`} passHref>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />

            <div className={classes.cardDetails}>
              <CardContent>
                <Typography component="h3" variant="h5" align="center">
                  {post.title}
                </Typography>
                <Typography variant="subtitle2" align="center">
                  {post.description}
                </Typography>
              </CardContent>
            </div>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
}
