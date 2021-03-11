import { createSlice } from '@reduxjs/toolkit';
import { projectTypes } from '../../constants/projectsConstants';

const projects = [
  {
    id: 1,
    name: 'Panorama Boreal',
    type: projectTypes.RESIDENTIAL.id,
    location: { id: 1, name: 'Tunja' },
    address: 'Cra 46 #25-10',
    price: 157500000,
    builtArea: 258.75,
    hasVis: false,
    bathrooms: 2,
    hasParking: false,
    active: true,
    cover: 'https://cdn.pixabay.com/photo/2015/03/26/09/41/condominium-690086_1280.jpg',
  },
];

export const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    list: projects,
    currentProject: null,
    projectLeads: [],
  },
  reducers: {
    load: (state, action) => {
      state.list = action.payload;
    },
    add: (state, action) => {
      state.list = [action.payload, ...state.list];
    },
    updateCurrent: (state, action) => {
      state.currentProject = state.list.find(project => project.id === action.payload);
    },
    deleteCurrent: state => {
      state.currentProject = null;
    },
    loadLeads: (state, action) => {
      state.projectLeads = action.payload;
    },
  },
});

export const { add, deleteCurrent, load, loadLeads, updateCurrent } = projectsSlice.actions;

export default projectsSlice.reducer;
