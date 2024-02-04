import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin user",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Jane doe",
    email: "jane@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Sourabh shrivastava",
    email: "sourabh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
export default users;
