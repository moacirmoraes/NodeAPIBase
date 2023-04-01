const BreedService = require('../services/BreedService');

module.exports = {
    findAll: async (req, res)=> {
        let breed = await BreedService.findAll();

        res.json(breed);
    },

    findById: async (req, res)=> {
        let breed = await BreedService.findById(req.params.id);

        if(breed.length > 0)
            res.json(breed);
        else
            res.status(400).json({'error':'Registro não encontrado'});
    },

    insert: async (req, res)=> {
        if(Object.keys(req.body).length != 0)
        {
            let breed = await BreedService.insert(req.body);
            res.json(breed);
        }   
        else
        {
            //res.statusMessage = "Registro não encontrado";
            res.status(400).json({'error':'Informar dados para criação'});
        }
    },

    update: async (req, res)=> {
        if(Object.keys(req.body).length != 0)
        {
            let breed = await BreedService.update(req.params.id, req.body);
            res.json(breed);
        }   
        else
            res.status(400).json({'error':'Informar dados para atualização'});
    },

    delete: async (req, res)=> {

        let breed = await BreedService.findById(req.params.id);

        if(breed.length > 0)
        {
            await BreedService.delete(req.params.id);                
            res.status(200).json({'success':'Registro excluído'});
        }                
        else
            res.status(400).json({'error':'Registro não encontrado'});
    },
}