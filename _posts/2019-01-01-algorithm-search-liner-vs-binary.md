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

1. [탐색 알고리즘이란?](#탐색-알고리즘이란)
2. [순차 탐색(Liner Search)](#순차-탐색liner-search)
3. [이진 탐색(Binary Search)](#이진-탐색binary-search)
4. [순차 탐색과 이진 탐색의 차이점](#순차-탐색과-이진-탐색의-차이점)

## 탐색 알고리즘이란?
컴퓨터 과학[^1] 에서 탐색 알고리즘은 다양한 데이터 구조에서 특정한 값의 유무나 위치를 찾는 알고리즘이다.

## 순차 탐색(Liner Search)
순차 탐색은 리스트에서 찾고싶은 값을 시작부터 끝까지 순차적으로 찾는것이다.

다음은 순차 탐색의 의사코드[^2]이다.
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

## 이진 탐색(Binary Search)
이진 탐색은 정렬된 리스트의 중앙 값을 선택하여 그 값이 찾는 값과의 크고 작음을 비교하며 찾는 방법이다. 중앙 값이 찾는 값보다 크면 중앙 값이 최대값이 되고, 중앙 값이 찾는 값보다 작으면 중앙 값이 최소값이 된다.

다음은 이진 탐색의 의사코드이다.
```c
Binary_Search(Arr[0,...,N-1], value, low, high){
  if (high <= low) return -1; // Not Found
  mid = (low + high) / 2
  if (Arr[mid] > value) return Binary_Search(Arr, value, low, mid-1)
  else if (Arr[mid] < value) return Binary_Search(Arr, value, mid+1, high)
  else return mid // if(Arr[mid] == value) Return Location
}
```

## 순차 탐색과 이진 탐색의 차이점
순차 탐색은 리스트에서 찾고싶은 값을 시작부터 끝까지 찾으므로 $$$O(n)$$$의 시간복잡도를 가지고, 이진 탐색은 $$$O(log n)$$$의 시

[^1]: 전산 이론, 하드웨어 및 소프트웨어에 중점을 둔 정보과학의 한 분야이다.
[^2]: Pseudocode, 프로그램을 작성하기 전에 알고리즘의 과정을 나타내어 특정 언어로 작성한게 아닌 코드를 흉내 내어 짜여진 코드이다. 위 본문에선 C 스타일의 의사코드를 작성했다.
