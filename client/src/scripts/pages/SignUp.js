import React, { useState } from 'react';


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nome, setNome] = useState('')
  const [cognome, setCognome] = useState('')
  const [telefono, setTelefono] = useState('')
  const [dataNascita, setDataNascita] = useState('')

  async function register(event){
    event.preventDefault()
    const response = await fetch('http://localhost:5000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, password, nome, cognome, telefono, dataNascita,
      })
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit = {register} >
        <input
          value = { email }
          onChange={ (e) => setEmail(e.target.value)}
          type = "email"
          placeholder = "email"
        />
        <br />
        <input
          value = { password }
          onChange={ (e) => setPassword(e.target.value)}
          type = "password"
          placeholder = "password"
        />
        <br />
        <input
          value = { nome }
          onChange={ (e) => setNome(e.target.value)}
          type = "text"
          placeholder = "nome"
        />
        <br />
        <input
          value = { cognome }
          onChange={ (e) => setCognome(e.target.value)}
          type = "text"
          placeholder = "cognome"
        />
        <br />
        <input
          value = { telefono }
          onChange={ (e) => setTelefono(e.target.value)}
          type = "text"
          placeholder = "telefono"
        />
        <br />
        <input
          value = { dataNascita }
          onChange={ (e) => setDataNascita(e.target.value)}
          type = "text"
          placeholder = "dataNascita"
        />
        <br />
        <input type = "submit" value = "registrati" />
      </form>
    </div>
  );
}

export default SignUp;