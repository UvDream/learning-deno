// TextDecoder 特定解码器
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./user.json");
console.log(decoder.decode(data));
const file = await Deno.readFileSync("./user.json");
console.log(decoder.decode(file));
