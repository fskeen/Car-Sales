import React from 'react';

//local imports
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
 
//redux stuff
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/index'

const App = ({car, availableFeatures, additionalPrice, addFeature, removeFeature}) => {

  const remove = (item) => {
    // dispatch an action here to remove an item
    removeFeature(item)
    console.log('I am in the remove function. Why does this happen?')
  };

  const add = (item) => {
    // dispatch an action here to add an item
    // e.preventDefault()
    addFeature(item)
    console.log(item)
    console.log('I am in the add function.')
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures
          car={car}
          remove={remove} />
      </div>
      <div className="box">
        <AdditionalFeatures
          availableFeatures={availableFeatures}
          add={add} />
        <Total
          car={car}
          additionalPrice={additionalPrice}
           />
      </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    car: state.car,
    availableFeatures: state.availableFeatures,
    additionalPrice: state.additionalPrice
  }
}

const ConnectedApp = connect(
  mapStatetoProps,
  { addFeature, removeFeature }
)(App)

export default ConnectedApp;
