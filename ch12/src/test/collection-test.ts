import { connect } from '../mongodb/connect'

const makeCollectionsTest = async() => {
    let connection
    try {
        connection = await connect();
        const db = await connection.db('ch12-2');
        const personsCollection = db.collection('persons');
        const addressesConllection = db.collection('addresses');
        console.log(personsCollection, addressesConllection);
    } catch(e:any) {
        console.log(e.message)
    } finally {
        connection.close()
    }
}

makeCollectionsTest();