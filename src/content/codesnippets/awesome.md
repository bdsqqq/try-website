```js
async function awesome(){
   const [aData, error] = await tryCatch(step1());
   const [bData, error] = await tryCatch(step2(aData));
   const [cData, error] = await tryCatch(step3(bData));

   // ...
}

async function awesomeButHandleErrors() {
   const [aData, error] = await tryCatch(step1());
   if(error) // ...

   const [bData, error2] = await tryCatch(step2(aData));
   if(error2) // ...

   const [cData, error3] = await tryCatch(step3(bData));
   if(error3) // ...

   // ...
}
```
