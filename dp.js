import http from "k6/http";
import { SharedArray } from "k6/data";
import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js'
import exec from 'k6/execution';

export let options = {
    vus:5,
    duration: '5s',
    iterations: 5
}

var data = new SharedArray("colors", function() {
    return JSON.parse(open('./customers.json')).customers;
})

var customer = data[Math.floor(Math.random()*data.length)];

export default function() {
    console.log(` VU ID in instance: ${exec.vu.idInInstance}`);
    console.log(customer)
    console.log(faker.phone.phoneNumber())
    console.log(faker.name.findName())
    console.log(faker.internet.email(faker.name.findName()))
}