import React from 'react';
import { Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getModuleData, IModuleItem } from '../../services/module.service';
import { ModuleNavigation } from '../../components/module-navigation';

interface IModuleScene {
  moduleItems: IModuleItem[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: '1rem',
    },
    leftSide: {
      backgroundColor: theme.palette.background.default,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);

export const ModuleScene = ({ moduleItems }: IModuleScene) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} md={6} className={classes.leftSide}>
        <Typography variant="h4" component="h3">
          MODULE NAME
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <ModuleNavigation />
          </Grid>
          <Grid item md={9}>
            {moduleItems.map(item => (
              <>
                <div>{item.question}</div>
                <div>{item.answer}</div>
                <div>{item.source}</div>
              </>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={5}>
        {moduleItems.map(item => (
          <>
            <div>{item.question}</div>
            <div>{item.answer}</div>
            <div>{item.source}</div>
          </>
        ))}
      </Grid>
    </Grid>
  );
};

ModuleScene.getInitialProps = async (ctx): Promise<IModuleScene> => {
  const data = getModuleData();

  return {
    moduleItems: data,
  };
};
