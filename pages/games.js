import * as React from 'react';
import  AppBarMain  from '../componets/AppBarMain';
import  Container  from '@mui/material/Container';
export default function games() {
  return (
<>
    <AppBarMain />

 <Container  sx={{background:'grey', height:'100vh'}}>

    LIST of games
    <ul> 
     <li> borderlands 2 </li>    
     <li> borderlands 2 </li>       
     <li> borderlands 2 </li>       
     <li> mortal kombat </li>       
         
         
    </ul>
 </Container>
</>

  );
}
