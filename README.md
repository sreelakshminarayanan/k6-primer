![image](https://github.com/sreelakshminarayanan/k6-primer/assets/13746960/99036f86-8eec-4f08-b35e-f658ebbb620d)


**K6 Architecture and Flow**

 *  K6 is written in the goja programming language, which is an implementation of ES2015(ES6) JavaScript on pure Golang language.It doesn’t require nodejs
  
  * Goja is an implementation of ECMAScript 5.1 in pure Go with emphasis on standard compliance and performance.
  
  * Highly Configurable by design since it is script driven and integrated with CI/CD pipelines. Nimble agile teams to perform performance testing.
  
  * Virtual users are to used to simulate traffic in testing environment. K6 internally uses gorouting to simulate virtual users. 1 Single instance can hundreds and thousand of users.
  
  * Supports distributed load generation using k6 operator. It can run on top of kubernetes as pods.


![k6 drawio](https://github.com/sreelakshminarayanan/learnk6/assets/13746960/ff76e75f-a284-4f87-9c78-a2608959aa6a)


Create a scaffold file.

	K6 new

To run k6 script

             k6 run

             K6 run –vus 10 –duration 10s script.js


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



**Simulation of Real time traffic**

 * Simulation of real time production data using shared array, faker library.

 * Simulation of real time execution through the concept of executors.


**Simulation of Real time data**

* Use of faker library for data parameterization.

* Connect to external source such as DB, JSON file and create a shared array across virtual users.

* Shared Array Constraints - Wou

* Global System Variables : Global system variable is having information on context of run happened so far. Combining shared array and Global system variable, randomization can be introduced in the performance testing process.

Iterations completed: ${exec.instance.iterationsCompleted}

  ``K6 run dp.js``


**Simulation of Real time Traffic**

* Simulation of real time traffic by controlling the number of virtual users and iterations.

* Configurable via JSON object with executor type, iterations count and count of virtual users.

* There are various executors in k6 to simulate real time traffic, one of the use case would be shopping website, where there will be constant http request for querying the production with a think time and other request will be ramup and ramup down for order request. Usually orders will be peak up during the period of the day and will gradually decline through the day.

* 
``K6 run executor.js``
















