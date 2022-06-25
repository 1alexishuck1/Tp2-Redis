let redis = require('redis');
let express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
let port = 4000;

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

let redisClient = redis.createClient(6379, "redis"); 

app.set('port', port);


app.listen(app.get('port'), (err) =>{
    console.log(`Server running on port ${app.get('port')}`);
})


redisClient.on('connect', () =>{
    console.log('Conectado a Redis Server.');
})

redisClient.on('error', (err) =>{
    console.log(err);
})


redisClient.set("key6", "hola mundo1");
redisClient.set("key7", "hola mundo2");
redisClient.set("key8", "hola mundo3");
redisClient.set("key9", "hola mundo4");

redisClient.get("key6", (err, value)=>{
    console.log(value);
});


redisClient.set("list1",["val1", "val2", "val3", "val4"]);

redisClient.lrange("list1", 0, -1, (err, values)=>{
    console.log(values);
});


redisClient.lpush("I","luke", "yoda", "han solo", "chewbacca", redis.print);

redisClient.lrange("I", 0, -1, (err, values)=>{
    console.log(values)
    for(let i in values){
        console.log(values[i]);   
    }
})

redisClient.set(["personaje1",30])

redisClient.get("personaje1", (err, value)=>{
    console.log(value);
});

redisClient.del("personaje1", (err, value)=>{
    console.log("Personaje1 eliminado")
})


const PostPersonajes = (req,res, next) =>{
    try {
        let {nombrePersonaje, nroEpisodio} = req.body;
    

        redisClient.lpush(nroEpisodio, [nombrePersonaje]);

        
        res.send("Personaje agregado")
        
        

    } catch (error) {
        next(error);
    }
}

const GetPersonajes = (req,res, next) =>{
    try {
        let {nroEpisodio} = req.params;

        redisClient.lrange(nroEpisodio, 0, -1, (err, values)=>{
            res.send(JSON.stringify(values))
        })
        

    } catch (error) {
        next(error);
    }
}

const DeletePersonaje = (req, res, next) =>{
    try {
        let {nombrePersonaje, nroEpisodio} = req.params;

        redisClient.lrem(nroEpisodio, 1, nombrePersonaje, (err, values)=>{
            res.send("Personaje eliminado.")
        })
        

    } catch (error) {
        next(error);
    }
}


app.post('/agregarpersonajes', PostPersonajes)
app.get('/listarpersonajes/:nroEpisodio', GetPersonajes)
app.delete('/eliminarpersonaje/:nroEpisodio/:nombrePersonaje', DeletePersonaje)





