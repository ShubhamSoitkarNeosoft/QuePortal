

export const AuthHeader = ()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('inside auth header',user.token)
    if (user && user.token ){
        return { Authorization: `Bearer ${user.token}` };
    }
    else {
        return {}
    }
}