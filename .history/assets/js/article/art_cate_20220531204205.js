$(function() {
    const initArtCateList = () => {
        $.ajax({
            type: 'GET',
            url: "/my/article/cates",
            success: function(res){
                const htmlStr = template("tpl-table",res);
                $("tbody").empty().html(htmlStr);
            }

        })
    }
    initArtCateList()
    const layer = layui.layer;
    layer.open({
        type: 1,
        area: ['500px', '250px'],
        title: '添加文章分类',
        content: $('#dialog-add').html()
    })
    // 通过代理监听 submit 事件
    $("body").on("submit", "#form-add", function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "/my/article/addcates",
        data: $(this).serialize(),
        success: (res) => {
            if (res.status !== 0) return layer.msg("新增分类失败！");
            initArtCateList();
            layer.msg("新增分类成功！");
            layer.close(indexAdd);
        },
    });
    });
    let indexAdd = null;
    $("#btnAddCate").click(() => {
    indexAdd = layer.open({
        type: 1,
        area: ["500px", "250px"],
        title: "添加文章分类",
        content: $("#dialog-add").html(),
    });
    });
// 通过代理方式，为 btn-edit 按钮绑定点击事件
let indexEdit = null;
$("tbody").on("click", ".btn-edit", function () {
    // 弹出修改文章分类的弹窗
    indexEdit = layer.open({
        type: 1,
        area: ["500px", "250px"],
        title: "修改文章分类",
        content: $("#dialog-edit").html()

    });
  
});


// 更新文章分类
$("body").on("submit", "#form-edit", function (e) {
    e.preventDefault();
    $.ajax({
        method: "POST",
        url: "/my/article/updatecate",
        data: $(this).serialize(),
        success: (res) => {
            if (res.status !== 0) {
                return layer.msg("更新分类数据失败！");
            }
            layer.msg("更新分类数据成功！");
            layer.close(indexEdit);
            initArtCateList();
        },
    });
});
})