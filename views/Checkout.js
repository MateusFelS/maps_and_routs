import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {css} from '../assets/css/Css';

export default function Checkout(props) {
    return (
        <View style={css.container_checkout}>
            <Text style={css.title}>Resumo da Corrida</Text>
            <View style={css.card}>
                <Text style={css.info}>Valor da corrida:</Text>
                <Text style={css.value}>R$ {props.route.params.price}</Text>
            </View>
            <View style={css.card}>
                <Text style={css.info}>Destino: {props.route.params.address}</Text>
            </View>
        </View>
    );
}
