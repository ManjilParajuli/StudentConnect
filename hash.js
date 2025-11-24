// hash.js
import bcrypt from 'bcryptjs';

const password = "admin123";
bcrypt.hash(password, 10, (err, hash) => {
  if (err) console.log(err);
  else console.log("Yeh wala hash use karo →", hash);
});