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
    });

    // 三. 通过 +- 来改变数量
    // + 加号操作
    $('.increment').click(function() {
        // 获取兄弟文本框的值  让值 ++  把加完后的值重新赋值给兄弟文本框
        // val() 获取input 的值, 相当于DOM中表单的value属性一样
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);

        // 四. 修改小计金额 = 单价p * 数量n
        // 4.1 点击加号 修改小计
        // .html() 表示元素里面的值 相当于 innerHTML 不带参数表示获取 带参数表示赋值
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        console.log(p); // ￥12.60
        p = p.substr(1); // 12.60  substr() 截取字符串
        // .toFixed(2) 保留两位小数
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

    });

    // - 建好操作
    // 4.2 点击减号 修改小计
    $('.decrement').click(function() {
        // 获取兄弟文本框的值  让值 --  把加完后的值重新赋值给兄弟文本框
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        };
        n--;
        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').html();
        console.log(p); // ￥12.60
        p = p.substr(1); // 12.60  substr() 截取字符串
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
    });

    // 4.3 修改文本框的值,修改小计
    $('.itxt').change(function() {
        // 获取当前文本框的值
        var n = $(this).val();

        // 获取单价
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);

        // 设置小计的值
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));
    })
})