import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {YaMap} from 'react-native-yamap';

/*
  Новый ключ
 */
YaMap.init('92ae93a7-bfb9-4e25-886c-9dd2646f28a9');

/*
  Рабочий ключ
 */
// YaMap.init('53b1b40d-2761-4e70-9344-4c7db06823a1');

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
      <YaMap
        initialRegion={{
          lat: 51,
          lon: 51,
          zoom: 10,
        }}
        style={styles.map}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
