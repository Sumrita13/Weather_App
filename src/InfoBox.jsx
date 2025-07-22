import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1597621864521-93dfdb10c6b1?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL ="https://images.unsplash.com/photo-1605371893234-db5e7b01aad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VubnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL ="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL ="https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHJhaW58ZW58MHx8MHx8fDA%3D";
    
    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80? 
                        RAIN_URL : 
                        info.temp_c > 15 ? 
                        HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} {
                    info.humidity > 80
                    ? <ThunderstormIcon />
                    : info.temp_c > 15 
                    ? <SunnyIcon/>
                    : <AcUnitIcon/> }
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature = {info.temp_c}&deg;C</div>
                    <div>Temperature = {info.temp_f}&deg;F</div>
                    <div>Humidity = {info.humidity}&deg;C</div>
                    <div>Heat Index = {info.humidity}&deg;C</div>
                    <p>
                        The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
                    </p>
                </Typography>
                </CardContent>
               
            </Card>
            </div>
        </div>
    );
}