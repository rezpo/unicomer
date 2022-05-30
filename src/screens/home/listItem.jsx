import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

const ListItem = ({ caption }) => {
  return <Text style={styles.listItemCaption}>{caption}</Text>;
};

export default ListItem;

ListItem.propTypes = {
  caption: PropTypes.string,
};
