**K6 Architecture and Flow**

 *  K6 is written in the goja programming language, which is an implementation of ES2015(ES6) JavaScript on pure Golang language.It doesn’t require nodejs
  
  * Goja is an implementation of ECMAScript 5.1 in pure Go with emphasis on standard compliance and performance.
  
  * Highly Configurable by design since it is script driven and integrated with CI/CD pipelines. Nimble agile teams to perform performance testing.
  
  * Virtual users are to used to simulate traffic in testing environment. K6 internally uses gorouting to simulate virtual users. 1 Single instance can hundreds and thousand of users.
  
  * Supports distributed load generation using k6 operator. It can run on top of kubernetes as pods.


		![image](https://github.com/sreelakshminarayanan/learnk6/assets/13746960/07a9b784-68a6-4d1e-baad-6eff9177c31e)

![k6 drawio](https://github.com/sreelakshminarayanan/learnk6/assets/13746960/ff76e75f-a284-4f87-9c78-a2608959aa6a)


Create a scaffold file.

	K6 create

To run k6 script

               k6 run

             K6 run –vus 10 –duration 10s simple.js


**K6 Life Cycle**


 
export function setup() {
  //    Executed initially once , to load test data from external sources
}


export default function (data) {
  // VU code
}

 
export function teardown{
  // teardown code
}



** Simulation of Real time traffic**

 Simulation of real time production data using shared array, faker library.

 Simulation of real time execution through the concept of executors.


**Simulation of Real time data **

Use of faker library for data parameterization.

Connect to external source such as DB, JSON file and create a shared array across virtual users.

Shared Array Constraints - Wou

Global System Variables :

Iterations completed: ${exec.instance.iterationsCompleted}

** Simulation of Real time Traffic **

Simulation of real time traffic by controlling the number of virtual users and iterations.

Configurable via JSON object with executor type, iterations count and count of virtual users.


``K6 run executor.js``
















