const express = require('express')
const shirtRouter = express.Router()
const shirts = require('../models/shirt')

//GET/POST routes from '/'
shirtRouter.route('/')
    .get((req, res) => {
        console.log(req.query)
        if(req.query.color){
            shirts.find({ color: req.query.color }, (err, shirt) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(shirt)
            })
        }else {
            shirts.find((err, shirt) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(shirt)
            })
        }
    })
    .post((req, res) => {
        const newShirt = new shirts(req.body)
        newShirt.save((err, newSavedShirt) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(newSavedShirt)
        })
    })

//Query for receiving filtered Data


//GET, DELETE, PUT requests that will use route/ID
shirtRouter.route('/:id')
    .get((req, res) => {
        shirts.findById(req.params.id, (err, foundShirt) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(foundShirt)
        })
    })
    .delete((req, res) => {
        shirts.findOneAndRemove(
            { _id: req.params.id },
            (err, deletedShirt) => {
                if(err) return res.status(500).send(err)
                return res.status(204).send(deletedShirt)
            }
        )
    })
    .put((req, res) => {
        shirts.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true },
            (err, updatedShirt) => {
                if(err) return res.status(500).send(err)
                return res.status(201).send(updatedShirt)
            }
        )
    })

module.exports = shirtRouter