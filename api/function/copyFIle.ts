/**
 * @description: 将一个文件的内容和权限复制到另一个指定的路径，默认情况下根据需要创建一个新文件，否则覆盖。 如果目标路径是目录或不可写，则失败。
 * @param {type} 
 * @return: 
 */
await Deno.copyFile("./data.json", "./data_copy.txt");
