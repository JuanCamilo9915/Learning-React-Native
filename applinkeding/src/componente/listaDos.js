import React, { Component } from 'react';
import { View, Text } from 'react-native';



const ListaDos = () => {



    return (

        <View>
            {
                list.map((item, i) => (
                    <ListItem key={i} bottomDivider>
                        <Icon name={item.icon} />
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                ))
            }
        </View>

    );

}

export default ListaDos;