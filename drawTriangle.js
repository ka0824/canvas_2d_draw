const canvas3 = document.getElementById("my-canvas3");
const ctx3 = canvas3.getContext("2d");

ctx3.beginPath();
ctx3.moveTo(100, 50); // 시작점
ctx3.lineTo(150, 150); // 두번째 점
ctx3.lineTo(50, 150); // 세번째 점
ctx3.closePath(); // 경로 닫기

ctx3.strokeStyle = "black"; // 테두리 색상
ctx3.lineWidth = 2; // 테두리 두께
ctx3.fillStyle = "blue"; // 삼각형 채울 색상
ctx3.fill(); // 삼각형 내부 색상 채우기
ctx3.stroke(); // 삼각형 테두리 그리기
