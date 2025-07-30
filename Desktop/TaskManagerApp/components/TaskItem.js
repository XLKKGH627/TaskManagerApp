import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.container}>
      <Checkbox status={task.completed ? 'checked' : 'unchecked'} onPress={onToggle} />
      <Text style={[styles.text, task.completed && styles.completed]}>{task.title}</Text>
      <IconButton icon="delete" onPress={onDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  text: { flex: 1, fontSize: 16 },
  completed: { textDecorationLine: 'line-through', color: 'gray' },
});
