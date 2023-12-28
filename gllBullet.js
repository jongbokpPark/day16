class Bullet {
  constructor(container, src, x, y, width, height, velX, velY) {
    this.container = container;
    this.src = src;
    this.img = document.createElement("img");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velX = velX;
    this.velY = velY;

    this.img.src = this.src;

    // 스타일
    this.img.style.position = "absolute";
    this.img.style.left = this.x + "px";
    this.img.style.top = this.y + "px";

    this.img.style.width = this.width + "px";
    this.img.style.height = this.height + "px";

    this.container.appendChild(this.img);
  }

  // 날아가는 운동 정의
  move() {
    this.y += this.velY; // 문리량 변화

    for (let i = 0; i < enemyArray.length; i++) {
      for (let a = 0; a < enemyArray[i].length; a++) {
        let result = collisionCheck(this, enemyArray[i][a]);
        if (result) {
          console.log("아프다");
          // 적 화면에서 제거
          wrapper.removeChild(enemyArray[i][a].img);
          // 나 화면에서 제거
          wrapper.removeChild(this.img);

          // 적 배열에서 제거
          enemyArray[i].splice(a, 1);
          // 적 배열에서 제거
          bulletArray.splice(bulletArray.indexOf(this), 1);
        }
      }
    }

    // 적군과 충돌히 발생하지 않은 총알의 경우, 화면 밖으로 나가면 제거
    // y죄표가 음수가 되면 제거...
    if (this.y < 100) {
      wrapper.removeChild(this.img);
      bulletArray.splice(bulletArray.indexOf(this), 1);
    }
    this.img.style.top = this.y + "px"; // 시각화
  }
}
