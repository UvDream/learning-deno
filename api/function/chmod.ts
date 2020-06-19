/**
 * @description: 更改指定路径的特定文件/目录的权限
 * @param {type} filePath,mode
 * @return: Promise
 */
await Deno.chmod("C:\\Users\\91390\\Desktop\\2222\\index.exe", 0o000);
