const initialState = {
  companies: {
    id: null,
    name: "",
    password: "",
    location: "",
    bio: ""
  },
  seekers: {
    id: null,
    name: "",
    password: "",
    location: "",
    skills: "",
    experience: ""
  },
  jobs: {
    name: "",
    location: "",
    description: "",
    salary: null,
    company_id: null
  }
};

export const rootReducer = (state = initialState, action) => {
  return initialState;
};
