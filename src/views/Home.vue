<template>
  <backtest></backtest>
  <Programme></Programme>
  <hero></hero>
  <But></But>
  <Formateurs></Formateurs>
  <Form></Form>
</template>
<script>
import Backtest from "@/components/backtest";
import Programme from "@/components/Programme";
import But from "@/components/But";
import Formateurs from "@/components/Formateurs";
import Form from "@/components/Form";
import Hero from "@/components/hero";
export default {
  components: {Hero, Form, Formateurs, But, Programme, Backtest}
}
</script>