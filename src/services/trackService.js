const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/tracks`

const create = async (trackFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(trackFormData),
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export {
    create,
}