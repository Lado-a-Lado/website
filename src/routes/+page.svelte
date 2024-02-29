<div class="header-buttons">
<!--    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">-->
<!--        <a href="#sobre">Sobre</a>-->
<!--        <a href="#oradores">Oradores</a>-->
<!--        <a href="#horário">Horário</a>-->
<!--        <a href="#reserva">Reserva</a>-->
<!--    </div>-->
</div>

<section id=landing-section class="h-svh flex flex-col justify-center gap-4 bg-cover">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 w-[90%]">
        <div class="color-red mono flex gap-2 items-center font-bold">
            <span class="text-lg">CONFERÊNCIA</span>
            <span class="text-sm">&bullet; 3 MARÇO 2024, LISBOA</span>
        </div>
        <h1 class="fruits-delight text-black text-[40px] my-4">Viver para amar</h1>
        <h2 class="rubik">Um evento sobre</h2>
    </div>

    <button class="sign-up absolute left-[10%] bottom-[22%]">
        INSCREVE-TE AQUI!
    </button>

    <img class="huge-logo absolute top-20 left-16 w-full" src="/img/logo-hands.svg"
         alt="Desenho de mãos dadas"/>
</section>

<section id="sobre" class="h-svh flex flex-col items-center justify-evenly">
    <h1 class="color-red mono">SOBRE</h1>
    <h2 class="fruits-delight">Em que consiste?</h2>
    <div class="flex items-center justify-evenly gap-16 w-11/12">
        <div class="w-[35vw]">
            <div class="bg-black aspect-video"><span class="text-white w-full h-full items-center flex justify-center">
                Video</span></div>
        </div>
        <div class="w-[35vw]">
            <p>Lorem ipsum dolor sit amet consectetur. Iaculis amet enim pellentesque mattis consequat adipiscing vel
                odio. Pretium tortor arcu eu lorem sagittis vitae laoreet. Aliquam tempor nibh tellus mauris rutrum sit
                suspendisse et cras. Integer interdum posuere id commodo morbi varius sapien mi. Fermentum iaculis non
                lorem proin scelerisque. Aenean faucibus malesuada sapien netus diam volutpat. </p>
            <p> Erat massa vestibulum volutpat lectus fringilla senectus nisi. Amet facilisi gravida vitae vitae quam
                auctor orci non. Commodo sit vestibulum gravida euismod tincidunt proin. </p>
        </div>
    </div>
</section>

<section class="bg-[var(--theme-yellow)] flex justify-center items-center p-12">
    <div class="rubik">
        E viveram lado a lado para sempre
    </div>
    <button class="sign-up">INSCRIÇÃO</button>
</section>

<section id="oradores" class="h-svh">
    <p>Oradores</p>
</section>

<style lang="scss">
  #landing-section {
    background-image: url("/img/Gradient.jpg");

    img.huge-logo {
    }
  }

  button.sign-up {
    @apply text-xl bg-none font-semibold py-3 px-6 rounded-full;
    transition: all cubic-bezier(0.4, 0, 0.2, 1) 125ms;
    color: var(--theme-red);
    border: 3px solid var(--theme-red);
    font-family: "Overpass Mono", monospace;

    &:hover {
      color: var(--theme-yellow);
      background-color: var(--theme-red);
    }

    &:active {
      box-shadow: inset 0 0 20px -5px black;
    }
  }
</style>
