$("#btn1").on("click", async () => {
  const code = $("textarea[name='code']").val();
  fetch("https://run-lan.herokuapp.com/js", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    },
    body: code
  })
    .then(res => res.json())
    .then(res => {
      if(res.error){
        $("#result").val(res.error).addClass("result-content-error")
      }else{
        $("#result").val(res.result).removeClass("result-content-error")
      }
    })
    .then(() => adjustResultBox());
});

$("#btn2").on("click", async () => {
  const code = $("textarea[name='code']").val();
  fetch("https://run-lan.herokuapp.com/format", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    },
    body: code
  })
  .then(res => res.json())
  .then(res => {
    if(res.error){
      $("#result").val(res.error).addClass("result-content-error")
    }else{
      $("#code").val(res.result);
    }
  })
  .then(() => adjustResultBox());
});
    
const adjustResultBox = () => {
  const content = document.getElementsByClassName('content')[0];
  const result = document.getElementById('result');
  console.log(result.style.height);
  
  result.style.height = "20px";
  const scrollHeight = parseInt(result.scrollHeight);
  
  result.style.height = scrollHeight + "px";
  
  content.scrollHeight = content.scrollHeight + scrollHeight;
}
