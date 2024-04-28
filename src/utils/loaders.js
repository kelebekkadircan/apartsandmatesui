/* eslint-disable no-unused-vars */
import { defer } from 'react-router-dom'
import { newRequest } from './newRequest.js'


export const singlePageLoader = async ({ request, params }) => {
    const res = await newRequest("/posts/" + params.id)
    return res.data
}


export const listPageLoader = async ({ request, params }) => {
    const query = request.url.split("?")[1]
    console.log("LOADER QUERY : ", query)
    const postPromise = await newRequest("/hotels?" + query)
    return postPromise.data
    // return defer({
    //     postResponse: postPromise
    // })
}

export const profilePageLoader = async () => {

    const postPromise = newRequest("/users/profilePosts")
    return defer({
        postResponse: postPromise
    })

}