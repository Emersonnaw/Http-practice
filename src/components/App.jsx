import {Component} from 'react';
import axios from "axios";
import CharacterGallery from './CharacterGallery';
axios.defaults.baseURL = "https://rickandmortyapi.com/api";


class App extends Component  {




  state ={
    articles:[],}
  async componentDidMount() {
    const response = await axios.get("/character?page=1");
    console.log('full response ===>', response);
    console.log('resp', response.data.results);
    this.setState({ articles:response.data.results });
  }



  render() {
    const {articles} = this.state;
    return (
    
    <div>
      <h1>Actors</h1>


      <CharacterGallery items={articles} />
        
    </div>
  );
  }
  
};

export default App;
