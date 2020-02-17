const SHOP_DATA = {
  apparel: {
    id: 1,
    title: 'Apparel',
    routeName: 'apparel',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-1-L_337x450.jpg?alt=media&token=9341ead8-6c82-4310-b7ac-55c47660512f',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-1-L.jpg?alt=media&token=47450ac7-8f1d-4e14-8507-248978d9ab52',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-2-L_337x450.jpg?alt=media&token=09ac88d9-e38d-4a4c-8d49-f7138fbf9956',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-2-L.jpg?alt=media&token=72bbb58e-dad1-4d91-abfc-ee766dd5cb63',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-3-L_337x450.jpg?alt=media&token=93cb5677-ecb4-4664-8ebb-02b9b4665858',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-3-L.jpg?alt=media&token=cdd5adee-6822-4ff5-b343-9da02ee49b1b',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-4-L_337x450.jpg?alt=media&token=3c929e08-6e16-4987-b500-161610fd9236',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-4-L.jpg?alt=media&token=258e42a7-a834-497a-9895-ae91f1a4937d',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-5-L_337x450.jpg?alt=media&token=e2baa756-3a44-46ff-9c05-dcd430e442a1',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-5-L.jpg?alt=media&token=513a9fd1-de91-44e4-b645-733ed415105d',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-6-L_337x450.jpg?alt=media&token=c34766ba-92c6-409a-9a21-0f66f2f40d9b',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-6-L.jpg?alt=media&token=abf06aef-cb93-4019-a905-6bf0189be6af',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-7-L_337x450.jpg?alt=media&token=273321f2-3074-482b-bcd4-b159eb192ef3',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-7-L.jpg?alt=media&token=1b6c4d75-2182-431e-8cd0-932e817cc016',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-8-L_337x450.jpg?alt=media&token=5ba062df-9b25-4237-90d1-e754de2469c9',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-8-L.jpg?alt=media&token=0d6c6b6c-75ae-4978-923d-607a32a3e682',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-9-L_337x450.jpg?alt=media&token=7c60a8c2-dd08-46b7-af01-4e4d8b570fc3',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-9-L.jpg?alt=media&token=1f971f22-96a8-47bb-8287-c5301cf20e6f',
        price: 16
      },
      {
        id: 10,
        name: 'Grey Brim',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-10-L_337x450.jpg?alt=media&token=aa423c97-4670-47ca-83a7-f51b735a4b38',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-10-L.jpg?alt=media&token=e19bb3f9-943a-403f-a08f-26317acea6e4',
        price: 25
      },
      {
        id: 11,
        name: 'Green Beanie',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-11-L_337x450.jpg?alt=media&token=957d3d81-222b-40cd-9012-5425b65f7f6e',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-11-L.jpg?alt=media&token=d6c8e9ec-5c18-4874-a27b-fb37aba65f6a',
        price: 18
      },
      {
        id: 12,
        name: 'Palm Tree Cap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-12-L_337x450.jpg?alt=media&token=dc1ebd0c-fcf3-457e-8ea3-95fcf0700bc1',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-12-L.jpg?alt=media&token=ee74a208-7922-4cbc-bcdb-3b62230e8ba6',
        price: 14
      },
      {
        id: 13,
        name: 'Red Beanie',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-13-L_337x450.jpg?alt=media&token=8bb0822e-5176-4968-9044-f18e334437fd',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-13-L.jpg?alt=media&token=84c35dd1-5364-40bb-b0ef-7f0686e9da9e',
        price: 18
      },
      {
        id: 14,
        name: 'Wolf Cap',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-14-L_337x450.jpg?alt=media&token=c846843c-7e64-49c0-802e-beb1b544a1bd',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-14-L.jpg?alt=media&token=d1facd4b-0471-4e01-86cf-76b8c0ebe101',
        price: 14
      },
      {
        id: 15,
        name: 'Blue Snapback',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-15-L_337x450.jpg?alt=media&token=41ed1693-d50e-4265-8704-bbb1688e5801',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fapparel%2FAPP-15-L.jpg?alt=media&token=f082231f-30ba-4132-bb05-d82f6bb148f6',
        price: 16
      }
    ]
  },
  backpacks: {
    id: 2,
    title: 'Backpacks',
    routeName: 'backpacks',
    items: [
      {
        id: 17,
        name: 'Adidas NMD',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-1-L_337x450.jpg?alt=media&token=d5a54cdc-17ec-4200-ba9d-2e4a175de1ab',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-1-L.jpg?alt=media&token=1bb03b2c-6cdb-42f9-a563-560f14ce4f80',
        price: 220
      },
      {
        id: 18,
        name: 'Adidas Yeezy',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-2-L_337x450.jpg?alt=media&token=12a1fdc7-3e73-4a4a-8b57-5aa1a50b0bd9',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-2-L.jpg?alt=media&token=68380c97-e046-4269-b8f3-4fc4a072f193',
        price: 280
      },
      {
        id: 19,
        name: 'Black Converse',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-3-L_337x450.jpg?alt=media&token=53cd0574-ba68-4dbe-97c8-f1f553bb413e',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-3-L.jpg?alt=media&token=f7ce1993-1d63-4c0d-8085-6270fd765cfb',
        price: 110
      },
      {
        id: 20,
        name: 'Nike White AirForce',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-4-L_337x450.jpg?alt=media&token=67ebe3ce-86de-45b1-8f9c-7939700c3613',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-4-L.jpg?alt=media&token=5f7e01a4-2ee1-468d-b66c-86a946b58d0e',
        price: 160
      },
      {
        id: 21,
        name: 'Nike Red High Tops',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-5-L_337x450.jpg?alt=media&token=c72cc280-a2cb-4770-8c62-ad3d2dba5ce3',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-5-L.jpg?alt=media&token=ac4918e5-0023-423d-831d-365a5e0622d0',
        price: 160
      },
      {
        id: 22,
        name: 'Nike Brown High Tops',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-6-L_337x450.jpg?alt=media&token=633f3fbd-f81f-4609-815a-af9a083c3a42',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-6-L.jpg?alt=media&token=54063265-6448-4382-a1be-70805f5f78c2',
        price: 160
      },
      {
        id: 23,
        name: 'Air Jordan Limited',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-7-L_337x450.jpg?alt=media&token=3ae7e9da-6a3e-4ea3-8129-385afc5e5609',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-7-L.jpg?alt=media&token=85b010b5-b7c0-4149-857a-12f60274cb80',
        price: 190
      },
      {
        id: 24,
        name: 'Timberlands',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-8-L_337x450.jpg?alt=media&token=12047e51-03c2-4573-9cf4-7befbe074bff',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-8-L.jpg?alt=media&token=aad3c8e9-46d5-4156-ab7a-7acbffc4ef18',
        price: 200
      },
      {
        id: 25,
        name: 'Air Jordan Limited',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-9-L_337x450.jpg?alt=media&token=cfdf0ea8-2e6b-4bbd-a70d-b6612ecf1cad',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-9-L.jpg?alt=media&token=582c21ac-7291-48f5-91ac-8b3a92edc839',
        price: 190
      },
      {
        id: 26,
        name: 'Timberlands',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-10-L_337x450.jpg?alt=media&token=c103dfef-251e-4a85-8f20-230b04297e7b',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Fbackpacks%2FBAC-10-L.jpg?alt=media&token=a2776d37-f982-4f32-bf0e-73cb09a88c42',
        price: 200
      }
    ]
  },
  accessories: {
    id: 3,
    title: 'Accessories',
    routeName: 'accessories',
    items: [
      {
        id: 27,
        name: 'Black Jean Shearling',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-16-L_337x450.jpg?alt=media&token=cc2dea62-e930-41af-8e64-4c5706b90e80',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-16-L.jpg?alt=media&token=76e5c5a6-22d0-44fc-b9eb-94eb9604269f',
        price: 125
      },
      {
        id: 28,
        name: 'Blue Jean Jacket',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-17-L_337x450.jpg?alt=media&token=e6a80d92-bf99-4897-9d22-8ef5f3c9ba07',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-17-L.jpg?alt=media&token=98f07daa-a219-4de5-a3cf-626c798f5604',
        price: 90
      },
      {
        id: 29,
        name: 'Grey Jean Jacket',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-18-L_337x450.jpg?alt=media&token=a0a3427c-5124-4c9a-a210-d566f5c1612a',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-18-L.jpg?alt=media&token=052d9fdd-6cc1-494e-b3f2-9171c6b4d278',
        price: 90
      },
      {
        id: 30,
        name: 'Brown Shearling',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-19-L_337x450.jpg?alt=media&token=ade2b731-c562-4eae-a3c7-ba8246f8dcf1',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-19-L.jpg?alt=media&token=171d4fc3-d087-4d69-b511-e038290d5122',
        price: 165
      },
      {
        id: 31,
        name: 'Tan Trench',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-20-L_337x450.jpg?alt=media&token=94a16801-b025-40e4-a35d-04caf46ba4de',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-20-L.jpg?alt=media&token=c63ff979-fa4a-4295-ab9d-d837576d2f68',
        price: 185
      },
      {
        id: 32,
        name: 'Brown Shearling',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-21-L_337x450.jpg?alt=media&token=e986c99d-1811-4be9-af29-e2cb5ffd6632',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-21-L.jpg?alt=media&token=afed2e3f-f788-4ed6-9daf-3f9107ba4b84',
        price: 165
      },
      {
        id: 33,
        name: 'Tan Trench',
        imageUrl:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-22-L_337x450.jpg?alt=media&token=7403701a-4629-4928-98fd-f6ec1cf9da6a',
        imageUrlLarge:
          'https://firebasestorage.googleapis.com/v0/b/practice-3edd2.appspot.com/o/shop%2Faccessories%2FACC-22-L.jpg?alt=media&token=0a8c09a8-3ffb-4329-836d-c805f3c578c6',
        price: 185
      }
    ]
  }
};

export default SHOP_DATA;
