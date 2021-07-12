import { makeStyles } from '@material-ui/core/styles';

export const useHomePageCardStyles = makeStyles({
  card: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 172,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '50%',
  },
});
