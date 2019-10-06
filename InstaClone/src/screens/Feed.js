import React,{Component} from 'react';  
import { 
    StyleSheet,
    FlatList,
    View
 } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';
 class Feed extends Component {
     state = {
         posts: [
            {
            id: Math.random(),
            nickname: 'Joao Victor Teste',
            email: 'joaovictorteste@hotmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'John Ray Sheldon',
                comment: 'Stunning!'
            }, {
                nickname: 'Ana Julia Arruda',
                comment: 'Foto Linda! Onde foi tirada?'
            }]
            },
            {
                id: Math.random(),
                nickname: 'Rafael Teste',
                email: 'rafaelteste@gmail.com',
                image: require('../../assets/imgs/bw.jpg'),
                comments: []
            }]
        }

        render () {
            return (
                <View style={styles.container}>
                    <Header/>
                    <FlatList
                        data= {this.state.posts}
                        keyExtractor = {item => `${item.id}`}
                        renderItem = {({item}) =>
                            <Post key ={item.id} {...item} />} />
                </View>
            )
        }
 }

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#F5FCFF'
    }
 })

 export default Feed;
 