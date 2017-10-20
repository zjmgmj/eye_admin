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

/*
var setting = {
	view: {
		dblClickExpand: false,
		showLine: false,
		selectedMulti: false
	},
	data: {
		simpleData: {
			enable:true,
			idKey: "id",
			pIdKey: "pId",
			rootPId: ""
		}
	},
	callback: {
		beforeClick: function(treeId, treeNode) {
			var zTree = $.fn.zTree.getZTreeObj("tree");
			if (treeNode.isParent) {
				zTree.expandNode(treeNode);
				return false;
			} else {
				demoIframe.attr("src",treeNode.file + ".html");
				return true;
			}
		}
	}
};

var zNodes =[
	{ id:1, pId:1, name:"2017-10-09", open:true},
		{ id:111, pId:1, name:"KZ-0001-130410-006"},
		{ id:112, pId:1, name:"KZ-0001-130410-007"},
		{ id:113, pId:1, name:"KZ-0001-130410-008"},
		{ id:114, pId:1, name:"KZ-0001-130410-009"},
		{ id:115, pId:1, name:"KZ-0001-130410-010"},
	{ id:2, pId:2, name:"2017-10-10", open:true},
		{ id:211, pId:2, name:"KZ-0001-130410-006"},
		{ id:212, pId:2, name:"KZ-0001-130410-007"},
		{ id:213, pId:2, name:"KZ-0001-130410-008"},
		{ id:214, pId:2, name:"KZ-0001-130410-009"},
		{ id:215, pId:2, name:"KZ-0001-130410-010"},
];
		
var code;
		
function showCode(str) {
	if (!code) code = $("#code");
	code.empty();
	code.append("<li>"+str+"</li>");
}
		
$(document).ready(function(){
	var t = $("#treeDemo");
	t = $.fn.zTree.init(t, setting, zNodes);
	demoIframe = $("#testIframe");
	//demoIframe.on("load", loadReady);
	var zTree = $.fn.zTree.getZTreeObj("tree");
	//zTree.selectNode(zTree.getNodeByParam("id",'11'));
});*/



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

$('.audit_btn').on('click', function() {
	billing('/eye_admin/nested_page/audit.html');
});



