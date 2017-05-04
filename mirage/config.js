export default function() {
  this.namespace = '/api';

  let manufactures = [
    {
      type: 'manufacture',
      id: 'bmw',
      attributes: {
        title: 'BMW',
        owner: 'BMW',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/98/BMW_logo_ArtWW.svg',
        description: 'Lorem ipsum is simply a dummy text'
      }
    },{
      type: 'manufacture',
      id: 'jaguar',
      attributes: {
        title: 'Jaguar',
        owner: 'Jaguar',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Jaguar_-_logo_%28MSP16%29.jpg',
        description: 'Lorem ipsum is simply a dummy text'
      }
    },{
      type: 'manufacture',
      id: 'audi',
      attributes: {
        title: 'Audi',
        owner: 'Audi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Audi-text.jpg',
        description: 'Lorem ipsum is simply a dummy text'
      }
    },{
      type: 'manufacture',
      id: 'honda',
      attributes: {
        title: 'Honda',
        owner: 'Honda',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Honda.svg',
        description: 'Lorem ipsum is simply a dummy text'
      }
    }
  ]

  let cars = [
    {
      type: 'car',
      id: 'bmw-i8',
      brand:'bmw',
      attributes: {
        title: 'BMW i8',
        manufacturer: 'BMW',
        configuration: 'Demo Cinfig one',
        color: 'red',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/36/BMW_i8_in_Dresden_Hellerau_%281%29.jpg',
        description: 'Lorem ipsum is simply a dummy text, lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'audi-q7',
      brand:'audi',
      attributes: {
        title: 'Audi Q7',
        manufacturer: 'Audi',
        configuration: 'Demo Cinfig two',
        color: 'black',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Audi_Q7_1.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'amaze',
      brand:'honda',
      attributes: {
        title: 'Amaze',
        manufacturer: 'Honda',
        configuration: 'Demo Cinfig three',
        color: 'white',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/This_is_a_pic_of_Honda_Amaze_Sedan-_2014-03-26_23-21.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'bmw-3-series',
      brand:'bmw',
      attributes: {
        title: 'BMW 3 Series',
        manufacturer: 'BMW',
        configuration: 'Demo Cinfig four',
        color: 'black',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/BMW_Series3_black_v.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'bmw-z4',
      brand:'bmw',
      attributes: {
        title: 'BMW Z4',
        manufacturer: 'BMW',
        configuration: 'Demo Cinfig five',
        color: 'grey',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/74/BMW_Z4_silver_v.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'jaguar-xf',
      brand:'jaguar',
      attributes: {
        title: 'Jaguar XF',
        manufacturer: 'Jaguar',
        configuration: 'Demo Cinfig six',
        color: 'white',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Jaguar_XF.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'jaguar-f-pace',
      brand:'jaguar',
      attributes: {
        title: 'Jaguar F-Pace',
        manufacturer: 'Jaguar',
        configuration: 'Demo Cinfig seven',
        color: 'black',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Jaguar_F-Pace_%28front_3-4%29.JPG',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'audi-a4',
      brand:'audi',
      attributes: {
        title: 'Audi A4',
        manufacturer: 'Audi',
        configuration: 'Demo Cinfig eight',
        color: 'red',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Audi_a4_2004_rod_sedan.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'jaguar-xe',
      brand:'jaguar',
      attributes: {
        title: 'Jaguar XE',
        manufacturer: 'Jaguar',
        configuration: 'Demo Cinfig nine',
        color: 'red',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Jaguar_XE_2016_front_three-quarter.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    },
    {
      type: 'car',
      id: 'accord',
      brand:'honda',
      attributes: {
        title: 'Accord',
        manufacturer: 'Honda',
        configuration: 'Demo Cinfig ten',
        color: 'white',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/2010_Acura_MDX_--_2010_DC.jpg',
        description: 'Lorem ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text, lreom ipsum is simply a dummy text'
      }
    }
  ];
  

//  When user clicks for getting records of manufacturers
this.get('/manufactures', function(db, request) {
    let manufacturesarray = [];
    let car_i = 0;
    // We are creating objects of Manufactures from Firebase
    var firebaseRefFetchData =  firebase.database().ref().child("manufactures");
      firebaseRefFetchData.on('child_added',function(snap){
        var id = snap.child('id').val();
        var type = snap.child('type').val();
        var attributes = snap.child('attributes').val();
        var userKey = "'"+snap.key+"'";
        manufacturesarray[car_i] = {'id':id,'type':type,'attributes':attributes};
        car_i++;
      });
     
      // If manufacures array is blank then we return blank array 
      if(manufacturesarray.length){
        return { data: manufacturesarray };
      }else{
        // we got an issue, when user refresh the page, then we are not able to load index controller file, so it does not load manufacture data
        // We can use static array, manufactures while returning 
        return { data: [] };
      }
  });

    
  // When user clicks for getting records of Cars
  this.get('/cars', function(db, request) {
    let cararray = [];
    let manu_i = 0;
    // Fetch dynamic data from firebase databse system for body of table 
    var firebaseRefFetchDatSeta =  firebase.database().ref().child("cars");
    firebaseRefFetchDatSeta.on('child_added',function(snap){
      var id = snap.child('id').val();
      var type = snap.child('type').val();
      var brand = snap.child('brand').val();
      var attributes = snap.child('attributes').val();
      var userKey = "'"+snap.key+"'";
      cararray[manu_i] = {'id':id,'type':type,'brand':brand,'attributes':attributes};
      manu_i++;
    });
  if(cararray.length){
      if(request.queryParams.brand !== undefined) {
        let filteredCars = cararray.filter(function(i) {
          return i.brand.toLowerCase().indexOf(request.queryParams.brand.toLowerCase()) !== -1;
        });
        return { data: filteredCars };
      } else {
        return { data: cararray };
      }
    }else{
      if(request.queryParams.brand !== undefined) {
        let filteredCars = cars.filter(function(i) {
          return i.brand.toLowerCase().indexOf(request.queryParams.brand.toLowerCase()) !== -1;
        });
        return { data: filteredCars };
      }else{
        return { data: [] };  
      }
      
    }
  });

  // Find and return the provided rental from our rental list above
  this.get('/cars/:id', function (db, request) {
    let cararray = [];
    let manu_i = 0;
    // Fetch dynamic data from firebase databse system for body of table 
    var firebaseRefFetchDatSeta =  firebase.database().ref().child("cars");
    firebaseRefFetchDatSeta.on('child_added',function(snap){
      var id = snap.child('id').val();
      var type = snap.child('type').val();
      var brand = snap.child('brand').val();
      var attributes = snap.child('attributes').val();
      var userKey = "'"+snap.key+"'";
      cararray[manu_i] = {'id':id,'type':type,'brand':brand,'attributes':attributes};
      manu_i++;
    });
    return { data: cararray.find((car) => request.params.id === car.id) };
  });

}