import React from 'react';
import { FontAwesome } from '@expo/vector-icons/';

export default function TabIcon({ name, tintColor }) {
  return <FontAwesome name={name} size={24} color={tintColor} />;
}
