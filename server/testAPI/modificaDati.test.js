const request = require('supertest');
const app = require('../server');


//PERSONA

//MODIFICA EMAIL
describe('PATCH /api/modifica/email/persona', () => {

    test('given a new email attribute and a correctly logged in user "persona", it should change the email attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/email/persona').set(`x-access-token`, token).send(modificaEmail)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("email modificata")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/email/persona').send(modificaEmail)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/email/persona').set(`x-access-token`, token).send(modificaEmail)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
})    


//MODIFICA PASSWORD
describe('PATCH /api/modifica/password/persona', () => {

    test('given a new password attribute and a correctly logged in user "persona", it should change the password attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/password/persona').set(`x-access-token`, token).send(modificaPassword)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("password modificata")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/password/persona').send(modificaPassword)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/password/persona').set(`x-access-token`, token).send(modificaPassword)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
})    


//MODIFICA TELEFONO
describe('PATCH /api/modifica/telefono/persona', () => {

    test('given a new "telefono" attribute and a correctly logged in user "persona", it should change the "telefono" attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/telefono/persona').set(`x-access-token`, token).send(modificaTelefono)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("telefono modificato")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/telefono/persona').send(modificaTelefono)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/telefono/persona').set(`x-access-token`, token).send(modificaTelefono)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
})    


//MODIFICA NOME
describe('PATCH /api/modifica/nome', () => {

    test('given a new "nome" attribute and a correctly logged in user "persona", it should change the "nome" attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaNome = {
            nome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/nome').set(`x-access-token`, token).send(modificaNome)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("nome modificato")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaNome = {
            nome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/nome').send(modificaNome)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaNome = {
            nome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/nome').set(`x-access-token`, token).send(modificaNome)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
}) 


//MODIFICA COGNOME
describe('PATCH /api/modifica/cognome', () => {

    test('given a new "cognome" attribute and a correctly logged in user "persona", it should change the "cognome" attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaCognome = {
            cognome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/cognome').set(`x-access-token`, token).send(modificaCognome)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("cognome modificato")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaCognome = {
            cognome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/cognome').send(modificaCognome)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaCognome = {
            cognome: "prova"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/cognome').set(`x-access-token`, token).send(modificaCognome)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
}) 


//MODIFICA DATA DI NASCITA
describe('PATCH /api/modifica/dataNascita', () => {

    test('given a new "dataNascita" attribute and a correctly logged in user "persona", it should change the "dataNascita" attribute and return status 200', async () => {
        
        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaDataNascita = {
            dataNascita: "10/10/1999"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/dataNascita').set(`x-access-token`, token).send(modificaDataNascita)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("data di nascita modificata")

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with non-existing token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaDataNascita = {
            dataNascita: "10/10/1999"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/dataNascita').send(modificaDataNascita)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`)
    })

    test('given a user "persona" with incorrect token, it should return status 403', async () => {

        let personaTest = {
            email: "testPersona@test.it",
            password: "testPersona",
            nome: "test",
            cognome: "test",
            telefono: 1,
            dataNascita: "01/01/2000"
        }

        let loginTest = {
            email: "testPersona@test.it",
            password: "testPersona"
        }

        let modificaDataNascita = {
            dataNascita: "10/10/1999"
        }

        const registrazione = await request(app).post('/api/persona/register').send(personaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/dataNascita').set(`x-access-token`, token).send(modificaDataNascita)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.persona._id
        await request(app).delete(`/api/persona/${id}`);
    })
}) 


//ATTIVITA

describe('PATCH /api/modifica/email/attivita', () => {

    test('given a new email attribute and a correctly logged in user "attivita", it should change the email attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/email/attivita').set(`x-access-token`, token).send(modificaEmail)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("email modificata")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/email/attivita').send(modificaEmail)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaEmail = {
            email: "modificaEmail@test.it"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/email/attivita').set(`x-access-token`, token).send(modificaEmail)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA PASSWORD
describe('PATCH /api/modifica/password/attivita', () => {

    test('given a new password attribute and a correctly logged in user "attivita", it should change the password attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/password/attivita').set(`x-access-token`, token).send(modificaPassword)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("password modificata")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/password/attivita').send(modificaPassword)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPassword = {
            password: "passwordModificata"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/password/attivita').set(`x-access-token`, token).send(modificaPassword)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA TELEFONO
describe('PATCH /api/modifica/telefono/attivita', () => {

    test('given a new "telefono" attribute and a correctly logged in user "attivita", it should change the "telefono" attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/telefono/attivita').set(`x-access-token`, token).send(modificaTelefono)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("telefono modificato")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/telefono/attivita').send(modificaTelefono)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaTelefono = {
            telefono: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/telefono/attivita').set(`x-access-token`, token).send(modificaTelefono)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA NOME ATTIVITA
describe('PATCH /api/modifica/nomeAttivita', () => {

    test('given a new "nomeAttivita" attribute and a correctly logged in user "attivita", it should change the "nomeAttivita" attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaNomeAttivita = {
            nomeAttivita: "prova"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/nomeAttivita').set(`x-access-token`, token).send(modificaNomeAttivita)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("nome attivita modificato")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaNomeAttivita = {
            nomeAttivita: "prova"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/nomeAttivita').send(modificaNomeAttivita)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaNomeAttivita = {
            nomeAttivita: "prova"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/nomeAttivita').set(`x-access-token`, token).send(modificaNomeAttivita)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA INDIRIZZO
describe('PATCH /api/modifica/indirizzo', () => {

    test('given a new "indirizzo" attribute and a correctly logged in user "attivita", it should change the "indirizzo" attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIndirizzo = {
            indirizzo: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/indirizzo').set(`x-access-token`, token).send(modificaIndirizzo)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("indirizzo modificato")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIndirizzo = {
            indirizzo: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/indirizzo').send(modificaIndirizzo)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIndirizzo = {
            indirizzo: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/indirizzo').set(`x-access-token`, token).send(modificaIndirizzo)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA PARTITA IVA
describe('PATCH /api/modifica/partitaIVA', () => {

    test('given a new "partitaIVA" attribute and a correctly logged in user "attivita", it should change the "partitaIVA" attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPartitaIVA= {
            partitaIVA: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/partitaIVA').set(`x-access-token`, token).send(modificaPartitaIVA)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("partita iva modificata")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPartitaIVA= {
            partitaIVA: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/partitaIVA').send(modificaPartitaIVA)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaPartitaIVA= {
            partitaIVA: 2
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/partitaIVA').set(`x-access-token`, token).send(modificaPartitaIVA)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  


//MODIFICA IBAN
describe('PATCH /api/modifica/iban', () => {

    test('given a new "iban" attribute and a correctly logged in user "attivita", it should change the "iban" attribute and return status 200', async () => {
        
        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIban = {
            iban: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        let token = login.body.token;

        const response = await request(app).patch('/api/modifica/iban').set(`x-access-token`, token).send(modificaIban)

        expect(response.status).toBe(200);
        expect(response.body.auth).toBe(true);
        expect(response.body.message).toBe("iban modificato")

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with non-existing token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIban = {
            iban: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest)
        console.log(login.body)

        const response = await request(app).patch('/api/modifica/iban').send(modificaIban)
        
        expect(response.status).toBe(403);
        expect(response.body.errormessage).toBe("Token assente")

        // rimuovo l'evento creato in fase di testing 
        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`)
    })

    test('given a user "attivita" with incorrect token, it should return status 403', async () => {

        let attivitaTest = {
            email: "testAttivita@test.it",
            password: "testAttivita",
            nomeAttivita: "test",
            indirizzo: "test",
            telefono: 1,
            partitaIVA: 1,
            iban: "1"
        }

        let loginTest = {
            email: "testAttivita@test.it",
            password: "testAttivita"
        }

        let modificaIban = {
            iban: "2"
        }

        const registrazione = await request(app).post('/api/attivita/register').send(attivitaTest)
        console.log(registrazione.body)

        const login = await request(app).post('/api/login').send(loginTest);
        console.log(login.body)

        let token = "errore";

        const response = await request(app).patch('/api/modifica/iban').set(`x-access-token`, token).send(modificaIban)
        
        expect(response.status).toBe(403);
        expect(response.body.message).toBe("Unauthorized access");

        let id = registrazione.body.attivita._id
        await request(app).delete(`/api/attivita/${id}`);
    })
})  