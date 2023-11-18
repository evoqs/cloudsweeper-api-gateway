module.exports = mongoose => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        user: String,
        password: String
      },
      { timestamps: true }
    )
  );
  return User;
};