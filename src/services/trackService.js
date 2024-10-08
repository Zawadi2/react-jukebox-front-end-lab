
const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/tracks`

const create = async (trackFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(trackFormData),
        })

        return res.json()
    } catch (error) {
        console.log(error)
    }
}

async function update(trackId, trackFormData) {
    try {
        const res = await fetch (`${BASE_URL}/${trackId}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(trackFormData),
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const fetchAllTracks = async () => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
            }
        });

        const trackdata = await res.json();
        return trackdata.tracks;
    } catch (error) {
        console.error(error);
        return [];
    }
    
}

const del = async (trackid) => { // del just makes a delete api request to handle deleting a track from the db
    try {
        await fetch(`${BASE_URL}/${trackid}`, { method: 'DELETE', })
    } catch (error) {
        console.log(error);
    }
}


export {
    create, fetchAllTracks, del, update
}