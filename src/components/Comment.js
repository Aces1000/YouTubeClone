import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../style';
import { FontAwesome } from '@expo/vector-icons';

const Comment = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.commentHeader}>Comments</Text>

      
      <View style={styles.comments}>
        <FontAwesome name="user" size={32} />
        <Text>This video is very fun. Good job!</Text>
      </View>
      <View style={styles.comments}>
        <FontAwesome name="user" size={32} />
        <Text>This video is very fun. Good job!</Text>
      </View>
      <View style={styles.comments}>
        <FontAwesome name="user" size={32} />
        <Text>This video is very fun. Good job!</Text>
      </View>
      <View style={styles.comments}>
        <FontAwesome name="user" size={32} />
        <Text>This video is very fun. Good job!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderRadius: 2,
        borderColor: colors.black
    },
  commentHeader: {
    color: colors.black,
    fontSize: 22,
    marginLeft: 20,
    marginTop: 20,
  },
  comments: {
    flexDirection: 'row',
    color: colors.gray,
    fontSize: 16,
    marginLeft: 50,
    marginTop: 40,
  },

});

export default Comment;
