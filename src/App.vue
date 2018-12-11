<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-button type="primary" @click="dialogFormVisible = true">打开Dialog</el-button>

    <el-dialog title="XXX" :visible.sync="dialogFormVisible">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="22">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name" size="medium" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="ques-icon">
            <el-tooltip content="tip Top center" placement="right" effect="light">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="22">
            <el-form-item label="活动区域" prop="region">
              <el-select
                class="select"
                v-model="ruleForm.region"
                clearable
                placeholder="请选择"
                size="medium"
              >
                <el-input
                  class="inner-search"
                  placeholder="请输入搜索"
                  prefix-icon="el-icon-search"
                  v-model="input21"
                  size="small"
                ></el-input>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="ques-icon">
            <el-tooltip content="tip tip" placement="right" effect="light">
              <i class="el-icon-question"></i>
            </el-tooltip>
          </el-col>
        </el-row>
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
/* eslint-disable */

export default {
  name: "app",
  components: {
    // HelloWorld
  },
  data() {
    return {
      input21: "",
      dialogFormVisible: true,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        }
      ],
      form: {},
      value: "",
      type: "",
      value4: "",
      ruleForm: {
        name: "",
        region: "",
        type: [],
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "blur" }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
.box {
  width: 600px;
}
.ques-icon {
  padding: 8px;
  font-size: 16px;
  color: #aaaaaa;
}
.select {
  width: 100%;
}
.inner-search {
  margin-left: 1%;
  margin-bottom: 4px;
  width: 98%;
}
</style>
