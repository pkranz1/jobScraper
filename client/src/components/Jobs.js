import React, {useState, useEffect} from 'react';
import postService from '../services/posts'
import Job from './Job';
import Button from './Button';

// function JobsBoard(props){
//   const [newJobs, updateNewJobs] = useState([]);
//   const [savedJobs, updateSavedJobs] = useState([]);
  
//   useEffect(function() {
//     postService
//     .getNewPosts()
//     .then(posts => 
//       updateNewJobs(posts));
    
//     postService
//     .getSavedPosts()
//     .then(posts => 
//       updateSavedJobs(posts));
//   },[]);
  
//   function jobPosts(jobs) {
//     return jobs.map((job, index) => {
//       return(
//         <div>
//           <Job key={job.id} job={job}/>
//           <Button onClick={updateJobs} title='Save' hide={job._saved} job={job}/>
//           <Button title='Remove' onClick={deleteJob} job={job} hide={false}/>
//         </div>
//       );
//     });
//   }
//   async function deleteJob(job) {
//     try{ 
//       await postService.deletePost(job);
      
//       //updateJobs(newJobs.filter(currentValue => currentValue.id !== job.id));
//       //updateSavedJobs(savedJobs.filter(currentValue => currentValue.id !== job.id));
    
//     } catch (err) {
//       console.error(err);
//     }
//   }
  
//   async function updateJobs(job) {
//     try{
//       await postService.savePost(job);
//       job._saved = true;
//       updateSavedJobs(savedJobs.concat(job));
//       updateNewJobs(newJobs.filter(currentValue => 
//         currentValue.id !== job.id));
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function scrape() {
//     await postService.scrapeNewPosts();
//     const newPosts = await postService.getNewPosts();
//     updateNewJobs(newPosts);
//   }
  
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-8">
//           <h2 className="text-center">New Job Posts</h2>
//           <button onClick={scrape}>Scrape</button>
//           {jobPosts(newJobs)}
//         </div>
//         <div className="col-4">
//           <h2 className="text-center">Saved Job Posts</h2>
//           {jobPosts(savedJobs)}
//         </div>
//       </div>
//     </div>
//   );
  
// }



// class Jobs extends React.Component {
//   constructor(props) {
//     super(props);
   
//     this.state = {
//       jobs: [],
//     }
//   }

//   componentDidMount() {
//     if (!this.props.newPosts) {
//       postService
//       .getSavedPosts()
//       .then(posts => this.setState({
//         jobs: this.state.jobs.concat(posts)
//       }));
//     } else {
//       postService
//       .getNewPosts()
//       .then(posts => this.setState({
//         jobs: this.state.jobs.concat(posts)
//       }));
//     }
//   }

//   jobPosts() {
//     return this.state.jobs.map( job => {
//       return (
//         <Job
//         key={job._id}
//         job={job}
//         />
//       );
//     });
//   }



//   render() {
//     if(!this.props.newPosts && !this.state.jobs.length) {
//       return (
//         <div>
//           <h4 className="text-center">No Job Posts</h4>
//         </div>
//       );
//     } else {
//       return(
//         <div>
//           {this.jobPosts()}
//           <button onClick={this.scrape}>scrape</button>
//         </div>
//       );
//     }
//   }
// }






export default Jobs;