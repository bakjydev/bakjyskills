<template>
  <backtest></backtest>
  <Programme></Programme>
  <hero></hero>
  <Formation></Formation>
  <But></But>
  <Formateurs></Formateurs>
  <Form></Form>
  <Test></Test>
</template>
<script>
import Backtest from "@/components/backtest";
import Programme from "@/components/Programme";
import Formation from "@/components/Formation";
import But from "@/components/But";
import Formateurs from "@/components/Formateurs";
import Form from "@/components/Form";
import Test from "@/components/Test";
import Hero from "@/components/hero";
export default {
  components: {Hero, Test, Form, Formateurs, But, Formation, Programme, Backtest}
}
</script>