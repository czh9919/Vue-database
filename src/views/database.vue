<template>
  <div class="database">
    <div class="database">
      <el-row>
        <div><h3>Database Page</h3></div>
      </el-row>
    </div>
    <p>
      <el-input
  type="textarea"
  :autosize="{ minRows: 10, maxRows: 200}"
  placeholder="请输入代码"
  v-model="textarea1">
</el-input>
    <el-button
    plain
    @click="open1">
    运行
  </el-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'database',
  data() {
    return {
      textarea1: ''
    }
  },
  methods:{
      open1:function() {
        let that=this;
        const h = this.$createElement;
        let res=this.$alasql.promise(this.textarea1)
        .then(function(res){
        console.log(res);
        console.log(JSON.stringify(res));
        that.$notify({
          title: 'Result',
          message: h('i', { style: 'color: teal'}, JSON.stringify(res)),
          duration: 0
        });
    }).catch(function(err)
      {
        that.$notify({
          title: 'Result',
          message: h('i', { style: 'color: teal'}, err.toString())
        });
        console.log(err.toString())
        }
    );
        
      },
  }
}
</script>

