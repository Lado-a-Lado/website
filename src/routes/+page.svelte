<section class="main-section">
    <div class="main-text">
        <div class="subtitle-over">
            <span class="subtitle-text">CONFERÊNCIA</span>
            <span>&bullet; 3 MARÇO 2024, LISBOA</span>
        </div>
        <h1>Viver para amar</h1>
        <h2 class="subtitle-under">Um evento sobre</h2>
    </div>

    <button class="sign-up">INSCREVE-TE AQUI!</button>

    <img class="huge-logo" src="/img/logo-hands.svg" alt="Contorno de mãos dadas"/>
</section>

<p>Olá, mãe!</p>

<style lang="scss">
  .main-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1em;
    height: calc(100vh);
    background-image: url("/img/Gradient.jpg");
    background-size: cover;

    .main-text {
      position: absolute;
      top: 38%;
      left: 10%;

      .subtitle-over {
        color: var(--theme-red);
        display: flex;
        gap: .50rem;
        align-items: center;
        font-family: "Overpass Mono", monospace;
        font-weight: bold;

        .subtitle-text {
          font-size: 1.6em;
        }
      }

      h1 {
        color: black;
        font-size: 3.5em;
        margin: 0;
        font-family: "FruitsDelight", "Bush Script MT", fantasy;
      }

      .subtitle-under {
        font-family: "Rubik", sans-serif;
      }
    }

    button.sign-up {
      position: absolute;
      left: 10%;
      bottom: 22%;

      font-size: 1.2em;
      font-family: "Overpass Mono", sans-serif;
      font-weight: 550;

      background: none;
      border: 4px solid black;
      padding: 20px 30px;
      border-radius: 40px;
      transition: all 0.15s ease-in-out;

      &:hover {
        background-color: hsla(0, 0%, 85%, 0.4);
      }

      &:active {
        background-color: hsla(0, 0%, 85%, 0.6);
      }
    }

    img.huge-logo {
      position: absolute;
      top: 0;
      right: -4%;
      width: 71%;
    }
  }
</style>
