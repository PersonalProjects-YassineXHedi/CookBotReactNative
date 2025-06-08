import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function IngredientChecklist() {
  const [ingredientInput, setIngredientInput] = useState('');
  const [ingredients, setIngredients] = useState<string[]>(['Tomatoes','Onions','Garlic','Olive Oil','Salt','Pepper',]);
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  
  const addIngredient = () => {
    if (ingredientInput.trim() !== '') {
      setIngredients((prev) => [...prev, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  const toggleItem = (item: string) => {
    setCheckedItems((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Ingredients</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={ingredientInput}
          onChangeText={setIngredientInput}
          placeholder="e.g., Tomatoes"
        />
        <TouchableOpacity style={styles.addButton} onPress={addIngredient}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={ingredients}
        contentContainerStyle={{ paddingBottom: 100 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemRow}
            onPress={() => toggleItem(item)}
          >
            <Text style={styles.checkmark}>
              {checkedItems.includes(item) ? '✅' : '⬜️'}
            </Text>
            <Text
              style={[
                styles.itemText,
                checkedItems.includes(item) && styles.checkedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

  {checkedItems.length > 0 && (
    <TouchableOpacity style={styles.searchButton} onPress={() => console.log('Searching...')}>
      <Text style={styles.searchButtonText}>Search Recipes</Text>
    </TouchableOpacity>
  )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  checkmark: {
    fontSize: 24,
    width: 30,
  },
  itemText: {
    fontSize: 18,
  },
  checkedText: {
    color: 'gray',
  },
  searchButton: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
