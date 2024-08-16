const express = require("express");
const { check } = require("express-validator");
const checkAuth = require("../middleware/check-auth");

const placesControllers = require("../controllers/places-controllers");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById); // we dont execute the funtions here we just point at them express executes them when a request reaches the given route

router.get("/user/:uid", placesControllers.getPlacesByUserId);

router.use(checkAuth);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  placesControllers.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  placesControllers.updatePlace
); // doesnt clash with get('/:pid) as it has different method

router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
