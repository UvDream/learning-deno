/**
 * @description: 读取文件的全部内容并将其解析为字节数组
 * @param {type} filePath
 * @return: array
 */
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("./user.json");
console.log(decoder.decode(data));
