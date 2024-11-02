document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  const squares = [];

  //Membuat board/papan
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

  //Membuat karakter
  //membuat pacman masuk ke board
  let pacmanCurrentIndex = 490;
  let pacmanVelocity = {
    x: 0,
    y: 0,
  };
  const pacmanSpeed = 200;
  squares[pacmanCurrentIndex].classList.add("pac-man");
  //get the coordinates of pacman on the grid with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))

  //Mengatur kecepatan gerakan/velocity pacman
  function setPacmanVelocity(e) {
    switch (e.keyCode) {
      case 37:
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        ) {
          pacmanVelocity.y = 0;
          pacmanVelocity.x = 1;
        }
        break;
      case 38:
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        ) {
          pacmanVelocity.y = 0;
          pacmanVelocity.x = -1;
        }
        break;
      case 39:
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        ) {
          pacmanVelocity.y = 1;
          pacmanVelocity.x = 0;
        }
        break;
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        ) {
          pacmanVelocity.y = -1;
          pacmanVelocity.x = 0;
        }
        break;
    }
    checkForGameOver();
    console.log(pacmanVelocity, e.keyCode);
  }

  //gerakan pacman
  function movePacman() {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    setInterval(() => {
      if (pacmanVelocity.x === 1 && pacmanVelocity.y == 0) {
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        ) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");

          pacmanCurrentIndex -= 1;
        }
        if (squares[pacmanCurrentIndex - 1] === squares[363]) {
          pacmanCurrentIndex = 391;
        }
      }
      if (pacmanVelocity.x === -1 && pacmanVelocity.y == 0) {
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        ) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");

          pacmanCurrentIndex -= width;
        }
      }
      if (pacmanVelocity.x === 0 && pacmanVelocity.y == 1) {
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        ) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");

          pacmanCurrentIndex += 1;
        }
        if (squares[pacmanCurrentIndex + 1] === squares[392]) {
          pacmanCurrentIndex = 364;
        }
      }
      if (pacmanVelocity.x === 0 && pacmanVelocity.y == -1) {
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        ) {
          squares[pacmanCurrentIndex].classList.remove("pac-man");
          pacmanCurrentIndex += width;
        }
      }

      squares[pacmanCurrentIndex].classList.add("pac-man");
      pacDotEaten();
      powerPelletEaten();
    }, pacmanSpeed);
  }

  // fungsi untuk menentukan apakah pacman memakan pac-dot
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score++;
      if (score < 50) {
        document.getElementById("score").classList.add("low-score");
      } else if (score > 100) {
        document.getElementById("score").classList.add("mid-score");
      } else if (score > 200) {
        document.getElementById("score").classList.add("high-score");
      }
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
      checkForWin();
    }
  }

  // fungsi untuk menentukan apakah pacman memakan power-pellet
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      ghosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
      checkForWin();
    }
  }

  // Membuat hantu menjadi passive
  function unScareGhosts() {
    ghosts.forEach((ghost) => (ghost.isScared = false));
  }

  // Membuat karakter hantu
  class Ghost {
    constructor(className, startIndex, speed) {
      this.className = className;
      this.startIndex = startIndex;
      this.speed = speed;
      this.currentIndex = startIndex;
      this.isScared = false;
      this.timerId = NaN;
    }
  }

  // Semua karakter hantu
  ghosts = [
    new Ghost("blinky", 348, 100),
    new Ghost("stinky", 376, 400),
    new Ghost("inky", 351, 300),
    new Ghost("clyde", 379, 200),
  ];

  // Menampilkankan karakter hantu kedalam layar
  ghosts.forEach((ghost) => {
    squares[ghost.currentIndex].classList.add(ghost.className);
    squares[ghost.currentIndex].classList.add("ghost");
  });

  function moveGhost(ghost) {
    const directions = [-1, +1, width, -width];
    let direction = directions[Math.floor(Math.random() * directions.length)];

    ghost.timerId = setInterval(function () {
      if (
        !squares[ghost.currentIndex + direction].classList.contains("ghost") &&
        !squares[ghost.currentIndex + direction].classList.contains("wall")
      ) {
        squares[ghost.currentIndex].classList.remove(ghost.className);
        squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost");
        ghost.currentIndex += direction;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      } else direction = directions[Math.floor(Math.random() * directions.length)];

      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add("scared-ghost");
      }

      if (
        ghost.isScared &&
        squares[ghost.currentIndex].classList.contains("pac-man")
      ) {
        squares[ghost.currentIndex].classList.remove(
          ghost.className,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        score += 100;
        squares[ghost.currentIndex].classList.add(ghost.className, "ghost");
      }
      checkForGameOver();
    }, ghost.speed);
  }

  // Fungsi untuk menentukan apakah pertandingan berakhir
  function checkForGameOver() {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      pacmanVelocity.x = 0;
      pacmanVelocity.y = 0;
      //Tampilkan game di atas layar dan menyegarkan setelah 3s ke Game istirahat
      document.getElementById("game-over-screen").style.display = "flex";
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }

  // Fungsi untuk menentukan apakah pertandingan berhasil
  function checkForWin() {
    if (score === 274) {
      ghosts.forEach((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      pacmanVelocity.x = 0;
      pacmanVelocity.y = 0;
      //Tampilan Anda memenangkan layar dan menyegarkan setelah 3s ke Game istirahat
      document.getElementById("you-won-screen").style.display = "flex";
      setTimeout(function () {
        window.location.reload();
      }, 3000);
    }
  }

  // Fungsi untuk memulai game jika tombol enter ditekan
  function startGame(event) {
    if (event.keyCode === 13) {
      document.removeEventListener("keydown", startGame);
      //Hapus Layar Mulai
      document.getElementById("start-screen").style.display = "none";
      //Atur kecepatan pacman dan aktifkan gerakan
      document.addEventListener("keyup", setPacmanVelocity);
      movePacman();
      // Pindahkan hantu secara acak
      ghosts.forEach((ghost) => moveGhost(ghost));
    }
  }

  document.addEventListener("keydown", startGame);
});
