<div class="header-buttons">
    <!--    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">-->
    <!--        <a href="#sobre">Sobre</a>-->
    <!--        <a href="#oradores">Oradores</a>-->
    <!--        <a href="#horário">Horário</a>-->
    <!--        <a href="#reserva">Reserva</a>-->
    <!--    </div>-->
</div>

<section id=landing-section class="relative overflow-hidden h-svh max-h-[950px] sm:min-h-[900px] sm:max-h-[1000px] md:max-h-[1080px] min-h-[750px]
 flex flex-col justify-center gap-4 bg-cover">
    <div class="absolute top-[55%] sm:top-2/3 md:top-[60%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-1/3 w-80 md:w-[600px]">
        <div class="color-red mono flex gap-2 items-center font-bold">
            <span class="text-lg md:text-3xl">EVENTO</span>
            <span class="text-sm md:text-2xl">&bullet; 6 ABRIL 2024, LISBOA</span>
        </div>
        <h1 class="fruits-delight text-black my-2 md:my-6 text-[45px] md:text-7xl">Feitos para amar</h1>
        <h2 class="rubik md:text-xl">LAL Talks</h2>
        <button class="sign-up my-16 text-xl md:text-2xl">RESERVA GRÁTIS AQUI</button>
    </div>

    <img class="huge-logo absolute top-20 md:top-0 -right-[25%] w-[120%] md:w-full max-w-none max-h-[40%] md:max-h-[80%]"
         src="/img/logo-hands.svg" alt="Desenho de mãos dadas"/>
</section>

<section id="sobre"
         class="h-svh max-h-[500px] md:max-h-none min-h-96 md:h-auto md:gap-4 md:py-12 flex flex-col items-center justify-evenly">
    <h1 class="color-red mono">SOBRE</h1>
    <h2 class="fruits-delight text-3xl md:text-4xl xl:text-5xl">Em que consiste?</h2>
    <div class="flex flex-col md:flex-row items-center justify-center gap-16 w-11/12 my-8 md:my-16">
        <!--        <div class="w-full md:w-9/12">-->
        <!--            <div class="bg-black aspect-video"><span class="text-white w-full h-full items-center flex justify-center">-->
        <!--                Video</span></div>-->
        <!--        </div>-->
        <div class="w-full md:w-[900px]">
            <p>Um evento que conta com a presença de 8 oradores para abordar os temas do namoro, casamento e
                família.</p>
            <p>Organizado pelo Lado a Lado, de jovens para jovens, este evento vai mostrar-te que foste feito para algo
                grande...</p>
        </div>
    </div>
    <button class="sign-up block md:hidden self-start ml-5">INSCRIÇÃO</button>
</section>

<section class="bg-[var(--theme-yellow)] flex justify-center items-center p-12">
    <img class="w-full scale-110 md:w-1/2 md:mr-44 md:scale-100" src="/img/lado-a-lado-frase.svg"
         alt="E viveram lado a lado para sempre"/>
    <button class="sign-up hidden md:block">INSCRIÇÃO</button>
</section>

<style lang="scss">
  #landing-section {
    background-image: url("/img/Gradient.jpg");
    background-color: var(--theme-yellow);

    img.huge-logo {
    }
  }

  button.sign-up {
    @apply bg-none font-semibold py-3 px-6 rounded-full;
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
