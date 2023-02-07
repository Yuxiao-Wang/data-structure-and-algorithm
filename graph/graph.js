/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (matrix) {
    // 排查矩阵为空的情况，或者不是一个二维数组
    if (!matrix || !matrix[0]) return [];
    // m为行数
    const m = matrix.length;
    // n为列数
    const n = matrix[0].length;
    // flow1记录每个位置的点能否流入太平洋
    const flow1 = Array.from({
        length: m
    }, () => new Array(n).fill(false));
    // flow2记录每个位置的点能否流入大西洋
    const flow2 = Array.from({
        length: m
    }, () => new Array(n).fill(false));

    const dfs = (r, c, flow) => {
        flow[r][c] = true;
        [
            [r - 1, c], // 左边
            [r + 1, c], // 右边
            [r, c - 1], // 上边
            [r, c + 1] // 下边
        ].forEach(
            ([nr, nc]) => {
                debugger;
                if (
                    nr >= 0 && nr < m && nc >= 0 && nc < n && !flow[nr][nc] && matrix[nr][nc] >= matrix[r][c]
                ) {
                    dfs(nr, nc, flow);
                }
            }
        );
    };
    //从边界开始
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    //找到同时能流入太平洋和大西洋的点
    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) res.push([r, c]);
        }
    }
    return res;
};

console.log(pacificAtlantic([
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]
]))