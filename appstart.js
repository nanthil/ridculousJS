(appstart = 
    (stdlib, vectorlib) => (
        { mathOps, object, arrayMethods } = stdlib,
        { pfhorEach,redeuce } = arrayMethods(),
        { range, isDivisibleBy } = mathOps(),
        { Vector2 } = vectorlib.twoD(),
        oneTo100 = range(1,101),
        arrVec = pfhorEach(oneTo100)((x,i,a)=> 
            isDivisibleBy(2)(i) 
            ? console.log(
                Vector2(a.slice(i,i+1)[0],a.slice(i+1,i+2)[0])
            )
            : console.log('not')
        ),


        v2 = Vector2(1,2)
    )
)