import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  ProgressBarAndroid
} from 'react-native';
import api from '../../../utils/api';
import styles from './style';

// Colors to be used according to the pokemon element
let themeColor;

const TYPE_COLORS = {
    bug: '#dced51',
    dark: '#4f3a2d',
    dragon: '#755edf',
    electric: '#f5c038',
    fairy: '#f4b1f4',
    fighting: '#382b38',
    fire: '#ff673d',
    flying: '#a3b3f7',
    ghost: '#6060b2',
    grass: '#9ae65e',
    ground: '#d3b357',
    ice: '#a3e7fd',
    normal: '#c8c4bc',
    poison: '#934594',
    psychic: '#ed4882',
    rock: '#b9a156',
    steel: '#b5b5c3',
    water: '#3295f6',
};

export default class DetailCharacter extends Component {
    // Configuring the navigator header
    static navigationOptions = {
        title: 'Características',
        headerStyle: {
          backgroundColor: '#fa716c',
        },
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTintColor: 'white'
    }

    constructor(props){
        super(props);
        this.navigation=this.props.navigation;

        this.state={
            elementos: [],
            nome: '',
            peso: '',
            pesoKg: '',
            altura: '',
            alturaM: '',
            expBase: '',
            descricao: '',
            hp: 0,
            attack: 0,
            defense: 0,
            speed: 0,
            specialAttack: 0,
            specialDefense: 0,
            loading: false
        };
    }    

    async componentDidMount() {
       
        const pokemonIndex = this.navigation.getParam('id');
        // Requesting basic information
        const response = await api.get(pokemonIndex + '/');
        this.setState({
            loading: false,
            elementos: response.data.types.type, 
            nome: response.data.name,
            peso: response.data.weight,
            pesoKg: (response.data.weight*0.1).toFixed(1),
            altura: response.data.height,
            alturaM: (response.data.height*0.1).toFixed(1),
            expBase: response.data.base_experience
        });

        // Selection of the color to be used
        const types = response.data.types.map(type => type.type.name);
        themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;
        this.setState({color: themeColor});
        
        // Status request
        const stats = response.data.stats.map(stats => stats.base_stat);
        const statsSeparados = stats.toString().split(',', 6);
        this.setState({
            speed: statsSeparados[0],
            specialDefense: statsSeparados[1],
            specialAttack: statsSeparados[2],
            defense: statsSeparados[3], 
            attack: statsSeparados[4], 
            hp: statsSeparados[5]
        });

        // Description request
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}/`;
        await api.get(pokemonSpeciesUrl).then(res => {
            res.data.flavor_text_entries.some(flavor => {
              if (flavor.language.name === 'en') this.setState({descricao: flavor.flavor_text.replace(/\s/g, ' ')});
            });
        });
    }

    back(){
        // Go back to the previous screen
        this.navigation.navigate('MainScreen');
    }

    render() {
        
        const pokemonIndex = this.navigation.getParam('id');

        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
        return(
            <View style={{flex: 1, backgroundColor: themeColor}}> 
                <ScrollView>
                    <StatusBar backgroundColor={themeColor} barStyle="light-content" />
                    <View style={styles.container}>
                        {/* Top options (back button, name and pokemon ID) */}
                        <View style={[styles.box1, {backgroundColor: themeColor}]}>
                            <View style={{flexDirection: 'row'}}>
                              {/* <TouchableOpacity style={styles.arrowButton} onPress={this.back}>
                                    <Image resizeMode="contain" source={require('../../../img/left-arrow2.png')} style={styles.imagemArrow}/>
                                </TouchableOpacity>*/}
                                
                                <View style={styles.arrowButton}>
                                    <Text style={styles.headerFont}>{this.state.nome}</Text>
                                </View>

                                <View style={styles.arrowButton}>
                                    <Text style={styles.headerFont}>#{pokemonIndex}</Text>
                                </View>
                            </View>
                            <Image resizeMode="contain" source={{uri: imageUrl}} style={styles.imagem}/>
                        </View>
                        {/* View for second box (the white part with rounded top corners) */}
                        <View style={[styles.box2, {backgroundColor: 'white'}]}>
                            {/* Description of pokemon */}
                            <Text style={[styles.titulo, {color: themeColor}]}>Description</Text>
                            <Text style={styles.descricao}>{this.state.descricao}</Text>
                            {/* Status pokemon */}
                            <Text style={[styles.titulo, {color: themeColor}]}>Status</Text>
                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>HP</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.hp*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.hp}</Text>            
                            </View>

                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>Attack</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.attack*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.attack}</Text>
                            </View>

                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>Defense</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.defense*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.defense}</Text>
                            </View>

                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>Speed</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.speed*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.speed}</Text>
                            </View>
        
                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>Special Attack</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.specialAttack*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.specialAttack}</Text>
                            </View>

                            <View style={styles.directionStatus}>
                                <Text style={[styles.status, {color: themeColor}]}>Special Defense</Text>
                                <ProgressBarAndroid style={[styles.progressBar, {color: themeColor}]}
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={this.state.specialDefense*0.01}
                                />
                                <Text style={[styles.numberStatus, {color: themeColor}]}>{this.state.specialDefense}</Text>
                            </View>
                            {/* Basic Information */}
                            <Text style={[styles.titulo, {color: themeColor}]}>Basic Information</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.infoTitle, {color: themeColor}]}>Weight: </Text>
                                <Text style={styles.info}>{this.state.peso} hectograms ({this.state.pesoKg} kilograms)</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={[styles.infoTitle, {color: themeColor}]}>Height: </Text>
                                <Text style={styles.info}>{this.state.altura} decimeters ({this.state.alturaM} meters)</Text>
                            </View>
                            <View style={{flexDirection: 'row', marginBottom: '0%'}}>
                                <Text style={[styles.infoTitle, {color: themeColor}]}>Base experience: </Text>
                                <Text style={styles.info}>{this.state.expBase} Spots</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}