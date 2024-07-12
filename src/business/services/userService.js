// src/business/services/userService.js
import {
  createUser,
  editBio,
  editUsername,
  editEmail,
} from "../../data/repositories/userRepository.js";

const addUser = async (userData) => {
  if (!userData.username || !userData.email || !userData.password) {
    throw new Error("Username, email, and password are required");
  }

  if (!validateEmail(userData.email)) {
    throw new Error("Invalid email format");
  }

  if (userData.password.length < 8) {
    throw new Error("Password must be at least 8 characters long");
  }

  return await createUser(userData);
};

const changeBio = async (userId, bioText) => {
  if (!userId) {
    throw new Error("Invalid user ID");
  }

  if (typeof bioText !== "string" || bioText.trim() === "") {
    throw new Error("Invalid bio text");
  }

  return await editBio(userId, bioText);
};

const changeUsername = async (userId, username) => {
  if (!userId) {
    throw new Error("Invalid user ID");
  }

  if (typeof username !== "string" || username.trim() === "") {
    throw new Error("Invalid username");
  }

  return await editUsername(userId, username);
};

const changeEmail = async (userId, email) => {
  if (!userId) {
    throw new Error("Invalid user ID");
  }

  if (typeof email !== "string" || email.trim() === "") {
    throw new Error("Invalid email");
  }

  if (!validateEmail(email)) {
    throw new Error("Invalid email format");
  }

  return await editEmail(userId, email);
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export { addUser, changeBio, changeUsername, changeEmail };
