import { View, Text, ScrollView, Pressable} from 'react-native'
import { useState} from 'react'
import taskStore from '../zustand/stores'
import Task from '../../components/task'


export default function pageOne() {
    
    const { tasks, setTasks } = taskStore((state) => ({
        tasks: state.tasks,
        setTasks: state.setTasks,
    }));

  return (
    <View>
      <ScrollView>
          {
            tasks.map((item, index) => {
              return (
                <Pressable key={index}>
                  <Task text={item} /> 
                </Pressable>
              )
            })
          }
        </ScrollView>
    </View>
  )
}