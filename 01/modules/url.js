const url = require("url");

const myUrl = new URL(
  "https://example.com:3000/users/user.html?id=23&name=Javlon"
);

// Href (url manzili)
console.log(myUrl.href);

// host (domain:post)
console.log(myUrl.host);

// hostname (domain)
console.log(myUrl.hostname);

// pathname (qaysi faylga murojat qilyotganimiz)
console.log(myUrl.pathname);

// search (parametrlar) -> str
console.log(myUrl.search);

// searchParams (parametrlar) -> obj
console.log(myUrl.searchParams);

// searchParams.append() (yangi parametr va qiymat qo'shish)
myUrl.searchParams.append("age", 21);
console.log(myUrl.searchParams);
console.log(myUrl.search);

// searchParams.forEach (qaytgan Objectni aylanish)
myUrl.searchParams.forEach((value, key) => console.log(`${key}:${value}`));
