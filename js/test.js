console.info("进入axios");
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
});
instance .post("/type/test", Qs.stringify({name:"name",age:12})).then(function (value) { console.info(value.data) });



//获取默认blogtype
axios.get("/type/defaultType").then(function (data) {
    if (data.data.retCode==0){
        new Vue({
            el:'#blog_type',
            data:{
                types:data.data.retMsg
            }
        })
    }else{
        console.info("出现错误，错误码为"+data.data.retCode);
        console.info("错误信息为："+data.data.retMsg)
    }
})


//获取默认blog主体
axios.get("/type/test").then(function(data){
    new Vue({
            el:'.blogsbox',
            data:{
                blogs:data.data
            }
    })
})


var app = new Vue({
  el: '#app',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
                    var file = document.getElementById("file").files[0];
                    var formdata1=new FormData();// 创建form对象
                    formdata1.append('img',file,file.name);
                        // const instance=axios.create({
                        //   withCredentials: true
                        // })
                    var config = {
                    headers:{'Content-Type':'multipart/form-data'}
                    };
                    axios.post('/uploadImg',formdata1,config)
                          .then(response=>{
                            console.log(response.data);
                    })
                    
    }
  }
})


