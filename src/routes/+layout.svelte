<script>
  import {onMount} from "svelte";
  import "../styles.scss";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import {updateVw} from "$lib";

  onMount(() => updateVw());
</script>

<svelte:window on:resize={updateVw}/>

<Header/>

<main>
    <slot/>
</main>

<Footer/>

<style>
    main {
        height: 100%;
    }
</style>
