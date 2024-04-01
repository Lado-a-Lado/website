<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "../styles.scss";
  import {onMount} from "svelte";
  import {updateVw} from "$lib";
  import { inject } from '@vercel/analytics'
  import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

  injectSpeedInsights();
  inject();
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
