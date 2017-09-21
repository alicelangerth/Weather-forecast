import React, { Component } from 'react';
import Header from '../Header/Header'
import Weather from '../Weather/Weather';
import MoreWeather from '../MoreWeather/MoreWeather';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import './Content.css'

class Content extends Component {

    constructor() {
        super();
        this.state = {
            city: 'stockholm',
            countryCode: '',
            current: '',
            items:[],
            input: '',
            display24: false,
            error: false,
            temp: '',
            unit: 'C',
            isLoading: false
        };
    }

    componentDidMount () {
        let currentCity = this.state.city;
        this.getWeather(currentCity);
    }
    //Get weather from api: weatherbit and set response to state
    getWeather (currentCity) {
        this.setState({ isLoading: ! this.state.isLoading })
        const apiKey = '1072dfe12c2f4f7e8ddfa30683df95ca';
        fetch(`https://api.weatherbit.io/v1.0/forecast/3hourly/geosearch?city=${currentCity}&days=1&key=${apiKey}`)
            .then( response => response.json())
            .then( response => {
            this.setState({ city: response.city_name,
                            countryCode: response.country_code, 
                            items: response.data, 
                            error: false,
                            temp: response.data[0].temp,
                            isLoading: ! this.state.isLoading ,
                            unit: 'C'})
        })
        //No response
        .catch( err => {
            this.setState({ error: true, isLoading: ! this.state.isLoading });
        })
    }

    //Set current value to input
    handleChange = e => {
        this.setState({ input : e.target.value });
    }

    //Listen on keydown: enter
    listenOnEnter = e => {
        if( e.keyCode === 13) {
            this.searchCity();
        } 
    }

    //Get weather based on input value
    searchCity = e => {
        let newList = [...this.state.city];
        newList = this.state.input ;
        this.setState({ input: '' });
        this.getWeather(newList);
    }

    //Switch unit: celsius / fahrenheit
    switchUnit = (unit) => {
        if(unit === 'C') {
            this.setState({ temp : Math.round(this.state.temp * 9 / 5 + 32, 1), unit: 'F' })
        } else {
            this.setState({ temp: Math.round((this.state.temp - 32) * 5 / 9, 1), unit: 'C' })
        }
    }

    //Toggle button: 24 h weather / weather now
    displayMore = () => {
        this.setState({ display24: !this.state.display24 });
    }

    render() {
        // Loop 24 h weather
        let weatherComponentList =  this.state.items.map(( item, index ) => {
            return <MoreWeather key={index} weather={item} temp={ this.state.temp } unit={ this.state.unit } />
        });

        //Set buttontext based on current state: display24
        let btnText = (this.state.display24) ?  btnText='Weather now' :  btnText='Show weather for 24 h';

        //Show loader based on current state: isLoading
        let display = this.state.isLoading ? 'loader show' : 'loader hide';

        return (
            <div className="content">
                <Header />
                <div className="search-container">
                    <Input  value={ this.state.input }
                            handleChange={ this.handleChange }
                            listenOnEnter={ this.listenOnEnter }/>
                    <Button handleClick={ this.searchCity } handleKeyDown={ this.searchCity } listenOnEnter={ this.listenOnEnter }>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </Button>
                </div>
                <Loader style={ display }/>
                { (this.state.error) ? <p className="city">No search result, try again!</p> : <h2 className="city"> { this.state.city }, {this.state.countryCode} </h2>}
                { (this.state.display24) ?  weatherComponentList :  <Weather weather={this.state.items[0]} temp={ this.state.temp } unit={ this.state.unit }/> }
                <Button className="switch-unit" handleClick={ () =>  this.switchUnit(this.state.unit) }>
                    Show temp in { ( this.state.unit === 'C' ) ? 'F°' : 'C°'}
                </Button>
                <div className="wrapper">
                    <Button className="show-more" handleClick={ this.displayMore } >
                        { btnText }
                    </Button>
                </div>
            </div>
        );
    }
}

export default Content;