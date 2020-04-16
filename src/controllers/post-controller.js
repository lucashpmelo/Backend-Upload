'use strict';

const repository = require('../repositories/post-repository');

exports.get = async (req, res) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.post = async (req, res) => {
    console.log('Aqui');
    try {
        const post = await repository.create({
            name: req.file.originalname,
            size: req.file.size,
            key: req.file.filename,
            url: '',
        });

        res.status(201).send(post);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async (req, res) => {
    try {
        await repository.delete(req.params.id);
        res.status(200).send();
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};