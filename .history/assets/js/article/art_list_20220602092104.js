// 定义一个查询的参数对象，将来请求数据的时候，
// 需要将请求参数对象提交到服务器
const q = {
    pagenum: 1, // 页码值，默认请求第一页的数据
    pagesize: 2, // 每页显示几条数据，默认每页显示2条
    cate_id: "", // 文章分类的 Id
    state: "", // 文章的发布状态
};
$(function() {
    // 获取文章列表数据
    const initTable = () => {
        $.ajax({
            type: "GET",
            url: "/my/article/list",
            data: q,
            success: (res) => {
                if (res.status !== 0) {
                    return layer.msg("获取文章列表失败！");
                }
                // 使用模板引擎渲染页面的数据
                var htmlStr = template("tpl-table", res);
                $("tbody").html(htmlStr);
            },
        });
    };

    initTable();
})