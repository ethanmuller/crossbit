<script>
  import Counter from './lib/Counter.svelte'
  import Puzzle from './Puzzle.svelte'
  import images from './images.js'
  const today = new Date()

 function getDayOfYear() {
   var now = new Date();
   var start = new Date(now.getFullYear(), 0, 0);
   var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
   var oneDay = 1000 * 60 * 60 * 24;
   var dayOfYear = Math.floor(diff / oneDay);
   return dayOfYear;
 }

console.log(getDayOfYear())

</script>

<main>
  <Puzzle art={ images[getDayOfYear() & images.length - 1].image } />
</main>
