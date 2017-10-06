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
			"aTargets": [0, 10]
		} // 不参与排序的列
	]
});
/*添加*/
function article_add(title, url, w, h) {
	var window_title='添加';
	var title=['订单信息','客户信息','产品信息'];
	var content_title=[
		['客户名称','订单时间','开单人员','产品','数量','价格','快递方式','备注'],
		['单位名称','地址','联系人','电话','客户类型','客户价格','管辖业务员','当前欠款'],
		['品牌','型号','片型','折算率','销售价格']
	];
	var content_type=[
		['text','time','text','text','number','text','text','text'],
		['text','text','text','text','text','text','text','text'],
		['select','text','text','text','text']
	];
	var content_id=[
		['customer_name','order_time','billing_staff','product','price','express','remarks'],
		['company_name','add','name','tel','customer_type','customer_price','clerk','arrears'],
		['brand','model','chip','conversion','price']
	];
	var select_content=[['品牌1','品牌2','品牌3']];
	edit_large_show(window_title,title,content_title,content_type,content_id,'1200px','auto',select_content);
	verification_val(content_id[0][0],'isBlank');
}
/*编辑*/
function article_edit(obj) {
	var window_title='编辑';
	var title=['订单信息','客户信息','产品信息'];
	var content_title=[
		['客户名称','订单时间','开单人员','产品','数量','价格','快递方式','备注'],
		['单位名称','地址','联系人','电话','客户类型','客户价格','管辖业务员','当前欠款'],
		['品牌','型号','片型','折算率','销售价格']
	];
	var content_type=[
		['text','time','text','text','number','text','text','text'],
		['text','text','text','text','text','text','text','text'],
		['select','text','text','text','text']
	];
	var content_id=[
		['customer_name','order_time','billing_staff','product','price','express','remarks'],
		['company_name','add','name','tel','customer_type','customer_price','clerk','arrears'],
		['brand','model','chip','conversion','price']
	];
	var select_content=[['品牌1','品牌2','品牌3']];
	edit_large_show(window_title,title,content_title,content_type,content_id,'1200px','auto',select_content);
	verification_val(content_id[0][0],'isBlank');
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
$('.edit_close,.mask').on('click', function() {
	$('.edit_content').hide();
	$('.mask').hide();
});
$('.add_btn').on('click', function() {
	article_add();
});
$('.del_btn').on('click', function() {
	article_del($(this));
});
$('#warehouse,#brand,#category,#name,#specification,#luminosity').on('blur', function() {
	Reg.isBlank($(this).val(), $(this));
});