/**
 * @description: 同步更改常规文件或目录的所有者. 该功能在Windows上不可用.
 * @param {type} 
 * @return: 
 */
await Deno.chownSync("./data.json", 1000, 1002);
