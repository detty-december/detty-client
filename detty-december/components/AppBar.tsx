'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import styles from '../src/app/page.module.css'
import {useEffect, useState} from "react";
import Link from "next/link";

const TopAppBar=({location})=>{
    const [urlLocation, setURLLocation] = useState(null);
    useEffect(()=>{

        setURLLocation(location);
        console.log('The url location is: '+ urlLocation)
    },[urlLocation])
    return(
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar
                    position="fixed"
                    color="primary"
                    sx={{
                        top: {xs: 'auto', sm: '0'},
                        bottom: {xs: 0, sm: 'auto'}, // Adjust the breakpoint as needed
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            padding: {xs: '24px', sm:'20px'}
                        }}
                    >
                        <Typography variant="h3" component="h3" sx={{
                            display: {xs: 'none', sm:'block'},
                        }}>
                            Detty December
                        </Typography>
                        <Link
                            className={`${urlLocation === 'my-events' ? styles.active_event_buttons : styles.event_buttons}`}
                            href={"/business/my-events"}>
                            My Events
                        </Link>
                        <Link  href={"/business/add-events"}

                              className={`${urlLocation === '/business/add-events' ? styles.active_event_buttons : styles.event_buttons}`}
                         >
                            Add Events
                        </Link>
                    </Box>
                </AppBar>
                {/* Content of your app */}
            </Box>

        </div>
    )
}

export default TopAppBar