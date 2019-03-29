import React, { Component } from 'react';
import api from '../../services/api';

//import mongoose from 'mongoose';
//import axios from 'axios';

export default class Field extends Component{
    
     componentDidMount(){
        //const response = await api.get(`/api/products`);
       /*const response = api.post('/api/products', { 
            title: "Fernando",
            description: "O maior programador",
            url: "http://gdqyuwfgdyqfde"
         });

        console.log(response);*/
    }
    

    render(){
        return(
            <form id="body-form">
                <label>Title: </label>
                <input type="text" name="title" id="title"></input>
                <label>Description: </label>
                <input type="text" name="description" id="description"></input>
                <button type="submit"></button>
            </form>
        );
    }
}