import pg from 'pg';
const { Client }= pg;


const config={
    user: 'db_cine_user',
    host: 'dpg-cqsmhjdumphs73c1ord0-a.oregon-postgres.render.com',
    database: 'db_cine',
    password: 'DYjI59OSB73eQnh7JTQLBiFa6BItjLfe',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}

export async function Conectar() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        console.log("Conectado a la base de datos")
    }catch(error){
        console.log(error)
    }
}

export async function TraerPeliculas() {
    const cliente= new Client(config)
    try{
        await cliente.connect()
        const res= await cliente.query('SELECT * FROM peliculas')
        return res.rows
    }catch(error){
        console.log(error)
    }
}