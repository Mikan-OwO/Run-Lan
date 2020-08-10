function adustTextbox(obj) {
  obj.style.height = "80px";
  const wSclollHeight = parseInt(obj.scrollHeight);

  obj.style.height = wSclollHeight + "px";
}
