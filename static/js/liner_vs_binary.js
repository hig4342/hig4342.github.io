var count_kor = ["영", "첫", "두", "세", "네", "다섯", "여섯", "일곱", "여덟", "아홉", "열"];
var arr = [1,2,3,4,5,6,7,8,9,10];
var liner_loc = 1;
var low = 1;
var high = 10;
var liner_table = document.getElementsByTagName("table")[0];
var liner_val = document.getElementById("liner_number").value;
var binary_table = document.getElementsByTagName("table")[1];
var binary_val = document.getElementById("binary_number").value;
var binary_count = 0;

function liner_search(id){
  if(liner_loc<=10){
    id.innerHTML = count_kor[liner_loc] + "번째 단계";
    var now_val = table_loc(liner_table, 1, liner_loc).innerHTML;
    if(now_val == liner_val){
      table_loc(liner_table, 2, liner_loc).innerHTML = "O";
      table_loc(liner_table, 2, liner_loc).style.color = "#0000dd";
      liner_state.innerHTML = "반환값 : " + (liner_loc-1);
    }
    else{
      if(liner_loc==10) liner_state.innerHTML = "반환값 : -1";
      table_loc(liner_table, 2, liner_loc).innerHTML = "X";
      table_loc(liner_table, 2, liner_loc).style.color = "#dd0000";
      table_loc(liner_table, 2, liner_loc+1).innerHTML = "now";
      liner_loc++;
    }
  }
}

function binary_search(id){
  if(high < low){
    binary_return.innerHTML = "반환값 : -1";
  }
  else{
    var mid = parseInt((low + high) /2);
    var mid_val = table_loc(binary_table, 1, mid).innerHTML;
    if(binary_return.innerHTML == "반환값 : ") binary_count++;
    id.innerHTML = count_kor[binary_count] + "번째 단계";
    if(Number(mid_val) > Number(binary_val)){
      table_loc(binary_table, 2, high).innerHTML = "";
      table_loc(binary_table, 2, mid).innerHTML = "<-";
      table_loc(binary_table, 2, mid).style.color = "#dd0000";
      high = mid-1;
      if(high>0)binary_state();
    }
    else if(Number(mid_val) < Number(binary_val)){
      table_loc(binary_table, 2, low).innerHTML = "";
      table_loc(binary_table, 2, mid).innerHTML = "->";
      table_loc(binary_table, 2, mid).style.color = "#dd0000";
	  low = mid+1;
      binary_state();
    }
    else{
      binary_return.innerHTML = "반환값 : " + (mid - 1);
      table_loc(binary_table, 2, mid).style.color = "#0000dd";
    }
  }
}

function liner_num(val){
  liner_val = document.getElementById("liner_number").value;
}
function binary_num(val){
  binary_val = document.getElementById("binary_number").value;
}

function liner_reset(){
  shuffle(arr);
  for(var i=0; i<10; i++) table_loc(liner_table, 1, i+1).innerHTML = arr[i];
  liner_step.innerHTML = "찾기";
  liner_state.innerHTML = "반환값 : ";
  for(var i=1; i<=10; i++){
    table_loc(liner_table, 2, i).innerHTML = "";
    table_loc(liner_table, 2, i).style.color = "#676a6c";
  }
  table_loc(liner_table, 2, 1).innerHTML = "now";
  liner_loc=1;
}

function binary_reset(){
  binary_step.innerHTML = "찾기";
  binary_return.innerHTML = "반환값 : ";
  for(var i=1; i<=10; i++){
    table_loc(binary_table, 2, i).innerHTML = "";
    table_loc(binary_table, 2, i).style.color = "#676a6c";
  }
  low = 1;
  high = 10;
  binary_state();
}

function binary_state(){
  var mid = parseInt((low + high) /2);
  table_loc(binary_table, 2, low).innerHTML = "low";
  table_loc(binary_table, 2, high).innerHTML = "high";
  table_loc(binary_table, 2, mid).innerHTML = "mid";
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
