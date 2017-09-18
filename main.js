const production = false;
(unitTesting = undefined),
(main = (
    run = production 
        ? appstart(stdlib(), vectorlib(stdlib()))
        : appstart(stdlib(), vectorlib(stdlib())),
) => 0)()

    // unitTests = (    
    //     {range,mul,sum,isDivisibleBy} = stdlib().mathOps(),
    //     testArr = range(1,100),
    //     {
    //         pfhilter, pfhind, pfhor, pfhorEach, mapfh, redeuce
    //     } = stdlib().arrayMethods(),
    //     tests = [
    //         a => pfhor(
    //             cond = i => i < 10,
    //             action = (a => (i, r = 0) => sum(i,r))(a),
    //             it = i => sum(i,1)
    //         )(startI = 0), 
    //         a => mapfh(a)(mul), 
    //         a => pfhilter(a)(isDivisibleBy(2)),
    //         a => pfhind(a)(isDivisibleBy(17)),
    //         a => pfhorEach(a)(x => 'test'),
    //         a => redeuce(a)(mul)
    //     ],
    // ) =>  (pfhorEach(tests)(x => console.log(x(testArr)))),