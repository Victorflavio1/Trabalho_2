import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';
import { carros } from '../Data/carros';

const Carros = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Os 10 carros mais vendidos em Março de 2023
      </Text>
      <FlatList
        data={carros}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => Alert.alert('Unidades vendidas:', item.quantidade)}
          >
            <Image source={{ uri: item.imgUrl }} style={styles.imagem} />
            <Text style={styles.nomeVeiculo}>
              {item.id}º: {item.nome}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
      />
    </View>
  );
};

export default Carros;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    color: '#23238E',
    marginHorizontal: 5,
    marginVertical: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagem: {
    height: 200,
    width: 220,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
  },
  separador: {
    width: 18,
  },
  nomeVeiculo: {
    fontSize: 18,
    color: '#8B0000',
  },
});
