function print(message) {
  var outputDiv = document.getElementById('output');
  console.log('in print function');
  outputDiv.innerHTML = message;
  }

  /*function buildList(list) {
  console.log('In buildList');
  var HTMLlist = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
   HTMLlist += '<li>' + list[i] + '</li>';
  }
  HTMLlist += '</ol>';
  return HTMLlist;
 }
 */
 var student;
 var message = '';
 

 for (var i=0; i < students.length; i +=1) {
  //var answer = prompt(quiz[i][0]);
  student = students[i];
  message += '<h2>Name: ' + students[i].name + '</h2>';
  message += '<p>Track: ' + students[i].track + '</p>';
  message += '<p>Achievements: ' + students[i].achievements + '</p>';
  message += '<p>Points: ' + students[i].points + '</p>';

}
 print(message); 