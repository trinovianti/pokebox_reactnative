import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  FlatList,
  StatusBar
} from 'react-native';
import api from '../../../utils/api';
import styles from './style';

let pokemonIndex = 1, counter = 1;

export default class MaincardList extends React.Component {
    constructor(props){
        super(props);
        this.navigation=this.props.navigation;

        this.state={
            Names: [],
            loading: true,
            color: '#FFFFFF',
            counter: counter,
            previousPage: '',
            nextPage: '',
            id: ''
        };

        this.CharacterPage = this.CharacterPage.bind(this);
        this.getID = this.getID.bind(this);
    }    

    async componentDidMount() {
        counter = 1;
        this.setState({counter: 1});
        // Requesting names pokemon 
        var response = await api.get();
        this.setState({
            Names: response.data.results, 
            loading: false,
            nextPage: response.data.next,
            previousPage: response.data.previous
        });
    }

    especificPage = async (cont, offset) => {
        counter = cont;
        this.setState({counter: counter})

        // Pull data from specific search page
        var response = await api.get('https://pokeapi.co/api/v2/pokemon/?offset=' + offset + '&limit=100');
        this.setState({
            Names: response.data.results, 
            previousPage: response.data.previous,
            nextPage: response.data.next
        });
    };

    CharacterPage(id){
        // Calls the next screen by passing the selected pokemon's id
        this.navigation.navigate('DetailScreen', {id: id});
    }
 
    renderItem = (data) => {
        // Sets the numbering of the pokemon
        const url = data.item.url;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        // Get the pokemon image according to its numbering
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        return(
            <TouchableOpacity style={styles.gridButton}
            onPress={() => this.CharacterPage(pokemonIndex)}>
                <StatusBar backgroundColor="#fc474f" barStyle="light-content"/>
                <View style={[styles.grid, {backgroundColor: this.state.color}]}>
                    <Text style={styles.indexFont}> # {pokemonIndex}</Text>
                    <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
                    <Text style={styles.fonte}>{data.item.name}</Text>
                    <View style={styles.infoContainer}>
                      <Text style={styles.infoName}>See Details</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ) ;
    }

    getID = async (value) => {
        // Get the pokemon's id according to the name or id entered
        const response = await api.get(value + '/');
        this.setState({
            id: response.data.id
        });
        const valueId = parseInt(response.data.id);
        let page = Math.ceil(valueId/100);
        let limit = ((page-1)*100);

        // Search using the searched id
        if(valueId <= 0) Alert.alert("Search error!", "There are no pokemons with IDs less than or equal to zero!");
        else if(valueId > 0 && valueId <= 807) {
            this.especificPage(page, limit);
        }
        else if(valueId != '' && valueId != null){
            Alert.alert("Search error!", "The name / ID entered was not found!");
            this.especificPage(1, 1);
        }
        else this.especificPage(1, 1);
    }
    
    render() {
        const { Names} = this.state;
        
        return(   
            <View>
                <FlatList 
                    numColumns={2}
                    data={Names}
                    extraData={pokemonIndex}
                    refreshing={true}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item}  
                    style={{marginBottom: '10%', marginTop: '35%'}}/>
            </View>
        );
    }
}