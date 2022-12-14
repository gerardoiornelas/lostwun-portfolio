
  import { styled } from '@mui/system';
  import { rem } from 'polished';
  import { Box } from '@mui/material';

  const StyledAnimateOnScroll = styled(Box)(({theme})=>({
      padding: `${rem(64)}`,
      [theme.breakpoints.down("xs")]: {
        padding: `${rem(16)}`,
      }
    }))

  export { StyledAnimateOnScroll };
  
      
      