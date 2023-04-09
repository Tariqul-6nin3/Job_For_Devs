export const getData = async () => {
  const jobsdata = await fetch("jobs.json");
  const jobs = await jobsdata.json();

  return jobs;
};
