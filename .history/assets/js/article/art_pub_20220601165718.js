$(function() {
    const form = layui.form;
    const layer = layui.layer;

    // 获取文章分类
    const initCate = () => {
        $.ajax({
            type: "GET",
            url: "/my/article/cates",
            success: function (res) {
                if (res.status !== 0) {
                    return layer.msg("初始化文章分类失败！");
                }
                // 调用模板引擎，渲染分类的下拉菜单
                var htmlStr = template("tpl-cate", res);
                $("[name=cate_id]").html(htmlStr);
                // 一定要记得调用 form.render() 方法 否则看不到页面的变化
                form.render('select');
            },
        });
    };
    // 1. 初始化图片裁剪器
var $image = $('#image')

// 2. 裁剪选项
var options = {
    aspectRatio: 400 / 280,
    preview: '.img-preview'
}

// 3. 初始化裁剪区域
$image.cropper(options)


    initCate();
    initEditor();
})
