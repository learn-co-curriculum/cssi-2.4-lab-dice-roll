function renderRoll(){
  $('#results').text(roll());
}

function renderTwo(){
  $('#results').text(rollTwo());
}

$('button').click(renderRoll);
$('#two').click(renderTwo);
