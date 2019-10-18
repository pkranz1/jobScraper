import React from 'react';
import Job from '../components/Job';
import Loading from '../components/Loading';

class NewJobsPostsPage extends React.Component {
  state = {
    jobs: [],
    loading: true
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/posts")
    .then(response => response.json())
    .then(posts => {
        this.setState({
          loading: false,
          jobs: posts.map((post, index) => <Job {...post} key={index}/>)
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if(this.state.loading) {
      return <Loading/>;
    }
    return(
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.jobs }
        </div>
      </div>
    );
  }
}
export default NewJobsPostsPage;