class Hero {
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

  // 주인공 움직임 저으이
  move() {
    this.x += this.velX; // 문리량 변화
    this.img.style.left = this.x + "px"; // 시각화
  }
}
