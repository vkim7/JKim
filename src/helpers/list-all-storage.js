import firebase from 'firebase/app';
import 'firebase/storage';

export const listAll = location => {
  const storage = firebase.storage();
  const storageRef = storage.ref();

  const listRef = storageRef.child(location);

  listRef
    .listAll()
    .then(function(res) {
      res.items.forEach(function(itemRef) {
        itemRef.getDownloadURL().then(url => {
          console.log(url);
        });
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};
