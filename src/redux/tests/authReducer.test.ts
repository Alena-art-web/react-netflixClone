import authReducer, {getUser} from "../slices/authReducer"

const user = {
    data: {
    userId: 'jhashdjg',
    userEmail: 'alena123@gmail.com'
}}
describe('authSlice', () => { 
    it('should return default state when passed an empty action', () => {
        const result = authReducer(undefined, { type: '' })

        expect(result.data).toEqual({})
    })
    it('should get user user with "getUser" action', () => {
        const action = {type: getUser.type, payload: user.data}

        const result = authReducer(user, action)
        expect(result.data.userEmail).toBe('alena123@gmail.com')
        expect(result.data.userId).toBe('jhashdjg')
    })
 })