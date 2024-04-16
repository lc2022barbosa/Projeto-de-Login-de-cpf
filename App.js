import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Button,
  Pressable,
  TextInput,
  Text,
} from 'react-native';

export default function App() {
  const [cpf, setCpf] = useState('');
  const [cpfField, setCpfField] = useState('');

  const handleSendCpf = () => {
    setCpf(cpfField);
  };

  const handleClear = () => {
    setCpf('');
    setCpfField('');
  };

  return (
    <SafeAreaView>
      {cpf == '' && (
        <>
          <View style={styles.fundo}>
            <View style={styles.areaImagem}>
              <Image
                source={require('./assets/user-logo.png')}
                style={styles.userLogo}
              />
            </View>

            <View style={styles.areaInput}>
              <TextInput
                placeholder="CPF"
                placeholderTextColor="#999"
                style={styles.input}
                value={cpfField}
                onChangeText={(text) => setCpfField(text)}
              />
            </View>

            <View style={styles.areaBotao}>
              <Button
                title="Logar"
                style={styles.botao}
                color="black"
                onPress={handleSendCpf}
              />
            </View>
          </View>
        </>
      )}

      {cpf === '000.000.000-00' && (
        <>
          <View style={styles.conteinerTela2}>
            <View style={styles.areaImagemTela2}>
              <Image source={require('./assets/image-user.png')}      style={styles.userLogo2} />
            </View>

            <View style={styles.areaTexto}>
              <Text>Você está logado com o CPF: {cpf}?</Text>
            </View>

            <View style={styles.areaBotao2}>
              <Button
                title={`CPF NÃO E: ${cpf}`}
                onPress={handleClear}
                style={styles.areaBotaoTela2}
                color="black"
              />
            </View>
          </View>
        </>
      )}

      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    margin: 'auto',
    height: '600px',
  },

  input: {
    padding: 8,
    marginTop: 15,
    backgroundColor: '#eee',
    width: 280,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 3,
  },

  userLogo: {
    width: 90,
    height: 90,
    marginTop: 209,
  },

  areaImagem: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
  },

  areaBotao: {
    width: 100,
    marginTop: 15,
    margin: 'auto',
  },

  areaBotaoTela2: {
    width: 100,
    marginTop: 15,
    margin: 'auto',
  },


    areaBotao2: {
    width: 200,
    marginTop: 15,
    margin: 'auto',
  },

  areaTexto: {
    marginTop: 15,
    margin: 'auto',
  },

  areaImagemTela2: {
    width: 100,
    height: 100,
     margin: 'auto',
    marginTop: '190px',
  },

  userLogo2: {
 
      width: 100,
    height: 100,
  }
});
