const ex= require("express");
const course = require("../models/course");

const router = ex.Router();

router.get ("/allcourses", async (req, res) => {
    try {
    const courses = await course.find();
    res.json(courses);
    } catch(err) {
        res.json(err);
    }
});


router.post("/",async(req,res) => {
    try{
        course.create(req.body);
    } catch (course) {
        res.json(err)
    }
})




module.exports = router;