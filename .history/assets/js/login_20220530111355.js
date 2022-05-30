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
    
})