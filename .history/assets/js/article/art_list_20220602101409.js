$(function() {
    // 定义一个查询的参数对象，将来请求数据的时候，
// 需要将请求参数对象提交到服务器
const q = {
    pagenum: 1, // 页码值，默认请求第一页的数据
    pagesize: , // 每页显示几条数据，默认每页显示2条
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
// 定义美化时间的过滤器
template.defaults.imports.dataFormat = function(date) {
    const dt = new Date(date)

    var y = dt.getFullYear()
    var m = padZero(dt.getMonth() + 1)
    var d = padZero(dt.getDate())

    var hh = padZero(dt.getHours())
    var mm = padZero(dt.getMinutes())
    var ss = padZero(dt.getSeconds())

    return y + '-' + m + '-' + d + ' ' + hh + ':' + mm + ':' + ss
}

// 定义补零的函数
function padZero(n) {
    return n > 9 ? n : '0' + n
}
const form = layui.form;

// 初始化文章分类的方法
const initCate = () => {
    $.ajax({
        method: "GET",
        url: "/my/article/cates",
        success: function (res) {
            console.log(res);
            if (res.status !== 0) {
                return layer.msg("获取分类数据失败！");
            }
            // 调用模板引擎渲染分类的可选项
            var htmlStr = template("tpl-cate", res);
            $("[name=cate_id]").html(htmlStr);
            // 通过 layui 重新渲染表单区域的UI结构
            form.render();
        },
    });
};

initCate();
})