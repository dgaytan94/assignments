import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

function App() {
  //initial state for bounties 
  const [bounties, setBounties] = useState([])

  //GET request for all bounties that are saved in our 'Fake DB'
  function getBounties(){
    axios.get("/bounties")
    .then(res => {
      console.log(res.data)
      setBounties(res.data)
    })
    .catch(err => console.log(err))
  }

  //POST request : user will be able to add a new bounty to the existing list.
  function addBounty(newBounty){
    axios.post('/bounties', newBounty)
    .then(res => {
      setBounties(prevState => [...prevState, res.data])
    })
  }

  //DELETE request
  function deleteBounty(bountyId){
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevState => prevState.filter(bounty => bounty.id !== bountyId))
    })
    .catch(err => console.log(err))
  }

  //UPDATE request
  function editBounty(newBounty, bountyId){
    axios.put(`/bounties/${bountyId}`, newBounty)
    .then(res => {
      setBounties(prevState => 
        prevState.map(bounty => (bounty._id !== bountyId ? bounty : res.data))
        )
    })
    .catch(err => console.log(err))
  }

  useEffect(()=> {
    getBounties();
  },[])

  return (
    <div className="App">
      <h1 style={{margin: "20px", color: "rgb(0, 77, 35)"}}>Bounties:</h1>
      <AddBountyForm
      submit={addBounty}
      btnText = "Add Bounty"/>
     {
      bounties.map(bounty =>
        <Bounty 
          {...bounty}
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
        />)
     }
    </div>
  );
}

export default App;
