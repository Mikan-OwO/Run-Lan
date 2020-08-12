function adustTextbox(obj) {
  obj.style.height = "80px";
  const scrollHeight = parseInt(obj.scrollHeight);

  obj.style.height = scrollHeight + "px";
}
