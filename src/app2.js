import React from 'react';
import axios from 'axios';
import { Form, Button } from 'semantic-ui-react';
import App from './App';


const config = {
    appid: '36c003ef23594c56c99f7ddaa57fb384',
    units: 'metric',
    city: 'seattle'
  }

var key = config.appid
var units = config.units
var defaultCity = config.city


class App extends React.Component{

 constructor(props){
     super(props)
     this.state = {
         weatherData:{},
         city:''
     }


     this.onUpdataCity = this.onUpdataCity.bind(this)
 }



getWeather(city,units){
    var cityname = city
    var unitType = units

        axios({
            method:'get',
            url: 'https://api.openweathermap.org/data/2.5/weather',
            params:{
                q: cityname,
                units: unitType,
                appid: key
            }
        })
        .then(function(res){
            const data = res.data
            this.setState({wxWeatherData: data})
            console.log(res)
        })
        .catch(function(err){
            console.log(err)
        })

}

onUpdateCity(ev){
    console.log(ev.target.value)
    this.setState({city:ev.target.value})
}

submit(){
    this.getWeather(this.state.city)
}

componentDidMount(){
    
}

render(){
    return<div>

        <Form>
           <Form.Input onChange={this.onUpdateCity} Iabel='city' placeholder='Name you city!!!'></Form.Input>
           <Button onClick={this.submit}> get weahter </Button>
       </Form>
    </div>
}


}

export default App;