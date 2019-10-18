import React from 'react';
import Job from '../components/Job';
import Loading from '../components/Loading';

class SavedJobsPostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: [],
      loading: true,
    }
    this.mounted = null;
    this.reactReadyJobs = this.reactReadyJobs.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    fetch("http://localhost:8080/api/posts/saved")
    .then(response => response.json())
    .then(posts => {
      if(this.mounted) {
        this.setState({
          loading: false,
          jobs: posts
        });
      }
      
      })
    .catch(err => console.error(err));
  }
  
  componentWillUnmount() {
    this.mounted = false;
  }

  reactReadyJobs() {
    return this.state.jobs.map((post, index) => {
      return <Job
        { ...post }
        key={ index }
        savePost={this.saveJobPost}
      />
    });
  }

  render() {
    if(this.state.loading) {
      return <Loading/>;
    }
    return(
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.reactReadyJobs() }
        </div>
      </div>
    );
  }
}
export default SavedJobsPostsPage;