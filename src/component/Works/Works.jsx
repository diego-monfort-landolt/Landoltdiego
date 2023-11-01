import React from 'react'
import letter from '../../images/letter.png'
import cardbackground from '../../images/cardbackground.png'
import cookieBuild from '../../images/cookieBuild.png'
import firstportfolio from '../../images/firstportfolio.png'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




const Works = () => {

  return (
    <>
      <div className='cardContainer'>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={firstportfolio}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My first Portfolio created with HTML,CSS JavaScript through a youtube video tutorial
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { location = "https://diego-monfort-landolt.github.io/portfoliodiegolandolt/" }} size="small">View</Button>
          </CardActions>
        </Card>

        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={cookieBuild}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              My first Cookie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My first cookie created with HTML,CSS JavaScript through a youtube video
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { location = "https://diego-monfort-landolt.github.io/cookie-popUp/" }} size="small">View</Button>
          </CardActions>
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={cardbackground}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Border Animation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Border animation HTML and CSS. One of my first projects i hope you like it
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { location = "https://diego-monfort-landolt.github.io/borderanimation/" }} size="small">View</Button>
          </CardActions>
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={letter}

          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Find the Letter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              find the letter in a record time!
              this game was created with react vite.
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => { location = "https://diego-monfort-landolt.github.io/hiddenletter/" }} size="small">Lets Play</Button>
          </CardActions>
        </Card>
      </div>


    </>
  )
}


export default Works