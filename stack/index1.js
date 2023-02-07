// peek 和 pop 都是返回栈顶元素，但是pop会将栈顶元素剔除，而peek只是用来获取
class Stack {
    constructor() {
        this.arr = [];
        this.num = 0;
    }
    // 入栈
    push(item) {
        this.arr.push(item);
        this.num++;
    }
    // 出栈
    pop() {
        this.num--;
        return this.arr.pop();
    }
    // 获取栈顶值
    peek() {
        return this.arr[this.num - 1];
    }
    // 栈的size
    size() {
        return this.num;
    }
    //清理栈
    clear() {
        this.arr = [];
    }
}

function divideTenByTwo(num) {
    let stack = new Stack();
    let resNum;
    let resStr = '';
    while(num > 0) {
        resNum = Math.floor(num % 2);
        stack.push(resNum)
        num = Math.floor(num / 2)
    }
    while(stack.size() > 0) {
        resStr += stack.pop().toString();
    }
    return resStr;
}