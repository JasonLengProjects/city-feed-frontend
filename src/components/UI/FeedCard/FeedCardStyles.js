import { styled } from '@mui/system';

import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';

const CardStyled = styled(Card)({
  paddingTop: '10px',
  paddingLeft: '80px',
  paddingRight: '80px',
  marginBottom: '80px',
  maxHeight: '2000px',
  width: '900px',
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.3)',
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(-90deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export { CardStyled, ExpandMore };
