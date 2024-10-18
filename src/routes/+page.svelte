<script>
</script>

<style lang="css">
    header {
        --toolbar-height: 8vw;

        & > * {
            @apply grid place-items-center;
            height: var(--toolbar-height);
            width: var(--toolbar-height);
            color: var(--theme-brown);
            font-weight: 600;
            text-align: center;
        }

        :last-child {
            margin-right: 25px;
        }
    }

    #hero-section :last-child {
        height: 10%;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<header class="h-[var(--toolbar-height)] bg-[var(--theme-yellow)] flex justify-between">
    <a href="/" class="bg-[var(--theme-brown)]">
        <img class="w-4/5" src="/img/logo-name-yellow.svg" alt="Lado a Lado"/>
    </a>
    <a>Quem somos</a>
    <a>O que fazemos</a>
    <a>Lado a Lado</a>
    <a>Blog</a>
    <a>Eventos</a>
    <a>Contactos</a>
    <a>Doações</a>
</header>

<section id="hero-section">
    <img class="w-full" src="/img/main/img-inicial.jpg" alt="Casal feliz"/>
    <img src="/img/logo-name-yellow.svg" alt="Lado a Lado"/>
</section>
