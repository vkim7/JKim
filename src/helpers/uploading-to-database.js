import { firestore } from '../firebase/firebase.utils';

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const addItemToCart = async (userId, itemsToAdd) => {
  const userRef = firestore.collection('users').doc(`${userId}`);
  userRef
    .update({
      items: [{ ...itemToAdd, quantity: 1 }]
    })
    .then(function() {
      console.log('Document successfully written!');
    })
    .catch(function(error) {
      console.error('Error writing document: ', error);
    });
};

// in App.js in componentDidMount
// addCollectionAndDocuments(
//   'collections',
//   collectionsArray.map(({ title, items }) => ({ title, items }))
// );

// const mapStateToProps = createStructuredSelector({
//   collectionsArray: selectCollectionsForPreview
// });
