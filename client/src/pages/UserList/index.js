import React, { useState, useEffect } from 'react'
import API from '../../api'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const columns = [
    {
        Header: 'ID',
        accessor: '_id',
        filterable: true,
    },
    {
        Header: 'Name',
        accessor: 'name',
        filterable: true,
    },
    {
        Header: 'Email',
        accessor: 'email',
        filterable: true,
    }
]

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

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
            <p>In this page you'll see the list of users</p>
        </Wrapper>
    )
}

export default UserList