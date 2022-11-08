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
import Hero from "@/components/hero";
import Form from "@/components/Form";
export default {
  components: {Form, Hero, Formateurs, But, Programme, Backtest}
}
</script>