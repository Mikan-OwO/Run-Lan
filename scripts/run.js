$("#btn1").on("click", async function() {
  const test = $("textarea[name='code']").val();
  fetch("https://run-lan.herokuapp.com/js", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    },
    body: test
  })
    .then(res => res.json())
    .then(res => {
      if(res.error){
        $("#result").val(res.error).addClass("result-content-error")
      }else{
        $("#result").val(res.result).removeClass("result-content-error")
      }
    });
});
