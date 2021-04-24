import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>Hellow World!!</Text>
      <Image
        style={styles.imagenUri}
        source={{ uri: 'https://picsum.photos/200/200' }}
      />
      {/*<Image
        style={styles.imagenUri}
        source={diamante}
      />*/}{/*Nota: no me funciona :(*/}
      <Button
        title='Presioname :)'
        color='black'
        onPress={() => alert('Hellow world React Native')}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => alert('Hellow world React Native btn 2')}
      >
        <Text style={styles.btnText}>
          Boton 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgreen'
  },
  texto: {
    fontSize: 30
  },
  imagenUri: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 7
  },
  btn: {
    padding: 7,
    width: 100,
    height: 35,
    marginTop: 7,
    borderRadius: 100,
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  btnText: {
    fontSize: 15,
    color: 'black'
  }
});

export default App;

{/*
  <div>Iconos diseñados por
  <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
title="Flaticon">www.flaticon.es</a></div>

<div>Iconos diseñados por <a href="https://www.flaticon.es/autores/flat-icons" title="Flat Icons">
Flat Icons</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div>


*/}