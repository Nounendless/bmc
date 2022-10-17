<template>
    <el-container class="container">
      <el-header class="header" style="height:71px">
        <el-row>
          <el-col :span="7" class="headerlogo">
            <div class="grid-content bg-purple">
              <img
                style="width:40px;height: 30px"
                src="../assets/logo.png"
                alt="无法显示图片"
              />
              <span style="font-size:23px;color:#FCFCFF;" >相空间实验室</span>
            </div>
          </el-col>
          <el-col :span="12" class="rightsection">
            <div class="grid-content bg-purple-light">
              <el-menu  
        router
        :default-active="this.$route.path"    
  mode="horizontal"
  background-color="#797979"
  text-color="#FCFCFF"
  active-text-color="#ffd04b">
         <el-menu-item style="height:71px;font-size:23px" index="/HelloWorld">首页</el-menu-item>
          <el-menu-item style="height:71px;font-size:23px" index="/HelloWorld">接入管理</el-menu-item>
          <el-menu-item style="height:71px;font-size:23px" index="/HelloWorld">系统日志</el-menu-item>
          <el-menu-item style="height:71px;font-size:23px" index="/HelloWorld">账号管理</el-menu-item>
        </el-menu>
            </div>
          </el-col>
          <el-col :span="5" class="rightsection">
            <div class="grid-content bg-purple-light">
              <span class="el-dropdown-link userinfo-inner">欢迎您，管理员</span>
              <el-avatar :size="18" icon="el-icon-user-solid" style="color:white"></el-avatar>
              <i class="el-icon-s-custom" style="color:#D7D7D7"></i>
              <i class="el-icon-minus" style="color:#D7D7D7;transform:rotate(90deg)"></i>
              <span class="userinfo-inner" @click="signout"> <img 
                style="width:18px;height: 16px;vertical-align:middle"
                src="../assets/dc.png"
                alt="无法显示图片"
              /></span>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" style="width:200px">
          <div  style="height:40px;text-align: center;">
            <img
                style="width:33px;height: 33px;margin-top:3px;vertical-align:middle"
                src="../assets/fwq.png"
                alt="无法显示图片"
              />
            <span style="vertical-align:middle;font-size:14px;color:#7F7F7F;" >当前主机：100001</span>
          </div>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#4169E1"
          >
          <!-- index 唯一标志 -->
          <el-submenu style="background-color:#787878"  index="1">
            <template v-slot:title>
              <i class="el-icon-menu" style="color:white"></i>
              <span style="font-size:18px;color:#F3F5F9;">服务器信息</span>
            </template>
            <!-- index 表示跳转路径 后面需要改成路径-->
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="1-1">产品信息</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="1-2">处理器信息</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="1-3">内存信息</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="1-4">网卡信息</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="1-5">其他类信息</el-menu-item></router-link>
          </el-submenu>          
            <el-submenu style="background-color:#787878" index="2">
              
                <template v-slot:title>
              <i class="el-icon-s-tools"></i>
              <span style="font-size:18px;color:#F3F5F9">服务器管理</span>
            </template>
              <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-1">存储管理</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-2">电源管理</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-3">风扇管理</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-4">BIOS设置</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-5">网络设置</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-6">时区设置</el-menu-item></router-link>
            <router-link to="/" style="text-decoration: none;"><el-menu-item index="2-7">固件更新</el-menu-item></router-link>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <el-tabs v-model="activeTab" type="card" @tab-remove="removeTab" @tab-click="tabClick">
          <el-tab-pane v-for="(item) in tabsItem"
                       :key="item.name"
                       :label="item.title"
                       :name="item.name"
                       :closable="item.closable"
                       :ref="item.ref">
            <component :is="item.content"></component>
          </el-tab-pane>
        </el-tabs>
        <el-card class="box-card" style="height:705px;margin-top:18px">
          content
        </el-card>
        </el-main>
      </el-container>
    </el-container>
  </template>
  
  
  <script>
  export default {
    name: "Home",
    data() {
      return {
        isCollapse: false,  //false为展开 true为收缩
        activeTab: '1', //默认显示的tab
        tabIndex: 1, //tab目前显示数
        tabsItem: [
          {
            title: '首页',
            name: '1',
            closable: false,
            ref: 'tabs',
            content: welcome
          }
        ],
        tabsPath: [{
          name: "1",
          path: '/welcome'
        }]
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
  .aside {
    background: #FFFFFF;
    color: #333333;
    /* height: 100%; */
  }
  .main {
    /* height: 100%; */
    color: #212121;
  }
  .headerlogo {
    line-height: 60px;
    margin-top: 10px;
  }
  .rightsection {
    line-height: 60px;
    text-align: center;
  }
  .el-submenu__title{
    font-size: 18px;
    height:42px;
    width:160px;
  }
  .el-menu-item{
    font-size: 17px;
    height:37px;
    background:white;
    color:#333333
  }
  .el-submenu__title i {
color: white;
}

  </style>