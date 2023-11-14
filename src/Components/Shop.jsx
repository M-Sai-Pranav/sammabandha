import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Grid, Paper, Typography, Button,
} from '@mui/material';
import ReactDOM from 'react-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import grey from '../shop/grey.png';
import cap from '../shop/cap.png';
import cap2 from '../shop/cap2.png';
import tshirt from '../shop/tshirt.png';
import yellow from '../shop/yellow.png';
import hat from '../shop/hat.png';
import sweat from '../shop/sweat.png';
import sun from '../shop/sun.png';
import bag from '../shop/bag.png';
import bag2 from '../shop/bag2.png';
import act from '../books/act.png';
import who from '../books/who.png';
import man from '../books/man.png';
import no from '../books/no.png';
import men from '../books/menn.png';
import seven from '../books/seven.png';
import art from '../books/artt.jpg';
import protection from '../books/protection.png';
import love from '../books/love.png';
import buddha from '../books/buddha.jpg';
import i from '../relation/i.png';
import pillow from '../relation/pillow.png';
import p2 from '../relation/p2.png';
import cup from '../relation/cup.png';

function CartIcon({ cartCount }) {
  return (
    <Badge badgeContent={cartCount} color="primary">
      <ShoppingCartIcon style={{ fontSize: 60 }} />
    </Badge>
  );
}

const clothesProducts = [
  {
    clothesID: 1, name: 'VARSITY SWEATER', price: '$30', imageUrl: grey,
  },
  {
    clothesID: 2, name: 'CLASSIC T-SHIRT', price: '$20', imageUrl: tshirt,
  },
  {
    clothesID: 3, name: 'PERFORMANCE ROPE HAT Black', price: '$15', imageUrl: cap2,
  },
  {
    clothesID: 4, name: 'PERFORMANCE ROPE HAT', price: '$10', imageUrl: cap,
  },
  {
    clothesID: 5, name: 'TAPED CREWNECK', price: '$20', imageUrl: yellow,
  },
  {
    clothesID: 6, name: 'CORDUROY BUCKET HAT', price: '$15', imageUrl: hat,
  },
  {
    clothesID: 7, name: 'BUMBLE HONEY SWEATSHIRT', price: '$10', imageUrl: sweat,
  },
  {
    clothesID: 8, name: 'BUMBLE RETRO SUNGLASSES', price: '$20', imageUrl: sun,
  },
  {
    clothesID: 9, name: 'OVER THE MOON TOTE BAG', price: '$20', imageUrl: bag,
  },
  {
    clothesID: 10, name: 'FAVOR BAGS ', price: '$20', imageUrl: bag2,
  },

  // Add more products here
];

const booksProducts = [
  {
    bookID: 1, name: 'Who Do You Think You Are ?', price: '$10', imageUrl: who,
  },
  {
    bookID: 2, name: 'Act Like a Lady Think Like a Man', price: '$20', imageUrl: act,
  },
  {
    bookID: 3, name: 'A Manual of the Excellent Man', price: '$15', imageUrl: man,
  },
  {
    bookID: 4, name: 'No Muds, No Lotus', price: '$10', imageUrl: no,
  },
  {
    bookID: 5, name: 'Men Are from Mars, Women Are from Venus', price: '$20', imageUrl: men,
  },
  {
    bookID: 6, name: 'The 7 Habits of Highly Effective People', price: '$15', imageUrl: seven,
  },
  {
    bookID: 7, name: 'THE ART OF LOVING', price: '$10', imageUrl: art,
  },
  {
    bookID: 8, name: 'The Great Book of Protection', price: '$20', imageUrl: protection,
  },
  {
    bookID: 9, name: 'Buddha and his dhamma by Dr.B.R.Ambedkar', price: '$20', imageUrl: buddha,
  },
  {
    bookID: 10, name: 'True Love', price: '$15', imageUrl: love,
  },

  // Add more products here
];

const relationProducts = [
  {
    relationID: 1, name: 'iphone cover', price: '$10', imageUrl: i,
  },
  {
    relationID: 2, name: 'Pillow', price: '$20', imageUrl: pillow,
  },
  {
    relationID: 3, name: 'Pillow 2', price: '$15', imageUrl: p2,
  },
  {
    relationID: 4, name: 'Cups', price: '$10', imageUrl: cup,
  },
  {
    relationID: 5, name: 'iphone cover', price: '$10', imageUrl: i,
  },
  {
    relationID: 6, name: 'Pillow', price: '$20', imageUrl: pillow,
  },
  {
    relationID: 7, name: 'Pillow 2', price: '$15', imageUrl: p2,
  },
  {
    relationID: 8, name: 'Cups', price: '$10', imageUrl: cup,
  },

  // Add more products here
];

function ProductCardClothes({ product, handleAddToCart }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="subtitle1">{product.price}</Typography>
      <Button variant="outlined" color="primary" onClick={() => handleAddToCart(product.clothesID)}>
        Add to Cart
      </Button>
    </Paper>
  );
}

function ProductCardBooks({ product, handleAddToCart }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="subtitle1">{product.price}</Typography>
      <Button variant="outlined" color="primary" onClick={() => handleAddToCart(product.bookID)}>
        Add to Cart
      </Button>
    </Paper>
  );
}

function ProductCardRelation({ product, handleAddToCart }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', margin: '16px' }}>
      <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />
      <Typography variant="h6">{product.name}</Typography>
      <Typography variant="subtitle1">{product.price}</Typography>
      <Button variant="outlined" color="primary" onClick={() => handleAddToCart(product.relationID)}>
        Add to Cart
      </Button>
    </Paper>
  );
}

function Book() {
  const [cart, setCart] = useState(0);

  const handleAddToCart = (productId, productType) => {
    // Using the functional form of setCart to ensure the latest state is used
    setCart((prevCart) => prevCart + 1);

    // Store the product ID in localStorage with the same key name
    localStorage.setItem(`${productType}ID`, productId);
  };
  return (
    <>
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: '#e1f5fe', // light-blue background color
          textAlign: 'center',
          padding: '20px', // Add padding as needed
        }}
        >
          <CartIcon cartCount={cart} />
          <Typography variant="h4" gutterBottom>
            Clothes Listing
          </Typography>
        </div>

        <Grid container spacing={3}>
          {clothesProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.clothesID}>
              <ProductCardClothes product={product} handleAddToCart={(productId) => handleAddToCart(productId, 'clothes')} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: '#e1f5fe', // light-blue background color
          textAlign: 'center',
          padding: '20px', // Add padding as needed
        }}
        >
          <Typography variant="h4" gutterBottom>
            Books Listing
          </Typography>
        </div>

        <Grid container spacing={3}>
          {booksProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.bookID}>
              <ProductCardBooks product={product} handleAddToCart={(productId) => handleAddToCart(productId, 'book')} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{
          backgroundColor: '#e1f5fe', // light-blue background color
          textAlign: 'center',
          padding: '20px', // Add padding as needed
        }}
        >
          <Typography variant="h4" gutterBottom>
            Relation Listing
          </Typography>
        </div>

        <Grid container spacing={3}>
          {relationProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.relationID}>
              <ProductCardRelation product={product} handleAddToCart={(productId) => handleAddToCart(productId, 'relation')} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Book;
