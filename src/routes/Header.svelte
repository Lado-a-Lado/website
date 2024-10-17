<script lang="ts">
  import {derived, writable} from "svelte/store";
  import {onDestroy, onMount} from "svelte";

  const scrollHeight = writable(0);

  const opacity = derived(scrollHeight, ($scroll) => {
    //todo
  });

  const unsubscribe = scrollHeight.subscribe(scroll => {
    //todo
    // const headerElem = document.querySelector('header');
    // if (!headerElem)
    //   return;
    // headerElem.style.opacity = String(scroll / 10);
  });

  const updateScrollHeight = () => {
    const maxHeight = document.body.scrollHeight - window.innerHeight;
    scrollHeight.set((window.scrollY * 100) / maxHeight);
  };

  onMount(() => updateScrollHeight());
  onDestroy(unsubscribe);
</script>

<svelte:window on:scroll={updateScrollHeight}/>

<header class="fixed z-10 w-lvw flex" style="background-color: rgba(255,229,125,{$scrollHeight/30})">
    <a class="logo block m-7 w-36" href="/"><img class="w-full" src="/img/logo-name.svg" alt="Lado a Lado"/></a>

    <nav>
        <ul class="links">
            <!--            <li><a href="/quem-somos"><span>Quem somos</span></a></li>-->
            <!--            <li><a href="/blogue"><span>Blogue</span></a></li>-->
        </ul>
    </nav>
</header>

<style lang="scss">
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
