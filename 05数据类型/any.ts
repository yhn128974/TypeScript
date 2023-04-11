// 当一下类型断言 as any
// 不想给某些JavaScript添加数据类型时候，一般不要使用
let message: any = 'longyou';

message = 123;
message = {

}
message = true;
message.split('123')
console.log(message);

// 不要用
const arr: any[] = [];

