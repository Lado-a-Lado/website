<script lang="ts">
  export let classes: string;
</script>

<a href=https://tally.so/r/nGzJre type=button target=_blank class={classes}>INSCRIÇÃO GRATUITA</a>

<style>
    a {
        @apply bg-none font-semibold py-3 px-6 rounded-full;
        transition: all cubic-bezier(0.4, 0, 0.2, 1) 125ms;
        color: var(--theme-red);
        border: 3px solid var(--theme-red);
        font-family: "Overpass Mono", monospace;

        &:hover {
            color: var(--theme-yellow);
            background-color: var(--theme-red);
        }

        &:active {
            box-shadow: inset 0 0 20px -5px black;
        }
    }
</style>
