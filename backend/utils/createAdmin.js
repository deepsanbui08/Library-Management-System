const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { UserSchema } = require("../model/UserModel");

const User = mongoose.model("User", UserSchema);

const createDefaultAdmin = async () => {
  try {
    const adminEmail = "admin@gmail.com";

    // 🔍 Check if admin already exists
    const existingAdmin = await User.findOne({ email: adminEmail });

    if (existingAdmin) {
      console.log("✅ Admin already exists");
      return;
    }

    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // 🧑‍💼 Create admin
    const admin = new User({
      name: "Admin",
      email: adminEmail,
      password: hashedPassword,
      role: "admin"
    });

    await admin.save();

    console.log("🔥 Default Admin Created");
    console.log("📧 Email: admin@gmail.com");
    console.log("🔑 Password: admin123");

  } catch (error) {
    console.error("❌ Error creating admin:", error);
  }
};

module.exports = createDefaultAdmin;