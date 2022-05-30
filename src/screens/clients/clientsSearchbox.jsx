import React, { useState, createRef, useEffect } from "react";
import { Input } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import styles from "./styles";

const ClientsSearchbox = ({ setClientQuery }) => {
  const input = createRef();
  const [isFocused, setIsFocused] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setClientQuery(query);
  }, [query, setClientQuery]);

  const onBlurHandler = () => {
    setQuery("");
    setIsFocused(true);
    input.current.clear();
  };

  return (
    <Input
      ref={input}
      placeholder="Search by first name, last name or profession"
      rightIcon={<Ionicons name="search-outline" />}
      containerStyle={styles.searchboxContainer}
      inputContainerStyle={[
        styles.searchboxInputContainer,
        { borderColor: isFocused ? "#f33984" : "#ccc" },
      ]}
      onFocus={() => setIsFocused(true)}
      onBlur={onBlurHandler}
      onChangeText={(value) => setQuery(value)}
    />
  );
};

export default ClientsSearchbox;

ClientsSearchbox.propTypes = {
  setClientQuery: PropTypes.func,
};
