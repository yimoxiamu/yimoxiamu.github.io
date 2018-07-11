console.info("进入");


var blogmain=null;


var padDate=function(va){
     va=va<10?'0'+va:va;
     return va
}

var mainconfig={
    baseURL:"http://localhost:8090"
}
//获取默认blog主体
    var blogsbox=new Vue({
        el:"#blogsbox",
        filters:{
            formatDate:function (val) {
            var value=new Date(val);
            var year=value.getFullYear();
            var month=padDate(value.getMonth()+1);
            var day=padDate(value.getDate());
            return year+'-'+month+'-'+day;
 
        }
        },
        data:{
            blogmain:blogmain
        }
    })
axios.get("/main/showAllBlog",mainconfig).then(response=>{
    if(response.data.code==0){
        console.info(response.data.data)
        blogsbox.blogmain=response.data.data;
    }else{
        console.info(response.data.code);
        console.info(response.data.msg);
    }
});


