module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      id:String,
      name: String,
      type: String,
      password: String,
      email: String,
    }
  );

  const user = mongoose.model("user", schema);
  return user;
};
