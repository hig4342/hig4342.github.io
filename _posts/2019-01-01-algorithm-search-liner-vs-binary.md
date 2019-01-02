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

## 탐색 알고리즘이란?
컴퓨터 과학[^1] 에서 탐색 알고리즘은 다양한 데이터 구조에서 특정한 값의 유무나 위치를 찾는 알고리즘이다.

## 순차 탐색(Liner Search)
순차 탐색은 리스트에서 찾고싶은 값을 맨 앞부터 맨 뒤까지 순차적으로 찾는것이다.

다음은 순차 탐색의 의사코드[^2]이다.
```c
/*
  Condition : 0 < begin <= end <= N
*/
LinerSearch(Arr[0..N-1], value, begin, end){
  for(i=begin-1; i<end; i++){
    if(Arr[i] == value) return i;
  }
  return -1;
}
```

시작 위치부터 종료 위치까지 순차적으로 확인하여

## 이진 탐색(Binary Search)

[^1]: 전산 이론, 하드웨어 및 소프트웨어에 중점을 둔 정보과학의 한 분야이다.
[^2]: Pseudocode, 프로그램을 작성하기 전에 알고리즘의 과정을 나타내어 특정 언어로 작성한게 아닌 코드를 흉내 내어 짜여진 코드이다. 위 본문에선 C 스타일의 의사코드를 작성했다.
