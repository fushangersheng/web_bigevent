$(function() {
    const initArtCateList = () => {
        $.ajax({
            type: 'GET',
            url: "/my/article/cates",
            success: function(res){
                const htmlStr = template("tpl-table",res);
                $("tbody")
            }
        })
    }
})