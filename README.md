
# BUI NPM 模块的示例


## 1. 使用模块

第1步：`npm i bui-module-example`
第2步：在 `src/index.js` import 组件 `import 'bui-module-example';`
第3步：在需要的地方，作为依赖引入；

**示例**
```js
loader.define(['bui-module-example'],function(example,require,exports,module,global){
    // 使用模块的方法
    let result = example.add(1,2);
    console.log(result)
})
```

**示例2**
```js
loader.define(function(require,exports,module,global){

    require('bui-module-example',function(example){
        // 使用模块的方法
        let result = example.add(1,2);
        console.log(result)
    })
})
```

## 2. 制作模块说明

### 第一步：新建个目录，执行生成配置文件（名字与自定义组件名相同（建议 bui-module- 开头，方便搜索））

```bash
npm init 
```

### 第二步：新建 index.js 文件，内容如下：
```js

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
```

第1个参数 bui-module-example，自定义模块名, npm 模块；（建议 bui-module- 开头，方便搜索）
第2个参数 function，模块加载执行的函数；必须 return 一个对象，否则无法使用；
第3个参数 通过 module.exports 导出，不能通过 export default  导出，工程不支持；


### 第三步：

```bash
# 发布到npm
npm publish
```

