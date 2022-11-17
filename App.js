import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';


export default function App() {
  datesWhitelist = [
    {
      start: (Date),
      end: (Date)
    }
  ]
  return (
    <View style={styles.container}>
      <CalendarStrip
        style={{ height: 120, paddingTop: 20, paddingBottom: 10 }}
        calendarHeaderStyle={{ color: 'white', fontSize: 18, marginBottom: 20 }}
        calendarColor={'#7743CE'}
        dateNumberStyle={{ color: 'white', fontSize: 16 }}
        dateNameStyle={{ color: 'white', fontSize: 16 }}
        highlightDateNumberStyle={{ color: 'yellow' }}
        highlightDateNameStyle={{ color: 'yellow' }}
        iconLeft={require('./assets/left.png')}
        iconRight={require('./assets/right.png')}
        iconContainer={{ flex: 0.1 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "7743CE",
  },
});
