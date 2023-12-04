const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const restaurantData = require('./restaurantData');

app.get('/api/restaurant', (req, res) => {
  res.status(200).json(restaurantData.restaurant);
});

app.get('/api/restaurant/name', (req, res) => {
    res.status(200).json(restaurantData.restaurant.name);
});

app.get('/api/restaurant/location', (req, res) => {
    res.status(200).json(restaurantData.restaurant.location);
});

app.get('/api/restaurant/chef', (req, res) => {
  res.status(200).json(restaurantData.restaurant.chef);
});

app.get('/api/restaurant/awards', (req, res) => {
    res.status(200).json(restaurantData.restaurant.awards);
});

app.get('/api/restaurant/ambiance', (req, res) => {
    res.status(200).json(restaurantData.restaurant.ambiance);
});

app.get('/api/restaurant/sustainability', (req, res) => {
    res.status(200).json(restaurantData.restaurant.sustainability);
});

app.get('/api/restaurant/events', (req, res) => {
    res.status(200).json(restaurantData.restaurant.events);
});

app.get('/api/restaurant/online-presence', (req, res) => {
    res.status(200).json(restaurantData.restaurant.online-presence);
});

app.get('/api/restaurant/menu', (req, res) => {
  res.status(200).json(restaurantData.restaurant.menu);
});

app.get('/api/restaurant/reviews', (req, res) => {
    res.status(200).json(restaurantData.restaurant.reviews);
  });

app.get('/api/restaurant/about', (req, res) => {
  const responseData = {
    chef: restaurantData.restaurant.chef,
    awards: restaurantData.restaurant.awards,
    ambiance: restaurantData.restaurant.ambiance,
    sustainability: restaurantData.restaurant.sustainability,
    events: restaurantData.restaurant.events,
    online_presence: restaurantData.restaurant.events,
    reviews: restaurantData.restaurant.reviews,
  }
  res.status(200).json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
