import { withSSRContext } from "aws-amplify";

export default async function handler(req, res) {
    const { Auth } = withSSRContext({ req });
    const user = await Auth.currentAuthenticatedUser();
    console.log('user:', user)
    res.statusCode = 200
    res.json({ name:user })
}