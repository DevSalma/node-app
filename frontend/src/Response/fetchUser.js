//Calls endpoint for landing page but left unused due to time crunch
const getUser = async(username) => {
    try {
        const response = await fetch(`http://localhost:1080/user/${username}`, {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json'
            },
        });
        const result = await response.json();
        if(!response.ok) {
            return alert(result.message);
        }
        return result;
    }catch(err) {
        console.error(err);
    };
}

export default getUser; 