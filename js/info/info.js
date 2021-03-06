//初始化文章url
var url = window.location.href;
var strs=url.split('?');
var blogid=strs[1];


var oneConfig={
    baseURL:"http://localhost:8090"
}

//此处为默认标签VUE组件
var defaultType=null;
var defType=new Vue({
    el:'.defaultType',
    data:{
        defaultType:defaultType
    }
})

//获取默认文章类型
axios.get("/type/defaultType",oneConfig).then(response=>{
    if (response.data.code==0) {
        defType.defaultType=response.data.data;
    }else{
        console.info(response.data.code);
        console.info(response.data.msg)       
    }
})


//阅读次数增加
axios.post("/main/addReadCount",Qs.stringify({'id':blogid}),oneConfig).then(response=>{
    if(response.data.code!=0){
        console.info(response.data.code);
        console.info(response.data.msg);
    }
})

//时间格式化
var padDate=function(va){
     va=va<10?'0'+va:va;
     return va
}


//此处为文章主体VUE组件定义
var blogone=null;
var blog_one=new Vue({
    el:'.newsview',        
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
        blogone:blogone
    },
    methods:{
        addLikeCount:function(event){
            var strLike=Number(event.currentTarget.nextElementSibling.innerText);
            event.currentTarget.nextElementSibling.innerText=strLike+1;
            axios.post("/main/addLikeCount",Qs.stringify({"id":blogid}),oneConfig).then(response=>{
                if(response.data.code!=0){
                    console.info(response.data.code);
                    console.info(response.data.msg);
                }
            })
        }
    }
})
//根据uuid取得文章内容
axios.post("/main/showOneBlog",Qs.stringify({'id':blogid}),oneConfig).then(response=>{
    if(response.data.code==0){
        blog_one.blogone=response.data.data;      
    }else{
        console.info(response.data.code);
        console.info(response.data.msg);
    }
});


var same_Type_Blog=null;
var sameType=new Vue({
    el:'.sameType',
    data:{
        same_Type:same_Type_Blog
    }
})

//根据uuid取得相同文章标题以及连接
axios.post("/main/getBlogByType",Qs.stringify({'id':blogid}),oneConfig).then(response=>{
    if(response.data.code==0){
        sameType.same_Type=response.data.data;
        console.info(sameType.same_Type);
    }else{
        console.info(response.data.code);
        console.info(response.data.msg);
    }
});



