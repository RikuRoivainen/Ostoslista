import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim()) {
      setItems([...items, { key: Math.random().toString(), value: inputValue }]);
      setInputValue('');
    }
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        placeholder='Enter something to list'
        value={inputValue}
        onChangeText={setInputValue}
        style={styles.textInput}
      />

      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={addItem} />
        <Button title='Clear' onPress={clearList} />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.header}>Shopping List</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => <Text style={styles.item}>{item.value}</Text>}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  
  },
  textInput: {
    height: 40,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  listContainer: {
    flex: 1, 
    width: '100%',
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', 
  },
});