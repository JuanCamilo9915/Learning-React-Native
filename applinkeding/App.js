import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  ScrollView
} from 'react-native';
import { List, ListItem, Icon, Avatar } from 'react-native-elements';
import {ListaNumeroUno} from './src/vistas/ListaNumeroUno';

const equipos = [{
  id: "1",
  nombre: "Equipo 1",
  edad: 7,
  jugadores: [{ nombre: "Fabian" }]
},
{
  id: "2",
  nombre: "Equipo 2",
  edad: 20,
  jugadores: [{ nombre: "Carlos" }, { nombre: "Fabian" }]
},
{
  id: "3",
  nombre: "Equipo 3",
  edad: 5,
  jugadores: [{ nombre: "carla" }, { nombre: "Kross" }, { nombre: "Gustavo" }]
}
];

const paises = [{
  id: "1",
  nombre: "Colombia",
  presidentes: [{ nombre: "Fabiola" }]
},
{
  id: "2",
  nombre: "Ecuador",
  presidentes: [{ nombre: "Xavier" }, { nombre: "Sandra" }]
},
{
  id: "3",
  nombre: "Venezuela",
  presidentes: [{ nombre: "Rojas" }, { nombre: "Ivan" }, { nombre: "Patricio" }]
}
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

  }

  render() {
    return (
      <View>
        <ScrollView style={styles.textLista}>
          <ListaNumeroUno equipos={equipos}/>
          
          <Text>Objeto de Paises (Forma # 1)</Text>
          <View>
            {
              paises.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <ListItem.Content>
                    <ListItem.Title>{l.id}</ListItem.Title>
                    <ListItem.Subtitle>{l.nombre}</ListItem.Subtitle>
                    <ListItem.Subtitle>{l.presidentes.map((k, j) => (
                      <ListItem key={j} bottomDivider>

                        <ListItem.Subtitle>{k.nombre}</ListItem.Subtitle>

                      </ListItem>
                    ))}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
          <Text>Objeto de Equipos (Forma # 2)</Text>
          <View>
            <Text>
              {
                equipos.map((l, i) => (
                  <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                      <ListItem.Title>{l.id}</ListItem.Title>
                      <ListItem.Subtitle>{l.nombre}</ListItem.Subtitle>
                      <ListItem.Subtitle>{l.edad}</ListItem.Subtitle>
                      <ListItem.Subtitle>{l.jugadores.map((k) => (k.nombre + ' '))}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                ))
              }
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  textPrincipal: {
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'green'
  },
  textLista: {
    backgroundColor: 'sienna'
  }
});

export default App;

{/*
<List>
        {/*Código que está entre llaves ( {} ), significa que es código JS (Ejecuta JS)
        {equipos.map(
          equipo => (
            <ListItem 
            key={equipo.id}
            title={equipo.nombre} />
          ))};
      </List>
*/}