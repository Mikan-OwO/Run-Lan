$("#btn1").on("click", async function() {
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
        $("#result").val(String(res.result)).removeClass("result-content-error")
      }
    })
    .then(() => adjustResultBox());
});

$("#Node-btn1").on("click", async function() {
  const code = $("textarea[name='Node-code']").val();
  fetch("https://run-lan.herokuapp.com/Node", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    },
    body: code
  })
    .then(res => res.json())
    .then(res => {
      if(res.error){
        $("#Node-result").val(res.error).addClass("result-content-error")
      }else{
        $("#Node-result").val(String(res.result)).removeClass("result-content-error")
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
