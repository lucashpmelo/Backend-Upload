'use strict';

const repository = require('../repositories/post-repository');

const fs = require('fs');

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

// exports.post = async (req, res) => {
//     try {
//         const post = await repository.create({
//             name: req.file.originalname,
//             size: req.file.size,
//             key: req.file.filename,
//             url: '',
//         });

//         res.status(201).send(post);
//     } catch (e) {
//         res.status(500).send({
//             message: 'Falha ao processar sua requisição'
//         });
//     }
// };

exports.post = async (req, res) => {
    try {
        const resultado = req.body.result.split(/\s*,\s*/);

        fs.writeFile('teste.jpeg', resultado[1], { encoding: 'base64' }, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('file criado');
            }
        });

        const post = await repository.create({
            name: req.body.name,
            result: req.body.result,
            filetype: req.body.filetype,
            src: req.body.src
        });

        res.status(201).send(post);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async (req, res) => {
    try {
        const post = await repository.update(req);

        res.status(200).send(post);
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