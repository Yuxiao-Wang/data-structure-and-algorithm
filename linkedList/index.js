// const a = { val: 'a' };
// const b = { val: 'b' };
// const c = { val: 'c' };
// const d = { val: 'd' };
//
// a.next = b;
// b.next = c;
// c.next = d;
//
// // 遍历链表
// let p = a;
// while(p) {
//     console.log(p.val)
//     p = p.next;
// }
//
// // 插入
// const e = { val: 'e' };
// c.next = e;
// e.next = d;
//
// // 删除
// c.next = d;



// const instanceOf = (A, B) => {
//     let p = A;
//     while(p) {
//         if(p === B.prototype) {
//             return true;
//         }
//         p = p.__proto__;
//     }
//     return false;
// }


const json = {
    a: { b: { c: 1 } },
    d: { e: 2 }
}

const path = ['a', 'b'];

let p = json;
path.forEach(k => {
    p = p[k]
})

console.log(p)