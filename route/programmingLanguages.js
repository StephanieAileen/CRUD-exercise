const express = require('express');
const router = express.router();
const programmingLanguages = require ('../services/programmingLanguages');

router.get('/', async function (req, res, next) {
    try {
        res.json (await programmingLanguages.read(req.query.page));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json (await programmingLanguages.create(req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.put('/', async function (req, res, next) {
    try {
        res.json (await programmingLanguages.update(req.body.id, req.body));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});

router.delete('/', async function (req, res, next) {
    try {
        res.json (await programmingLanguages.eliminar(req.query.id));
    } catch (err) {
        console.error("Este es el error: " + err.message);
        next(err);
    }
});


module.exports = router;
