//  编写入口函数
$(function() {
    // 一. 全选 全不选 功能
    // 2.1 选择全选的元素 绑定change事件
    $('.checkall').change(function() {
        // 得到全选框的状态,根据全选框的状态改变三个 checkbox的状态
        var flag = $(this).prop('checked');
        // console.log(flag);
        $('.j-checkbox, .checkall').prop('checked', flag);

        // 七. 选中全选框背景高亮 
        if ($('.checkall').prop('checked')) {
            $('.cart-item').addClass('check-cart-item')
        } else {
            $('.cart-item').removeClass('check-cart-item')
        }
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
        };

        // 选中单选框 背景高亮
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item')
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item')
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

        getSum();

    });

    // - 减号操作
    // 4.2 点击减号 修改小计
    $('.decrement').click(function() {
        // 获取兄弟文本框的值  让值 --  把加完后的值重新赋值给兄弟文本框
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        };
        n--;
        $(this).siblings('.itxt').val(n);

        // 单价
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        console.log(p); // ￥12.60
        p = p.substr(1); // 12.60  substr() 截取字符串
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        getSum();
    });

    // 4.3 修改文本框的值,修改小计
    $('.itxt').change(function() {
        // 获取修改的值
        var n = $(this).val();

        // 获取单价
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);

        // 设置小计
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        getSum();
    });

    // 五. 计算总价
    getSum();

    function getSum() {
        var count = 0; //总件数
        var money = 0; // 总金额

        // 获取所有的文本框
        $('.itxt').each(function(i, ele) {
            count += parseInt($(ele).val());
        })

        // 将总件数,赋值给 .amount-sum 下面的 em元素
        $('.amount-sum em').html(count);

        // 计算总金额
        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).html().substr(1));
        });

        // 将总金额赋值给 .price-sum 下面的 em 元素
        $('.price-sum em').html('￥' + money.toFixed(2));
    };

    // 六. 删除商品
    // 6.1 商品后面的删除按钮
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    });

    // 6.2 删除选中的商品
    $('.remove-batch').click(function() {
        if ($('.j-checkbox:checked')) {
            $('.j-checkbox:checked').parents('.cart-item').remove();
            getSum();
        }
    });

    // 6.3 清空购物车  删除全部商品
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    });
})