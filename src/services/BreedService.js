const db = require('../db');

module.exports = {
    findAll: () =>{
        return new Promise((res, rej) =>{

            db.query('SELECT * FROM BREED', (error, results)=>{
                if(error){rej(error); return;}
                res(results);
            });
        
        });
    },

    findById: (id) =>{
        return new Promise((res, rej) =>{            
            db.query(`SELECT * FROM BREED WHERE ID = ${id}`, (error, results)=>{
                if(error){rej(error); return;}
                res(results);                 
            });
        
        });
    },

    insert: (breed) =>{
        return new Promise((res, rej) =>{            
            db.query(`INSERT INTO BREED (BreedName) VALUES ('${breed.BreedName}')`, (error, results)=>{

                if(error){rej(error); return;}
                res(results.insertId);                 
            });
        
        });
    },

    update: (id, breed) =>{
        return new Promise((res, rej) =>{            
            db.query(`UPDATE BREED SET BreedName = ('${breed.BreedName}') WHERE ID = ${id}`, (error, results)=>{

                if(error){rej(error); return;}
                res(results);                 
            });
        
        });
    },

    delete: (id) =>{
        return new Promise((res, rej) =>{            
            db.query(`DELETE FROM BREED WHERE ID = ${id}`, (error, results)=>{
                if(error){rej(error); return;}
                res(results);                 
            });
        
        });
    },
};