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
			"aTargets": [0]
		} // 不参与排序的列
	]
});
/*添加*/
/*function article_add(title, url, w, h) {
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
}*/
/*编辑*/
/*function article_edit(obj) {
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
}*/


//开单
function billing(url) {
	var html = '';
	$.get(url, function(data) {
		html = data;
		layer.open({
			type: 1,
			title: '开单',
			area: ['80%', '80%'],
			skin: 'edit_content', //样式类名
			closeBtn: 1, //不显示关闭按钮
			//anim: 2,
			shadeClose: true, //开启遮罩关闭
			content: html
		});
		$('.layui-layer-ico').addClass('Hui-iconfont').addClass('Hui-iconfont-close');
	});

}

$('.billing_btn').on('click', function() {
	billing('/eye_admin/nested_page/customized_billing.html');
});



/*$('.edit_btn').on('click', function() {
	article_edit($(this));
});
$('.add_btn').on('click', function() {
	article_add();
});
*/