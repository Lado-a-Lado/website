<script>
  import Header from "./Header.svelte";
  import "../styles.scss";
</script>

<Header/>

<main>
    <slot/>
</main>

<style>
    main {
        height: 100%;
    }
</style>
