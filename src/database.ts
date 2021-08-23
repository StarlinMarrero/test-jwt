import { createConnection } from 'typeorm';


export const connectionDB = async () => {

    await createConnection();
   
}