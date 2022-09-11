import {connect} from '../mongodb/connect'

const connectTest = async() => {
  let connection
  try {
    connection = await connect()
    console.log('connection OK.', connection)
  } catch(e:any) {
    console.log(e.message)
  } finally {
    connection.close()
  }  
}

connectTest()


// const connectTest = () => {
//     console.log('hey2');
//     try {
//         // 4. 연결 실패
//         connection.on('error', function(){
//             console.log('Connection Failed!');
//         });
//         // 5. 연결 성공
//         connection.once('open', function() {
//             console.log('Connected!');
//         });
//         console.log('connection OK.', connection);
//     } catch(e: any) {
//         console.log(e.message);
//     } finally {
//         connection.close();
//     }
// }
// // console.log(connection);

// connectTest();