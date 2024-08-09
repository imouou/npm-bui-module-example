
// 定义一个自定义模块
loader.define("bui-module-example",function(requires,exports,module,global){

    return {
        // 局部模块的添加方法示例
        add(a,b){
            return a+b;
        }
    };
})

// 导出函数，使其可以在其他文件中被引入和使用，不支持直接import
module.exports = loader.get('bui-module-example');