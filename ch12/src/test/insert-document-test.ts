import {connect} from '../mongodb/connect'


const insertDocumentTest = async() =>{
    let connection, cursor
    try {
        connection = await connect();
        const db = await connection.db('ch12-2');
        const personsCollection = db.collection('persons');
        const addressesCollection = db.collection('addresses');

        const person = { name:'Jack', age: 32 };
        let result = await personsCollection.insertOne(person)
        console.log(result);
        
        const address = { contry: 'korea', city: 'seoul'}
        result = await addressesCollection.insertOne(address);
        console.log(result);


    } catch(e:any){
        console.log(e.message);
    } finally {
        connection.close();
    }
}

insertDocumentTest();