<template>
    <el-container class="container">
      <el-header class="header" style="height:61px">
        <el-row>
          <el-col :span="6" class="headerlogo">
            <div >
              <img
                style="width:40px;height:40px;fillter: contrast(200%);margin-top:10px;"
                src="../assets/syslogo.png"
                alt="无法显示图片"
              />
              <span style="font-size:22px;color:#CCCCCC;vertical-align:top;font-weight:bold;">并行计算空间</span>
            </div>
          </el-col>
          <el-col :span="13" class="rightsection">
            <div class="grid-content bg-purple-light">  
              
              <el-menu  
        router
        :default-active="this.$route.path"    
  mode="horizontal"
  background-color="#797979"
  text-color="#FCFCFF"
  active-text-color="#ffd04b">
         <el-menu-item style="height:61px;font-size:23px" index="/HelloWorld">首页</el-menu-item>
          <el-menu-item style="height:61px;font-size:23px" index="/HelloWorld">接入管理</el-menu-item>
          <el-menu-item style="height:61px;font-size:23px" index="/HelloWorld">系统日志</el-menu-item>
          <el-menu-item style="height:61px;font-size:23px" index="/HelloWorld">账号管理</el-menu-item>
        </el-menu>
            </div>
          </el-col>
          <el-col :span="3" class="rightsection">
            <div class="grid-content bg-purple-light">
              <div style="height:20px;margin-top:-10px">{{ date }} {{ week }}</div>
              <div style="height:20px">{{ time }}</div>
            </div>
            </el-col>
              <el-col :span="2" class="rightsection">
                <div class="grid-content bg-purple-light">
              <!-- <el-avatar :size="17" icon="el-icon-user-solid" style="color:white"></el-avatar> -->
              <i class="el-icon-minus" style="color:#D7D7D7;transform:rotate(90deg)"></i>
              <i class="el-icon-s-custom" style="color:#D7D7D7"></i>
              <span class="userinfo-inner" @click="signout"> <img 
                style="width:18px;height: 16px;vertical-align:middle"
                src="../assets/dc.png"
                alt="无法显示图片"
              /></span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      </el-container>
  </template>
  
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        timer: null,
      time: "",
      date: "",
      week: "",

      }
    },
    

    methods: {
      //退出
      handleOpen(key, keyPath) {
        // 當選單被打開時執行...
      },
      handleClose(key, keyPath) {
        // 當選單被關閉時執行...
      },
      signout() {
        this.$confirm("退出登录, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$router.push({ path: "/" });
        });
      },
      dataDestroy() {
      if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
      }
    },
    dateShow() {},
    dateFormat() {
      let date = new Date();
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
      let hours =
        date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
      let minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      let seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
 
      this.date = year + "-" + month + "-" + day + " ";
      this.time = hours + ":" + minutes + ":" + seconds;
      this.week = "星期" + "日一二三四五六".charAt(date.getDay());
      }
    },
    mounted() {
    this.dateFormat();
    this.timer = setInterval(() => {
      this.dateFormat();
    }, 1000);
  },
  beforeDestroy() {
    this.dataDestroy();
  },
  };
  </script>
  <style scoped>
  .container {
    height: 100vh;
    font-size: 15px;
  }
  .header {
    background: #797979;
    color: #fff;
  }
 
  .headerlogo {
    line-height: 60px;
    
  }
  .rightsection {
    line-height: 60px;
    text-align: center;
  }

  </style>