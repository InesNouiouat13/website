function displayContent(id_content){
  var content = document.getElementById(id_content).innerHTML
  var content_div = document.getElementById('content_div')
  content_div.innerHTML = ''
  content_div.innerHTML = '<p class="animated-text">'+content+'</p>'
}