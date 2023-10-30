const path = require("path");

// Basename (fayl nomi)
console.log(path.basename(__filename));

// Dirname (papka nomini qaytaradi to'liq path bilan birga)
console.log(path.dirname(__filename));

// ExName (fayl extention ni qaytaradi: .js)
console.log(path.extname(__filename));

// Parse hamma malumotni obj qilib olish
const pathObj = path.parse(__filename);
console.log(pathObj);

// Join fayl yoki papkaga yo'lni yaratish uchun
console.log(path.join(__dirname, "database", "mongodb", "db.js"));

/*
// #1
console.log(__dirname);
console.log(__filename);
*/
