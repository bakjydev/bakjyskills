<template>
  <backtest></backtest>
  <Programme></Programme>
  <hero></hero>
  <But2></But2>
  <Formateurs></Formateurs>
  <Form></Form>
</template>
<script>
import Backtest from "@/components/backtest";
import Programme from "@/components/Programme";
import Formateurs from "@/components/Formateurs";
import Hero from "@/components/hero";
import Form from "@/components/Form";
import But2 from "@/components/But2";
export default {
  components: { But2, Form, Hero, Formateurs, Programme, Backtest}
}
</script>