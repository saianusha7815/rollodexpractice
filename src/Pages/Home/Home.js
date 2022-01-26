import React from 'react'
import CardList from '../../components/Card-List/Card-List.component';
import Search from "../../components/Search/Search.component";
import './Home.styles.css'

class Home extends React.Component{
    constructor(){
        super();
        this.state={
            monsters:[],
            searchField:''
        }
    }   

ComponentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
}

handleSearch=(event)=>{
    this.setState({searchField:event.target.value})
}

render(){
    const{monsters,searchField}=this.state
    const filteredMonsters=monsters.filter((monster)=>monster.name.toLowerCase().include(searchField.toLocaleLowerCase()))
    return(
        <>
            <div className='App'>
                <h1>Monsters Rolodex</h1>

                <Search handleSearch={this.handleSearch}/>
                <CardList monster={filteredMonsters}/>
            </div>
        </>

    )
}
}
export default Home
