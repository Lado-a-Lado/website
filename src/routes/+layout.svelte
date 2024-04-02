<script>
  import { partytownSnippet } from '@builder.io/partytown/integration';
  import { onMount } from "svelte";
  import "../styles.scss";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { updateVw } from "$lib";

  onMount(() => updateVw());
</script>

<svelte:head>
<!--	<script>-->
<!--		// Forward the necessary functions to the web worker layer-->
<!--		partytown = {-->
<!--			forward: ['dataLayer.push', 'gtag']-->
<!--		};-->
<!--	</script>-->

<!--	{@html '<script>' + partytownSnippet() + '</script>'}-->

</svelte:head>

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
