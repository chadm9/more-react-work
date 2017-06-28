import React, { Component } from 'react';
import './App.css';
// import data from './data';

import Toggle from './Toggle'
import data from './data';
import FilterableProductTable from './FilterableProductTable';

import MyForm from './MyForm'
import Calculator from './Calculator';

class App extends Component {

  render() {



      return(
          <Calculator />
      )

      return(
          <MyForm />
      )


      //console.log(data.data);
      return(
          <Toggle />
      )

    return (
        <FilterableProductTable products={data.data} />

    );
  }
}

export default App;
