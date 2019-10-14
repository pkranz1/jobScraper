const config = require('../utils/config');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const Post = require('../models/post');

//returns the array of job posts
const scraper = async () => {
  //launches instance of puppeteer
  const browser = await puppeteer.launch({ headless: true, });
  const page = await browser.newPage();
  //stores the jobposts
  const jobPosts = [];
  
  try {
    //pulls all the links off of craigslist
    const jobPostLink = await getJobLinks(page);
    
    //follows each link and gathers information
    for(let i = 0; i < jobPostLink.length; i++) {
      const jobPost = jobPostLink[i]
      const jobPostInfo = await getJobPostInfo(page, jobPost);
      await saveJobPost(jobPostInfo);
      jobPosts.push(jobPostInfo);
    }
  } catch(error) {
    console.log(error.message);
  } finally {
    await browser.close();
  }
  return 0;
}

//returns array of links
const getJobLinks = async (page) => {
  //stores the links scraped from the page
  const links = [];
  let html;
  
  await page.goto(config.URL2)
  
  //executes as long as there is a next page button on the 
  //current page.
  while(true) {
    await page.waitFor('span.button.pagenum');
    
    html = await page.content();

    $ = cheerio.load(html);
    $('.result-title').each( function() {
      const link = $(this).attr('href');
      links.push(link);
    });
    
    try {
      await page.waitFor('a.button.next');
      await page.click('a.button.next');
    } catch(error) {
      break;
  }
}
  return links;
}

//returns post object
const getJobPostInfo = async (page, link) => {
  //naviagtes to link
  await page.goto(link);
  
  //checks for reply button.
  //no reply button results in a timeout error
  if(await page.$('button.reply-button')) {
    try {
      await page.click('button.reply-button');
      await page.waitFor('a.mailapp')
    } catch(error) {
      console.log(error.message);
    }
  }

  //pulls html from the current job page
  const information = await page.evaluate(() => {
    let email;
    let title;
    let description;
    let compensation;
    
    try {
      title = document.querySelector('#titletextonly').innerHTML;
      description = document.querySelector('#postingbody').innerHTML;
      email = document.querySelector('a.mailapp').innerHTML;
      compensation = document.querySelector('body > section > section > section > div.mapAndAttrs > p > span:nth-child(1) > b')
        .innerHTML;
    } catch(typeError) {
      console.log(typeError);
    } finally {
      return {
        title,
        description,
        email,
      };
    }
  });
  
  //creates post object to be saved in mongoDB collection
  const postToBeSaved = new Post({
    ...information,
    link,
  });

  return postToBeSaved;
}

//saves the object to mongoDB collection
const saveJobPost = async (jobPost) => {
  try {
    await jobPost.save();
  } catch(error) {
    console.error(error.message);
  }
}

module.exports = scraper;
