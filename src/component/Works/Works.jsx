import letter from '../../images/letter.png'
import cardbackground from '../../images/cardbackground.png'
import cookieBuild from '../../images/cookieBuild.png'
import firstportfolio from '../../images/firstportfolio.png'
import TictacToe from '../../images/tictactoe.png'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Works.css'

const Works = () => {

  return (
    <>
      <div className='cardContainer works-cont'>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={firstportfolio}
          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/portfoliodiegolandolt/" }}>
            <Typography  gutterBottom variant="h5" component="div">
              My Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My first Portfolio created with HTML,CSS JavaScript through a youtube video tutorial
            </Typography>
          </CardContent>
         
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={TictacToe}

          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/TicTacToe/" }}>
            <Typography gutterBottom variant="h5" component="div">
              TicTacToe -lets play...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Learn to build a Tictactoe
            </Typography>
          </CardContent>
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={cookieBuild}
          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/cookie-popUp/" }}>
            <Typography gutterBottom variant="h5" component="div">
              My first Cookie
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My first cookie created with HTML,CSS JavaScript through a youtube video
            </Typography>
          </CardContent>
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={cardbackground}

          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/borderanimation/" }}>
            <Typography gutterBottom variant="h5" component="div">
              Border Animation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Border animation HTML and CSS. One of my first projects i hope you like it
            </Typography>
          </CardContent>
         
        </Card>
        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={letter}

          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/hiddenletter/" }}>
            <Typography gutterBottom variant="h5" component="div">
              Find the Letter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              find the letter in a record time!
              this game was created with react vite.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
export default Works