/**
 * @description: 打开一个文件，然后解析为Deno.File的实例。 如果使用create或createNew打开选项，则该文件以前不需要存在。 完成文件后，调用者有责任关闭文件。
 * @param {type} path,options
 * @return: 异步返回File
 */
// export function open(path: string, options?: OpenOptions): Promise<File>;
const file = await Deno.open("./data.json", { read: true, write: true });
console.log(file);
Deno.close(file.rid);
