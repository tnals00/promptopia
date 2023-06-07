import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

//이미 models에 user가 있는지 확인하고 없을 경우에만 model을 생성
const User = models.User || model("User", UserSchema);

export default User;
