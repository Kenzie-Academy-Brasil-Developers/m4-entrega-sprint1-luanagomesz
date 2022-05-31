import profileService from "../services/profile.service"

const profileController = (request, response) => {
    const profile = profileService(request)
    return response.status(200).json(profile)
}

export default profileController