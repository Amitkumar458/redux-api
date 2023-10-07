const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    connectionString : "postgres://default:l8ZxLOt2ajMq@ep-crimson-silence-98925606-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb" + "?sslmode=require",
});

pool.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("connected successfully");
    }
});

module.exports = pool;