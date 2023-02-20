```js
async function awesome() {
   const [aData, aError] = await tryCatch(step1());
   if(aError) // ...

   const [bData, bError] = await tryCatch(step2(aData));
   if(bError) // ...

   const [cData, cError] = await tryCatch(step3(bData));
   if(cError) // ...

   // ...
}
```
