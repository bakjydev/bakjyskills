<template>
  <backtest></backtest>
  <Programme></Programme>
  <hero></hero>
  <But></But>
  <Formateurs></Formateurs>
  <Form2></Form2>
</template>
<script>
import Backtest from "@/components/backtest";
import Programme from "@/components/Programme";
import But from "@/components/But";
import Formateurs from "@/components/Formateurs";
import Hero from "@/components/hero";
import Form2 from "@/components/Form2";
export default {
  components: {Form2, Hero, Formateurs, But, Programme, Backtest}
}
</script>