import React from 'react';
import Tab from './Tab';
import '../../CSS/index.css';
import PropTypes from 'prop-types';
const Tabs = props => {
  console.log('returning tabS Js')
  return (
    
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(currentValue => <Tab selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} tab={currentValue}
        />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes ={
  selected:PropTypes.string,
  
  tabs:PropTypes.arrayOf(
    PropTypes.string
  )
}
