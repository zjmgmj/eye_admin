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

/*查看*/
/*function article_view(obj) {
	var title=['订单号','客户名称','订单总数量','订单总金额'];
	var type=['text','text','text','text'];
	var id=['order_code','customer','order_num','order_piece']
	edit_show(title,id,type,'400px','auto','订单数据');
	verification_val(id[0],'isBlank');
}*/
function billing(url) {
	var html = '';
	$.get(url, function(data) {
		html = data;
		layer.open({
			type: 1,
			title: '发货',
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

$('.audit_btn').on('click', function() {
	billing('/eye_admin/nested_page/ship.html');
});

$('.view_btn').on('click', function() {
	article_view($(this));
});