/**
 * @description: 从src复制到dst，直到从src读取EOF（null）或发生错误。 它解析为已复制的字节数，或者在复制时遇到第一个错误时被拒绝
 * @param {type} 
 * @return: 
 */
const source = await Deno.open("./data.json");
const buffer = new Deno.Buffer();
const bytesCopied1 = await Deno.copy(source, Deno.stdout);
const bytesCopied2 = await Deno.copy(source, buffer);
Deno.close(source.rid);
// console.log(bytesCopied1);
// console.log(bytesCopied2);
