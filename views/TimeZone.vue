<template>
    <div class="hello">
        <span style="font-size:25px;color:#555555;font-weight:bold;text-decoration-style: dotted;">时区设置</span>
        <i class="el-icon-s-tools" style="color:gray;font-size:23px;"></i>
        <div style="width:85%;margin:0 auto">
        <el-tabs v-model="activeName">
            <el-tab-pane label="时区/地区" name="first" :key="'first'">
            时区
            <el-input style="width:250px" v-model="input" placeholder="请输入内容"></el-input>
            <i class="el-icon-edit"></i>
            </el-tab-pane>

            <el-tab-pane label="NTP功能" name="second" :key="'second'">
                   
            </el-tab-pane>
        </el-tabs>
    </div>
        <!-- 注释
　　　　　　　label：选项卡显示的title
　　　　　　　name：与选项卡绑定的activeName对应的标识符，表示选项卡的别名
　　　　　-->
    </div>
</template>


<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                //默认第一个选项卡
                activeName: "first",
                input: 'UTC'
            }
        }
    }
</script>

