import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props: { text: string; showX: boolean; isCompleted: boolean }) => {
  return (
    <View style={[styles.item, props.isCompleted && styles.completedItem]}>
      <View style={styles.itemLeft}>
        <View style={[styles.square, props.isCompleted && styles.completedSquare]}></View>
        <Text style={[styles.itemText, props.isCompleted && styles.completedText]}>
          {props.text}
        </Text>
      </View>
      {props.showX && <Text style={styles.xItem}>X</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  completedItem: {
    backgroundColor: 'lightgreen', // Change the background color for completed tasks
  },
  completedSquare: {
    backgroundColor: 'green', // Change the square color for completed tasks
  },
  completedText: {
    textDecorationLine: 'line-through', // Add a line-through for completed tasks
  },
  xItem: {
    color: '#55BCF6',
    fontSize: 16,
    width: 20,
  },
});

export default Task;
