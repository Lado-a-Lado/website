<section id=landing-section class="flex flex-col justify-center gap-4 bg-cover">
    <div class="absolute top-[38%] left-[10%]">
        <div class="color-red mono flex gap-2 items-center font-bold">
            <span class="text-3xl">CONFERÊNCIA</span>
            <span>&bullet; 3 MARÇO 2024, LISBOA</span>
        </div>
        <h1 class="fruits-delight text-black text-6xl my-4">Viver para amar</h1>
        <h2 class="rubik">Um evento sobre</h2>
    </div>

    <button class="sign-up mono absolute left-[10%] bottom-[22%] text-xl bg-none font-semibold py-3 px-6 rounded-[40px]">
        INSCREVE-TE AQUI!
    </button>

    <img class="huge-logo absolute top-0 right-[-4%] w-[71%]" src="/img/logo-hands.svg"
         alt="Contorno de mãos dadas"/>

    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">
        <a href="#sobre">Sobre</a>
        <a href="#oradores">Oradores</a>
        <a href="#horário">Horário</a>
        <a href="#reserva">Reserva</a>
    </div>
</section>

<section id="sobre">
    <p>É uma conferência</p>
</section>

<section id="oradores">
    <p>Oradores</p>
</section>

<style lang="scss">
  section {
    @apply h-[100dvh];
  }

  #landing-section {
    background-image: url("/img/Gradient.jpg");

    button.sign-up {
      transition: all cubic-bezier(0.4, 0, 0.2, 1) 125ms;
      color: var(--theme-red);
      border: 4px solid var(--theme-red);

      &:hover {
        color: var(--theme-yellow);
        background-color: var(--theme-red);
      }

      &:active {
        box-shadow: inset 0 0 20px -5px black;
      }
    }

    img.huge-logo {
    }
  }
</style>
