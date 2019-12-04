import React, { useState } from 'react'
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

const handleIncludeUser = async (payload) => {
    await api.insertUser(payload).then(res => {
        window.alert(`User inserted successfully`)
    })
}

const UserInsert = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

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
            <Button onClick={handleIncludeUser({name, email})}>Add User</Button>
            <CancelButton href={'/'}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default UserInsert