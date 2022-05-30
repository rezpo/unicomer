import React from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { Text } from "react-native";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import styles from "./styles";

const ClientListItem = (props) => {
  const {
    id,
    first_name,
    last_name,
    birthday,
    gender,
    cellphone,
    home_address,
    profession,
    income,
    picture_url,
  } = props;

  return (
    <ListItem key={id} containerStyle={styles.clientListItem}>
      <Avatar title={first_name} source={picture_url && { uri: picture_url }} rounded />
      <ListItem.Content>
        <ListItem.Title style={styles.clientName}>{`${first_name} ${last_name}`}</ListItem.Title>
        <Text style={styles.clientInfo}>{`Birthday: ${birthday}`}</Text>
        <Text style={styles.clientInfo}>{`Gender: ${gender}`}</Text>
        <Text style={styles.clientInfo}>{`Cellphone: ${cellphone}`}</Text>
        <Text style={styles.clientInfo}>{`Home address: ${home_address}`}</Text>
        <Text style={styles.clientInfo}>{`Profession: ${profession}`}</Text>
        <NumberFormat
          value={income}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value) => <Text style={styles.clientInfo}>{`Income: ${value}`}</Text>}
        />
      </ListItem.Content>
    </ListItem>
  );
};

export default ClientListItem;

ClientListItem.propTypes = {
  id: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: PropTypes.string,
  gender: PropTypes.string,
  cellphone: PropTypes.string,
  home_address: PropTypes.string,
  profession: PropTypes.string,
  income: PropTypes.number,
  picture_url: PropTypes.string,
};
