import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Icon, Avatar } from 'react-native-elements';
/*
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

*/
export class ListaNumeroUno extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textPrincipal}>Objeto de Equipos (Forma # 1)</Text>
                <Text style={styles.textLista}>
                    {
                        this.props.equipos.map((l, i) => (
                            <ListItem key={i} bottomDivider>
                                <ListItem.Content style={styles.textLista}>
                                    <ListItem.Title>{l.id}</ListItem.Title>
                                    <ListItem.Subtitle>{l.nombre}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.edad}</ListItem.Subtitle>
                                    <ListItem.Subtitle>{l.jugadores.map((k, j) => (
                                        <ListItem key={j} bottomDivider>
                                            <ListItem.Content>
                                                <ListItem.Subtitle>{k.nombre}</ListItem.Subtitle>
                                            </ListItem.Content>
                                        </ListItem>
                                    ))}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        ))
                    }
                </Text>
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