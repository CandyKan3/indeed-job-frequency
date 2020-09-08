# indeed-scraper

### A Node.js package for getting job list frequency from Indeed.com

This was adapted from the following package, and modified to scrape the total number of jobs for each query [npm](https://www.npmjs.com/package/indeed-scraper).

```
npm install indeed-job-frequency
```

Include the package

```
const indeed = require('indeed-job-frequency');
```

Query Indeed:

```
const queryOptions = {
  host: 'www.indeed.com',
  query: 'Software',
  city: 'Seattle, WA',
  radius: '25',
  level: 'entry_level',
  jobType: 'fulltime',
  maxAge: '7',
  sort: 'date',
  limit: 100
};


```

- **queryOptions** object:
  _ **host** - *string* - The host to query. ([country overview](https://www.indeed.com/worldwide)) - Default: 'www.indeed.com'
  _ **query** - _string_ - The text to search. (i.e. Software Developer) - Default: _Empty String_
  _ **city** - *string* - The name of the city. Should be in the format 'Seattle, WA'. - Default: *Empty String*
  _ **radius** - _string_ - The search radius in miles - Default: '25'
  _ **level** - *string* entry*level, mid_level, or senior_level - Default: \_Empty String*
  _ **jobType** - _string_ - fulltime, contract, parttime, temporary, internship, commission - Default: _Empty String_
  _ **maxAge** - *string* - The maximum age of jobs that are returned - Default: *Empty String* (No max age)
  _ **sort** - _string_ - relevance, date - Default: 'relevance'
  _ **limit** - *number* - The maximum number of jobs to return - Default: 0 (No limit)
  _ **excludeSponsored** - _boolean_ - Exclude sponsored job postings from the results - Default: false

- **Job** object:
  _ **title** - *string* - Title of the job
  _ **company** - _string_ - Company Name
  _ **location** - *string* - Location of the job
  _ **summary** - _string_ - Beginning of the job description
  _ **url** - *string* - Url of the job page
  _ **postDate** - _string_ - A string describing how long ago the job was posted
  _ **salary** - *string* - A string with salary information (can be empty)
  _ **isEasyApply** - _boolean_ - A boolean describing if the job is easy apply
