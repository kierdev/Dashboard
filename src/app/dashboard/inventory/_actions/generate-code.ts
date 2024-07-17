export const generateCode = () => {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "#";

  for (let i = 0; i < 8; i++) {
    let charIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(charIndex);
  }

  return code;
};
