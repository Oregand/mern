import React, { useState, useEffect } from 'react'
import API from '../../api'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const UserList = () => {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const result = await API.getAllUsers()
        return result;
    }   

    useEffect(() => {
        setUsers(getUsers())
        console.log(users)
    },  [])

    return (
        <Wrapper>
            {users.length === 0 && <p>No worries</p>}
            {users.length > 0 && <table></table>}
        </Wrapper>
    )
}

export default UserList