import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as React from 'react'
import Box from '@mui/material/Box';
import { Button, TextField, Card, CardActions, CardContent, Typography, CardHeader, Grid} from '@mui/material';
import { UseState } from 'react';

export default function Home() {
  const [string, setString] = React.useState('');
  const [answer, setAnswer] = React.useState('');
  const key_second = [
    {char: '7', color:'grey'},
    {char: '8', color:'grey'},
    {char: '9', color:'grey'},
    {char: 'AC', color:'black'},
    {char: '(', color:'black'},
    {char: ')', color:'black'},
    {char: 'ln', color:'black'},
    {char: '4', color:'grey'},
    {char: '5', color:'grey'},
    {char: '6', color:'grey'},
    {char: '÷', color:'black'},
    {char: 'x', color:'black'},
    {char: 'log', color:'black'},
    {char: '^', color:'black'},
    {char: '1', color:'grey'},
    {char: '2', color:'grey'},
    {char: '3', color:'grey'},
    {char: '+', color:'black'},
    {char: '-', color:'black'},
    {char: 'Ans', color:'black'},
    {char: 'exp', color:'black'},
    {char: '0', color:'grey'},
    {char: '.', color:'grey'},
    {char: '=', color:'green'},

    {char: 'sin', color:'black'},
    {char: 'cos', color:'black'},
    {char: 'tan', color:'black'},
]
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
            width: 750,
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
          <Card sx={{ mb: 4, backgroundColor: '#efefef', border: 'solid blue'}}>
            <CardHeader
              title={answer}
              sx={{ color: 'white', backgroundColor: 'black', minHeight: 70}}
            />
            <CardActions>
                <Grid container >
                  {key_second.map((key) => {
                    return (
                      <Grid item xs={1.7} key={key}>
                        <Button variant="contained" sx={{ 
                          width: 100, 
                          height: 40, 
                          fontSize: 20, 
                          backgroundColor:`${key.color}`, 
                          color: 'white', 
                          mx:1, 
                          my:0.5,
                          // on hover, change color to white
                          '&:hover': {
                            backgroundColor: `${key.color}`,
                            opacity: 0.8,
                          }, 
                        }}
                          onClick={() => 
                            {if (key.char == 'AC'){
                              setString('');
                              setAnswer('');
                            } else if (key.char == '='){
                              setString(answer);
                              fetch('/api/parse', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({string: string}),
                              })
                              .then((res) => res.json())
                              .then((data) => {
                                if (data.error){
                                  setAnswer(data.error);
                                } else {
                                  setAnswer(data.answer);
                                }
                              });
                              setAnswer('');
                              setString('');

                            } else if (key.char == 'Ans'){
                              setString(answer);
                            } else if (key.char == 'Exp'){
                              setString(answer);
                            }else if(key.char == '÷') {
                              setString(string + '/');
                            }else if(key.char == 'x') {
                              setString(string + '*');
                            }else {
                              setString(string + key.char);
                            }}}
                          >{key.char}</Button>
                      </Grid>
                    )
                  })}  
                </Grid>
            </CardActions>
          </Card>

          <TextField 
          fullWidth 
          label="Enter some problem for calculation" 
          id="fullWidth"
          variant="outlined"
          value = {string}
          onChange={(e) => {
            setString(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              // call the api
              fetch('/api/parse', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  string: string,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  setAnswer(data.answer);
                });

              // prevent default is needed here because the default behavior of the enter key is to submit the form, which will refresh the page
              e.preventDefault();
              setString('');
            }
          }}
          
          />
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
