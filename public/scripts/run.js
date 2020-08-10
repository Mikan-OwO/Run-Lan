$("#btn1").on("click", async function() {
  const test = $("textarea[name='code']").val();
  fetch("/js", {
    method: "POST",
    headers: {
      "Content-Type": "text/javascript; charset=utf-8"
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
