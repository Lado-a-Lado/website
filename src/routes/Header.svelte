<script>
  import {currentIsLanding} from "$lib";
</script>

<nav>
    <a class="logo" href><img src="/img/logo-name.svg" alt="Lado a Lado"/></a>

    <div class="links" class:be-at-bottom={$currentIsLanding}>
        <a href="/quem-somos">Quem somos</a>
        <a href="/blogue">Blogue</a>
    </div>
</nav>

<style lang="scss">
  nav {
    position: fixed;
    width: 100vw;
  }

  .logo {
    display: block;
    width: 210px;
    margin: 30px;

    img {
      width: 100%;
    }
  }

  .links {
    display: flex;
    gap: 20px;
    position: absolute;
    top: 33%;
    left: 50%;
    translate: -50%;
    font-size: 1.2em;

    &.be-at-bottom {
    }
  }
</style>
