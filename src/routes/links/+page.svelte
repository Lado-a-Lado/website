<div class="h-28"></div>
<div class="links grid p-4">
    <a href="https://www.instagram.com/ladoaladopt">
        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/tBxa1IFcTQH.png" alt="Instagram logo"/>
        <span>Instagram</span>
    </a>
</div>

<style lang="scss">
  .links {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

    a {
      @apply flex p-8;
      border: 1px solid black;

      img {
        height: 30px;
      }

      span {
      }
    }
  }
</style>
