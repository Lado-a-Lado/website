<script>
  import InstaPost from "./InstaPost.svelte";
  import {writable} from "svelte/store";
  import {onMount} from "svelte";
  import SignUpButton from "./SignUpButton.svelte";

  const vw = writable(0);

  function updateVw() {
    vw.set(window.innerWidth);
  }

  onMount(() => updateVw());
</script>

<svelte:window on:resize={updateVw}/>

<div class="header-buttons">
    <!--    <div class="mono font-semibold absolute left-1/2 bottom-[10%] -translate-x-1/2 flex gap-14 text-lg">-->
    <!--        <a href="#sobre">Sobre</a>-->
    <!--        <a href="#oradores">Oradores</a>-->
    <!--        <a href="#horário">Horário</a>-->
    <!--        <a href="#reserva">Reserva</a>-->
    <!--    </div>-->
</div>

<section id=landing-section class="relative overflow-hidden h-svh max-h-[950px] sm:min-h-[600px] sm:max-h-[1000px] md:max-h-[1080px] min-h-[750px]
 flex flex-col justify-center gap-4 bg-cover">
    <div class="absolute top-[55%] sm:top-2/3 md:top-[60%] md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:left-1/3 w-80 md:w-[600px]">
        <div class="color-red mono flex gap-2 items-center font-bold">
            <span class="text-lg md:text-3xl">CONFERÊNCIA</span>
            <span class="text-sm md:text-2xl">&bullet; 6 ABRIL 2024, LISBOA</span>
        </div>
        <h1 class="fruits-delight text-black my-2 md:my-6 text-[45px] md:text-7xl">Feitos para amar</h1>
        <SignUpButton classes="relative top-20 bottom-16 text-xl md:text-2xl"/>
    </div>

    <img class="huge-logo absolute top-20 md:-top-16 -right-[25%] w-[120%] md:w-full max-w-none max-h-[40%] md:max-h-[80%]"
         src="/img/logo-hands.svg" alt="Desenho de mãos dadas"/>
</section>

<section class="h-[1000px] md:max-h-none md:h-auto md:gap-4 md:py-12 flex flex-col items-center justify-evenly">
    <h1 class="color-red mono">SOBRE</h1>
    <h2 class="fruits-delight text-3xl md:text-4xl xl:text-5xl">Em que consiste?</h2>
    <div class="flex flex-col md:flex-row items-center justify-center gap-16 w-11/12 my-8 md:my-16">
        <InstaPost/>

        <div class="explanation w-full md:w-[700px]">
            <p class="my-4">
                <br/>Todos já sentimos borboletas na barriga.
                <br/>Todos sabemos quanto um voluntariado nos enche.
                <br/>Por que é tão bom amar alguém?</p>

            <p class="my-4">
                <br/>O que é que estas três frases têm em comum?
                <br/>Porque nos alteram tanto?</p>

            <p class="my-4">
                <br/>Nesta conferência queremos percorrer um caminho que vai desde a raiz destas questões até à forma
                como é possível viver uma vida mais cheia de sentido.
                <br/> Vais ficar de fora?
                <br/> Ou queres descobrir para que fomos feitos?
            </p>

            <p class="my-4">Inscreve-te!</p>
        </div>
    </div>
    <SignUpButton classes="block md:hidden self-start ml-5"/>
</section>

<section class="bg-[var(--theme-yellow)] flex justify-center items-center p-12">
    <img class="w-full scale-110 md:w-1/2 md:mr-44 md:scale-100" src="/img/lado-a-lado-frase.svg"
         alt="E viveram lado a lado para sempre"/>
    <SignUpButton classes="hidden md:block"/>
</section>

<section class="h-[1400px] md:h-[1090px] md:gap-4 md:py-12 flex flex-col items-center gap-4 py-10">
    <h1 class="color-red mono">Horário</h1>
    <h2 class="fruits-delight text-center text-3xl md:text-4xl xl:text-5xl">Que programa temos para oferecer?</h2>
    <div class="horário flex flex-col w-11/12 max-w-[900px]">
        <div class="color-red mono !items-end">
            <span class="text-lg font-semibold w-[70%]">SÁBADO, 6 ABRIL</span>
            <div class="flex flex-col items-end">
                <span>Lisboa</span>
                <span class="text-right">Universidade Católica</span>
            </div>
        </div>
        <hr class="!border-t-2 !border-[var(--theme-red)]"/>
        <div class="momento">
            <div>
                <span>18h00</span>
                <span>Check-in e Abertura</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Introdução</span>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span>18h30</span>
                <span>O mundo em que vivemos</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Francisco Vilhena da Cunha</span>
            </div>
            <div>
                <div>
                    <img src="/img/fvc.png" alt="Francisco Vilhena da Cunha"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>Para que fui feito?</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Pe. Bernardo Aranha</span>
            </div>
            <div>
                <div>
                    <img src="/img/pba.png" alt="Pe. Bernardo Aranha" class="relative top-1 right-1 scale-110"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>A beleza da complementaridade</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Javier Calderón e Alexandra Chumbo</span>
            </div>
            <div class="flex">
                <div class="over">
                    <img src="/img/javi.png" alt="Javier Calderón" class="javi"/>
                </div>
                <div>
                    <img src="/img/alex.png" alt="Alexandra Chumbo"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento !my-4">
            <div>
                <span></span>
                <span>Coffee break (30 min)</span>
            </div>
            <span class="text-3xl">☕️</span>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>Do encantamento inicial ao amor</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Rodolfo Nona</span>
            </div>
            <div>
                <div>
                    <img class="relative right-3 top-1 scale-110" src="/img/rodolfo.png" alt="Rodolfo Nona"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>Amar-te todos os dias da minha vida</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Graça e Miguel Varão</span>
            </div>
            <div>
                <div>
                    <img class="relative left-1/2 -translate-x-1/2 scale-110 top-1" src="/img/mig.png"
                         alt="Graça e Miguel Varão"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>Fui ao fundo. E agora?</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Vasco Almeida Ribeiro</span>
            </div>
            <div>
                <div>
                    <img class="relative right-2" src="/img/var.png" alt="Vasco Almeida Ribeiro"/>
                </div>
            </div>
        </div>
        <hr/>
        <div class="momento">
            <div>
                <span></span>
                <span>"Ama e faz o que quiseres"</span>
                {#if ($vw >= 768)}
                    <div></div>
                {/if}
                <span>Fátima e Henrique Fonseca</span>
            </div>
            <div>
                <div>
                    <img class="relative scale-[1.4] bottom-4 right-1" src="/img/fati.png"
                         alt="Fátima e Henrique Fonseca"/>
                </div>
            </div>
        </div>
        <hr/>
    </div>
</section>

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
  #landing-section {
    background-image: url("/img/Gradient.jpg");
    background-color: var(--theme-yellow);
  }

  .horário {
    & > div {
      @apply flex items-center justify-between my-2;
    }

    hr {
      @apply border-t border-black;
    }

    .momento {
      @apply gap-4;

      & > *:nth-child(1) {
        @apply shrink grid gap-2 grid-cols-1 md:grid-cols-[80px_1fr] items-baseline;

        & > span {
          @apply my-[3px] md:my-0;
        }

        & > span:nth-child(1) {
          @apply font-semibold;
          font-family: OverpassMono, monospace;
          color: var(--theme-red);

          @media (min-width: 768px) {
            @apply font-bold text-black;
          }
        }

        & > span:nth-child(2) {
          @apply font-bold;
        }
      }

      & > *:nth-child(2) {
        & > div {
          @apply overflow-hidden;
          --dimention: 80px;
          height: var(--dimention);
          width: var(--dimention);
          border-radius: 99999px;
          background-color: var(--theme-red);
        }
      }
    }

    img {
      object-fit: contain;
      height: var(--dimention);
      width: var(--dimention);
    }

    .over {
      @apply relative -right-5;
    }

    .javi {
      clip-path: inset(0 10px 0 0);
    }
  }

  .end-subscribe {
    background-color: var(--theme-yellow);
  }
</style>
