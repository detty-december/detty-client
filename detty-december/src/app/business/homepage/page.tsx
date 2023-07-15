'use client'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import styles from '../../page.module.css'

export default  function Home() {
    fetch('http://localhost:8000')
        .then((data)=>{
            data.json()
                .then((json)=>{
                    // Read data
                    console.log(json.message)
                })
        })
    return (
        <div>
            <Box sx={{display:{xs:'block', sm: 'none'}}}>
                <Typography variant="h4" component="h4" >
                    Detty December
                </Typography>
            </Box>
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
                        }}
                    >
                        <Typography variant="h3" component="h3" sx={{
                            display: {xs: 'none', sm:'block'}
                        }}>
                            Detty December
                        </Typography>
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
            <Box>
                <Typography variant="h4" component="h4"
                    sx={{paddingTop:{xs: '32px', sm: '64px'}}}

                >
                   My Events
                </Typography>
            </Box>


        </div>
    )
}
