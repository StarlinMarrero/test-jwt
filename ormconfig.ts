export default {

    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Admin",
    database: "testauth",
    entities: [
       "./src/entities/*.ts"
    ],
    migrations: [
        "./src/migration/*.ts"
    ],
    cli: {
       
        migrationsDir: "./src/migration",
        
    }
}