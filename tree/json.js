const json = {
    a: {
        b: {
            c: 1
        }
    },
    d: [1, 2]
}
// 遍历json中每一个节点的值
const dfs = (n, path) => {
    console.log(n, path);
    Object.keys(n).forEach(k=> {
        dfs (n[k], path.concat(k));
    })
}

dfs(json, [])