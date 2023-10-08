const canvas2 = document.getElementById("my-canvas2");
const ctx2 = canvas2.getContext("2d");

// 사각형 스타일 설정
ctx2.fillStyle = "black"; // 채우기 색상
ctx2.strokeStyle = "black"; // 테두리 색상
ctx2.lineWidth = 2; // 테두리 두께

// 사각형 그리기
// x 좌표, y 좌표, 가로 크기, 세로 크기
ctx2.fillRect(50, 50, 100, 100); // 색깔 채워진 사각형

ctx2.strokeRect(50, 150, 100, 100); // 테두리만 있는 사각형
