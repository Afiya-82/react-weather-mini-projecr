import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrainIcon from '@mui/icons-material/Grain';


export default function InfoBox({info}) {
    const INIT_URL ="https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    
    let HOT_URL ="https://images.unsplash.com/photo-1556800695-a5b593d1586b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SE9UJTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL= "https://plus.unsplash.com/premium_photo-1670275346849-b5e2d3f733be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D";
    let RAINY_URL ="https://plus.unsplash.com/premium_photo-1675468310289-a72bc97c3e97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbnklMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww"
    



    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ info.humidity > 80? RAINY_URL: info.temp > 15? HOT_URL : COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
             info.humidity > 80
             ? <GrainIcon />
             : info.temp > 15
             ? <WbSunnyIcon />
             : <AcUnitIcon />
          }

        </Typography>
        <Typography variant="body2" color="text.secondary">
            <div>
               <p> Temperature = {info.temp}&deg;C</p>
               <p> Humidity = {info.humidity}</p>
               <p> Min Temp = {info.tempMin}&deg;C</p>
               <p> Max Temp = {info.tempMax}&deg;C</p>
               <p> The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
            </div>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}