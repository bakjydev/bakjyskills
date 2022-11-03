<template>
  <backtest></backtest>
  <Programme></Programme>
  <Formation></Formation>
  <But></But>
  <Formateurs></Formateurs>
  <hero></hero>
</template>
<script>
import Hero from "@/components/hero";
import Backtest from "@/components/backtest";
import Programme from "@/components/Programme";
import Formation from "@/components/Formation";
import But from "@/components/But";
import Formateurs from "@/components/Formateurs";
export default {
  components: {Formateurs, But, Formation, Programme, Backtest, Hero}
}
</script>