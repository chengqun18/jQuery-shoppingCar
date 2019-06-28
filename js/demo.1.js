// 一. 编写入口函数
$(function() {
    // 二. 全选 全不选 功能
    // 2.1 选择全选的元素 绑定change事件
    $('.checkall').change(function() {
        // 得到全选框的状态,根据全选框的状态改变三个 checkbox的状态
        var flag = $(this).prop('checked');
        console.log(flag);
        $('.j-checkbox, .checkall').prop('checked', flag);
    });


})