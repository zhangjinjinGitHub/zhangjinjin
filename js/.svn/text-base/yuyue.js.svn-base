


	/*(function (){
		$("#go").click(function (){
			var pho = document.getElementById("phone").value;
			if(!(/^1[34578]\d{9}$/.test(pho))){
				alert("手机号码有误，请重填，谢谢！");
				return false;
			} else if(pho == ""){
				alert("手机号不能为空！");
			} else {
				return true;
			}
			var use = document.getElementById("username").value;
			if(use == ""){
				alert("用户名不能为空！");
				return false;
			} else {
				return true;
			}
		});
	})();
*/

	(function (){
		$("#go").click(function (){
			$.ajax({
				type:"get",
				url:"https://datainfo.duapp.com/shopdata/userinfo.php",
				data:{status:"register",userID:$("#username").val(),password:$("#phone").val()},
				success:function (result){
					if(result == 1){
					
					} else if(result == 0){
						alert("用户名重名，请重新输入一个新的名字，谢谢！");
					}
					
					var pho = document.getElementById("phone").value;
					if(!(/^1[34578]\d{9}$/.test(pho))){
						alert("手机号码有误，请重填，谢谢！");
						return false;
						
					} else if(pho == ""){
						alert("手机号不能为空！");
					} else {
						
					}
					
					var date = document.getElementById("date").value;
					if(date == ""){
						alert("请选择日期");
						
					} else {
						
						alert("您好，您已经预约成功，恭候您的大驾光临！");
						location.href = "index.html";
					}
					
				}
			});
		});
	})();

