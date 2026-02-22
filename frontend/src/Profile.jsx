import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axiosInstance from './axisoInstance'

const Profile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axiosInstance.get('profile/')
                setUser(response.data)
            } catch (err) {
                console.log("Error fetching user details:", err)
                setError("Failed to load profile.")
            } finally {
                setLoading(false)
            }
        }

        fetchUserDetails()
    }, [])

    if (loading) {
        return (
            <div className="text-center mt-5 text-light">
                <FontAwesomeIcon icon={faSpinner} spin size="2x" />
                <p>Loading profile...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center mt-5 text-danger">
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className="container mt-5 text-light">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card bg-dark shadow-lg p-4">
                        <h2 className="text-center mb-4">User Profile</h2>

                        <div className="mb-3">
                            <strong>Username:</strong>
                            <p>{user.username}</p>
                        </div>

                        <div className="mb-3">
                            <strong>Email:</strong>
                            <p>{user.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile