function replace(string,search,replace){
    return string.split(search).join(replace);
}
const old = "Sami is a good programmer";
const New = replace(old,"programmer","developer");
console.log(New);

//

function conc(...strings){
    let result=" " ,i;

    for (i=0;i<strings.length;i++)
        result += strings[i];
    
    return result;
}
const st1 = "sami";
const st2 = " a";
const st3 = " abrash";
r = conc(st1,st2,st3);
console.log(r);
