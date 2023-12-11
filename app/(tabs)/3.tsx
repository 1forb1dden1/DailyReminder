//Daily To Do Reminder
import { ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, Pressable, Keyboard} from 'react-native'
import React, {useState} from 'react'
import Task from '../../components/task'
import taskStore from '../zustand/stores'
import { count } from '../WeekCalendar';


export default function PageTwo() {
  const [task, setTask] = useState<string>(''); 
  const { tasks, setTasks, completed, setCompleted } = taskStore();

  const AddTaskHandler = () => {
    Keyboard.dismiss();
    const newTaskItemsArray = [...tasks, task];
    setTasks(newTaskItemsArray);
    setTask('');
  };

  const deleteTask = (index: number) => {
    let itemsCopy = [...tasks];
    itemsCopy.splice(index, 1);
    setTasks(itemsCopy); // Update tasks using setTasks
  };
  
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksDiv}>

        <ScrollView style={styles.items}>
          {
            tasks.map((item, index) => {
              return (
                <Pressable key={index}  onPress={() => deleteTask(index)}>
                  <Task text={item} showX={true} isCompleted={false}/> 
                </Pressable>
              )
            })
          }
        </ScrollView>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskDiv}
      >
        <TextInput
          style={styles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <Pressable onPress={AddTaskHandler}>
          <View style={styles.addDiv}>
            <Text style={styles.addTextDiv}>+</Text>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#E8EAED',
  },
  tasksDiv: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    paddingTop: 30,
    height: 600,
  },
  writeTaskDiv: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 280,
    height: 60,
  },
  addDiv:{
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addTextDiv:{
    
  }
})