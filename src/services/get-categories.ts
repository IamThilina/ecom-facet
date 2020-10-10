import response from "../data/response"

export default async () => {
    return {
        categories:  response.data.categories,
        rootId: "0"
    }
}
