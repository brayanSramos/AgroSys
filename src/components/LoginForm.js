import React from "react";
import { Text } from "react-native";

export default function LoginForm(props){
    const { firstname, lastname } = props;

    return(
    <Text style={{ color: '#fff' }} >Hola {firstname} {lastname}</Text>
    );
}
LoginForm.default ={
    firstname: "Brayan",
    lastname: "Ramos",
};