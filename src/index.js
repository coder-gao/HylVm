const {VM, VMScript} = require('vm2')
const vm = new VM();

let code = `
function test(){
    return "hello, world!";
}
test()
`

let vmScript = new VMScript(code, "myDebugger");

let run = vm.run(vmScript);
console.log(run);
