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
			"aTargets": [0,11]
		} // 不参与排序的列
	]
});

/*查看*/
function article_view(obj) {
	var title=['订单号','客户名称','订单总数量','订单总金额'];
	var type=['text','text','text','text'];
	var id=['order_code','customer','order_num','order_piece']
	edit_show(title,id,type,'400px','auto','订单数据');
	verification_val(id[0],'isBlank');
}

$('.view_btn').on('click', function() {
	article_view($(this));
});