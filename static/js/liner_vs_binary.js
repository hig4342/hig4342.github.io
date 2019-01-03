var count_kor = ["영", "첫", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열"];
var post_kor = ["이", "이", "가", "이", "가", "가", "이", "이", "이", "가", "이"];
var arr = [1,2,3,4,5,6,7,8,9,10];
var i = 1;
var liner_table = document.getElementsByTagName("table")[0];
var liner_val = document.getElementById("liner_number").value;

liner_reset();

function liner_search(id){
  if(i<=10){
    id.innerHTML = count_kor[i] + "번째 단계";
    var now_text = table_loc(liner_table, 1, i).innerHTML;
    if(now_text == liner_val){
      table_loc(liner_table, 2, i).innerHTML = "O";
      table_loc(liner_table, 2, i).style.color = "#0000dd";
      liner_state.innerHTML += (i-1);
      i=11;
    }
    else{
      table_loc(liner_table, 2, i).innerHTML = "X";
      table_loc(liner_table, 2, i).style.color = "#dd0000";
      table_loc(liner_table, 2, i+1).innerHTML = "now";
      i++;
    }
  }
}

function liner_num(val){
  liner_val = document.getElementById("liner_number").value;
}

function liner_reset(){
  shuffle(arr);
  for(var j=0; j<10; j++) table_loc(liner_table, 1, j+1).innerHTML = arr[j];
  liner_step.innerHTML = "찾기";
  liner_state.innerHTML = "반환값 : ";
  table_loc(liner_table, 2, 1).innerHTML = "now";
  table_loc(liner_table, 2, 1).style.color = "#676a6c";
  for(i=2; i<=10; i++){
    table_loc(liner_table, 2, i).innerHTML = "";
    table_loc(liner_table, 2, i).style.color = "#676a6c";
  }
  i=1;
}

function table_loc(table, rowN, colN){//row = 행, col = 열
  var row = table.getElementsByTagName("tr")[rowN];
  var col = row.getElementsByTagName("td")[colN];
  return col;
}

function shuffle(a) {
  for (var j = a.length-1; j>=0; j--) {
    var rand = Math.floor(Math.random() * (j+1));
    var temp = a[j];
    a[j] = a[rand];
    a[rand] = temp;
  }
}
