import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons/';

export default function TabIcon({ name, tintColor }) {
  return <FontAwesome name={name} size={24} color={tintColor} />;
}

TabIcon.propTypes = {
  name: PropTypes.string.isRequired,
  tintColor: PropTypes.string.isRequired,
};
