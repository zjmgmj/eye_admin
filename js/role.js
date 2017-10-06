$('.table-sort').dataTable({
	"aaSorting": [
		[1, "desc"]
	], //默认第几个排序
	"bStateSave": true, //状态保存
	"bFilter":false,//过滤
	"pading": false,
	"sDom":'rt<"bottom"ilp>',//改变元素位置
	"aoColumnDefs": [
		//{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示
		{
			"orderable": false,
			"aTargets": [0, 4]
		} // 不参与排序的列
	]
});
/*添加*/
function article_add(title, url, w, h) {
	edit_authority()
}
/*编辑*/
function article_edit(obj) {
	edit_authority()
}
/*删除*/
function article_del(obj, id) {
	layer.confirm('确认要删除吗？', function(index) {
		/*$.ajax({
			type: 'POST',
			url: '',
			dataType: 'json',
			success: function(data) {
				$(obj).parents("tr").remove();
				layer.msg('已删除!', {
					icon: 1,
					time: 1000
				});
			},
			error: function(data) {
				console.log(data.msg);
			},
		});*/
		$(obj).parents("tr").remove();
		layer.msg('已删除!', {
			icon: 1,
			time: 1000
		});
	});
}

$('.edit_btn').on('click', function() {
	article_edit($(this));
});
$('.add_btn').on('click', function() {
	article_add();
});
$('.del_btn').on('click', function() {
	article_del($(this))
});

function edit_authority(){
	var access_auth='<form><ul class="edit_from edit_check">'+
	'<li class="edit_check ">'+
	'<dt class="edit_check_title"><input type="checkbox" name="basic_data" id="basic_data" value="" /><label for="basic_data">基本资料</label></dt>'+
	'<dd class="edit_check_list"><input type="checkbox" name="basic_data" id="employee" value="" /><label for="employee">员工资料</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="basic_data" id="product" value="" /><label for="product">产品资料</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="basic_data" id="customer" value="" /><label for="customer">客户资料</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="basic_data" id="supplier" value="" /><label for="supplier">供应商资料</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="basic_data" id="authority" value="" /><label for="authority">权限管理</label></dd>'+
	'</li>'+
	'<li class="edit_check ">'+
	'<dt class="edit_check_title"><input type="checkbox" name="order_m" id="order_m" value="" /><label for="order_m">订单管理</label></dt>'+
	'<dd class="edit_check_list"><input type="checkbox" name="order" id="order_k" value="" /><label for="order_k">订单开单</label></dd>'+
	'</li>'+
	'<li class="edit_check ">'+
	'<dt class="edit_check_title"><input type="checkbox" name="order_r" id="order_r" value="" /><label for="order_r">订单审核</label></dt>'+
	'<dd class="edit_check_list"><input type="checkbox" name="order" id="order_review" value="" /><label for="order_review">订单审核</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="order" id="library_review" value="" /><label for="library_review">出入库审核</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="order" id="Anti-trial" value="" /><label for="Anti-trial">订单反审</label></dd>'+
	'</li>'+
	'<li class="edit_check ">'+
	'<dt class="edit_check_title"><input type="checkbox" name="warehouse" id="warehouse_M" value="" /><label for="warehouse_M">仓库管理</label></dt>'+
	'<dd class="edit_check_list"><input type="checkbox" name="warehouse" id="order_status" value="" /><label for="order_status">订单状态管理</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="warehouse" id="pending_order" value="" /><label for="pending_order">待发货订单</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="warehouse" id="supplier_storage" value="" /><label for="supplier_storage">供应商入库</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="warehouse" id="order_printing" value="" /><label for="order_printing">订单打印</label></dd>'+
	'<dd class="edit_check_list"><input type="checkbox" name="warehouse" id="warehouse_material" value="" /><label for="warehouse_material">仓库物料</label></dd>'+
	'</li>'+
	'<li class="edit_check ">'+
	'<dt class="edit_check_title"><input type="checkbox" name="finance" id="finance_m" value="" /><label for="finance_m">财务管理</label></dt>'+
	'<dd class="edit_check_list"><input type="checkbox" name="finance" id="customer_accounts" value="" /><label for="customer_accounts">客户账务管理</label></dd>'+
	'</li>'+
	'<li class=" submit"><button class="blue white_text">保存</button></li>'+
	'</ul></form>';
	layer.tab({
		//type: 1,
		//title:'权限管理',
		area: ['1200px', 'auto'],
		skin: 'edit_content', //样式类名
		closeBtn: 1, //0不显示关闭按钮 1显示
		//anim: 2,
		//maxmin: true, //开启最大化最小化按钮
		shadeClose: true, //开启遮罩关闭
		//content: html
		tab: [{
    			title: '访问授权', 
   				content: access_auth
  			}, {
    			title: '分类授权', 
    			content: access_auth
  			}, {
    			title: '成员授权', 
    			content: access_auth
  			}]
		});
	$('.layui-layer-close').addClass('Hui-iconfont').addClass('Hui-iconfont-close');
}



