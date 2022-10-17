<template>
 <div>
    <el-container class="container">
      <el-header class="header" style="height:61px;padding:0px">
      <common-header />
       
      </el-header>
      <el-container>
        <el-aside style="width:200px" >
            <div  style="height:39px;text-align: center;">
            <img
                style="width:33px;height: 33px;margin-top:3px;vertical-align:middle"
                src="../assets/fwq.png"
                alt="无法显示图片"
              />
            <span style="vertical-align:middle;font-size:14px;color:#7F7F7F;" >当前主机：{{ msg }}</span>
          </div>
            <common-aside />
        </el-aside>
        <el-main class="main" style="padding:5px 15px 15px 15px">
            <common-tag />
        
        <el-card class="box-card" style="margin-top:8px">
         <!-- 路由出口-->
         <!-- 路由匹配到的组件将渲染在这里-->
         <router-view></router-view>
        </el-card>
        </el-main>
      </el-container>
    </el-container>
 </div>   
</template>>

<script>
import CommonHeader from '../components/CommonHeader.vue'
import CommonAside from '../components/CommonAside.vue'
import CommonTag from '../components/CommonTag.vue'

export default {
    data() {
       return {
        msg:'100001'
       } 
    },
    components:{
        CommonHeader,
        CommonAside,
        CommonTag
    }
}

</script>
