import { Link } from "react-router-dom"
import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import act from '../books/act.png';
import who from '../books/who.png';
import man from '../books/man.png';
import no from '../books/no.png';
import men from '../books/menn.png';
import seven from '../books/seven.png';
import art from '../books/artt.jpg';
import protection from '../books/protection.png';
import love from '../books/love.png';
import buddha from '../books/buddha.jpg'
import ReactDOM from 'react-dom';

const products = [
  { id: 1, name: 'Who Do You Think You Are ?', price: '$10', imageUrl: who },
  { id: 2, name: 'Act Like a Lady Think Like a Man', price: '$20', imageUrl: act },
  { id: 3, name: 'A Manual of the Excellent Man', price: '$15', imageUrl: man },
  { id: 4, name: 'No Muds, No Lotus', price: '$10', imageUrl: no},
  { id: 5, name: 'Men Are from Mars, Women Are from Venus', price: '$20', imageUrl: men },
  { id: 6, name: 'The 7 Habits of Highly Effective People', price: '$15', imageUrl: seven },
  { id: 7, name: 'THE ART OF LOVING', price: '$10', imageUrl: art},
  { id: 8, name: 'The Great Book of Protection', price: '$20', imageUrl: protection },
  { id: 9, name: 'Buddha and his dhamma by Dr.B.R.Ambedkar', price: '$20', imageUrl: buddha },
  { id: 10, name: 'True Love', price: '$15', imageUrl: love },
  
  // Add more products here
];

const ProductCard = ({ product }) => (
  <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
    <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
    <Typography variant="h6">{product.name}</Typography>
    <Typography variant="subtitle1">{product.price}</Typography>
    <Button variant="outlined" color="primary">
      Add to Cart
    </Button>
  </Paper>
);

const Book = () => (
  <div style={{ padding: '20px' }}>
    <Typography variant="h4" gutterBottom>
      Book Listing
    </Typography>
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
    <Link to={'/nav'}>
        <button>
            nav
        </button>
        </Link>
  </div>
);

export default Book;
