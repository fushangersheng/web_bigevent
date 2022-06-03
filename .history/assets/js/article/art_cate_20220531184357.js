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
    
})