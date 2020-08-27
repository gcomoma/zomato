var zomatoCustomCommands = {
    search5Items: function (item) {
        this
            .pause(10000)
            .setValue('@itemSearchInput', item)
            .pause(5000)
            .click('@searchButton')
            .expect.element('@titleResult').text.to.contain(item)
        this
            .click('@homePageButton')
            .pause(5000)
        return this
    },
    requestLinkToApplicationThroughEmail: function (email) {
        this
            .click('@getTheAppButton')
            .pause(3000)
            .setValue('@getAppLink', email)
            .pause(3000)
            .click('@shareAppLinkButton')
            .useXpath()
            .isVisible({ selector: '//span[contains(text(), "already sent an email to this ID today. Please try again after one hour")]', suppressNotFoundErrors: true }, function (results) {
                let visible = results.value
                if (visible === true) {
                    this
                        .expect.element('//span[contains(text(), "already sent an email to this ID today. Please try again after one hour")]').to.be.present
                        console.log('Email has been recently used')
                    }
                else {
                    this
                        .pause(5000)
                        .expect.element('//span[contains(text(), "Email sent. Check your email id to find a link to download the app. Happy eating!")]').to.be.present
                        console.log('Email sent')
                }
            })
        return this
    },
    requestLinkToApplicationThroughPhone: function (phone) {
        this
            .click('@getTheAppButton')
            .pause(3000)
            .click('@phoneRadioButton')
            .pause(3000)
            .setValue('@phoneInput', phone)
            .pause(3000)
            .click('@shareAppLinkButton')
            .useXpath()
            .isVisible({ selector: '//span[contains(text(), "already sent an email to this ID today. Please try again after one hour")]', suppressNotFoundErrors: true }, function (results) {
                let visible = results.value
                if (visible === true) {
                    this
                        .expect.element('//span[contains(text(), "already sent an email to this ID today. Please try again after one hour")]').to.be.present
                        console.log('Email has been recently used')
                }
                else {
                    this
                        .pause(5000)
                        .expect.element('//span[contains(text(), "Message sent. Check your phone to find a link to download the app. Happy eating!")]').to.be.present
                        console.log('Email sent')
                }
            })
         return this
    },
    collection: function (data) { 
        this
            .pause(5000)
            .click(data.collectionType)
            .pause(5000)
            .verify.containsText('@titleResult', data.headline)
            .click('@backSLC')
        return this
    },
}


module.exports = {
    url: 'https://www.zomato.com/salt-lake-city',
    commands: [zomatoCustomCommands],
    elements: 
    {     
        itemSearchInput: 'input[class = "sc-fjmCvl dRCuSW"]',
        searchButton: 'div[class = "sc-CtfFt dwJcvv"]',
        titleResult: 'h1',
        homePageButton: 'a[class = "logo__container left"]',
        getTheAppButton: 'a[class = "sc-krDsej sc-dTdPqK gUQWLM"]',
        getAppLink: 'input[class = "sc-1yzxt5f-9 bbrwhB"]',
        phoneRadioButton: 'input[value = "mobile"]',
        phoneInput: 'input[placeholder = "type here..."]',
        shareAppLinkButton: { selector: '(//span[@class="sc-1kx5g6g-3 dkwpEa"])[1]', locateStrategy: 'xpath' },
        locationDropdown: {selector: '//input[@placeholder="Salt Lake City"]',locateStrategy: 'xpath'},
        searchBar: {selector: '//input[@placeholder="Search for restaurant, cuisine or a dish"]', locateStrategy: 'xpath'},
        searchMagnifying: {selector: '//div[@class="sc-CtfFt dwJcvv"]"]', locateStrategy: 'xpath'},
    //View all green button
        largeGreenBtn: {selector: '//*/a[@class="ui large green button result-reviews search-result-reviews"]', locateStrategy: 'xpath'},
        resultsDiv: {selector: 'div.content', locateStrategy: 'css'},
    //Sign up for account selectors
        signupBtn: {selector: '//a[contains(text(),"Signup")]', locateStrategy: 'xpath'},
        nameField: {selector: '(//input[@class="sc-1yzxt5f-9 bbrwhB"])[3]', locateStrategy: 'xpath'},
        emailField: {selector: '(//input[@class="sc-1yzxt5f-9 bbrwhB"])[4]', locateStrategy: 'xpath'},
        phoneField: {selector: '//label[contains(text(), "Phone")]', locateStrategy: 'xpath'},
        countryCode: {selector: '/html/body/div[5]/div/div[2]/section[2]/section/div[1]/div/div/div/div[1]', locateStrategy: 'xpath'},
        selectCC: {selector: '/html/body/div[5]/div/div[2]/section[2]/section/div[1]/div/div/div/div[2]/div[6]/span', locateStrategy: 'xpath'},
        tosCheckBox: {selector: '/html/body/div[5]/div/div[2]/section[2]/section/div[2]/label/input', locateStrategy: 'xpath'},
        createAccBtn: {selector: '/html/body/div[5]/div/div[2]/section[2]/section/button', locateStrategy: 'xpath'},
        googleBtn: {selector: '//a[contains(text(),"Continue with Google")]', locateStrategy: 'xpath'},
    //Download from the app store buttons
        appleAppBtn: {selector: '//*[@id="root"]/div[5]/div/div/div[2]/div[3]/a', locateStrategy: 'xpath'},
        googlePlayBtn: {selector: '//*[@id="root"]/div[5]/div/div/div[2]/div[3]/div/a', locateStrategy: 'xpath'},
    //Search Filters//
        orderFoodOnline:
            {selector: '//span[contains(text(),"Order Food Online")]',locateStrategy: 'xpath'},
        popularityHigh2Low:
            {selector: '//span[contains(text(),"Popularity")]',locateStrategy: 'xpath'},
        rating:
            {selector: '//span[contains(text(),"Rating")]',locateStrategy: 'xpath'},
        costHigh2Low:
            {selector: '//div[@id="mainframe"]/div[2]/div[3]/div[2]/div/div/div/div[4]/a[3]/div/span',locateStrategy: 'xpath'},
        costLow2High:
            {selector: '/html[1]/body[1]/section[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[4]/a[4]/div[1]/span[1]',locateStrategy: 'xpath'},
        recentlyAdded:
            {selector: '//span[contains(text(),"Recently Added")]',locateStrategy: 'xpath'},
    //Collections//
        collectionsTrending: 
        'div[class = "bke1zw-1 feJJpQ"]',
        collectionsCheap:
        'div[class = "bke1zw-1 bCCfXM"]',
        collectionTruckin: 
        'div[class = "bke1zw-1 iHEKOG"]',
        collectionBurgers: 
        'div[class = "bke1zw-1 fKdtKd"]',
        backSLC:
        {selector: '//span[text()="Salt Lake City"]', locateStrategy: 'xpath'},
    //Locality buttons//
        //Locality buttons//
        downtown: 
            {selector: '//h5[text()="Downtown (213 places)"]', locateStrategy: 'xpath'},
        ogden: 
            {selector: '//h5[text()="Ogden (375 places)"]', locateStrategy: 'xpath'},
        sugarhouse: 
            {selector: '//h5[text()="Sugar House (117 places)"]', locateStrategy: 'xpath'},
        taylorsville: 
            {selector: '//h5[text()="Taylorsville (99 places)"]', locateStrategy: 'xpath'},
        midvale: 
            {selector: '//h5[text()="Midvale (141 places)"]', locateStrategy: 'xpath'},
        murray: 
            {selector: '//h5[text()="Murray (149 places)"]', locateStrategy: 'xpath'},
        layton: 
            {selector: '//h5[text()="Layton (150 places)"]', locateStrategy: 'xpath'},
        holladay: 
            {selector: '//h5[text()="Holladay (102 places)"]', locateStrategy: 'xpath'},
        parkcity: 
            {selector: '//h5[text()="Park City (217 places)"]', locateStrategy: 'xpath'},
        clearfield: 
            {selector: '//h5[text()="Clearfield (84 places)"]', locateStrategy: 'xpath'},
        westvalley: 
            {selector: '//h5[text()="West Valley (169 places)"]', locateStrategy: 'xpath'},
        southsaltlake: 
            {selector: '//h5[text()="South Salt Lake (106 places)"]', locateStrategy: 'xpath'},
        provo: 
            {selector: '//h5[text()="Provo (234 places)"]', locateStrategy: 'xpath'},
        kearns: 
            {selector: '//h5[text()="Kearns (37 places)"]', locateStrategy: 'xpath'},
        rosepark: 
            {selector: '//h5[text()="Rose Park (62 places)"]', locateStrategy: 'xpath'},
        farmington: 
            {selector: '//h5[text()="Farmington (33 places)"]', locateStrategy: 'xpath'},
        orem: 
            {selector: '//h5[text()="Orem (209 places)"]', locateStrategy: 'xpath'},
        lehi: 
            {selector: '//h5[text()="Lehi (73 places)"]', locateStrategy: 'xpath'},
        sandy: 
            {selector: '//h5[text()="Sandy (168 places)"]', locateStrategy: 'xpath'},
        eastcentral: 
            {selector: '//h5[text()="East Central (148 places)"]', locateStrategy: 'xpath'},
        redwood: 
            {selector: '//h5[text()="Redwood (57 places)"]', locateStrategy: 'xpath'},
        libertywells: 
            {selector: '//h5[text()="Liberty Wells (64 places)"]', locateStrategy: 'xpath'},
        springville: 
            {selector: '//h5[text()="Springville (47 places)"]', locateStrategy: 'xpath'},
        westjordan: 
            {selector: '//h5[text()="West Jordan (137 places)"]', locateStrategy: 'xpath'},
        spanishfork: 
            {selector: '//h5[text()="Spanish Fork (46 places)"]', locateStrategy: 'xpath'},
        hebercity: 
            {selector: '//h5[text()="Heber City (46 places)"]', locateStrategy: 'xpath'},
        magna: 
            {selector: '//h5[text()="Magna (29 places)"]', locateStrategy: 'xpath'},
        centerville: 
            {selector: '//h5[text()="Centerville (31 places)"]', locateStrategy: 'xpath'},
        central: 
            {selector: '//h5[text()="Central (59 places)"]', locateStrategy: 'xpath'},
        bountiful: 
            {selector: '//h5[text()="Bountiful (93 places)"]', locateStrategy: 'xpath'},
    //Cuisines//
        americanfood: 
            {selector: '//a[text()="American food near me"]',locateStrategy: 'xpath'},
        asianfood: 
            {selector: '//a[text()="Asian food near me"]',locateStrategy: 'xpath'},
        bbq: 
            {selector: '//a[text()="BBQ food near me"]',locateStrategy: 'xpath'},
        barfood: 
            {selector: '//a[text()="Bar Food food near me"]',locateStrategy: 'xpath'},
        beverages: 
            {selector: '//a[text()="Beverages food near me"]',locateStrategy: 'xpath'},
        burger: 
            {selector: '//a[text()="Burger food near me"]',locateStrategy: 'xpath'},
        chinese: 
            {selector: '//a[text()="Chinese food near me"]',locateStrategy: 'xpath'},
        coffeetea: 
            {selector: '//a[text()="Coffee and Tea food near me"]',locateStrategy: 'xpath'},
        desserts: 
            {selector: '//a[text()="Desserts food near me"]',locateStrategy: 'xpath'},
        diner: 
            {selector: '//a[text()="Diner food near me"]',locateStrategy: 'xpath'},
        italian: 
            {selector: '//a[text()="Italian food near me"]',locateStrategy: 'xpath'},
        japanese: 
            {selector: '//a[text()="Japanese food near me"]',locateStrategy: 'xpath'},
        mexican: 
            {selector: '//a[text()="Mexican food near me"]',locateStrategy: 'xpath'},
        pizza: 
            {selector: '//a[text()="Pizza food near me"]',locateStrategy: 'xpath'},
        sandwich: 
            {selector: '//a[text()="Sandwich food near me"]',locateStrategy: 'xpath'},
        seafood: 
            {selector: '//a[text()="Seafood food near me"]',locateStrategy: 'xpath'},
        steak: 
            {selector: '//a[text()="Steak food near me"]',locateStrategy: 'xpath'},
        sushi: 
            {selector: '//a[text()="Sushi food near me"]',locateStrategy: 'xpath'},
        thai: 
            {selector: '//a[text()="Thai food near me"]',locateStrategy: 'xpath'},
        vegetarian: 
            {selector: '//a[text()="Vegetarian food near me"]',locateStrategy: 'xpath'},
    //Resturants//
        bakeries: 
            {selector: '//a[contains(text(),"Bakeries near me")]',locateStrategy: 'xpath'},
        bars: 
            {selector: '//div[2]//div[1]//a[2]',locateStrategy: 'xpath'},
        beverage: 
            {selector: '//a[contains(text(),"Beverage Shops near me")]',locateStrategy: 'xpath'},
        bistros: 
            {selector: '//a[contains(text(),"Bistros near me")]',locateStrategy: 'xpath'},
        breweries: 
            {selector: '//a[contains(text(),"Breweries near me")]',locateStrategy: 'xpath'},
        cafes: 
            {selector: '//a[contains(text(),"Cafés near me")]',locateStrategy: 'xpath'},
        casualDining: 
            {selector: '//a[contains(text(),"Casual Dining near me")]',locateStrategy: 'xpath'},
        cocktailBars: 
            {selector: '//a[contains(text(),"Cocktail Bars near me")]',locateStrategy: 'xpath'},
        coffeeShops: 
            {selector: '//a[contains(text(),"Coffee Shop near me")]',locateStrategy: 'xpath'},
        delis: 
            {selector: '//a[contains(text(),"Delis near me")]',locateStrategy: 'xpath'},
        dessertShops: 
            {selector: '//a[contains(text(),"Dessert Shops near me")]',locateStrategy: 'xpath'},
        diners: 
            {selector: '//a[contains(text(),"Diners near me")]',locateStrategy: 'xpath'},
        fastCasual: 
            {selector: '//a[contains(text(),"Fast Casual near me")]',locateStrategy: 'xpath'},
        fastFood: 
            {selector: '//a[contains(text(),"Fast Food near me")]',locateStrategy: 'xpath'},
        foodCourts: 
            {selector: '//a[contains(text(),"Food Courts near me")]',locateStrategy: 'xpath'},
        foodTrucks: 
            {selector: '//a[contains(text(),"Food Trucks near me")]',locateStrategy: 'xpath'},
        juiceBar: 
            {selector: '//a[contains(text(),"Juice Bar near me")]',locateStrategy: 'xpath'},
        microbreweries: 
            {selector: '//a[contains(text(),"Microbreweries near me")]',locateStrategy: 'xpath'},
        noodleShops: 
            {selector: '//a[contains(text(),"Noodle Shops near me")]',locateStrategy: 'xpath'},
        pizzerias: 
            {selector: '//a[contains(text(),"Pizzerias near me")]',locateStrategy: 'xpath'},
        pubs: 
            {selector: '//a[contains(text(),"Pubs near me")]',locateStrategy: 'xpath'},
        quickBites: 
            {selector: '//a[contains(text(),"Quick Bites near me")]',locateStrategy: 'xpath'},
        sandwichShops: 
            {selector: '//a[contains(text(),"Sandwich Shops near me")]',locateStrategy: 'xpath'},
        taquerias: 
            {selector: '//a[contains(text(),"Taquerias near me")]',locateStrategy: 'xpath'},
        vineyards: 
            {selector: '//a[contains(text(),"Vineyards near me")]',locateStrategy: 'xpath'},
        wineBars: 
            {selector: '//a[contains(text(),"Wine Bars near me")]',locateStrategy: 'xpath'},
        wineries: 
            {selector: '//a[contains(text(), "Wineries near me")]',
            locateStrategy: 'xpath'},
    //Local filters
        popularity: 
            {selector: '//span[text()="Popularity "]', locateStrategy: 'xpath'},
        rating:
            {selector: '//span[text()="Rating "]', locateStrategy: 'xpath'},
        highCost:
            {selector: '(//span[text()="Cost "])[1]', locateStrategy: 'xpath'},
        lowCost: 
            {selector: '(//span[text()="Cost "])[2]', locateStrategy: 'xpath'},
        recentlyAdded:
            {selector: '//span[text()="Recently Added "]', locateStrategy: 'xpath'},
        header: 
            {selector: '(//h1)[2]', locateStrategy: 'xpath'},
        header2:
            {selector: '//h1', locateStrategy: 'xpath'},

        
    }
}