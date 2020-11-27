<template>
  <div class="database">
    <div class="database">
      <el-row>
        <div><h3>Database Page</h3></div>
      </el-row>
    </div>
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 200 }"
        resize="both"
        placeholder="请输入代码"
        v-model="textarea1"
      >
      </el-input>
      <div style="margin: 20px 0;"></div>
      <el-button plain @click="open1" type="primary"> run </el-button>
      <el-button plain @click="reload" type="danger"> reload </el-button>
    </div>
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "database",
  data() {
    return {
      textarea1: "",
    };
  },
  methods: {
    reload:function() {
      location.reload();
    },
    open1: function () {
      let that = this;
      const h = this.$createElement;
      if (this.textarea1 == "") {
        that.$notify({
          title: "Result",
          message: h(
            "i",
            { style: "color: teal" },
            "NO INPUT, PLEASE ENTER CODE"
          ),
        });
        return;
      }
      let res = this.$alasql
        .promise(this.textarea1)
        .then(function (res) {
          console.log(res);
          console.log(JSON.stringify(res));
          that.$notify({
            title: "Result",
            message: h("i", { style: "color: teal" }, JSON.stringify(res)),
            duration: 0,
          });
        })
        .catch(function (err) {
          that.$notify({
            title: "Result",
            message: h("i", { style: "color: teal" }, err.toString()),
          });
          console.log(err.toString());
        });
    },
  },
};
</script>

