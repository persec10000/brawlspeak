import AsyncStorage from "@react-native-community/async-storage";

class LocalStorage {
    static storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value.toString());
        }
        catch (e) {
        }
    };

    static getData = async (key) => {
        try {
            return await AsyncStorage.getItem(key);
        }
        catch (e) {
        }
    };
}

export default LocalStorage;

