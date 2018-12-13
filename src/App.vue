<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-container style="height: 100%; border: 1px solid #aaa">
      <el-scrollbar :native="false">
        <el-aside class="aside" width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu style="height:100%" :default-openeds="['1']" router>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="i in jobs" :key="i.name" :index="'/?name='+i.name">{{i.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
            </el-menu-item>-->
          </el-menu>
        </el-aside>
      </el-scrollbar>
      <!-- <el-aside>
        <router-link v-for="i in jobs" :key="i.name" :to="'/'+i.name" tag="p">{{i.name}}</router-link>
      </el-aside>-->
      <el-scrollbar style="width:100%" :native="false">
        <el-container class="main">
          <el-header>
            <div>{{$route.query.id}}</div>
            <el-row>
              <el-col :span="23">
                <el-progress
                  :percentage="percentage"
                  :status="percentage==100 ? 'success' : 'text'"
                ></el-progress>
              </el-col>
              <el-col :span="1">
                <i v-show="percentage<100" class="el-icon-loading"></i>
              </el-col>
            </el-row>

            <!-- <vue-progress-bar></vue-progress-bar> -->
          </el-header>
          <el-main>
            <el-button type="primary" @click="dialogFormVisible = true">打开Dialog</el-button>

            <el-progress
              type="circle"
              :width="100"
              :percentage="percentage"
              :status="percentage==100 ? 'success' : 'text'"
            >
              <i v-show="percentage<100" class="el-icon-loading"></i>
              <!-- <i v-show="percentage=100" class="el-icon-loading"></i> -->
            </el-progress>
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
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-scrollbar>
    </el-container>
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
      percentage: 1,
      jobs: [
        {
          name: "aaa",
          link: "aassa"
        },
        {
          name: "bbb",
          link: "babbsa"
        },
        {
          name: "b12bb",
          link: "babbsa"
        },
        {
          name: "asb",
          link: "babbsa"
        },
        {
          name: "last-bb",
          link: "babbsa"
        }
      ],
      input21: "",
      dialogFormVisible: false,
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
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {
    let that = this;
    let total = 4000;
    var per = 100;
    console.log("---");
    this.$Progress.start();
    var timer = window.setInterval(function() {
      console.log("---");
      per = per + 200;
      if (that.percentage < 100) {
        that.percentage++;
      } else {
        window.clearInterval(timer);
        that.$Progress.finish();
      }
    }, per);
  }
};
</script>

<style>
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  height: 100%;
}
el-scrollbar__view {
  height: 100%;
}
.el-scrollbar__wrap {
  overflow-x: hidden !important;
}
.aside {
  height: 100%;
  width: 100% !important;
  overflow-x: hidden !important;
}
.main {
  width: 100%;
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
