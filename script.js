fetch("https://api.adviceslip.com/advice").then(function (response){
    return response.json();
}).then(function (data){
    console.log(data.slip.advice);
    $(".message").text(data.slip.advice);
});


function getonemore(){
    fetch("https://api.adviceslip.com/advice").then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data.slip.advice);
        $("#id").text(data.slip.id);
        $(".message").text(data.slip.advice);
    });
}

$(".dice").on("click", function(e){
    getonemore();
})