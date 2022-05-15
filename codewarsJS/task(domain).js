// Write a function that when given a URL as a string, parses out just the domain name and 
// returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


let testData = "https://www.qgq3g7-ss.com/warez/" 


function domainName(url){
    return url.replace(/(\w+\:\/\/)?(www\.)?/ig, '').replace(/(\..+)/ig, '')
}

// url.replace(/.*\/\/|www.|\..*/ig, ``)




domainName(testData)