import { AsyncStorage } from "react-native";

export const TOKEN_KEY = "user";
export const isAuthenticated = async () =>
  (await AsyncStorage.getItem(TOKEN_KEY)) !== null;

// export const getToken = async () => {
//   // const gToken =
//   await AsyncStorage.getItem(TOKEN_KEY);
//   // alert(gToken);
//   // return gToken;
// };

export const getAsyncStorage = async chave => {
  try {
    const tokenValue = await AsyncStorage.getItem(chave);
    return tokenValue;
  } catch (e) {
    alert(e.message);
  }
};

export const login = async token => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

// export const logout = () => {
//   AsyncStorage.removeItem(TOKEN_KEY);
// };
