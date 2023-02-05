// async function

const promiseGenerator = () => {
    const p = new Promise((resolve,reject) => {
        const a = "eesamiabrash";
        const b = "SAMIABRASH";

        if(a.toLowerCase() === b.toLowerCase()){
            resolve("Sami is Sami");
        }
        else {
            reject("Sami is not Sami");
        }
    })
    return p;
}

const asyncFunc = async() => {
    try{
        let m = await promiseGenerator();
        console.log(m);
    }
    catch(err){
        console.error("error catched => " + err);
    }
}
asyncFunc();