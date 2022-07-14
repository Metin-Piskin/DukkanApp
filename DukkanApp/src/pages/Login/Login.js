import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { Formik } from "formik";
import Config from "react-native-config";
import { useDispatch } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";

import styles from "./Login.style";

import usePost from "../../hooks/usePost";

const Login = ({ navigation }) => {
    const { data, loading, error, post } = usePost();
    const dispatch = useDispatch();


    function handleLogin(values) {
        post("https://fakestoreapi.com/auth" + "/login", values);
        //post(Config.API_AUTH_URL + "/login", values);
    }

    if (error) {
        Alert.alert("Hata", "Bir Hata Oluştu");
    }

    if (data) {
        if (data.status === "Error") {
            Alert.alert("Hata", "Kullanıcı Bulunamadı");
        }
        else {
            dispatch({ type: "SET_USER", payload: { user } });
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require("../../asstes/retail-industry.png")} />
            </View>
            <Formik initialValues={{ username: '', password: '' }}
                onSubmit={handleLogin}
            >
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input placeholder="Kullanıcı Adınızı Giriniz..."
                            value={values.username}
                            onType={handleChange('username')}
                            iconName="account"
                        />
                        <Input placeholder="Şifrenizi Giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                        />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </View>
    );
}
export default Login;

const user = {
    address: {
        geolocation: {
            lat: "-37.3159",
            long: "81.1496"
        },
        city: "kilcoole",
        street: "new road",
        number: 7682,
        zipcode: "12926-3874"
    },
    id: 1,
    email: "john@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    name: {
        firstname: "john",
        lastname: "doe"
    },
    phone: "1-570-236-7033",
    __v: 0
}