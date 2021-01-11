<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

interface Obj {
  msg: string;
  changeMsg: (str: string) => void;
}
export default defineComponent({
  name: "HelloWord",
  setup() {
    const obj: Obj = reactive({
      msg: "HelloWord",
      changeMsg(str: string) {
        this.msg = str;
      }
    });
    return {
      ...toRefs(obj)
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
<style lang="scss" scoped>
.home_wrap {
  color: #000;
}
</style>
