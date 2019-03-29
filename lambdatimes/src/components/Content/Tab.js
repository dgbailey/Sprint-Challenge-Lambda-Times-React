import React from 'react';
import '../../CSS/index.css';
import PropTypes from 'prop-types';

const Tab = props => {
  let name = 'tab';
  if (props.selectedTab == props.tab){
    name = 'tab active-tab';
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={name}
      onClick={() => {props.selectTabHandler(props.tab)}}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tab:PropTypes.number,
  selectedTab:PropTypes.string
}