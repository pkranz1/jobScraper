import React, { useState } from 'react';
import postService from './services/posts';
import './index.css'



function Job({ job, saveFunction }) {
  const [hide, updateHide] = useState(true);

  if(hide) {
    return(
      <div className="jobPost">
        <h4>{job.title}</h4>
        <button onClick={() => updateHide(!hide)}>Show</button>
      </div>
    );
  } else {
    return(
      <div className="jobPost">
        <div>
          <h4 className="center-text">{job.title}</h4>
          <button onClick={() => updateHide(!hide)}>Hide</button>
          <p>{job.description}</p>
          <p>Email: {job.email}</p>
          <a href={job.link} target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div>
          <button onClick={(event) => {saveFunction(event,job)}}>Save</button>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newJobs: [],
      savedJobs: [],
      displayedJobs: [],
      saved: false,
      titleText: 'Job Posts',
      buttonText: 'Saved Job Posts',
    };
  }

  updateDisplay = () => {
    if(this.state.saved) {
      this.setState({
        displayedJobs: this.state.savedJobs.map(job => {
          return(
            <Job
              job={job}
              saveFunction={this.saveJob}
              key={job.id}
            />
          )
        })
      })
    } else {
      this.setState({
        displayedJobs: this.state.newJobs.map(job => {
          return(
            <Job
              job={job}
              saveFunction={this.saveJob}
              key={job.id}
            />
          )
        })
      })
    }
  }

  async componentDidMount() {
    try{
      const posts = await postService.getNewPosts();
      
      posts.forEach(post => {
        if(post._saved) {
          this.setState({ savedJobs: this.state.savedJobs.concat(post)});
        } else {
          this.setState({ newJobs: this.state.newJobs.concat(post)});
        }
      });

      this.setState({
        displayedJobs: this.state.newJobs.map(job => {
          return(
            <Job
              job={job}
              saveFunction={this.saveJob}
              key={job.id}
            />
          )
        })
      });

    } catch(exception) {
      console.error(exception);
    }
        

   
  }
  
  scrapeJobs = async (event) => {
    await postService.scrapeNewPosts();
    const newPosts = await postService.getNewPosts();
    this.setState({
      newJobs: newPosts,
    }, this.updateDisplay())

    postService
      .scrapeNewPosts()
        .then(() => {
          postService
            .getNewPosts()
              .then(posts => this.setState({ newJobs: posts }))
        });
  }
  
  saveJob = async (event, job) => {
    try{
      const savedJob = await postService.savePost(job);
      console.log(savedJob);
      this.setState({
        newJobs: this.state.newJobs.filter(job => {return job.id !== savedJob.id}),
        savedJob: this.state.savedJobs.concat(savedJob),
      });
      this.updateDisplay()
    } catch(exception) {
      console.error(exception);
    }
  }

  changeJobsDisplay = (event) => {
    const formerButtonText = this.state.buttonText;

    this.setState({ 
      saved: !this.state.saved,
      buttonText: this.state.titleText,
      titleText: formerButtonText,
    }, () => {
      if(this.state.saved) {
        this.setState({
          displayedJobs: this.state.savedJobs.map(job => {
            return(
              <Job
                job={job}
                saveFunction={this.saveJob}
                key={job.id}
              />
            )
          })
        })
      } else {
        this.setState({
          displayedJobs: this.state.newJobs.map(job => {
            return(
              <Job
                job={job}
                saveFunction={this.saveJob}
                key={job.id}
              />
            )
          })
        })
      }
    })
  }

  
  render() {
    return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2 className="text-center">{this.state.titleText}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-primary" 
            onClick={(event) => this.scrapeJobs(event)}>
              Scrape Craigslist
          </button>
          <button className="btn btn btn-outline-warning"
            onClick={(event) => this.changeJobsDisplay(event)}>
              Show {this.state.buttonText}
          </button>
          </div>
          </div>
          <div>
            {this.state.displayedJobs}
          </div>
      </div>
      )
    
  }
}



export default App;
