import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useState, useEffect} from 'react';
import taskStore from '../zustand/stores';
import Task from '../../components/task';

export default function PageOne() {
  const { tasks, setTasks, completed, setCompleted } = taskStore();

  const {increment, decrement} = taskStore()

  const handleTaskPress = (index: number) => {
    setCompleted((prevCompleted: boolean[]) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[index] = !prevCompleted[index];
      return updatedCompleted;
    });
  };
  useEffect(() => {
    //re-render when completed is altered
  }, [completed]);

  return (
    <View>
      <Text style={styles.sectionTitle}>Today's Current Tasks</Text>
      <View style={styles.tasksDiv}>
        <ScrollView>
          {tasks.length > 0 ? (
            tasks.map((item, index) => (
            <Pressable key={index} onPress={() => {handleTaskPress(index); {completed[index] ? decrement() : increment()}}}>
                <Task text={item} showX={false} isCompleted={completed[index]} />
              </Pressable>
            ))
          ) : (
            <Text style={styles.sectionText}>You have no current tasks for the day</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle:{
    fontSize: 24,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 20,
    fontWeight: 'bold',
  },
  sectionText:{
    padding: 10,
    fontSize: 16,
  },
  tasksDiv: {
    paddingTop: 0,
    paddingHorizontal: 20,
  },
});