import React from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import Firebase from "../components/firebase.jsx";

export default function Cadastro() {

    const auth = getAuth(Firebase);

    const email = 'teste2@gmail.com'
    const password = '12345678'

    function Cadastrar() {

        
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('Cadastrado com Sucesso!')
                // Signed in
                //const user = userCredential.user;
                // ...
            })
            .catch((error) => {
              //  const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error.message);
                // ..
            });

    }

    return (
        <div className='login'>

            <h1> LOGIN </h1>
            <div className='input'>

                <label>Login</label>
                <input placeholder='email' />
            </div>


            <div className='input'>

                <label>Senha</label>
                <input placeholder='passoword' />



            </div>

            <button onClick={() => Cadastrar()}>Cadastro</button>

        </div>
    )

}