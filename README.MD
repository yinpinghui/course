this is typescript for demo

#启动

我们启动的时候可以通过
node build/server.js启动，代码里面已经有了跟cluster相关的代码，也可以通过ts-node启动，这些都可以用pm2进行测试。
短时间内不用针对performance进行单独测试和要求，我们会慢慢的加入对ts的理解，从而找到最好的方式进行启动。


1. 通过routing-controllers 创建express的controller
2. 通过typedi进行di的管理(需要多少层DI)
3. 通过typeorm进行orm的管理
4. 全程类似springmvc的开发
5. 利用interceptor进行类似filter开发