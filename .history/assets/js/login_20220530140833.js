$(function() {
    $('#link_reg').click(() => {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#link_login').click(() => {
        $('.reg-box').hide();
        $('.login-box').show();
    })
    const form=layui.form;
    const layer = layui.layer;
    form.verify({
        pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
        repwd:(value)=>{
            const pwd=$('#form_reg [name=password]').val();
            if(pwd !== value) return "两次密码不一致";
        }
    })
    const baseUrl = "http://www.liulongbin.top:3007";
})