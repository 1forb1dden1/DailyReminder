import {addDays, format, getDate, getTime, isSameDay, startOfWeek} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
      <View style={st.container}>

  
        {/* Week Days */}
        <View style={styles.weekDaysContainer}>
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
                <TouchableOpacity
                  onPress={() => onChange(weekDay.date)}
                  style={touchable}
                >
                  <Text style={textStyles}>{weekDay.day}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  };


const st = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
      },
      timeBarContainer: {
        alignItems: 'flex-end',
        paddingRight: 0,
      },
      timeBarText: {
        fontSize: 10,
        color: 'gray',
        fontWeight: 'bold',
        marginBottom: 5,
      },
})

const styles = StyleSheet.create({
  weekDaysContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  weekDayText: {
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  selectedLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  touchable: {
    borderRadius: 20,
    padding: 7.5,
    height: 35,
    width: 150,
  },
  selectedTouchable: {
    borderRadius: 5,
    padding: 5,
    height: 5,
    width: 150,
  },
  weekDayItem: {
    alignItems: 'center',
  },
});

type WeekDay = {
  formatted: string;
  date: Date;
  day: number;
};


// get week days
export const getWeekDays = (date: Date): WeekDay[] => {
  const start = startOfWeek(date, {weekStartsOn: 1});

  const final = [];

  for (let i = 0; i < 7; i++) {
    const date = addDays(start, i);
    final.push({
      formatted: format(date, 'EEE'),
      date,
      day: getDate(date),
    });
  }

  return final;
};

export default WeekCalendar;