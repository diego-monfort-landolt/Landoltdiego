import letter from '../../images/letter.png'
import PrevisiónMeteorológica from '../../images/Previsión Meteorológica.png'
import firstportfolio from '../../images/firstportfolio.png'
import JavaScriptQuiz from '../../images/JavaScriptQuiz.png'
import Colors from '../../images/colors.png'
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
            image={JavaScriptQuiz}
          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/JavaScriptQuiz/" }}>
            <Typography gutterBottom variant="h5" component="div">
              JavaScript Quiz
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Let`s Go! Beginn to Learn JS.
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
            image={PrevisiónMeteorológica}
          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/weather-app/" }}>
            <Typography gutterBottom variant="h5" component="div">
            Previsión Meteorológica
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Previsión Meteorológica con React -vite y Typescript
            </Typography>
          </CardContent>
        </Card>


        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={Colors}

          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/Color/" }}>
            <Typography gutterBottom variant="h5" component="div">
              Color Picker
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Color Picker -Copy and paste the color code
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

        <Card className='cardInhalt' sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 180 }}
            image={firstportfolio}
          />
          <CardContent onClick={() => { location = "https://diego-monfort-landolt.github.io/portfoliodiegolandolt/" }}>
            <Typography  gutterBottom variant="h5" component="div">
              My Old Portfolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My first Portfolio created with HTML,CSS JavaScript through a youtube video tutorial
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
export default Works