import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NavBar from '../Navbar/Navbar'
import { useSelector } from 'react-redux'
import { getAllUserContacts } from '../../../APIs/userAPI'
import Contacts from '../../../Components/User/Chat/Contacts'
import Welcome from '../../../Components/User/Chat/Welcome'
import ChatContainer from '../../../Components/User/Chat/ChatContainer'


const Chat = () => {
    const [contacts, setContacts] = useState([])
    const user = useSelector((state) => state.userLogin.userLoginDetails)
    const [currentChat, setCurrentChat] = useState(undefined)

    useEffect(() => {
        if (user) {
            const details = async () => {
                getAllUserContacts().then((data) => {
                    setContacts(data.data)
                })
            }
            details();
        }
    }, [])

    const handleChatChange = (chat) => {
        setCurrentChat(chat)
    }
    return (
        <>
            <NavBar />
            <Container>
                <div className="container mt-5">
                    <Contacts contacts={contacts} currentUser={user} changeChat={handleChatChange} />
                    {
                        currentChat === undefined ?
                            (<Welcome currentUser={user} />) :
                            (<ChatContainer currentChat={currentChat} currentUser={user} socket={socket} />)
                    }
                </div>
            </Container>
        </>
    )
}
const Container = styled.div`
    height : 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    border-radius:50px;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    
    .container {
      padding:0;
      height: 100vh;
      width: 100vw;
      background-color: #e3e3e3;
      display: grid;
      grid-template-columns: 25% 75%;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        grid-template-columns: 35% 65%;
      }
    }
`;

export default Chat

