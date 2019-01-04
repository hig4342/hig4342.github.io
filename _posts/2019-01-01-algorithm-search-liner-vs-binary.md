---
layout: post
title:  "탐색 알고리즘 - 순차 탐색 VS 이진 탐색"
date:   2019-01-01
desc: "탐색 알고리즘 - 순차 탐색 VS 이진 탐색"
keywords: "Algorithm,Search,Liner,Binary,hig4342,Blog,순차탐색,이진탐색"
categories: [Algorithm]
tags: [Algorithm,Search,Liner,Binary]
icon: fa-cogs

---
***
1. [탐색 알고리즘이란?](#탐색-알고리즘이란)
2. [순차 탐색(Liner Search)](#순차-탐색liner-search)
3. [이진 탐색(Binary Search)](#이진-탐색binary-search)
4. [순차 탐색과 이진 탐색의 차이점](#순차-탐색과-이진-탐색의-차이점)

***

## 탐색 알고리즘이란?
컴퓨터 과학에서 탐색 알고리즘은 다양한 데이터 구조에서 특정한 값의 유무나 위치를 찾는 알고리즘이다.

## 순차 탐색(Liner Search)
순차 탐색은 리스트에서 찾고싶은 값을 시작부터 끝까지 순차적으로 찾는것이다.

다음은 순차 탐색의 의사 코드이다.
```c
/*
  Condition : 0 < begin <= end <= N
*/
Liner_Search(Arr[0,...,N-1], value, begin, end){
  for(i=begin-1; i<end; i++){
    if(Arr[i] == value) return i; // Return Location
  }
  return -1; // Not Found
}
```

다음 표의 진행과정을 보며 순차 탐색을 이해해보자.

<div class="quantity"><input id="liner_number" onchange="liner_num(this)" value="1" step="1" type="number"></div>
<button onclick="liner_search(this)" id="liner_step" style="width: 115px;">찾기</button>
<button onclick="liner_reset()">초기화</button>

|       | arr[0] | arr[1] | arr[2] | arr[3] | arr[4] | arr[5] | arr[6] | arr[7] | arr[8] | arr[9] |
|:-----:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| value |    1   |    2   |    3   |    4   |    5   |    6   |   7    |    8   |    9   |   10   |
| state |   now  |        |        |        |        |        |        |        |        |        |

<p id="liner_state">반환값 : </p>

## 이진 탐색(Binary Search)
이진 탐색은 정렬된 리스트의 중앙 값을 선택하여 그 값이 찾는 값과의 크고 작음을 비교하며 찾는 방법이다. 중앙 값이 찾는 값보다 크면 중앙 값이 최대값이 되고, 중앙 값이 찾는 값보다 작으면 중앙 값이 최소값이 된다.

다음은 이진 탐색의 의사 코드이다.
```c
Binary_Search(Arr[0,...,N-1], value, low, high){
  if (high <= low) return -1; // Not Found
  mid = (low + high) / 2
  if (Arr[mid] > value) return Binary_Search(Arr, value, low, mid-1)
  else if (Arr[mid] < value) return Binary_Search(Arr, value, mid+1, high)
  else return mid // if(Arr[mid] == value) Return Location
}
```

다음 표의 진행과정을 보며 이진 탐색을 이해해보자.

<div class="quantity"><input id="binary_number" onchange="binary_num(this)" value="1" step="1" type="number"></div>
<button onclick="binary_search(this)" id="binary_step" style="width: 115px;">찾기</button>
<button onclick="binary_reset()">초기화</button>

|       | arr[0] | arr[1] | arr[2] | arr[3] | arr[4] | arr[5] | arr[6] | arr[7] | arr[8] | arr[9] |
|:-----:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| value |    1   |    2   |    3   |    4   |    5   |    6   |   7    |    8   |    9   |   10   |
| state |   low  |        |        |        |   mid  |        |        |        |        |  high  |

<p id="binary_state">반환값 : </p>

## 순차 탐색과 이진 탐색의 차이점
순차 탐색은 리스트에서 찾고싶은 값을 시작부터 끝까지 찾으므로 $$O(n)$$의 시간복잡도를 가진다.  
이진 탐색은 값을 찾아야하는 리스트가 절반씩 줄어들기 때문에 $$O(logn)$$의 시간 복잡도를 가진다.  
이를 보면 단순히 이진 탐색 알고리즘이 성능이 우수해 보이지만 이진 탐색은 데이터가 정렬되있어야만 사용가능한 알고리즘이다  
보통 정렬 알고리즘의 시간 복잡도가 $O(nlogn)$의 시간복잡도를 가지는 것을 고려하면 정렬을 해서 이진 탐색을 사용할수도 없다.  
리스트의 정렬유무에 따라 사용자가 적합한 알고리즘을 선택해야한다.

<script src="{{"/static/js/liner_vs_binary.js"| prepend: site.baseurl }}"></script>
<script src="{{"/static/js/quantity.js"| prepend: site.baseurl }}"></script>
