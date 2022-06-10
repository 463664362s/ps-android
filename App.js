import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button
} from 'react-native'


export default class App extends React.Component {
  state={
    nome: "",
    cor: '',
    statusAutorizacao: "",
    showTextInput: true,
    showAutorizar: false,
    showTexInputButtons: true,
    showNome: false,
    showStatusAutorizacao: false
  }

  botaoLimpar =() =>{
    this.textInput.clear()
    this.setState({
      showTextInput:true,
      nome: ""
    })
  }

  botaoSolicitar =() =>{
    const { nome } = this.state
    if (nome == "") {
      alert("Digite o Nome!")
    }else{
    this.setState({
      showTextInput: false,
      showAutorizar: true,
      showTexInputButtons: false,
      showNome: true,
      statusAutorizacao: "",
      showStatusAutorizacao: false
    })}
  }
  
  botaoAutorizar = () =>{
    
    this.setState({
      showTextInput: true,
      showAutorizar: false,
      showTexInputButtons: true,
      showNome: false,
      statusAutorizacao: " Autorizado",
      showStatusAutorizacao: true
    })
  }

  botaoNAutorizar = () =>{
    
    this.setState({
      statusAutorizacao: " Não Autorizado",
      showTextInput: true,
      showAutorizar: false,
      showTexInputButtons: true,
      showNome: false,
      showStatusAutorizacao: true,
      cor: "red"
    })

  }


  render() {
    const {input, nome, showTextInput, showAutorizar, showTexInputButtons, statusAutorizacao, showNome, showStatusAutorizacao, textAutorizacao, cor} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.nome}>Prova Semestral</Text>
        {showTextInput &&
        <TextInput
        style={styles.textInput}
        placeholderTextColor="white"
        placeholder="Nome"
        ref={input => { this.textInput = input}}
        onChangeText={nome => this.setState({nome})}
        />}

        {showNome &&
        <Text style={styles.nomePessoa} 
        >{nome}</Text>}
        <View style={styles.botoes}>
        {showTexInputButtons &&
          <TouchableOpacity onPress={this.botaoLimpar} style={styles.botao}>
          <Text style={styles.txtBotao}>Limpar</Text>
          </TouchableOpacity>
}
        {showTexInputButtons &&
          <TouchableOpacity onPress={this.botaoSolicitar} style={styles.botao}>
          <Text style={styles.txtBotao}>Solicitar Autorização</Text>
          </TouchableOpacity>
        }
        </View>
        <View style={styles.botoes2}>
        {showAutorizar &&
          <TouchableOpacity onPress={this.botaoNAutorizar} style={styles.botao2}>
          <Text style={styles.txtBotao}>Não autorizar</Text>
          </TouchableOpacity>
          }
        {showAutorizar &&
          
          <TouchableOpacity onPress={this.botaoAutorizar} style={styles.botao2}>
          <Text style={styles.txtBotao}>Autorizar</Text>
          </TouchableOpacity>
          }

        </View>
        {showStatusAutorizacao &&
        <Text
        style={{alignSelf: 'center'}}
        ref={statusAutorizacao => { this.statusAutorizacao = statusAutorizacao}}
        >{nome}{statusAutorizacao}</Text>}
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323435" 
  },
 botao: {
    color: "#fff",
    backgroundColor: "#ec145a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,    
    marginHorizontal: 10

  },

botao2: {
    color: "#fff",
    backgroundColor: "#ec145a",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,    
    marginHorizontal: 10
},
  nome: {
    alignSelf: 'center',
    paddingVertical: 20,

    color: '#ec145d',
    fontSize: '30px',
  },

  nomePessoa: {
    alignSelf: 'center',
    fontSize: '30px',
    color: 'white',
  },
  textInput: {
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor: 'grey',
    fontSize: 15,
    padding: 1,
    width: 320,

  },
  botoes: {
  flexDirection: 'row', 
  justifyContent: 'flex-end',
  marginTop: 20,
  

  },

  botoes2: {
  flexDirection: 'row', 
  justifyContent: 'center',
  marginTop: 20,
  

  },

})