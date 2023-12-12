import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, TextInput, Pressable, ScrollView } from 'react-native';
import taskStore from './zustand/stores';
import {MaterialIcons} from '@expo/vector-icons';
import Task from '../components/task';

type Props = {
  date: Date;
  onChange: (value: Date) => void;
};

const WeekCalendar: React.FC<Props> = ({ date }) => {
  const [week, setWeek] = useState<WeekDay[]>([]);
  const { tasks, completed, complete } = taskStore();

  useEffect(() => {
    const weekDays = getWeekDays(date, complete);
    setWeek(weekDays);
  }, [date, completed]);

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType={'slide'} transparent={true}>
        <View style={styles.modalComp}>
        <MaterialIcons
            name="close"
            size={48}
            styles={styles.modalToggle}
            onPress={() => setModalOpen(false)}
          />
        <ScrollView>
          {completed.includes(true) ? (
            tasks.map((item, index) => (completed[index] ? <Task text={item} showX={false} isCompleted={false} />: null
            ))
          ) : (
            <Text style={styles.sectionText}>No completed tasks</Text>
          )}
        </ScrollView>
        </View>
      </Modal>

      <View style={styles.weekCalendar}>
        {week.map((weekDay) => {
          const textStyles = [styles.label];
          const touchable = [styles.touchable];

          const sameDay = isSameDay(weekDay.date, date);
          if (sameDay) {
            textStyles.push(styles.selectedLabel);
            touchable.push(styles.selectedTouchable);
          }

          return (
            <View style={styles.weekDayItem} key={weekDay.formatted}>
              <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
              <TouchableOpacity onPress={() => setModalOpen(true)} style={touchable}>
                <Text style={textStyles}>{weekDay.day}</Text>
              </TouchableOpacity>
              <Text style={styles.numbers}>{sameDay ? complete : weekDay.counter}</Text>
            </View>
          );
        })}
      </View>

      <View style={styles.textBelowWeek}>
        <Text style={styles.textBelowWeekContent}>Select a date to view completed tasks</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  weekCalendar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekDayText: {
    color: 'gray',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  selectedLabel: {
    color: 'white',
  },
  touchable: {
    borderRadius: 20,
    padding: 7.5,
    height: 35,
    width: 35,
  },
  selectedTouchable: {
    backgroundColor: 'black',
  },
  weekDayItem: {
    alignItems: 'center',
  },
  numbers: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  modalToggle: {
    margin: 500,
  },
  modalComp: {
    height: '83%',
    marginTop: 'auto',
    backgroundColor: 'white',
  },
  taskCompletedText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textBelowWeek: {
    marginTop: 20,
    alignItems: 'center',
  },
  textBelowWeekContent: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'black',
  },
  sectionText:{
    alignSelf: 'center'
  }
});

export const count = 0;

export type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
  counter: number;
};

export const getWeekDays = (date: Date, completed: number): WeekDay[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final = [];

  for (let i = 0; i < 7; i++) {
    const currentDate = addDays(start, i);
    final.push({
      formatted: format(currentDate, 'EEE'),
      date: currentDate,
      day: getDate(currentDate),
      counter: 0, // Initialize counter to 0 for each day
    });
  }

  return final;
};

export default WeekCalendar;
