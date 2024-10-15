const { update } = require("lodash");
const { Travel, handleTravelValidation } = require("../models/travel");
const upload = require('../routes/image_uploader');
const express = require("express");
const router = express.Router();

// routes for dashboard
router.get('/new', async (req, res) => {
    res.render('add_travel', { errors: [], travel: {} });
});

router.get('/:id/edit', async (req, res) => {
    try {
        const travel = await Travel.findById(req.params.id);    
        if (!travel) {
            return res.status(404).send("Travel Not Found");
        }
        res.render('edit_travel', {errors: [], travel: travel})
    } catch (error) {
        res.status(500).send(error);
    }
})

//get travels
router.get('/', async (req, res) => {
    const travels = await Travel.find();
    res.render("travel", { travels });
});

//get travel by id
router.get('/:id', async (req, res) => {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
        return res.status(404).send("Travel not found");
    }
    res.render("view_travel", {travel});
})

//add travel
router.post('/', upload.single('coverImg'), async (req, res) => {
    const { error } = handleTravelValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).render("add_travel", {errors: errorMsg, travel: req.body});
    }

    if (!req.file) {
        res.status(400).send("Travel cover img is required");
    }

    const travelImgPath = req.file.path;

    let travel = new Travel({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        duration: req.body.duration,
        reservations: req.body.reservations,
        maxGuest: req.body.maxGuest,
        minAge: req.body.minAge,
        travelType: req.body.travelType,
        location: req.body.location,
        discount: req.body.discount,
        coverImg: travelImgPath,
    });

    try {
        travel = await travel.save();
        res.status(201).redirect("/travel");
    } catch (error) {
        res.status(500).send(error);
    }
});

//update travel
router.put('/:id', upload.single('coverImg'), async (req, res) => {
    const { error } = handleTravelValidation(req.body);
    if (error) {
        const errorMsg = error.details.map((error) => error.message);
        return res.status(400).render('edit_travel', {errors: errorMsg, travel: req.body});
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
        maxGuest: req.body.maxGuest,
        minAge: req.body.minAge,
        travelType: req.body.travelType,
        location: req.body.location,
        discount: req.body.discount,
    }
    if (req.file)
        updatedData.coverImg = req.file.path;

    travel = await Travel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.status(200).send(travel);
});

//delete travel
router.delete('/:id', async (req, res) => {
    try {
        const travel = await Travel.findByIdAndDelete(req.params.id);
        console.log(travel);
        if (!travel)
            return res.status(404).send('Travel not found');
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).send('Error occurred during deletion');
    }
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