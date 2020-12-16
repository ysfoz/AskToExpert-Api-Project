const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Please try another Email"],
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please provide a valid Email",
    ],
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    minlength: [6, "Please enter a valid Password"],
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  about: {
    type: String,
  },
  place: {
    type: String,
  },
  website: {
    type: String,
  },
  prfile_img: {
    type: String,
    default: "default.jpg",
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});
// mongoose un pre ve post hooks , database e veri gondermeden once ve gonderdikten 
//sonra yapilmasi istenilen islemeler icin kullanilir. biz burada  passwordu sifrelemek icin kullandik.
// bus islemi authcontroller icerisinde de yapabilirdik.
UserSchema.pre("save", function (next) {
    if(!this.isModified('password')){ // diger bilgiler guncellenebilir, eger parola degismemisse, tekrar sifreleme yapmayacak
        next()
    }
  bcrypt.genSalt(10, (err, salt) => {
    console.log(salt);
    if (err) next(err);
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) next(err);
      this.password = hash;
      console.log(this);
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
