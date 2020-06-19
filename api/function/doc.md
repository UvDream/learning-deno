# chdir

## 参数

```
function Deno.chdir(directory: string): void
```

## 功能描述

将当前工作目录更改为指定的路径。

## 示例

```
Deno.chdir("/home/userA");
Deno.chdir("../userB");
Deno.chdir("C:\\Program Files (x86)\\Java");
```

如果找不到目录，则抛出该异常。 如果用户没有访问权限，则抛出该异常。`Deno.errors.NotFoundDeno.errors.PermissionDenied`

## 权限

```
--allow-read.
```

# chmod

## 参数说明

```
function Deno.chmod(path: string | URL, mode: number): Promise<void>
```

## 功能描述

更改指定路径的特定文件/目录的权限. Ignores the process's umask.

## 示例

```
await Deno.chmod("/path/to/file", 0o666);
```

该模式是 3 个八进制数字的序列。 第一个/最左边的数字指定所有者的权限。 第二个数字指定该组的权限。 最后/最右边的数字指定其他用户的权限。 例如，在 0o764 模式下，所有者（7）可以读/写/执行，组（6）可以读/写，其他所有人（4）只能读。

| 参数 | 描述         |
| ---- | ------------ |
| 7    | 读, 写, 执行 |
| 6    | 读 , 写      |
| 5    | 读 , 执行    |
| 4    | 只读         |
| 3    | 写 , 执行    |
| 2    | 只写         |
| 1    | 只执行       |
| 0    | 无权限       |

NOTE: This API currently throws on Windows

## 权限

```
--allow-write
```

# chmodSync

```
function Deno.chmodSync(path: string | URL, mode: number): void
```

同步更改指定路径的特定文件/目录的权限. Ignores the process's umask.

## 示例

```
Deno.chmodSync("/path/to/file", 0o666);
```

有关完整说明，请参见 chmod

NOTE: This API currently throws on Windows

## 权限

```
--allow-write
```

# chown

```
function Deno.chown(path: string | URL, uid: number, gid: number): Promise<void>
```

Change owner of a regular file or directory. This functionality is not available on Windows.

await Deno.chown("myFile.txt", 1000, 1002);
Requires permission.allow-write

Throws Error (not implemented) if executed on Windows

param path path to the file

param uid user id (UID) of the new owner

param gid group id (GID) of the new owner

# chownSync

```
function Deno.chownSync(path: string | URL, uid: number, gid: number): void
```

Synchronously change owner of a regular file or directory. This functionality is not available on Windows.

Deno.chownSync("myFile.txt", 1000, 1002);
Requires permission.allow-write

Throws Error (not implemented) if executed on Windows

param path path to the file

param uid user id (UID) of the new owner

param gid group id (GID) of the new owner

# close

```
function Deno.close(rid: number): void
```

Close the given resource ID (rid) which has been previously opened, such as via opening or creating a file. Closing a file when you are finished with it is important to avoid leaking resources.

const file = await Deno.open("my_file.txt");
// do work with "file" object
Deno.close(file.rid);

# connect

```
function Deno.connect(options: ConnectOptions): Promise<Conn>
```

Connects to the hostname (default is "127.0.0.1") and port on the named transport (default is "tcp"), and resolves to the connection ().Conn

const conn1 = await Deno.connect({ port: 80 });
const conn2 = await Deno.connect({ hostname: "192.0.2.1", port: 80 });
const conn3 = await Deno.connect({ hostname: "[2001:db8::1]", port: 80 });
const conn4 = await Deno.connect({ hostname: "golang.org", port: 80, transport: "tcp" });
Requires permission for "tcp".allow-net

# connectTls

```
function Deno.connectTls(options: ConnectTlsOptions): Promise<Conn>
```

Establishes a secure connection over TLS (transport layer security) using an optional cert file, hostname (default is "127.0.0.1") and port. The cert file is optional and if not included Mozilla's root certificates will be used (see also https://github.com/ctz/webpki-roots for specifics)

const conn1 = await Deno.connectTls({ port: 80 });
const conn2 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "192.0.2.1", port: 80 });
const conn3 = await Deno.connectTls({ hostname: "[2001:db8::1]", port: 80 });
const conn4 = await Deno.connectTls({ certFile: "./certs/my_custom_root_CA.pem", hostname: "golang.org", port: 80});
Requires permission.allow-net

# copy

```
function Deno.copy(src: Reader, dst: Writer, options?: { bufSize: number }): Promise<number>
```

Copies from to until either EOF () is read from or an error occurs. It resolves to the number of bytes copied or rejects with the first error encountered while copying.srcdstnullsrc

const source = await Deno.open("my_file.txt");
const buffer = new Deno.Buffer()
const bytesCopied1 = await Deno.copy(source, Deno.stdout);
const bytesCopied2 = await Deno.copy(source, buffer);
param src The source to copy from

param dst The destination to copy to

param options Can be used to tune size of the buffer. Default size is 32kB

# copyFile

```
function Deno.copyFile(fromPath: string | URL, toPath: string | URL): Promise<void>
```

Copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.

await Deno.copyFile("from.txt", "to.txt");
Requires permission on fromPath. Requires permission on toPath.allow-readallow-write

# copyFileSync

```
function Deno.copyFileSync(fromPath: string | URL, toPath: string | URL): void
```

Synchronously copies the contents and permissions of one file to another specified path, by default creating a new file if needed, else overwriting. Fails if target path is a directory or is unwritable.

Deno.copyFileSync("from.txt", "to.txt");
Requires permission on fromPath. Requires permission on toPath.allow-readallow-write

# create

```
function Deno.create(path: string | URL): Promise<File>
```

Creates a file if none exists or truncates an existing file and resolves to an instance of .Deno.File

const file = await Deno.create("/foo/bar.txt");
Requires and permissions.allow-readallow-write

# createSync

```
function Deno.createSync(path: string | URL): File
```

Creates a file if none exists or truncates an existing file and returns an instance of .Deno.File

const file = Deno.createSync("/foo/bar.txt");
Requires and permissions.allow-readallow-write

# cwd

```
function Deno.cwd(): string
```

Return a string representing the current working directory.

If the current directory can be reached via multiple paths (due to symbolic links), may return any one of them.cwd()

const currentWorkingDirectory = Deno.cwd();
Throws if directory not available.Deno.errors.NotFound

Requires --allow-read

# execPath

```
function Deno.execPath(): string
```

Returns the path to the current deno executable.

console.log(Deno.execPath()); // e.g. "/home/alice/.local/bin/deno"
Requires permission.allow-read

# exit

```
function Deno.exit(code?: number): never
```

Exit the Deno process with optional exit code. If no exit code is supplied then Deno will exit with return code of 0.

Deno.exit(5);

# inspect

```
function Deno.inspect(value: unknown, options?: InspectOptions): string
```

Converts the input into a string that has the same format as printed by .console.log()

const obj = {};
obj.propA = 10;
obj.propB = "hello";
const objAsString = Deno.inspect(obj); // { propA: 10, propB: "hello" }
console.log(obj); // prints same value as objAsString, e.g. { propA: 10, propB: "hello" }
You can also register custom inspect functions, via the Deno symbol on objects, to control and customize the output.customInspect

class A {
x = 10;
y = "hello";
[Deno.customInspect](): string {
return "x=" + this.x + ", y=" + this.y;
}
}
const inStringFormat = Deno.inspect(new A()); // "x=10, y=hello"
console.log(inStringFormat); // prints "x=10, y=hello"
Finally, you can also specify the depth to which it will format.

Deno.inspect({a: {b: {c: {d: 'hello'}}}}, {depth: 2}); // { a: { b: [Object] } }

# isatty

```
function Deno.isatty(rid: number): boolean
```

Check if a given resource id () is a TTY.rid

// This example is system and context specific
const nonTTYRid = Deno.openSync("my_file.txt").rid;
const ttyRid = Deno.openSync("/dev/tty6").rid;
console.log(Deno.isatty(nonTTYRid)); // false
console.log(Deno.isatty(ttyRid)); // true
Deno.close(nonTTYRid);
Deno.close(ttyRid);

# iter

```
function Deno.iter(r: Reader, options?: { bufSize: number }): AsyncIterableIterator<Uint8Array>
```

Turns a Reader, , into an async iterator.r

let f = await Deno.open("/etc/passwd");
for await (const chunk of Deno.iter(f)) {
console.log(chunk);
}
f.close();
Second argument can be used to tune size of a buffer. Default size of the buffer is 32kB.

let f = await Deno.open("/etc/passwd");
const iter = Deno.iter(f, {
bufSize: 1024 \* 1024
});
for await (const chunk of iter) {
console.log(chunk);
}
f.close();
Iterator uses an internal buffer of fixed size for efficiency; it returns a view on that buffer on each iteration. It is therefore caller's responsibility to copy contents of the buffer if needed; otherwise the next iteration will overwrite contents of previously returned chunk.

# iterSync

```
function Deno.iterSync(r: ReaderSync, options?: { bufSize: number }): IterableIterator<Uint8Array>
```

Turns a ReaderSync, , into an iterator.r

let f = Deno.openSync("/etc/passwd");
for (const chunk of Deno.iterSync(f)) {
console.log(chunk);
}
f.close();
Second argument can be used to tune size of a buffer. Default size of the buffer is 32kB.

let f = await Deno.open("/etc/passwd");
const iter = Deno.iterSync(f, {
bufSize: 1024 \* 1024
});
for (const chunk of iter) {
console.log(chunk);
}
f.close();
Iterator uses an internal buffer of fixed size for efficiency; it returns a view on that buffer on each iteration. It is therefore caller's responsibility to copy contents of the buffer if needed; otherwise the next iteration will overwrite contents of previously returned chunk.

# listen

```
function Deno.listen(options: ListenOptions & { transport: "tcp" }): Listener
```

Listen announces on the local transport address.

const listener1 = Deno.listen({ port: 80 })
const listener2 = Deno.listen({ hostname: "192.0.2.1", port: 80 })
const listener3 = Deno.listen({ hostname: "[2001:db8::1]", port: 80 });
const listener4 = Deno.listen({ hostname: "golang.org", port: 80, transport: "tcp" });
Requires permission.allow-net

# listenTls

```
function Deno.listenTls(options: ListenTlsOptions): Listener
```

Listen announces on the local transport address over TLS (transport layer security).

const lstnr = Deno.listenTls({ port: 443, certFile: "./server.crt", keyFile: "./server.key" });
Requires permission.allow-net

# lstat

```
function Deno.lstat(path: string | URL): Promise<FileInfo>
```

Resolves to a for the specified . If is a symlink, information for the symlink will be returned instead of what it points to.Deno.FileInfopathpath

import { assert } from "https://deno.land/std/testing/asserts.ts";
const fileInfo = await Deno.lstat("hello.txt");
assert(fileInfo.isFile);
Requires permission.allow-read

# lstatSync

```
function Deno.lstatSync(path: string | URL): FileInfo
```

Synchronously returns a for the specified . If is a symlink, information for the symlink will be returned instead of what it points to..Deno.FileInfopathpath

const fileInfo = Deno.lstatSync("hello.txt");
assert(fileInfo.isFile);
Requires permission.allow-read

# makeTempDir

```
function Deno.makeTempDir(options?: MakeTempOptions): Promise<string>
```

Creates a new temporary directory in the default directory for temporary files (see also ), unless is specified. Other optional options include prefixing and suffixing the directory name with and respectively.Deno.dir("temp")dirprefixsuffix

This call resolves to the full path to the newly created directory.

Multiple programs calling this function simultaneously will create different directories. It is the caller's responsibility to remove the directory when no longer needed.

const tempDirName0 = await Deno.makeTempDir(); // e.g. /tmp/2894ea76
const tempDirName1 = await Deno.makeTempDir({ prefix: 'my_temp' }); // e.g. /tmp/my_temp339c944d
Requires permission.allow-write

# makeTempDirSync

```
function Deno.makeTempDirSync(options?: MakeTempOptions): string
```

Synchronously creates a new temporary directory in the default directory for temporary files (see also ), unless is specified. Other optional options include prefixing and suffixing the directory name with and respectively.Deno.dir("temp")dirprefixsuffix

The full path to the newly created directory is returned.

Multiple programs calling this function simultaneously will create different directories. It is the caller's responsibility to remove the directory when no longer needed.

const tempDirName0 = Deno.makeTempDirSync(); // e.g. /tmp/2894ea76
const tempDirName1 = Deno.makeTempDirSync({ prefix: 'my_temp' }); // e.g. /tmp/my_temp339c944d
Requires permission.allow-write

# makeTempFile

```
function Deno.makeTempFile(options?: MakeTempOptions): Promise<string>
```

Creates a new temporary file in the default directory for temporary files (see also ), unless is specified. Other optional options include prefixing and suffixing the directory name with and respectively.Deno.dir("temp")dirprefixsuffix

This call resolves to the full path to the newly created file.

Multiple programs calling this function simultaneously will create different files. It is the caller's responsibility to remove the file when no longer needed.

const tmpFileName0 = await Deno.makeTempFile(); // e.g. /tmp/419e0bf2
const tmpFileName1 = await Deno.makeTempFile({ prefix: 'my_temp' }); // e.g. /tmp/my_temp754d3098
Requires permission.allow-write

# makeTempFileSync

```
function Deno.makeTempFileSync(options?: MakeTempOptions): string
```

Synchronously creates a new temporary file in the default directory for temporary files (see also ), unless is specified. Other optional options include prefixing and suffixing the directory name with and respectively.Deno.dir("temp")dirprefixsuffix

The full path to the newly created file is returned.

Multiple programs calling this function simultaneously will create different files. It is the caller's responsibility to remove the file when no longer needed.

const tempFileName0 = Deno.makeTempFileSync(); // e.g. /tmp/419e0bf2
const tempFileName1 = Deno.makeTempFileSync({ prefix: 'my_temp' }); // e.g. /tmp/my_temp754d3098
Requires permission.allow-write

# metrics

```
function Deno.metrics(): Metrics
```

Receive metrics from the privileged side of Deno. This is primarily used in the development of Deno. 'Ops', also called 'bindings', are the go-between between Deno JavaScript and Deno Rust.

> console.table(Deno.metrics())
> ┌─────────────────────────┬────────┐
> │ (index) │ Values │
> ├─────────────────────────┼────────┤
> │ opsDispatched │ 3 │
> │ opsDispatchedSync │ 2 │
> │ opsDispatchedAsync │ 1 │
> │ opsDispatchedAsyncUnref │ 0 │
> │ opsCompleted │ 3 │
> │ opsCompletedSync │ 2 │
> │ opsCompletedAsync │ 1 │
> │ opsCompletedAsyncUnref │ 0 │
> │ bytesSentControl │ 73 │
> │ bytesSentData │ 0 │
> │ bytesReceived │ 375 │
> └─────────────────────────┴────────┘

# mkdir

```
function Deno.mkdir(path: string | URL, options?: MkdirOptions): Promise<void>
```

Creates a new directory with the specified path.

await Deno.mkdir("new_dir");
await Deno.mkdir("nested/directories", { recursive: true });
await Deno.mkdir("restricted_access_dir", { mode: 0o700 });
Defaults to throwing error if the directory already exists.

Requires permission.allow-write

# mkdirSync

```
function Deno.mkdirSync(path: string | URL, options?: MkdirOptions): void
```

Synchronously creates a new directory with the specified path.

Deno.mkdirSync("new_dir");
Deno.mkdirSync("nested/directories", { recursive: true });
Deno.mkdirSync("restricted_access_dir", { mode: 0o700 });
Defaults to throwing error if the directory already exists.

Requires permission.allow-write

# open

```
function Deno.open(path: string | URL, options?: OpenOptions): Promise<File>
```

Open a file and resolve to an instance of . The file does not need to previously exist if using the or open options. It is the callers responsibility to close the file when finished with it.Deno.FilecreatecreateNew

const file = await Deno.open("/foo/bar.txt", { read: true, write: true });
// Do work with file
Deno.close(file.rid);
Requires and/or permissions depending on options.allow-readallow-write

# openSync

```
function Deno.openSync(path: string | URL, options?: OpenOptions): File
```

Synchronously open a file and return an instance of . The file does not need to previously exist if using the or open options. It is the callers responsibility to close the file when finished with it.Deno.FilecreatecreateNew

const file = Deno.openSync("/foo/bar.txt", { read: true, write: true });
// Do work with file
Deno.close(file.rid);
Requires and/or permissions depending on options.allow-readallow-write

# read

```
function Deno.read(rid: number, buffer: Uint8Array): Promise<number | null>
```

Read from a resource ID () into an array buffer ().ridbuffer

Resolves to either the number of bytes read during the operation or EOF () if there was nothing more to read.null

It is possible for a read to successfully return with bytes. This does not indicate EOF.0

This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.readAll() instead.

It is not guaranteed that the full buffer will be read in a single call.

// if "/foo/bar.txt" contains the text "hello world":
const file = await Deno.open("/foo/bar.txt");
const buf = new Uint8Array(100);
const numberOfBytesRead = await Deno.read(file.rid, buf); // 11 bytes
const text = new TextDecoder().decode(buf); // "hello world"
Deno.close(file.rid);

# readAll

```
function Deno.readAll(r: Reader): Promise<Uint8Array>
```

Read Reader until EOF () and resolve to the content as Uint8Array`.rnull

// Example from stdin
const stdinContent = await Deno.readAll(Deno.stdin);

// Example from file
const file = await Deno.open("my_file.txt", {read: true});
const myFileContent = await Deno.readAll(file);
Deno.close(file.rid);

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
const bufferContent = await Deno.readAll(reader);

# readAllSync

```
function Deno.readAllSync(r: ReaderSync): Uint8Array
```

Synchronously reads Reader until EOF () and returns the content as .rnullUint8Array

// Example from stdin
const stdinContent = Deno.readAllSync(Deno.stdin);

// Example from file
const file = Deno.openSync("my_file.txt", {read: true});
const myFileContent = Deno.readAllSync(file);
Deno.close(file.rid);

// Example from buffer
const myData = new Uint8Array(100);
// ... fill myData array with data
const reader = new Deno.Buffer(myData.buffer as ArrayBuffer);
const bufferContent = Deno.readAllSync(reader);

# readDir

```
function Deno.readDir(path: string | URL): AsyncIterable<DirEntry>
```

Reads the directory given by and returns an async iterable of .pathDeno.DirEntry

for await (const dirEntry of Deno.readDir("/")) {
console.log(dirEntry.name);
}
Throws error if is not a directory.path

Requires permission.allow-read

# readDirSync

```
function Deno.readDirSync(path: string | URL): Iterable<DirEntry>
```

Synchronously reads the directory given by and returns an iterable of .pathDeno.DirEntry

for (const dirEntry of Deno.readDirSync("/")) {
console.log(dirEntry.name);
}
Throws error if is not a directory.path

Requires permission.allow-read

# readFile

```
function Deno.readFile(path: string | URL): Promise<Uint8Array>
```

Reads and resolves to the entire contents of a file as an array of bytes. can be used to transform the bytes to string if required. Reading a directory returns an empty data array.TextDecoder

const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("hello.txt");
console.log(decoder.decode(data));
Requires permission.allow-read

# readFileSync

```
function Deno.readFileSync(path: string | URL): Uint8Array
```

Synchronously reads and returns the entire contents of a file as an array of bytes. can be used to transform the bytes to string if required. Reading a directory returns an empty data array.TextDecoder

const decoder = new TextDecoder("utf-8");
const data = Deno.readFileSync("hello.txt");
console.log(decoder.decode(data));
Requires permission.allow-read

# readLink

```
function Deno.readLink(path: string): Promise<string>
```

Resolves to the full path destination of the named symbolic link.

await Deno.symlink("./test.txt", "./test_link.txt");
const target = await Deno.readLink("./test_link.txt"); // full path of ./test.txt
Throws TypeError if called with a hard link

Requires permission.allow-read

# readLinkSync

```
function Deno.readLinkSync(path: string): string
```

Returns the full path destination of the named symbolic link.

Deno.symlinkSync("./test.txt", "./test_link.txt");
const target = Deno.readLinkSync("./test_link.txt"); // full path of ./test.txt
Throws TypeError if called with a hard link

Requires permission.allow-read

# readSync

```
function Deno.readSync(rid: number, buffer: Uint8Array): number | null
```

Synchronously read from a resource ID () into an array buffer ().ridbuffer

Returns either the number of bytes read during the operation or EOF () if there was nothing more to read.null

It is possible for a read to successfully return with bytes. This does not indicate EOF.0

This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.readAllSync() instead.

It is not guaranteed that the full buffer will be read in a single call.

// if "/foo/bar.txt" contains the text "hello world":
const file = Deno.openSync("/foo/bar.txt");
const buf = new Uint8Array(100);
const numberOfBytesRead = Deno.readSync(file.rid, buf); // 11 bytes
const text = new TextDecoder().decode(buf); // "hello world"
Deno.close(file.rid);

# readTextFile

```
function Deno.readTextFile(path: string | URL): Promise<string>
```

Asynchronously reads and returns the entire contents of a file as a utf8 encoded string. Reading a directory returns an empty data array.

const data = await Deno.readTextFile("hello.txt");
console.log(data);
Requires permission.allow-read

# readTextFileSync

```
function Deno.readTextFileSync(path: string | URL): string
```

Synchronously reads and returns the entire contents of a file as utf8 encoded string encoded string. Reading a directory returns an empty string.

const data = Deno.readTextFileSync("hello.txt");
console.log(data);
Requires permission.allow-read

# realPath

```
function Deno.realPath(path: string): Promise<string>
```

Resolves to the absolute normalized path, with symbolic links resolved.

// e.g. given /home/alice/file.txt and current directory /home/alice
await Deno.symlink("file.txt", "symlink_file.txt");
const realPath = await Deno.realPath("./file.txt");
const realSymLinkPath = await Deno.realPath("./symlink_file.txt");
console.log(realPath); // outputs "/home/alice/file.txt"
console.log(realSymLinkPath); // outputs "/home/alice/file.txt"
Requires permission for the target path. Also requires permission for the CWD if the target path is relative.allow-readallow-read

# realPathSync

```
function Deno.realPathSync(path: string): string
```

Returns absolute normalized path, with symbolic links resolved.

// e.g. given /home/alice/file.txt and current directory /home/alice
Deno.symlinkSync("file.txt", "symlink_file.txt");
const realPath = Deno.realPathSync("./file.txt");
const realSymLinkPath = Deno.realPathSync("./symlink_file.txt");
console.log(realPath); // outputs "/home/alice/file.txt"
console.log(realSymLinkPath); // outputs "/home/alice/file.txt"
Requires permission for the target path. Also requires permission for the CWD if the target path is relative.allow-readallow-read

# remove

```
function Deno.remove(path: string | URL, options?: RemoveOptions): Promise<void>
```

Removes the named file or directory.

await Deno.remove("/path/to/empty_dir/or/file");
await Deno.remove("/path/to/populated_dir/or/file", { recursive: true });
Throws error if permission denied, path not found, or path is a non-empty directory and the option isn't set to .recursivetrue

Requires permission.allow-write

# removeSync

```
function Deno.removeSync(path: string | URL, options?: RemoveOptions): void
```

Synchronously removes the named file or directory.

Deno.removeSync("/path/to/empty_dir/or/file");
Deno.removeSync("/path/to/populated_dir/or/file", { recursive: true });
Throws error if permission denied, path not found, or path is a non-empty directory and the option isn't set to .recursivetrue

Requires permission.allow-write

# rename

```
function Deno.rename(oldpath: string, newpath: string): Promise<void>
```

Renames (moves) to . Paths may be files or directories. If already exists and is not a directory, replaces it. OS-specific restrictions may apply when and are in different directories.oldpathnewpathnewpathrename()oldpathnewpath

await Deno.rename("old/path", "new/path");
On Unix, this operation does not follow symlinks at either path.

It varies between platforms when the operation throws errors, and if so what they are. It's always an error to rename anything to a non-empty directory.

Requires and permission.allow-readallow-write

# renameSync

```
function Deno.renameSync(oldpath: string, newpath: string): void
```

Synchronously renames (moves) to . Paths may be files or directories. If already exists and is not a directory, replaces it. OS-specific restrictions may apply when and are in different directories.oldpathnewpathnewpathrenameSync()oldpathnewpath

Deno.renameSync("old/path", "new/path");
On Unix, this operation does not follow symlinks at either path.

It varies between platforms when the operation throws errors, and if so what they are. It's always an error to rename anything to a non-empty directory.

Requires and permissions.allow-readallow-write

# resources

```
function Deno.resources(): ResourceMap
```

Returns a map of open resource ids (rid) along with their string representations. This is an internal API and as such resource representation has type; that means it can change any time.any

console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr" }
Deno.openSync('../test.file');
console.log(Deno.resources());
// { 0: "stdin", 1: "stdout", 2: "stderr", 3: "fsFile" }

# run

```
function Deno.run(opt: T): Process<T>
```

Spawns new subprocess. RunOptions must contain at a minimum the , an array of program arguments, the first of which is the binary.opt.cmd

const p = Deno.run({
cmd: ["echo", "hello"],
});
Subprocess uses same working directory as parent process unless is specified.opt.cwd

Environmental variables for subprocess can be specified using mapping.opt.env

By default subprocess inherits stdio of parent process. To change that , and can be specified independently - they can be set to either an rid of open file or set to "inherit" "piped" or "null":opt.stdoutopt.stderropt.stdin

"inherit" The default if unspecified. The child inherits from the corresponding parent descriptor.

"piped" A new pipe should be arranged to connect the parent and child sub-processes.

"null" This stream will be ignored. This is the equivalent of attaching the stream to ./dev/null

Details of the spawned process are returned.

Requires permission.allow-run

# seek

```
function Deno.seek(rid: number, offset: number, whence: SeekMode): Promise<number>
```

Seek a resource ID () to the given under mode given by . The call resolves to the new position within the resource (bytes from the start).ridoffsetwhence

const file = await Deno.open('hello.txt', {read: true, write: true, truncate: true, create: true});
await Deno.write(file.rid, new TextEncoder().encode("Hello world"));
// advance cursor 6 bytes
const cursorPosition = await Deno.seek(file.rid, 6, Deno.SeekMode.Start);
console.log(cursorPosition); // 6
const buf = new Uint8Array(100);
await file.read(buf);
console.log(new TextDecoder().decode(buf)); // "world"
The seek modes work as follows:

// Given file.rid pointing to file with "Hello world", which is 11 bytes long:
// Seek 6 bytes from the start of the file
console.log(await Deno.seek(file.rid, 6, Deno.SeekMode.Start)); // "6"
// Seek 2 more bytes from the current position
console.log(await Deno.seek(file.rid, 2, Deno.SeekMode.Current)); // "8"
// Seek backwards 2 bytes from the end of the file
console.log(await Deno.seek(file.rid, -2, Deno.SeekMode.End)); // "9" (e.g. 11-2)

# seekSync

```
function Deno.seekSync(rid: number, offset: number, whence: SeekMode): number
```

Synchronously seek a resource ID () to the given under mode given by . The new position within the resource (bytes from the start) is returned.ridoffsetwhence

const file = Deno.openSync('hello.txt', {read: true, write: true, truncate: true, create: true});
Deno.writeSync(file.rid, new TextEncoder().encode("Hello world"));
// advance cursor 6 bytes
const cursorPosition = Deno.seekSync(file.rid, 6, Deno.SeekMode.Start);
console.log(cursorPosition); // 6
const buf = new Uint8Array(100);
file.readSync(buf);
console.log(new TextDecoder().decode(buf)); // "world"
The seek modes work as follows:

// Given file.rid pointing to file with "Hello world", which is 11 bytes long:
// Seek 6 bytes from the start of the file
console.log(Deno.seekSync(file.rid, 6, Deno.SeekMode.Start)); // "6"
// Seek 2 more bytes from the current position
console.log(Deno.seekSync(file.rid, 2, Deno.SeekMode.Current)); // "8"
// Seek backwards 2 bytes from the end of the file
console.log(Deno.seekSync(file.rid, -2, Deno.SeekMode.End)); // "9" (e.g. 11-2)

# stat

```
function Deno.stat(path: string | URL): Promise<FileInfo>
```

Resolves to a for the specified . Will always follow symlinks.Deno.FileInfopath

import { assert } from "https://deno.land/std/testing/asserts.ts";
const fileInfo = await Deno.stat("hello.txt");
assert(fileInfo.isFile);
Requires permission.allow-read

# statSync

```
function Deno.statSync(path: string | URL): FileInfo
```

Synchronously returns a for the specified . Will always follow symlinks.Deno.FileInfopath

import { assert } from "https://deno.land/std/testing/asserts.ts";
const fileInfo = Deno.statSync("hello.txt");
assert(fileInfo.isFile);
Requires permission.allow-read

# test

```
function Deno.test(t: TestDefinition): void
```

Register a test which will be run when is used on the command line and the containing module looks like a test module. can be async if required.deno testfn

import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";

Deno.test({
name: "example test",
fn(): void {
assertEquals("world", "world");
},
});

Deno.test({
name: "example ignored test",
ignore: Deno.build.os === "windows",
fn(): void {
// This test is ignored only on Windows machines
},
});

Deno.test({
name: "example async test",
async fn() {
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("hello_world.txt");
assertEquals(decoder.decode(data), "Hello world");
}
});

# test

```
function Deno.test(name: string, fn: () => void | Promise<void>): void
```

Register a test which will be run when is used on the command line and the containing module looks like a test module. can be async if required.deno testfn

import {assert, fail, assertEquals} from "https://deno.land/std/testing/asserts.ts";

Deno.test("My test description", ():void => {
assertEquals("hello", "hello");
});

Deno.test("My async test description", async ():Promise<void> => {
const decoder = new TextDecoder("utf-8");
const data = await Deno.readFile("hello_world.txt");
assertEquals(decoder.decode(data), "Hello world");
});

# truncate

```
function Deno.truncate(name: string, len?: number): Promise<void>
```

Truncates or extends the specified file, to reach the specified . If is not specified then the entire file contents are truncated.lenlen

// truncate the entire file
await Deno.truncate("my_file.txt");

// truncate part of the file
const file = await Deno.makeTempFile();
await Deno.writeFile(file, new TextEncoder().encode("Hello World"));
await Deno.truncate(file, 7);
const data = await Deno.readFile(file);
console.log(new TextDecoder().decode(data)); // "Hello W"
Requires permission.allow-write

# truncateSync

```
function Deno.truncateSync(name: string, len?: number): void
```

Synchronously truncates or extends the specified file, to reach the specified . If is not specified then the entire file contents are truncated.lenlen

// truncate the entire file
Deno.truncateSync("my_file.txt");

// truncate part of the file
const file = Deno.makeTempFileSync();
Deno.writeFileSync(file, new TextEncoder().encode("Hello World"));
Deno.truncateSync(file, 7);
const data = Deno.readFileSync(file);
console.log(new TextDecoder().decode(data));
Requires permission.allow-write

# watchFs

```
function Deno.watchFs(paths: string | string[], options?: { recursive: boolean }): AsyncIterableIterator<FsEvent>
```

Watch for file system events against one or more , which can be files or directories. These paths must exist already. One user action (e.g. ) can generate multiple file system events. Likewise, one user action can result in multiple file paths in one event (e.g. ). Recursive option is by default and, for directories, will watch the specified directory and all sub directories. Note that the exact ordering of the events can vary between operating systems.pathstouch test.filemv old_name.txt new_name.txttrue

const watcher = Deno.watchFs("/");
for await (const event of watcher) {
console.log(">>>> event", event);
// { kind: "create", paths: [ "/foo.txt" ] }
}
Requires permission.allow-read

# write

```
function Deno.write(rid: number, data: Uint8Array): Promise<number>
```

Write to the resource ID () the contents of the array buffer ().riddata

Resolves to the number of bytes written. This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.writeAll() instead.

It is not guaranteed that the full buffer will be written in a single call.

const encoder = new TextEncoder();
const data = encoder.encode("Hello world");
const file = await Deno.open("/foo/bar.txt", { write: true });
const bytesWritten = await Deno.write(file.rid, data); // 11
Deno.close(file.rid);

# writeAll

```
function Deno.writeAll(w: Writer, arr: Uint8Array): Promise<void>
```

Write all the content of the array buffer () to the writer ().arrw

// Example writing to stdout
const contentBytes = new TextEncoder().encode("Hello World");
await Deno.writeAll(Deno.stdout, contentBytes);

// Example writing to file
const contentBytes = new TextEncoder().encode("Hello World");
const file = await Deno.open('test.file', {write: true});
await Deno.writeAll(file, contentBytes);
Deno.close(file.rid);

// Example writing to buffer
const contentBytes = new TextEncoder().encode("Hello World");
const writer = new Deno.Buffer();
await Deno.writeAll(writer, contentBytes);
console.log(writer.bytes().length); // 11

# writeAllSync

```
function Deno.writeAllSync(w: WriterSync, arr: Uint8Array): void
```

Synchronously write all the content of the array buffer () to the writer ().arrw

// Example writing to stdout
const contentBytes = new TextEncoder().encode("Hello World");
Deno.writeAllSync(Deno.stdout, contentBytes);

// Example writing to file
const contentBytes = new TextEncoder().encode("Hello World");
const file = Deno.openSync('test.file', {write: true});
Deno.writeAllSync(file, contentBytes);
Deno.close(file.rid);

// Example writing to buffer
const contentBytes = new TextEncoder().encode("Hello World");
const writer = new Deno.Buffer();
Deno.writeAllSync(writer, contentBytes);
console.log(writer.bytes().length); // 11

# writeFile

```
function Deno.writeFile(path: string | URL, data: Uint8Array, options?: WriteFileOptions): Promise<void>
```

Write to the given , by default creating a new file if needed, else overwriting.datapath

const encoder = new TextEncoder();
const data = encoder.encode("Hello world\n");
await Deno.writeFile("hello1.txt", data); // overwrite "hello1.txt" or create it
await Deno.writeFile("hello2.txt", data, {create: false}); // only works if "hello2.txt" exists
await Deno.writeFile("hello3.txt", data, {mode: 0o777}); // set permissions on new file
await Deno.writeFile("hello4.txt", data, {append: true}); // add data to the end of the file
Requires permission, and if is .allow-writeallow-readoptions.createfalse

# writeFileSync

```
function Deno.writeFileSync(path: string | URL, data: Uint8Array, options?: WriteFileOptions): void
```

Synchronously write to the given , by default creating a new file if needed, else overwriting.datapath

const encoder = new TextEncoder();
const data = encoder.encode("Hello world\n");
Deno.writeFileSync("hello1.txt", data); // overwrite "hello1.txt" or create it
Deno.writeFileSync("hello2.txt", data, {create: false}); // only works if "hello2.txt" exists
Deno.writeFileSync("hello3.txt", data, {mode: 0o777}); // set permissions on new file
Deno.writeFileSync("hello4.txt", data, {append: true}); // add data to the end of the file
Requires permission, and if is .allow-writeallow-readoptions.createfalse

# writeSync

```
function Deno.writeSync(rid: number, data: Uint8Array): number
```

Synchronously write to the resource ID () the contents of the array buffer ().riddata

Returns the number of bytes written. This function is one of the lowest level APIs and most users should not work with this directly, but rather use Deno.writeAllSync() instead.

It is not guaranteed that the full buffer will be written in a single call.

const encoder = new TextEncoder();
const data = encoder.encode("Hello world");
const file = Deno.openSync("/foo/bar.txt", {write: true});
const bytesWritten = Deno.writeSync(file.rid, data); // 11
Deno.close(file.rid);

# writeTextFile

```
function Deno.writeTextFile(path: string | URL, data: string): Promise<void>
```

Asynchronously write string to the given , by default creating a new file if needed, else overwriting.datapath

await Deno.writeTextFile("hello1.txt", "Hello world\n"); // overwrite "hello1.txt" or create it
Requires permission, and if is .allow-writeallow-readoptions.createfalse

function Deno.writeTextFileSync(path: string | URL, data: string): void

Synchronously write string to the given , by default creating a new file if needed, else overwriting.datapath

await Deno.writeTextFileSync("hello1.txt", "Hello world\n"); // overwrite "hello1.txt" or create it
Requires permission, and if is .allow-writeallow-readoptions.createfalse
