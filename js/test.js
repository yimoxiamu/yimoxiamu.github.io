console.info("进入axios");
axios.post('/test', {
    name: 'Fred',
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });