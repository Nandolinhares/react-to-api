import React, { Component } from 'react';
import api from '../../services/api';
//import { Link } from 'react-router-dom';

export default class Main extends Component{
    
    state = {
        products: []
    }
    
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () =>{
        const response = await api.get(`/api/products`);
        
        this.setState({ products: response.data.docs });

        console.log(response.data);
    }
        
    render(){
        const { products } = this.state;
        return(
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        
                        
                    </article>
                ))}
            </div>
        );
    }
}