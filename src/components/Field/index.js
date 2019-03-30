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
        const formEl = document.getElementById('body-form');
        const titleEl = document.querySelector('input[name=title]');
        const descriptionEl = document.querySelector('input[name=description]');

        this.state = {
            formEl: formEl,
            titleEl: titleEl,
            descriptionEl
        }
    }
    
    /*registerHandlers = () =>{
        const { formEl } = this.state;
        formEl.onsubmit = this.insertData();
    }*/

    insertData = async () =>{
        //event.preventDefault();
        const { titleEl, descriptionEl } = this.state;

        const inputTitle = titleEl.value;
        const inputDescription = descriptionEl.value;

           const response = await api.post('/api/products', {
               title: inputTitle,
               description: inputDescription,
               url:'io'
            });
          
    }

    render(){
        return(
            <form id="body-form" action="" onSubmit={this.insertData}>
                <label>Title: </label>
                <input type="text" name="title" id="title"></input>
                <label>Description: </label>
                <input type="text" name="description" id="description"></input>
                <button type="submit">Adicionar</button>
            </form>
        );
    }
}
/*onClick={this.insertData}*/