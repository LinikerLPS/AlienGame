const astro = document.querySelector('.astro');
const alien = document.querySelector('.alien');
const score = document.querySelector(".score");
const spanPlayer = document.querySelector('.player');
let alreadyJump = false;
let count = 0;



  
  window.onload = () => {
    spanPlayer.innerHTML = localStorage.getItem('player');
    startTimer();
    loadGame();
  }
      
      document.addEventListener("keydown", (e) => {
        if ((e.code === "ArrowUp") | (e.code === "Space")) {
          jump();
        }
      });
      
      function jump() {
        if (!astro.classList.contains("jump")) {
          astro.classList.add("jump");
          alreadyJump = true;
      
          setTimeout(() => {
            astro.classList.remove("jump");
            alreadyJump = false;
          }, 1100);
        }
      }
      
      setInterval(() => {
        let astroBottom = parseInt(
          window.getComputedStyle(astro).getPropertyValue("bottom")
        );
        let alienLeft = parseInt(
          window.getComputedStyle(alien).getPropertyValue("left")
        );
      
        if (alienLeft > 40 && alienLeft < 80 && astroBottom <= 50 && !alreadyJump) {
          alert(`Game Over! Score: ${count}`);
          location.href="../Telas/menu.html";
          count = 0;
        }
      
        count++;
        score.innerHTML = `SCORE: ${count}`;
      }, 10);


    window.onload = () => {
        spanPlayer.innerHTML = localStorage.getItem('player');
    }
   

    
  

  

        
     









