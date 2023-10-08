const canvas1 = document.getElementById("my-canvas1");
const ctx1 = canvas1.getContext("2d");

// 시작점, 끝점 좌표 정하기
const startX = 50;
const startY = 50;
const endX = 100;
const endY = 100;

// 선 설정 정하기
ctx1.strokeStyle = "black";
ctx1.lineWidth = 2;

// 선 그리기 시작
ctx1.beginPath();

// 시작점 설정
ctx1.moveTo(startX, startY);

// 끝점 설정
ctx1.lineTo(endX, endY);

// 선 그리기
ctx1.stroke();
