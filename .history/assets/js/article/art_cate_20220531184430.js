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
})