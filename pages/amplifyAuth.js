import { withAuthenticator } from '@aws-amplify/ui-react';
import {useState, useEffect} from 'react';
import { Auth } from 'aws-amplify';
import '../src/configureAmplify';

function Profile() {
    const [user ,setUser] = useState(null)
    useEffect(() => {
        checkUser()
    }, [])
    async function checkUser() {
        console.log('checking user...')
        try {
            const user = await Auth.currentAuthenticatedUser()
            setUser(user)
            console.log('user:', user)
        } catch(err) {
            setUser(null)
            console.log('err:', err)
        }
    }
    if (!user) return null
    return (
        <div>Profile {user.attributes.email}</div>
    )

}

export default withAuthenticator(Profile);