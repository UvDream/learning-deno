/**
 * @description: 同步打开文件并返回Deno.File的实例。 如果使用create或createNew打开选项，则该文件以前不需要存在。 完成文件后，调用者有责任关闭文件。
 * @param {type} path,options
 * @return: 同步返回File
 */
// export function openSync(path: string, options?: OpenOptions): File;
const file = Deno.openSync("./data.json", { read: true, write: true });
console.log(file);
Deno.close(file.rid);
