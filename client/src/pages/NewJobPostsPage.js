import React from 'react';
import Job from '../components/Job';
import Loading from '../components/Loading';
import axios from 'axios';

class NewJobsPostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      loading: true,
    };
    this.mounted = null;
    this.saveJobPost = this.saveJobPost.bind(this);
    this.reactReadyJobs = this.reactReadyJobs.bind(this);
  }
  
  componentDidMount() {
    this.mounted = true;
    fetch("http://localhost:8080/api/posts")
    .then(response => response.json())
    .then(posts => {
      if(this.mounted) {
        this.setState({
          jobs: posts,
          loading: false,
        });
      }
    })
    .catch(err => console.error(err));
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  saveJobPost(id) {
    console.log('the object id: ', id);
    fetch(`http://localhost:8080/api/posts/${id}`, {
      method: 'PUT',
    })
    .then(() => {
      this.setState({
        jobs: this.state.jobs.filter(post => post.id !== id)
      })
      console.log('posts array updated');
    })
    .catch(err => console.error(err));
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
          { this.reactReadyJobs()}
        </div>
      </div>
    );
  }
}
export default NewJobsPostsPage;