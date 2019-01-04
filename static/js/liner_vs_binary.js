var count_kor = ["영", "첫", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열"];
var arr = [1,2,3,4,5,6,7,8,9,10];
var liner_loc = 1;
var low = 0;
var high = 9;
var liner_table = document.getElementsByTagName("table")[0];
var liner_val = document.getElementById("liner_number").value;
var binary_table = document.getElementsByTagName("table")[1];
var binary_val = document.getElementById("binary_number").value;

function liner_search(id){
  if(liner_loc<=10){
    id.innerHTML = count_kor[liner_loc] + "번째 단계";
    var now_text = table_loc(liner_table, 1, liner_loc).innerHTML;
    if(now_text == liner_val){
      table_loc(liner_table, 2, liner_loc).innerHTML = "O";
      table_loc(liner_table, 2, liner_loc).style.color = "#0000dd";
      liner_state.innerHTML = "반환값 : " + (liner_loc-1);
    }
    else{
      if(i==10) liner_state.innerHTML = "반환값 : -1";
      table_loc(liner_table, 2, liner_loc).innerHTML = "X";
      table_loc(liner_table, 2, liner_loc).style.color = "#dd0000";
      table_loc(liner_table, 2, liner_loc+1).innerHTML = "now";
      i++;
    }
  }
}

function binary_search(id){
  if(high <= low){
    binary_state.innerHTML = "반환값 : " + (i-1);
  }
}

function liner_num(val){
  liner_val = document.getElementById("liner_number").value;
}

function liner_reset(){
  shuffle(arr);
  for(var i=0; i<10; i++) table_loc(liner_table, 1, i+1).innerHTML = arr[i];
  liner_step.innerHTML = "찾기";
  liner_state.innerHTML = "반환값 :";
  for(var i=1; i<=10; i++){
    table_loc(liner_table, 2, i).innerHTML = "";
    table_loc(liner_table, 2, i).style.color = "#676a6c";
  }
  table_loc(liner_table, 2, 1).innerHTML = "now";
  liner_loc=1;
}

function binary_reset(){
  binary_step.innerHTML = "찾기";
  binary_state.innerHTML = "반환값 :";
  for(var i=1; i<=10; i++){
    table_loc(binary_table, 2, i).innerHTML = "";
    table_loc(binary_table, 2, i).style.color = "#676a6c";
  }
  low = 1;
  high = 9;
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
