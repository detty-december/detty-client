'use client'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from  '../../page.module.css'

export default function Home() {
  return (
   <div>
     <h1>Detty December</h1>
       <Box sx={{ flexGrow: 1 }}>
           <AppBar
               position="fixed"
               color="primary"
               sx={{
                   top: {xs:'auto',  sm:'0'},
                   bottom: { xs: 0, sm: 'auto' }, // Adjust the breakpoint as needed
               }}
           >
               <Box
                   sx={{
                       display: 'flex',
                       justifyContent: 'space-evenly',
                   }}
               >
                   <Button variant="text" className={styles.event_buttons}>
                       My Events
                   </Button>
                   <Button variant="text" className={styles.event_buttons}>
                       Add Events
                   </Button>
               </Box>
           </AppBar>
           {/* Content of your app */}
       </Box>
   </div>
  )
}
