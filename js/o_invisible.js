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

//开单
function billing(url) {
	var html = '';
	$.get(url, function(data) {
		html = data;
		layer.open({
			type: 1,
			title: '开单',
			area: ['1400px', '800px'],
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
	billing('/eye_admin/o_frames_edit.html');
});