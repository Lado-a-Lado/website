<header>
    <a class="logo" href="/"><img src="/img/logo-name.svg" alt="Lado a Lado"/></a>

    <nav>
        <ul class="links">
            <!--            <li><a href="/quem-somos"><span>Quem somos</span></a></li>-->
            <!--            <li><a href="/blogue"><span>Blogue</span></a></li>-->
        </ul>
    </nav>
</header>

<style lang="scss">
  header {
    position: fixed;
    width: 100vw;
    display: flex;
  }

  .logo {
    display: block;
    width: 210px;
    margin: 50px;

    img {
      width: 100%;
    }
  }

  .links {
    list-style: none;
    display: flex;
    gap: 20px;
    top: 33%;
    left: 50%;
    translate: -50%;
    font-size: 1.2em;
  }
</style>
