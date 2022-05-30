import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";
import ClientListItem from "./clientListItem";
import ClientsSearchbox from "./clientsSearchbox";
import PropTypes from "prop-types";
import styles from "./styles";

const Clients = ({ data }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (query.length) {
      const copyData = [...data];
      const filtered = copyData.filter(
        (client) =>
          client.first_name.includes(query) ||
          client.last_name.includes(query) ||
          client.profession.includes(query),
      );
      setFilteredData(filtered);
    }
  }, [data, query, setFilteredData]);

  return (
    <SafeAreaView>
      <ClientsSearchbox setClientQuery={setQuery} />
      <FlatList
        data={query.length ? filteredData : data}
        renderItem={({ item }) => <ClientListItem {...item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.clientsListContainer}
      />
    </SafeAreaView>
  );
};

export default Clients;

Clients.propTypes = {
  data: PropTypes.array,
};
