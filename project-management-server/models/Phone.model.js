const { Schema, model } = require("mongoose");
/*  "id": 0,
      "name": "iPhone 7",
      "manufacturer": "Apple",
      "description": "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
      "color": "black",
      "price": 769,
      "imageFileName": "IPhone_7.png",
      "screen": "4,7 inch IPS",
      "processor": "A10 Fusion",
      "ram": 2 */
// TODO: Please make sure you edit the User model to whatever makes sense in this case
const phoneSchema = new Schema(
  {
    id: {
      type: String,
      required: [true, "Name is required."],
      trim: true,
    },
    alcohol: {
      type: Number,
    },
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Phone = model("Phone", beerSchema);

module.exports = Phone;
