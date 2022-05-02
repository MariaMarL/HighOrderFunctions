const companies = [
    {name: "Company One", category: "Finance", start: 1981, end:2003},
    {name: "Company Two", category: "Retail", start: 1992, end:2008},
    {name: "Company Three", category: "Auto", start: 1999, end:2007},
    {name: "Company Four", category: "Retail", start: 1989, end:2010},
    {name: "Company Five", category: "Tecnology", start: 2009, end:2014},
    {name: "Company Six", category: "Finance", start: 1987, end:2010},
    {name: "Company Seven", category: "Auto", start: 1986, end:1996},
    {name: "Company Eight", category: "Tecnology", start: 2011, end:2016},
    {name: "Company Nine", category: "Retail", start: 1981, end:1989},
];


const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];



//forEach

        //normal for
                // for(let i = 0; i < companies.length; i++){
                //     console.log(companies[i]);
                // }

        //con ForEach
            //companies.forEach(function(element, index){ //recorre cada elemento
            //console.log(element.name);  //muestra lo que hay en name
            //console.log(index);         //muestra los indices
            //console.log(element);       //muestra todo el elemento
//})

//filter   //filtrar 
        //el primero sería filtrar con un for
                // let canDrink = [];
                // for(let i = 0; i < ages.length;i++){
                //     if(ages[i]>=21){
                //         canDrink.push(ages[i]);
                //     }
                // }
                // console.log(canDrink);
         //filtrar con filter
                // const canDrink = ages.filter(function(age){
                //     if(age >= 21){
                //         return true;
                //     }
                // });
        //Filter with arrow function
                // const canDrink = ages.filter(age => age>=21);
                // console.log(canDrink);

        //filter category retail with arrow function
                // const companyCategories = companies.filter(company => company.category==="Retail");
                // console.log(companyCategories);

//Map  works insted of filtering thing out, it creates a different array

         //create array of company names 
                // const companyName = companies.map(function(company) {
                //     //return company.name + " - "+company.category;
                //     return `${company.name} [${company.start} - ${company.end}]`
                // })
    
            //Map with arrow function
                // const companyTest = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
                // console.log(companyTest);

            //another example
                // const agesSquare = ages.map(age => Math.floor(Math.sqrt(age)));
                // console.log(agesSquare);

            //Using two maps in the same sentece
                // const agesMap = ages
                //     .map(age => Math.sqrt(age))
                //     .map(age => age*2);
                // console.log(agesMap);

// Sort    sort companies by start year

    // const sortedCompanies = companies.sort(function(c1, c2){
    //     if(c1.start > c2.start){
    //         return 1;
    //     }else{
    //         return -1;
    //     }
    // });

    //shorter form  With arrow function and thernary operator
        // const sortedCompanies = companies.sort((a,b)=> (a.start > b.start? 1:-1));
        // console.log(sortedCompanies);

        // const sortedCompanies = companies.sort((a,b)=> (a.start - b.start));
        // console.log(sortedCompanies);

    //sort ages 
        // const sortAgesUp = ages.sort((a,b)=> a - b);  //ordena ascendentemente
        // const sortAgesDown = ages.sort((a,b)=> b - a);  //ordena descendentemente
        //console.log(sortAgesDown);
        //console.log(sortAgesUp);

//Reduce     //retorna solo un parámetro

    // for way
        // let ageSum = 0;
        // for (let i = 0; i<ages.length; i++){
        //     ageSum += ages[i];
        // }
        // console.log(ageSum);

    //with reduce
        // const ageSum = ages.reduce(function(total, age){
        //     return total + age;
        // },0)                         //zero means that starts in zero.
        // console.log(ageSum);

    // with reduce and arrow function
        // const ageSum = ages.reduce((total, age)=>total +age,0); //zero means that starts in zero.
        // console.log(ageSum);

    // calculating the years of all companies
        // const totalYears = companies.reduce((total, company)=> total + (company.end - company.start),0);
        // console.log(totalYears);

// Combine Methods

    const combined = ages
        .map(age => age*2)
        .filter(age => age >=40)
        .sort((a,b) => a-b)
        .reduce((a,b)=>(a+b),0);
    console.log(combined);