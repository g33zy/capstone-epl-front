
// import React, { Component, Fragment } from 'react'
// import {
//     Button,
//     TextField,
//     Dialog,
//     DialogContent,
//     DialogTitle
// } from '@mui/material'



// // import addListing from '../redux/actions'
// // import listing from '../redux/reducers'



// function AddPlayers() {
//   return (
//     <div>AddPlayers</div>
//   )
// }

// export default AddPlayers
















// class AddPlayer extends Component {
//     state = {
//         open: false,
//         first_name: '',
//         last_name: '',
//         goals: '',
//         assists: '',
//         key_passes: '',
//         tackles: '',
//         // image: '',
//     }

//     toggleDialog = () => this.setState({ open: !this.state.open })

//     handleTextChange = (e) => {
//         const newState = { ...this.state }
//         newState[e.target.id] = e.target.value
//         this.setState(newState)
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         const payload = { ...this.state }
//         payload.id = this.props.playersTotal + 1
//         delete payload.open
//         console.log("THE PLAYER", payload)
//         // add this.props.addCar function here
//         // also add this.setState to close the dialog
//         console.log(this.props)
//         this.addPlayer(payload)
//         this.setState({ open: false })
//     }

//     componentDidUpdate = (prevProps, prevState) => {
//         if (prevState.open !== this.state.open) {
//             this.setState({
//                 first_name: '',
//                 last_name: '',
//                 goals: '',
//                 assists: '',
//                 key_passes: '',
//                 tackles: '',
//             })
//         }
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div style={{ textAlign: 'center' }}>
//                     <h1>Add Player:</h1>
//                     <Button
//                         variant="contained"
//                         className="add-player"
//                         onClick={this.toggleDialog}
//                     >
//                         Add Player
//                     </Button>
//                 </div>
//                 <div>
//                     <Dialog open={this.state.open} onClose={this.toggleDialog} >
//                         <DialogTitle>Add New Player</DialogTitle>
//                         <DialogContent>
//                             <form 
//                                 onSubmit={this.handleSubmit}
//                                 style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
//                                 <TextField 
//                                     id="first_name" 
//                                     placeholder="First Name" 
//                                     value={this.state.first_name} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="last_name" 
//                                     placeholder="Last Name" 
//                                     value={this.state.last_name} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="goals" 
//                                     placeholder="Goals" 
//                                     value={this.state.goals} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="assists" 
//                                     placeholder="Assists" 
//                                     value={this.state.address} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="key_passes" 
//                                     placeholder="Key Passes" 
//                                     value={this.state.key_passes} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <TextField 
//                                     id="tackles" 
//                                     placeholder="Tackles" 
//                                     value={this.state.tackles} 
//                                     onChange={this.handleTextChange} 
//                                     required />
//                                 <br />
//                                 <Button variant="contained" color="primary" type="submit">Submit</Button>
//                             </form>
//                         </DialogContent>
//                     </Dialog>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default AddPlayer




















