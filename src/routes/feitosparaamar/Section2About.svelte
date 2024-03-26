<script>
  import InstaPost from "./InstaPost.svelte";
  import SignUpButton from "./SignUpButton.svelte";
</script>

<section class="h-[1400px] md:max-h-none md:h-auto md:gap-4 md:py-12 flex flex-col items-center justify-evenly">
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
