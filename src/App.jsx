import React, { Component } from 'react';
import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';


class App extends Component{

    state ={
        data:{}
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({data:fetchedData})
    }

    handleCountryChange = async (country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data:fetchedData, country:country});
        console.log(fetchedData);
    }

    render(){
        const {data, country} = this.state;
        return(
            <div className={styles.container}>
                <img className = {styles.image} src = "https://i.ibb.co/7QpKsCX/image.png" alt = "Covid-19"/>
                <Cards data ={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange} />
                <Chart data = {data} country = {country}/>
            </div>
        )
    }
}

export default App;