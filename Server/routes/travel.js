const { update } = require("lodash");
const { Travel, handleTravelValidation } = require("../models/travel");
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();


//get travels
router.get('/', async (req, res) => {
    const travels = await Travel.find();
    res.send(travels);
});

//get travel by id
router.get('/:id', async (req, res) => {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
        return res.status(404).send("Travel not found");
    }
    res.send(travel);
})

//add travel
router.post('/', upload.single('coverImg'), async (req, res) => {
    const { error } = handleTravelValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).send(errorMsg);
    }

    if (!req.file) {
        res.status(400).send("Travel cover img is required");
    }

    let travel = new Travel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        duration: req.body.duration,
        reservations: req.body.reservations,
        coverImg: req.file.path,
    });

    try {
        travel = await travel.save();
        res.status(201).send(travel);
    } catch (error) {
        res.status(500).send('Error occurred');
    }
});

//update travel
router.put('/:id', upload.single('coverImg'), async (req, res) => {
    const { error } = handleTravelValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).send(errorMsg);
    }
    let travel = await Travel.findById(req.params.id);
    if (!travel)
        return res.status(404).send('Travel not found');

    const updatedData = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        duration: req.body.duration,
        reservations: req.body.reservations,
    }
    if (req.file)
        updatedData.coverImg = req.file.path;

    travel = await Travel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(travel);
});

//delete travel
router.delete('/:id', async (req, res) => {
    const travel = await Travel.findByIdAndDelete(req.params.id);
    console.log(travel);
    if (!travel)
        return res.status(404).send('Travel not found');
    return res.status(200).send(travel);
})

module.exports = router;

// var upload = multer();

// app.post('/projects', upload.array('uploadedImages', 10), function(req, res, err) {
//   if (err) {
//     console.log('error');
//     console.log(err);
//   }
//   var file = req.files;
//   res.end();
//   console.log(req.files);
// });