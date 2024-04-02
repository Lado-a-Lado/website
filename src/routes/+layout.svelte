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

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-RR3N6CW5T9"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		window.gtag = function(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-RR3N6CW5T9');
	</script>
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
