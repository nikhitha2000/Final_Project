const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Sign-up logic
exports.signup = async (req, res) => {
  const { name, phonenumber, email, password } = req.body;

  if (!name || !phonenumber || !email || !password) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Phone number validation
  const phoneRegex = /^[6789]\d{9}$/;
  if (!phoneRegex.test(phonenumber)) {
    return res.status(400).json({
      message: 'Phone number must start with 6, 7, 8, or 9 and be 10 digits long.',
    });
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password.trim(), salt);

    const newUser = new User({
      name,
      phonenumber,
      email: email.toLowerCase(),
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again' });
  }
};

// Sign-in logic
exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const normalizedEmail = email.toLowerCase();
  const trimmedPassword = password.trim();

  try {
    console.log(`Attempting to sign in with email: ${normalizedEmail}`);
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    console.log('User found:', user);

    const isMatch = await bcrypt.compare(trimmedPassword, user.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    console.log('Password matches');

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error, please try again' });
  }
};