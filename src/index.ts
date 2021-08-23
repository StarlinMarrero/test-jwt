import app from './app';
import { connectionDB } from './database';


app.listen(4000, () => {

    console.log("server on running on port 4000");
    
})

connectionDB();