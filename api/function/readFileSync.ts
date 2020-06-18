/**
 * @description: readFileSync
 * @param {type} filePath
 * @return: Array
 */
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFileSync("./data.json");
console.log(data);
console.log(decoder.decode(data));
