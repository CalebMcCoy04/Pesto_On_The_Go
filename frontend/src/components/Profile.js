import { useState} from 'react'
import Modal from 'react-modal';



function Profile({currentUser}) {
    const [updatedEmail, setUpdatedEmail] = useState(currentUser.email)
    const [showModal, setShowModal] = useState(false);
    console.log(currentUser)
    const handleSubmit = (e) =>{
    e.preventDefault()
    fetch(`/users/${currentUser.id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },        
        body: JSON.stringify({
            email: updatedEmail
        })      
    })
    setShowModal(false)
}

    

    return (
        <>
          <div className='profile-holder'>
            <h1>Welcome {currentUser.username}</h1>
            <p>Email: {currentUser.email}</p>
            <button onClick={() => setShowModal(true)}>Update Email</button>
          </div>
          <Modal className='modal'
            isOpen={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <form onSubmit={handleSubmit}>
              <label>
                New Email:
                <input
                  type="email"
                  value={updatedEmail}
                  onChange={e => setUpdatedEmail(e.target.value)}
                />
              </label>
              <button type="submit">Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </Modal>
        </>
      );
    }
    
    export default Profile;