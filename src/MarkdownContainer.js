import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'


class MarkdownContainer extends Component {
  constructor(props) {
    super(props)
    console.log('after constructor')
    console.log(this.props)
    this.state = { terms: null }
  }

  loadMarkdown = () => {
    var user = 'maxfeldman99'
    var repo = 'CV-Planes-Detection'
    var path = 'README.md'
    var url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`;
    var myRequest = new Request(url, { headers: new Headers({'accept':'application/vnd.github.v3.raw'})});
    fetch(myRequest)
    .then(function(response) {
      if (!response.ok) return "# There was error with your response, please check the details and try again";
      console.log(response)
      return response.text();
    })
  };

  // componentWillMount(prevProps) {
  //   if(this.props.user !== prevProps.user && this.props.repo !== prevProps.repo)
  //   fetch(`https://api.github.com/repos/${props.user}/${props.repo}/contents/${props.path}`).then((response) => response.text()).then((text) => {
  //     this.setState({ terms: text })
  //   })
  // }

  componentWillMount(props) {
    console.log('blabla')
    console.log(this.props)
    console.log('inside willMount '+this.props.data)
    fetch(`https://raw.githubusercontent.com/maxfeldman99/${this.props.data}/master/README.md`).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <ReactMarkdown source={this.state.terms} />
      </div>
    )
  }
}

export default MarkdownContainer

