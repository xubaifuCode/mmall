var user = {
    data: {
        logined: false,
        username: '',
        email: '',
        phone: '',
        question: ''
    },
    URL: {
        add_user: function () {
            return "../user/register.do";
        },
        login_admin: function () {
            return "../manage/user/login.do";
        },
        login_user: function () {
            return "../user/login.do";
        },
        get_user: function () {
            return "../user/get_user_info.do";
        },
        get_info: function () {
            return "../user/get_information.do";
        },
        login_out: function () {
            return "../user/logout.do";
        },
        update_info: function () {
            return "../user/update_infomation.do";
        },
        reset_password: function () {
            return "../user/reset_password.do";
        }
    },
    updatePassword: function (passwordOld, passwordNew, callback) {
        $.ajax({
            type: "POST",
            url: user.URL.reset_password(),
            data: {passwordOld: passwordOld, passwordNew: passwordNew},
            success: function (result) {
                callback(result);
            }
        });
    },
    updateInfo: function (email, phone, question, callback) {
        var data = {};
        if (email != null) {
            data.email = email;
        }
        if (phone != null) {
            data.phone = phone;
        }
        if (question != null) {
            data.question = question;
        }

        $.ajax({
            type: "POST",
            url: user.URL.update_info(),
            data: data,
            success: function (result) {
                callback(result);
            }
        });
    },
    logined: function () {
        return user.data.logined;
    },
    addUser: function (username, password, email, phone, callback) {
        $.ajax({
            type: "POST",
            url: user.URL.add_user(),
            data: {username: username, password: password, email: email, phone: phone},
            success: function (result) {
                callback(result);
            }
        });
    },
    loginAdmin: function (username, password, callback) {
        $.ajax({
            type: "POST",
            url: user.URL.login_admin(),
            data: {username: username, password: password},
            success: function (result) {
                callback(result);
            }
        });
    },
    loginUser: function (username, password, callback) {
        $.ajax({
            type: "POST",
            url: user.URL.login_user(),
            data: {username: username, password: password},
            success: function (result) {
                callback(result);
            }
        });
    },
    getUser: function (callback) {
        $.ajax({
            type: "POST",
            url: user.URL.get_user(),
            success: function (result) {
                callback(result);
            }
        });
    },
    getInfo: function () {
        $.ajax({
            type: "POST",
            url: user.URL.get_info(),
            success: function (result) {
                console.log("获取用户信息成功");
            }
        });
    },
    loginOut: function () {
        $.ajax({
            type: "POST",
            url: user.URL.login_out(),
            success: function (result) {
                console.log("退出登录成功");
            }
        });
    }
};

var category = {
    URL: {
        get_category: function () {
            return "../category/get_category.do";
        },
        get_category_name: function () {
            return "../manage/category/get_deep_category_name.do";
        }
    },
    getCategoryName: function (categoryId, callback) {
        var data = {};
        if (typeof categoryId != "undefined") {
            data.categoryId = categoryId;
        }
        $.ajax({
            type: "GET",
            url: category.URL.get_category_name(),
            data: data,
            success: function (result) {
                callback(result);
            }
        });
    },
    getCategory: function (parentId, callback, isLast) {
        var data = {};
        if (parentId != null) {
            data = {
                categoryId: parentId
            };
        }

        $.ajax({
            type: "GET",
            url: category.URL.get_category(),
            data: data,
            success: function (result) {
                if (parentId == null) {
                    callback(result);
                } else {
                    callback(parentId, result, isLast);
                }
            }
        });
    }
};

var fileUpload = {
    URL: {
        file_upload: function () {
            return "../manage/product/upload.do";
        }
    },
    upload: function (upload_file, callback) {
        $.ajax({
            type: "POST",
            data: upload_file,
            url: fileUpload.URL.file_upload(),
            cache: false,
            processData: false,
            contentType: false,
            success: function (result) {
                callback(result);
            }
        });
    }
};

var product = {
    URL: {
        add_product: function () {
            return "../manage/product/save.do";
        },
        get_product_list: function () {
            return "../product/list.do";
        },
        get_product_detail: function () {
            return "../product/detail.do";
        }
    },
    saveProduct: function (name, price, stock, status, categoryId, subtitle,
                           mainImage, subImages, detail, callback) {
        var data = {
            name: name,
            price: price,
            stock: stock,
            status: status,
            categoryId: categoryId,
            subtitle: subtitle,
            mainImage: mainImage,
            subImages: subImages,
            detail: detail
        };
        $.ajax({
            type: 'GET',
            url: product.URL.add_product(),
            data: data,
            success: function (result) {
                callback(result);
            }
        });
    },
    getProductDetail: function (productId, callback) {
        $.ajax({
            type: 'GET',
            url: product.URL.get_product_detail(),
            data: {productId: productId},
            success: function (result) {
                console.log("获取产品详情成功");
                callback(result);
            }
        });
    },
    getProductList: function (keyword, categoryId, pageNum, pageSize, orderBy, categoryName, callback) {
        var data = {};
        if (categoryId != null) {
            data.categoryId = categoryId;
        }
        if (keyword != null) {
            data.keyword = keyword;
        }
        if (pageNum != null) {
            data.pageNum = pageNum;
        }
        if (pageSize != null) {
            data.pageSize = pageSize;
        }
        if (orderBy != null) {
            data.orderBy = orderBy;
        }

        console.log("data是:");
        console.log(data);

        $.ajax({
            type: 'GET',
            url: product.URL.get_product_list(),
            data: data,
            success: function (result) {
                if (categoryName != null) {
                    callback(result, categoryName);
                } else {
                    callback(result);
                }
            }
        });
    }
};

var shipping = {
    URL: {
        get_list: function () {
            return "../shipping/list.do";
        },
        add: function () {
            return "../shipping/add.do";
        },
        update: function () {
            return "../shipping/update.do";
        },
        del: function () {
            return "../shipping/del.do";
        }
    },
    getList: function (callback) {
        $.ajax({
            type: 'GET',
            url: shipping.URL.get_list(),
            success: function (result) {
                callback(result);
            }
        });
    },
    delShipping: function (shippingId, callback) {
        $.ajax({
            type: 'GET',
            url: shipping.URL.del(),
            data: {shippingId: shippingId},
            success: function (result) {
                callback(result);
            }
        });
    },
    updateShipping: function (id, receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, callback) {
        $.ajax({
            type: 'GET',
            url: shipping.URL.update(),
            data: {
                id: id,
                receiverName: receiverName,
                receiverMobile: receiverMobile,
                receiverProvince: receiverProvince,
                receiverCity: receiverCity,
                receiverDistrict: receiverDistrict,
                receiverAddress: receiverAddress
            },
            success: function (result) {
                console.log('更新成功');
                callback(result);
            }
        });
    },
    addShipping: function (receiverName, receiverMobile, receiverProvince, receiverCity, receiverDistrict, receiverAddress, callback) {
        $.ajax({
            type: 'GET',
            url: shipping.URL.add(),
            data: {
                receiverName: receiverName,
                receiverMobile: receiverMobile,
                receiverProvince: receiverProvince,
                receiverCity: receiverCity,
                receiverDistrict: receiverDistrict,
                receiverAddress: receiverAddress
            },
            success: function (result) {
                console.log('新增成功');
                callback(result);
            }
        });
    }
};

var cart = {
    URL: {
        add_to_cart: function () {
            return "../cart/add.do";
        },
        get_count: function () {
            return "../cart/get_cart_product_count.do";
        },
        get_list: function () {
            return "../cart/list.do";
        },
        un_select: function () {
            return "../cart/un_select.do";
        },
        select: function () {
            return "../cart/select.do";
        },
        update: function () {
            return "../cart/update.do";
        }
    },
    getCount: function (callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.get_count(),
            success: function (result) {
                console.log("获取购物车数量成功");
                callback(result);
            }
        });
    },
    addToCart: function (productId, count, callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.add_to_cart(),
            data: {productId: productId, count: count},
            success: function (result) {
                console.log("添加到购物车成功");
                callback(result);
            }
        });
    },
    getCartList: function (callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.get_list(),
            success: function (result) {
                console.log("获取购物车列表成功");
                callback(result);
            }
        });
    },
    unSelect: function (productId, callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.un_select(),
            data: {productId: productId},
            success: function (result) {
                console.log("取消勾选产品成功");
                callback(result);
            }
        });
    },
    select: function (productId, callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.select(),
            data: {productId: productId},
            success: function (result) {
                console.log("勾选产品成功");
                callback(result);
            }
        });
    },
    update: function (productId, count, callback) {
        $.ajax({
            type: 'GET',
            url: cart.URL.update(),
            data: {productId: productId, count: count},
            success: function (result) {
                console.log("更新购物车产品数量成功");
                callback(result);
            }
        });
    }
};


var order = {
    URL: {
        create: function () {
            return "../order/create.do";
        },
        pay: function () {
            return "../order/pay.do";
        },
        query_status: function () {
            return "../order/query_order_pay_status.do";
        },
        detail: function () {
            return "../order/detail.do";
        },
        list: function () {
            return "../order/list.do";
        }
    },
    getList: function (pageNum, callback) {
        var data = {};
        if (pageNum != null) {
            data = {pageNum: pageNum};
        }
        $.ajax({
            type: 'GET',
            url: order.URL.list(),
            data: data,
            success: function (result) {
                console.log("查询订单列表成功");
                callback(result);
            }
        });
    },
    createOrder: function (shippingId, callback) {
        $.ajax({
            type: 'GET',
            url: order.URL.create(),
            data: {shippingId: shippingId},
            success: function (result) {
                console.log("创建订单成功");
                callback(result);
            }
        });
    },
    payOrder: function (orderNo, callback) {
        $.ajax({
            type: 'GET',
            url: order.URL.pay(),
            data: {orderNo: orderNo},
            success: function (result) {
                console.log("生成二维码成功");
                callback(result);
            }
        });
    },
    queryStatus: function (orderNo, callback) {
        $.ajax({
            type: 'GET',
            url: order.URL.query_status(),
            data: {orderNo: orderNo},
            success: function (result) {
                console.log("查询状态成功");
                callback(result);
            }
        });
    },
    getDetail: function (orderNo, callback) {
        $.ajax({
            type: 'GET',
            url: order.URL.detail(),
            data: {orderNo: orderNo},
            success: function (result) {
                console.log("查询明细成功");
                callback(result);
            }
        });
    }
};
