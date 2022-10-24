import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react'
import Box from '@mui/material/Box';
import { Button, TextField} from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calculator application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to our Sweng calculator application
        </h1>
        <Box
          component="form"
          sx={{
            width: 500,
            mt: 10,
            maxWidth: '100%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },

          }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth label="Enter some problem for calculation" id="fullWidth"/>
      </Box>
         
      </main>

      <footer className={styles.footer}>
        <a>
          Sweng Group 27
        </a>
      </footer>
    </div>
  )
}
