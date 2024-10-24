import {
  Dimensions,
  SafeAreaView,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import {home_styles} from '../../themes/styles/home_styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import {APP_COLORS} from '../../themes/colors';
import {useNavigation} from '@react-navigation/native';

export default function SettingView() {
  const navigation = useNavigation();
  const res = Dimensions.get('window').height;
  const [clock, setClock] = useState(new Date());
  const hours = clock.getHours().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';

  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');
  const [param3, setParam3] = useState('');
  const [param4, setParam4] = useState('');

  const handleSubmit = () => {
    console.log('Parameter 1:', param1);
    console.log('Parameter 2:', param2);
    console.log('Parameter 3:', param3);
    console.log('Parameter 4:', param4);
  };

  return (
    <SafeAreaView
      style={[
        home_styles.container,
        period == 'AM'
          ? {backgroundColor: APP_COLORS.pink}
          : {backgroundColor: APP_COLORS.darkblue},
      ]}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 10,
          left: 20,
        }}
        onPress={() => navigation.goBack()}>
        <View
          style={[
            {
              backgroundColor:
                period == 'AM' ? APP_COLORS.darkblue : APP_COLORS.pink,
              width: res * 0.05,
              height: res * 0.05,
              borderRadius: (res * 0.09) / 2,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}>
          <Icon
            name="arrow-back-ios"
            style={{
              color: period == 'AM' ? APP_COLORS.pink : APP_COLORS.darkblue,
              fontSize: res * 0.03,
              paddingLeft: 10,
            }}
          />
        </View>
        <TextInput
          placeholder="Enter Parameter 1"
          value={param1}
          onChangeText={setParam1}
        />
        <TextInput
          placeholder="Enter Parameter 2"
          value={param2}
          onChangeText={setParam2}
        />
        <TextInput
          placeholder="Enter Parameter 3"
          value={param3}
          onChangeText={setParam3}
        />
        <TextInput
          placeholder="Enter Parameter 4"
          value={param4}
          onChangeText={setParam4}
        />
        <Button title="Save" onPress={handleSubmit} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
