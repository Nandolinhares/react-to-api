import React, { Component } from 'react';
import api from '../../services/api';



export default class Product extends Component{
    
    state = {
        product: {}
    }
    
     async componentDidMount(){
        const { id } = this.props.match.params;
        
        const response = await api.get(`/api/products/${id}`);
        
        this.setState({ product: response.data });
    }

    render(){
        const { product } = this.state;
        return(
            <div className="product-info">
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <p>
                    <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a>
                </p>    
            </div>
        );
    }
}