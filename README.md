**Why K6**

  K6 is written in the goja programming language, which is an implementation of ES2015(ES6) JavaScript on pure Golang language.It doesn’t require nodejs
  
  Goja is an implementation of ECMAScript 5.1 in pure Go with emphasis on standard compliance and performance.
  
  Highly Configurable by design since it is script driven and integrated with CI/CD pipelines. Nimble agile teams to perform performance testing.
  
  Virtual users are to used to simulate traffic in testing environment. K6 internally uses gorouting to simulate virtual users. 1 Single instance can hundreds and thousand of users.
  
  Supports distributed load generation using k6 operator. It can run on top of kubernetes as pods.


![image](https://github.com/sreelakshminarayanan/learnk6/assets/13746960/07a9b784-68a6-4d1e-baad-6eff9177c31e)

![k6 drawio](https://github.com/sreelakshminarayanan/learnk6/assets/13746960/ff76e75f-a284-4f87-9c78-a2608959aa6a)


Create a scaffold file.

	K6 create

To run k6 script

               k6 run

             K6 run –vus 10 –duration 10s simple.js



