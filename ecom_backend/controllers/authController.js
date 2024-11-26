


exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log(`${email} just logged in at ${new Date()}`);

    res.json({
      token,
      email: user.email,
      profilePicture: user.profilePicture,
      role: user.role,
      id: user._id,
      username: user.username,
      shift: user.shift,
      department: user.department,
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
};