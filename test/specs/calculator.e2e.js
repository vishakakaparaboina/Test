describe("run the calculator", function(){

    it("Verify url", async function(){
       browser.url('http://www.securian.com/insights-tools/retirement-calculator.html')

        // await expect(browser).toHaveTitle("securian Financial")
         
})


it('should set/get value for current age element', async () => {
    const currentageinput = await $('#current-age');
    await currentageinput.setValue('40');
    const currentagevalue = await currentageinput.getValue();
    console.log('currentagevalue : ' , currentagevalue); // outputs: "40"
})

it('should set/get value for what age do you plan to retire element', async () => {
    const retirementageinput = await $('#retirement-age');
    await retirementageinput.setValue('63');
    const retirementagevalue = await retirementageinput.getValue();
    console.log('retirementagevalue : ' , retirementagevalue); // output: "63"


})
it('should set/get value for What is your current annual income element', async () => {
    const currentincomeinput = await $('#current-income');
    await currentincomeinput.setValue('100000');
    const currentincomevalue = await currentincomeinput.getValue();
    console.log('currentincomevalue :', currentincomevalue); // output: "100000"
})  
    
       
it('should set/get value for What is your spouses annual income', async () => {
    const spouseincomeinput = await $('#spouse-income');
    await spouseincomeinput.setValue('90000');
    const spouseincomevalue = await spouseincomeinput.getValue();
    console.log('spouseincomevalue :', spouseincomevalue ); // outputs: "90000"
})

it('should set/get value for What is your current retirement savings balance', async () => {
    const currenttotalsavingsinput = await $('#current-total-savings');
    await currenttotalsavingsinput.setValue('200000');
    const currenttotalsavingsvalue = await currenttotalsavingsinput.getValue();
    console.log('currenttotalsavingsvalue :', currenttotalsavingsvalue); // outputs: "200000"
})

it('should set/get value for How much are you currently saving each year for retirement', async () => {
    const currentannualsavingsinput = await $('#current-annual-savings');
    await currentannualsavingsinput.setValue('12');
    const currentannualsavingsvalue = await currentannualsavingsinput.getValue();
    console.log('currentannualsavingsvalue :', currentannualsavingsvalue); // outputs: "12"
})
it('should set/get value for What is the rate of increase in your savings each year', async () => {
    const savingsincreaserateinput = await $('#savings-increase-rate');
    await savingsincreaserateinput.setValue('20');
    const savingsincreaseratevalue = await savingsincreaserateinput.getValue();
    console.log('savingsincreaseratevalue :', savingsincreaseratevalue); // outputs: "20"
 
 })

it('validate SSN benefits Yes toggle functionality', async () => {
    //when SSN benefits Yes is selected
    await $("//label[@for='yes-social-benefits']").click()
   
      //selecting SSN benefits radio button based on input
      if ($("//label[@for='yes-social-benefits']").getValue === 'yes')
            //selecting marital status based on input
            await $("//label[@for='single']").click()
            await expect($('#social-security-override-container')).toBeDisplayed()
            //await $('#social-security-override-container').addValue('2000')
   })

   it('validate SSN benefits No toggle functionality', async () => {
        //when SSN benefits No is selected
        await $("//label[@for='no-social-benefits']").click()   
        //selecting SSN benefits radio button based on input
        if ($("//label[@for='no-social-benefits']").getValue === 'no')
            await expect($('#social-security-override-container')).not.toBeDisplayed()
   })


    //  Validate 'Adjust default values
    it('should Adjust default values detect is clickable', async () => {
    await $('=Adjust default values').click();
    },
    {
            timeout: 100000,
                timeoutMsg: 'expected text to be different after 800s'
});
       
     //Validate 'Adjust default values 
    it('verify additional-income', async () => {
    // it('should set/get value for What is your spouses annual income', async () => {
        const additionalincomeinput = await $('#additional-income');
        await additionalincomeinput.setValue('5000');
        const additionalincomevalue = await additionalincomeinput.getValue();
        console.log('additionalincomevalue :', additionalincomevalue); // outputs: "5000"
})

    //Validate years do you plan to depend on retirement income
     it('verify retirementduration', async () => {
        const retirementdurationinput = await $('#retirement-duration');
        await retirementdurationinput.setValue('20');
        const retirementdurationvalue = await retirementdurationinput.getValue();
        console.log('retirementdurationvalue :', retirementdurationvalue); // outputs: "20"
})
       //Validate post retirement income increase with inflation
        it('validate include inflation', async () => { 
        //await $("//label[@for='include-inflation']").click()       
        if ('yes' === 'yes')    
        await $("//label[@for='include-inflation']").click()    
        //await $("//label[@for='include-inflation']").toBeDisplayed()
       await expect($('#expected-inflation-rate')).toBeDisplayed()
       await $('#expected-inflation-rate').addValue('12')

       await $("//label[@for='exclude-inflation']").click()
        if ('no' === 'no') 
        await $("//label[@for='exclude-inflation']").click()       
       // await $("//label[@for='exclude-inflation']").not.toBeDisplayed()
      
})
  
   //Validate retirement-annual income
   it('verify retirement-annual income', async () => {
    const retirementannualincomeinput = await $('#retirement-annual-income');
    await retirementannualincomeinput.setValue('120000');
    const retirementannualincomevalue = await retirementannualincomeinput.getValue();
    console.log('retirementannualincomevalue :', retirementannualincomevalue); // outputs: "20"   
 })

   //Validate pre-retirement roi
   it('verify pre retirement roi', async () => {
    const preretirementroiinput = await $('#pre-retirement-roi');
    await preretirementroiinput.setValue('150000');
    const preretirementroivalue = await preretirementroiinput.getValue();
    console.log('preretirementroivalue :', preretirementroivalue); // outputs: "20"
   })

   //Validate post-retirement-roi
   it('verify post-retirement-roi', async () => {
    const postretirementroiinput = await $('#post-retirement-roi');
    await postretirementroiinput.setValue('90000');
    const postretirementroivalue = await postretirementroiinput.getValue();
    console.log('postretirementroivalue :', postretirementroivalue); // outputs: "90000"
   })

     //Validate save changes
     it('should save button is clickable', async () => {
     await $("//button[normalize-space()='Save changes']").click()

    },
    {
            timeout: 1000000,
                timeoutMsg: 'expected text to be different after 200s'
    });

   
        it('should set/get value for What is your current annual income element', async () => {
        const currentincomeinput = await $('#current-income');
        await currentincomeinput.setValue('100000');
        const currentincomevalue = await currentincomeinput.getValue();
        console.log('currentincomevalue :', currentincomevalue); // output: "100000"
    })  
        
           
       it('should set/get value for What is your spouses annual income', async () => {
        const spouseincomeinput = await $('#spouse-income');
        await spouseincomeinput.setValue('90000');
        const spouseincomevalue = await spouseincomeinput.getValue();
        console.log('spouseincomevalue :', spouseincomevalue ); // outputs: "90000"
    })
    
      it('should set/get value for What is your current retirement savings balance', async () => {
        const currenttotalsavingsinput = await $('#current-total-savings');
        await currenttotalsavingsinput.setValue('200000');
        const currenttotalsavingsvalue = await currenttotalsavingsinput.getValue();
        console.log('currenttotalsavingsvalue :', currenttotalsavingsvalue); // outputs: "200000"
    })

   
    it('should calculate button is clickable', async () => {
        await $("//button[normalize-space()='Calculate']").waitForClickable()
         await $("//button[normalize-space()='Calculate']").click()
         //verifying if results are getting displayed after user submits the form
         it('verifying if results are getting displayed after user submits the form', async () => {
        // await expect($("//h3[normalize-(space())='Results']")).toBeDisplayed()
         await expect($("//div[@id='calculator-results-container']/h3")).toBeDisplayed
              await expect(calculateBtn.Results).toBeDisplayed() 
        },
        {
                timeout: 100000,
                    timeoutMsg: 'expected text to be different after 200s'
        });
    })

    afterEach(() => {
        browser.execute('window.localStorage.clear()');
    });
    
})
    
    
    
   
        
   







  



   









