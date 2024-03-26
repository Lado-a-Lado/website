<script>
  import SignUpButton from "./SignUpButton.svelte";
  import Section1Landing from "./Section1Landing.svelte";
  import Section2About from "./Section2About.svelte";
  import Section3Horario from "./Section3Horario.svelte";
</script>

<div class="header-buttons">
    <!--    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">-->
    <!--        <a href="#sobre">Sobre</a>-->
    <!--        <a href="#oradores">Oradores</a>-->
    <!--        <a href="#horário">Horário</a>-->
    <!--        <a href="#reserva">Reserva</a>-->
    <!--    </div>-->
</div>

<Section1Landing/>

<Section2About/>

<section class="bg-[var(--theme-yellow)] flex justify-center items-center p-12">
    <img class="w-full scale-110 md:w-1/2 md:mr-44 md:scale-100" src="/img/lado-a-lado-frase.svg"
         alt="E viveram lado a lado para sempre"/>
    <SignUpButton classes="hidden md:block"/>
</section>

<Section3Horario/>

<section class="flex flex-row end-subscribe h-[140px] md:h-[200px]">
    <div class="translate-x-[65%]">
        <img alt="maos-em-concha" src="/img/maos-em-concha.svg"/>
    </div>
    <div class="flex flex-col items-center mr-1 w-9/12 md:pt-6 md:pb-3">
        <h1 class="color-red mono text-center py-3 font-bold">INSCRIÇÃO</h1>
        <h2 class="fruits-delight text-center text-xl md:text-2xl xl:text-3xl pb-5 md:pb-8">Feitos para amar</h2>
        <div>
            <SignUpButton classes="!px-[16px] !py-[6px] text-xs !border-2 md:!py-3 md:!px-5 md:!border-3 md:!text-l"/>
        </div>
    </div>
</section>

<style lang="scss">

  .end-subscribe {
    background-color: var(--theme-yellow);
  }
</style>
