import { takeLatest, call, put, all } from "redux-saga/effects";
import firebase from '../firebase/firebase';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
    yield all([
        takeLatest("LOAD_PROJECTS_REQUEST", loadProjectsSaga)
    ])
}

// function that makes the api request and returns a Promise for response
function fetchProjects() {
    const firestore = firebase.firestore();
    const settings = {timestampsInSnapshots: true};
    firestore.settings(settings);
    return firestore.collection('projects').get();
}

// function that makes the file read request and returns a promise for response
function fetchArticle(query) {
    return new Promise((resolve) => {
        const url = query.data().articleURL;
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.onload = () => {
            const reader = new FileReader();
            // This fires after the blob has been read/loaded.
            reader.addEventListener('loadend', (e) => {
                var project = query.data();
                project.article = e.srcElement.result;
                resolve(project);        
            });
            // Start reading the blob as text.
            reader.readAsText(xhr.response);
        };
        xhr.open('GET', url);
        xhr.send();
    })
}

// worker saga: makes the api call when watcher saga sees the action
function* loadProjectsSaga() {
  try {
    const querySnapshot = yield call(fetchProjects);
    var projects = yield all(
        querySnapshot.docs.map(
            (query) => call(fetchArticle, query)
        )
    )
    projects = projects.sort((a, b) => {
        return (a.order - b.order);
    })
    yield put({ type: "LOAD_PROJECTS_SUCCESS", projects });
} catch (error) {
    yield put({ type: "LOAD_PROJECTS_FAILURE", error });
    }
}