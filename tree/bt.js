const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null,
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null,
        },
        right: {
            val: 7,
            left: null,
            right: null,
        }
    }
}

const preorder = (root) => {
    if(!root) return;
    const stack = [root];
    while(stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}
preorder(bt);  // 1 2 4 5 3 6 7

const inorder = (root) => {
    if (!root) return;
    const stack = [];
    let p = root;
    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        console.log(n.val)
        p = n.right;
    }
}
inorder(bt); // 4 2 5 1 6 3 7

const postorder = (root) => {
    if (!root) return;
    const outputStack = [];
    const stack = [root];
    while (stack.length) {
        const n = stack.pop();
        outputStack.push(n)
        if (n.left) stack.push(n.left);
        if (n.right) stack.push(n.right);
    }
    while(outputStack.length) {
        const n = outputStack.pop();
        console.log(n.val)
    }
}
postorder(bt); // 4 5 2 6 7 3 1