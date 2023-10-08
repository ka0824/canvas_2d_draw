const canvas4 = document.getElementById("my-canvas4");
const ctx4 = canvas4.getContext("2d");

ctx4.beginPath();

// 시작점 정하기
ctx4.moveTo(50, 50);

// 두 개의 제어점을 사용한 곡선 그리기
// 첫번째로 꺾을 지점 x 좌표, y좌표, 2번째로 꺾을 지점 x 좌표, y 좌표, 최종 x 좌표, y 좌표
ctx4.bezierCurveTo(50, 100, 150, 20, 250, 50); // 두 개의 제어점을 사용한 곡선
ctx4.strokeStyle = "black";
ctx4.lineWidth = 2;
ctx4.stroke(); // 곡선을 테두리로 그리기
