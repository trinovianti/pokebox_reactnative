import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    grid: {
        flex: 1,
        margin: '5%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5.5,
        borderBottomWidth: 0
    },
    gridButton: {
        backgroundColor: 'transparent', 
        width: '50%'
    },
    fonte: {  
        color: '#006359',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: '7%',
        marginBottom: '30%'
    },
    indexFont: {
        alignSelf: 'flex-start', 
        marginLeft: '5%',
        marginTop: '5%', 
        color: '#006359'
    },
    presentationFont: {
        color: 'white', 
        fontSize: 22, 
        fontWeight: 'bold'
    },
    imagem: {
        backgroundColor: 'transparent',
        height: 100,
        width: 100
    },
    imagemArrow: {
        backgroundColor: 'transparent',
        height: 30,
        width: 30
    },
    imagemSearch: {
        backgroundColor: 'transparent',
        height: 20,
        width: 20
    },
    arrowButton: {
        backgroundColor: 'transparent', 
        marginTop: '2.55%', 
        marginHorizontal: '5%',
        padding: '2%', 
        marginBottom: '2.5%'
    },
    containerArrows: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        backgroundColor: 'white'
    },
    count: {
        fontWeight: 'bold', 
        fontSize: 25, 
        color: '#c3c3c3'
    },
    header: {
        height: '12%', 
        width: '100%', 
        backgroundColor: '#fc474f', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    containerHeader: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    search: {
        color: 'white', 
        fontSize: 17, 
        fontWeight: 'bold', 
        marginLeft: '2%'
    },
    input: {
        height: 80, 
        color: 'white', 
        fontSize: 17
    },
    infoContainer: {
        position: "absolute",
        height: 35,
        left:0,
        bottom: 0,
        backgroundColor: "#006359",
        right: 0,
        justifyContent: "center",
        borderBottomRightRadius:12,
        borderBottomLeftRadius:12,
        flex: 1,
        alignItems: 'center',
    },
    infoName: {
        color: "#ffffff",
        fontSize: 12,
        alignSelf: "center"
    }
    
});