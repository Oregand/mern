import React, { useState, useEffect } from 'react'
import api from '../../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

const handleUpdateUser = async (id, payload) => {
    await api.updateUserById(id, payload).then(res => {
        window.alert(`User updated successfully`)
    })
}

const UserUpdate = ({ match }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    useEffect(() => {
        const user = api.getUserById(match.params.id)

        setName(user.data.data.name)
        setEmail(user.data.data.email)
    }, [])

    return (
        <Wrapper>
            <Title>Create User</Title>
            <Label>Name: </Label>
            <InputText
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Label>Email: </Label>
            <InputText
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button onClick={handleUpdateUser(match.params.id, {name, email})}>Update User</Button>
            <CancelButton href={'/'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default UserUpdate