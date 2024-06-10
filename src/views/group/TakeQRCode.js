import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ScanArea from '../../components/ScanArea.js';
import BackArrow from '../../components/BackArrow.js';
// import {useQRCodeContext} from '../../ReactContexts/QRcodeContext.js';
// import {useQRListContext} from '../../ReactContexts/QRlistContext.js';

const res = Dimensions.get('window').height;

export default function TakeQRCode({navigation, route}) {
  const {classIdChose} = route.params;
  const [scanned, setScanned] = useState('');

  const handleQRCodeScanned = event => {
    const {data} = event;
    setScanned(data);
  };

  if (scanned != '') {
    const qrcodeCut = scanned.substring(3);
    navigation.navigate('TakeStudent', {qrcodeCut, classIdChose});
  }

  return (
    <View>
      <View style={styles.qrcode__container}>
        <TouchableOpacity
          style={styles.qrcode__quit}
          onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
        <Text style={styles.qrcode__text}>scan qr code</Text>
      </View>
      <QRCodeScanner
        onRead={handleQRCodeScanned}
        reactivate={true}
        reactivateTimeout={2000}
        fadeIn={true}
        showMarker={true}
        customMarker={
          <View style={styles.camera__scan}>
            <ScanArea />
          </View>
        }
        cameraStyle={{
          height: 800,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  qrcode__container: {
    position: 'absolute',
    // backgroundColor: 'green',
    flexDirection: 'row',
    top: res * 0.05,
    zIndex: 1,
    width: '100%',
    paddingHorizontal: res * 0.04,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  qrcode__text: {
    textTransform: 'uppercase',
    fontSize: res * 0.025,
    fontWeight: '900',
    color: '#000 ',
  },
});
