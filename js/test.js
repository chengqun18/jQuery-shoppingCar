$(function() {
    // 一. 全选 全不选功能
    $('.checkall').change(function() {
        if ($(this).prop('checked')) {
            $('.j-checkbox, .checkall').prop('checked', true);
        } else {
            $('.j-checkbox, .checkall').prop('checked', false);
        };

        // 七. 点击全选框 全部高亮显示
        if ($(this).prop('checked')) {
            $('.j-checkbox').parents('.cart-item').addClass('check-cart-item');
        } else {
            $('.j-checkbox').parents('.cart-item').removeClass('check-cart-item');
        }
    });

    // 二. 单选框全选 全选框选中 
    $('.j-checkbox').change(function() {
        if ($('.j-checkbox:checked').length == $('.j-checkbox').length) {
            $('.checkall').prop('checked', true);
        } else {
            $('.checkall').prop('checked', false);
        };

        // 7.2 点击单选框 当前盒子高亮显示
        if ($(this).prop('checked')) {
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
    });

    // 三. 点击 +- 改变数量
    // 加号操作
    $('.increment').click(function() {
        var n = $(this).siblings('.itxt').val();
        n++;
        $(this).siblings('.itxt').val(n);

        // 四. 点击加号 改变小计 = 单价p * 数量n
        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        getSum();

    });

    // 减号操作
    $('.decrement').click(function() {
        var n = $(this).siblings('.itxt').val();
        if (n == 1) {
            return false;
        }
        n--;
        $(this).siblings('.itxt').val(n);

        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        getSum();
    });

    // 4.3 修改数量 重新计算小计 总金额总件数
    $('.itxt').change(function() {
        var n = $(this).val();

        var p = $(this).parents('.p-num').siblings('.p-price').html();
        p = p.substr(1);
        $(this).parents('.p-num').siblings('.p-sum').html('￥' + (p * n).toFixed(2));

        getSum();
    });

    // 五. 计算总件数 总金额
    getSum();

    function getSum() {
        var count = 0; // 总件数
        var money = 0; // 总金额
        // 总件数
        $('.itxt').each(function(i, ele) {
            count += parseInt($(ele).val());
        })
        $('.amount-sum em').html(count);

        // 总金额
        $('.p-sum').each(function(i, ele) {
            money += parseFloat($(ele).html().substr(1));
        })
        $('.price-sum em').html('￥' + money.toFixed(2));
    };


    // 六. 点击删除  删除对应的物品
    // 6.1 小计后面的删除按钮
    $('.p-action a').click(function() {
        $(this).parents('.cart-item').remove();
        getSum();
    });

    // 6.2 删除选中的商品
    $('.remove-batch').click(function() {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    });

    // 6.3 清理购物车
    $('.clear-all').click(function() {
        $('.cart-item').remove();
        getSum();
    });

})