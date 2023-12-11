import { addDays, format, getDate, isSameDay, startOfWeek } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  date: Date;
  onChange: (value: Date) => void;
};

const WeekCalendar: React.FC<Props> = ({ date, onChange }) => {
  const [week, setWeek] = useState<WeekDay[]>([]);

  useEffect(() => {
    const weekDays = getWeekDays(date);
    setWeek(weekDays);
  }, [date]);

  return (
    <View style={styles.container}>
      {week.map((weekDay) => {
        const textStyles = [styles.label];
        const touchable = [styles.touchable];

        const sameDay = isSameDay(weekDay.date, date);

        return (
          <View style={styles.weekDayItem} key={weekDay.formatted}>
            <Text style={styles.weekDayText}>{weekDay.formatted}</Text>
            <TouchableOpacity
              onPress={() => {
                onChange(weekDay.date);
              }}
              style={touchable}
            >
              <Text style={textStyles}>{weekDay.day}</Text>
            </TouchableOpacity>
            <Text style={styles.numbers}>{weekDay.counter}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
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
});

export const count = 0;

export type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
  counter: number;
};

export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, { weekStartsOn: 1 });

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
      counter: 0,
    });
  }

  return final;
};

export function updatCounter(counter: 0): void{

}

export default WeekCalendar;
