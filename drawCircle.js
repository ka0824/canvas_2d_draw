const canvas5 = document.getElementById("my-canvas5");
const ctx5 = canvas5.getContext("2d");

ctx5.beginPath();
// 중심 x 좌표,  중심 y, 좌표, 반지름, 원의 시작 각도, 원의 끝 각도
// 시작각도, 끝각도를 통해 원의 일부만 그릴 수도 있음
ctx5.arc(100, 100, 50, 0, 2 * Math.PI);
ctx5.fillStyle = "white";
ctx5.fill();
ctx5.strokeStyle = "black";
ctx5.lineWidth = 2;
ctx5.stroke();
