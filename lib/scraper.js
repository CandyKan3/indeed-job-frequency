const request = require("request");
const cheerio = require("cheerio");

module.exports.query = async function(queryObject) {
  const q = new Query(queryObject);
  let a = await (q.getJobs());
 // console.log("RETURNING "+ a)
  return a;
};

function Query(qo) {
  // query variables
  this.host = qo.host || "www.indeed.com";
  this.query = qo.query || "";
  this.city = qo.city || "";
  this.radius = qo.radius || "25";
  this.level = qo.level || "";
  this.maxAge = qo.maxAge || "";
  this.sort = qo.sort || "";
  this.jobType = qo.jobType || "";
  this.excludeSponsored = qo.excludeSponsored || false;

  // internal variables
  this.start = 0;
  this.limit = Number(qo.limit) || 0;
}

Query.prototype.url = function() {
  let q = "https://" + this.host + "/jobs";
  q += "?q=" + this.query;
  q += "&l=" + this.city;
  q += "&radius=" + this.radius;
  q += "&explvl=" + this.level;
  q += "&fromage=" + this.maxAge;
  q += "&sort=" + this.sort;
  q += "&jt=" + this.jobType;
  q += "&start=" + this.start;
  return encodeURI(q);
};

/* Gets all the desired jobs for the city */
Query.prototype.getJobs = function() {
  const excludeSponsored = this.excludeSponsored;
  return new Promise((resolve, reject) => {
    function getSomeJobs(self, jobs) {
      request(self.url(), (error, response, body) => {
        let parsed =  parseJobList(body, self.host, excludeSponsored);
        resolve(parsed);
      });
    }
    getSomeJobs(this, []);
  });
};

/* Parses a page of jobs for the total number of jobs returned */
function parseJobList(body, host, excludeSponsored) {
  const $ = cheerio.load(body);
  const jobTable = $("#searchCountPages");
 
  return jobTable.text();
}
