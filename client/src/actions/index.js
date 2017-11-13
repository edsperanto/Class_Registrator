export const UPDATE_USR = 'UPDATE_USR';
export const UPDATE_PWD = 'UPDATE_PWD';
export const UPDATE_ERR = 'UPDATE_ERR';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME';
export const UPDATE_LASTNAME = 'UPDATE_LASTNAME';
export const UPDATE_SUID = 'UPDATE_SUID';
export const UPDATE_REGISTRATION = 'UPDATE_REGISTRATION';
export const UPDATE_ALLCLASS = 'UPDATE_ALLCLASS';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const ADD_CANDIDATE = 'ADD_CANDIDATE';
export const DEL_CANDIDATE = 'DEL_CANDIDATE';

export const updateUsr = usr => ({type: UPDATE_USR, usr});
export const updatePwd = pwd => ({type: UPDATE_PWD, pwd});
export const updateErr = err => ({type: UPDATE_ERR, err});
export const updatePage = page => ({type: UPDATE_PAGE, page});
export const updateFirstName = firstName => ({type: UPDATE_FIRSTNAME, firstName});
export const updateLastName = lastName => ({type: UPDATE_LASTNAME, lastName});
export const updateSUID = SUID => ({type: UPDATE_SUID, SUID});
export const updateRegistration = registration => ({type: UPDATE_REGISTRATION, registration});
export const updateAllClass = allClass => ({type: UPDATE_ALLCLASS, allClass: allClass});
export const updateSearch = search => ({type: UPDATE_SEARCH, search});
export const addCandidate = course => ({type: ADD_CANDIDATE, course});
export const delCandidate = course => ({type: DEL_CANDIDATE, course});
