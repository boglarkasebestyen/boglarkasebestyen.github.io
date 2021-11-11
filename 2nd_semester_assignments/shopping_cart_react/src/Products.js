/*
- pics must come randomly from picsum
- keep track of how many products are in stock
- how much do the products cost - total in Checkout
- if product stock is zero, don't add it to cart

- delete the product by clicking it in the cart: 
    - decrement them from the product
    - adjust stock / put it back in stock
    - delete item from Checkout
    - adjust the total price at in Checkout

- restock: Submit button adds them to the cart and the checkout

-------------------
Changes made to starter code:
/*

 - eventKey -> eventkey corrected
 - axios -> Axios correct
 - Accordion.Toggle -> deprecated, changed to Accordion

<Card key={index}>
  <Card.Header>
    <Accordion as={Button} variant="link" eventkey={1 + index}>

          --> deleted "as={Button}""

<Card.Body as={Button}> --> added button
   $ {item.cost} from {item.country} -> deleted 
    {"Click to delete"} --> added instead


<Accordion variant="link" eventkey={1 + index}>
  {item.name + ":"} $ {item.cost} from {item.country} --> added instead of just item name


 <Card.Header>
    {item.name}:{" " + "$" + item.cost}:{" " + "In stock:" + item.instock}
  </Card.Header>          --> was Button before

 
<h1>Check Out </h1>
  <Card.Header onClick={checkOut}>Total: ${finalList().total}</Card.Header>

                          --> was Button before, + wrote Check Out


*/

import React, {useState, useEffect, useReducer} from 'react';
import Card from "react-bootstrap/Card";
import Accordion from  "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
// import Input from "react-bootstrap/Input"; //doesn't exist
// import InputGroup from "react-bootstrap/InputGroup"; //exists, but not needed

// import ReactBootstrap from "react-bootstrap";
import Axios from "axios";

// simulate getting products from database
const products = [
  { name: "Apples", country: "Italy", cost: 3, instock: 10 },
  { name: "Oranges", country: "Spain", cost: 4, instock: 3 },
  { name: "Beans", country: "USA", cost: 2, instock: 5 },
  { name: "Cabbage", country: "USA", cost: 1, instock: 8 },
];


//=========Cart=============//
const Cart = (props) => {
  // const { Card, Accordion, Button } = ReactBootstrap;
  let data = props.location.data ? props.location.data : products;
  console.log(`data:${JSON.stringify(data)}`);

  return <Accordion defaultActiveKey="0">{props.list}</Accordion>;
};

const useDataApi = (initialUrl, initialData) => {
  // const { useState, useEffect, useReducer } = React;
  const [url, setUrl] = useState(initialUrl);

  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: initialData,
  });

  console.log(`useDataApi called`);


  useEffect(() => {
    console.log("useEffect Called");
    let didCancel = false;
    const fetchData = async () => {
      dispatch({ type: "FETCH_INIT" });
      try {
        const result = await Axios(url);
        console.log("FETCH FROM URl");
        if (!didCancel) {
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [url]);
  return [state, setUrl];
};


const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const Products = (props) => {
  const [items, setItems] = useState(products);
  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  // const {
  //   Card,
  //   Accordion,
  //   Button,
  //   Container,
  //   Row,
  //   Col,
  //   Image,
  //   Input,
  // } = ReactBootstrap;
  //  Fetch Data
  // const { Fragment, useState, useEffect, useReducer } = React;
  const [query, setQuery] = useState("http://localhost:1337/products");
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    "http://localhost:1337/products",
    {
      data: [],
    }
  );
  console.log(`Rendering Products ${JSON.stringify(data)}`);

  // Fetch Data
  const addToCart = (e) => {
    let name = e.target.name;
    let item = items.filter((item) => item.name === name); //filter returns an array

    //subtracting 1 when adding item to cart
    if (item[0].instock == 0) {
      return;
    } else {
      item[0].instock = item[0].instock - 1;
    };

    console.log(`add to Cart ${JSON.stringify(item)}`);
    setCart([...cart, ...item]);
    //doFetch(query);
  };

  const deleteCartItem = (delIndex) => {
    //the index in the cart, not in the product list
    let newCart = cart.filter((item, i) => delIndex !== i);
    
    //checking which item was deleted
    let target = cart.filter((item, index) => delIndex == index);
    let newItems = items.map((item, index) => {
      if (item.name == target[0].name) {
        item.instock = item.instock + 1;
      }
      return item;
    })
    setCart(newCart);
    setItems(newItems);
  };

  
  // const photos = ["apple.png", "orange.png", "beans.png", "cabbage.png"];

  let list = items.map((item, index) => {
    let n = index + 1049;
    let uhit = "https://picsum.photos/" + n;
    return (
      <li key={index}>
        <Image src={uhit} width={70} roundedCircle></Image>
        <Card.Header>
          {item.name}:{" " + "$" + item.cost}:{" " + "In stock:"} {item.instock}
        </Card.Header>
        <input name={item.name} type="submit" onClick={addToCart}></input>
      </li>
    );
  });


  let cartList = cart.map((item, index) => {
    return (
      <Card key={index}>
        <Card.Header>
          <Accordion variant="link" eventkey={1 + index}>
            {item.name + ":"} ${item.cost} from {item.country}
          </Accordion>
        </Card.Header>
        <Accordion.Collapse
          onClick={() => deleteCartItem(index)}
          eventkey={1 + index}
        >
          <Card.Body as={Button}>
            {"Click to remove item"}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  });

  let finalList = () => {
    let total = checkOut();
    let final = cart.map((item, index) => {
      return (
        <div key={index} index={index}>
          {item.name}
        </div>
      );
    });
    return { final, total };
  };

  const checkOut = () => {
    let costs = cart.map((item) => item.cost);
    const reducer = (accum, current) => accum + current;
    let newTotal = costs.reduce(reducer, 0);
    console.log(`total updated to ${newTotal}`);
    return newTotal;
  };


  const restockProducts = (url) => {
    doFetch(url);
    let newItems = data.map((item) => {
      let { name, country, cost, instock } = item;
      return { name, country, cost, instock };
    });
    // setItems([...items, ...newItems]);
    setItems([...newItems]);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Product List</h1>
          <ul style={{ listStyleType: "none" }}>{list}</ul>
        </Col>
        <Col>
          <h1>Cart Contents</h1>
          <Accordion>{cartList}</Accordion>
        </Col>
        <Col>
          <h1>Check Out </h1>
          <Card.Header onClick={checkOut}>Total: ${finalList().total}</Card.Header>
          <div> {finalList().total > 0 && finalList().final} </div>
        </Col>
      </Row>
      <Row>
        <form
          onSubmit={(event) => {
            restockProducts(`http://localhost:1337/${query}`);
            console.log(`Restock called on ${query}`);
            event.preventDefault();
          }}
        >
          <input 
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">Restock Products</button>
        </form>
      </Row>
    </Container>
  );
};

export default Products;

