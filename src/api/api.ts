import axios from "axios";

const USER_URL = import.meta.env.VITE_API_USER_URL;

interface LoginResponse {
  data: {
    accessToken: string; // Assuming the access token is inside the 'data' field
    refreshToken: string; // Assuming the refresh token is inside the 'data' field
  };
  user: {
    id: string;
    name: string;
    email: string;
    username: string;
  };
}

// Interface for Register User Input
interface RegisterUserInput {
  name: string;
  username: string;
  email: string;
  password: string;
}

// Interface for Register User Response
interface RegisterUserResponse {
  message: string;
}

// Interface for User Profile Response
interface UserProfile {
  name: string;
}


export const loginUser = async (
  emailOrUsername: string,
  password: string
): Promise<LoginResponse> => {
  try {
    // Make the POST request to login
    const response = await axios.post<LoginResponse>(
      `${USER_URL}/login`, // URL to your login endpoint
      { emailOrUsername, password },
      {
        withCredentials: true, // Ensure cookies are sent/received for authentication
      }
    );

    // Assuming the response includes the access token
    const { accessToken, refreshToken } = response.data.data;

    // Save the access token in localStorage (if it's part of the response)
    localStorage.setItem("accessToken", accessToken);
    
    // Optionally, store the refreshToken if needed
    localStorage.setItem("refreshToken", refreshToken);

    return response.data; // Return server response data (user data, success message, etc.)
  } catch (error: any) {
    // Log detailed error info for debugging
    console.error("Login API Error:", error.response || error.message);

    // Extract error message from server or fallback to a default message
    const message =
      error?.response?.data?.message ||
      error.message ||
      "An unexpected error occurred while logging in";

    throw new Error(message); // Re-throw error with user-friendly message
  }
};

// Logout User Function
export const logoutUser = async (token: string): Promise<string> => {
  try {
    const response = await axios.post(
      `${USER_URL}/logout`,
      {}, // Empty body
      {
        headers: { Authorization: `Bearer ${token}` }, // Pass token as Bearer
        withCredentials: true, // Ensure cookies are included
      }
    );

    return response.data.message; // Return success message
  } catch (error: any) {
    const message = error?.response?.data?.message || error.message || "Error logging out.";
    throw new Error(message);
  }
};

// Get Logged-in User's Profile Function
export const getUserProfile = async (): Promise<UserProfile> => {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("Authentication token is missing. Please log in again.");
    }

    const response = await axios.get<{ status: number; data: UserProfile }>(
      `${USER_URL}/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data; // Extract the "data" field containing the user profile
  } catch (error: any) {
    console.error("Error fetching user profile:", error);
    const message =
      error.response?.data?.message || error.message || "Failed to fetch user profile.";
    throw new Error(message);
  }
};

// Register User Function
export const registerUser = async (
  input: RegisterUserInput
): Promise<RegisterUserResponse> => {
  try {
    const response = await axios.post<RegisterUserResponse>(`${USER_URL}/register`, input);
    return response.data; // Return success message for OTP sent
  } catch (error: any) {
    const message = error?.response?.data?.message || error.message || "Error registering user.";
    throw new Error(message);
  }
};


