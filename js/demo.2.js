//  编写入口函数
$(function() {
    // 一. 全选 全不选 功能
    // 2.1 选择全选的元素 绑定change事件
    $('.checkall').change(function() {
        // 得到全选框的状态,根据全选框的状态改变三个 checkbox的状态
        var flag = $(this).prop('checked');
        console.log(flag);
        $('.j-checkbox, .checkall').prop('checked', flag);
    });

    // 二. 通过单选框控制全选框
    // 2.1 获取单选框对象
    $('.j-checkbox').change(function() {
        // $('.j-checkbox:checked') 表示所有被选中的单选框 得到的是一个数组
        //  $('.j-checkbox') 表示所有的单选框 得到的也是一个数组
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true); // 全选框选中
        } else {
            $('.checkall').prop('checked', false);
        }
    })
})