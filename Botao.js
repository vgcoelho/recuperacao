import React from "react";
import { Button } from "react-native";
import {calculadora} from "./Calculadora";
import {Curriculo} from "./Curriculo";

export default (props:any) => {

    function executar(){
        console.warn('Botão curriculo!')
    }

    return (
        <>
            <Button 
                title="executar"
                onPress={executar}            
            />

            <Button 
                title="calculadora "
                onPress={function(){
                            console.warn("calculadora!")
                        }}
            />

            <Button 
                title="Curriculo"
                onPress={()=> console.warn("curriculo")}
            />
        </>
    )
}