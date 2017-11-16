import { expect } from 'chai';
import  jsdom  from 'jsdom';
import  fs from 'fs';


//start writing test
describe('first test',function(){
   it('should pass',() => {
     expect(true).to.equal(true);
   });
});

//test index.html with dsdom
// describe('index.html',() => {
//     it('should say hello',(done) => {
//        const index = fs.readFileSync('./src/index.html','utf-8');
//        jsdom.env(index,(err, window) => {
//          const h1  = window.getElementByTagName('h1')[0];
//          expect(h1.innerHTML).to.equal('hello world!');
//          done();
//          window.close();
//        });
//     });
// }); 
