import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import ProductScreen from './screens/ProductScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/product/:id/edit' component={ProductEditScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen} exact></Route>
        <Route path='/' component={HomeScreen} exact></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
