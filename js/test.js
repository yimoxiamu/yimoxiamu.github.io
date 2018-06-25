console.info("进入axios");
// var instance = axios.create({
//     headers: {'content-type': 'application/x-www-form-urlencoded'}
// });
// instance .post("/test", Qs.stringify({"name":"name"})).then(function (value) { console.info(value) });

//获取默认blogtype
axios.get("/type/defaultType").then(function (data) {
    console.info(data.data.retMsg[0].id);
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


