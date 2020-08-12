function adustTextbox(obj) {
  const content = document.getElementsByClassName('content')[0];
  
  obj.style.height = "80px";
  const scrollHeight = parseInt(obj.scrollHeight);

  obj.style.height = scrollHeight + "px";
  
  content.scrollHeight = content.scrollHeight + scrollHeight;
}
