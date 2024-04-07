import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
  data: any; 

  constructor( ) {}
  Data:any=[
    {
      id:1,
      title:"Program",
      logo:"https://img.freepik.com/premium-vector/abstract-figure-made-multicolored-plates-curved-intertwined-form-sphere-with-glares-shadow-white-background_444390-20454.jpg",
      url:"/admin",
      Data:[
        {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        }
      ]
    },
    {
      id:2,
      title:"Observation",
      logo:"https://img.freepik.com/premium-vector/observation-icon-research-surveillance-symbol_883533-343.jpg",
      url:"/observation",
      Data:[
        {
          "postId": 1,
          "id": 1,
          "name": "id labore ex et quam laborum",
          "title": "Eliseo@gardner.biz",
          "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        },
        {
          "postId": 1,
          "id": 2,
          "name": "quo vero reiciendis velit similique earum",
          "title": "Jayne_Kuhic@sydney.com",
          "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
        },
        {
          "postId": 1,
          "id": 3,
          "name": "odio adipisci rerum aut animi",
          "title": "Nikita@garfield.biz",
          "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
        },
        {
          "postId": 1,
          "id": 4,
          "name": "alias odio sit",
          "title": "Lew@alysha.tv",
          "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
        },
        {
          "postId": 1,
          "id": 5,
          "name": "vero eaque aliquid doloribus et culpa",
          "title": "Hayden@althea.biz",
          "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
        },
        {
          "postId": 2,
          "id": 6,
          "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
          "title": "Presley.Mueller@myrl.com",
          "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
        },
        {
          "postId": 2,
          "id": 7,
          "name": "repellat consequatur praesentium vel minus molestias voluptatum",
          "title": "Dallas@ole.me",
          "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
        },
        {
          "postId": 2,
          "id": 8,
          "name": "et omnis dolorem",
          "title": "Mallory_Kunze@marie.org",
          "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
        },
        {
          "postId": 2,
          "id": 9,
          "name": "provident id voluptas",
          "title": "Meghan_Littel@rene.us",
          "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
        },
        {
          "postId": 2,
          "id": 10,
          "name": "eaque et deleniti atque tenetur ut quo ut",
          "title": "Carmen_Keeling@caroline.name",
          "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
        }
      ]
    },
    {
      id:3,
      title:"Observation with Rubrics",
      logo:"https://img.freepik.com/premium-vector/observation-icon-research-surveillance-symbol_883533-343.jpg",
      url:"/obser",
      Data:[
        {
          "userId": 1,
          "id": 1,
          "title": "quidem molestiae enim"
        },
        {
          "userId": 1,
          "id": 2,
          "title": "sunt qui excepturi placeat culpa"
        },
        {
          "userId": 1,
          "id": 3,
          "title": "omnis laborum odio"
        },
        {
          "userId": 1,
          "id": 4,
          "title": "non esse culpa molestiae omnis sed optio"
        },
        {
          "userId": 1,
          "id": 5,
          "title": "eaque aut omnis a"
        },
        {
          "userId": 1,
          "id": 6,
          "title": "natus impedit quibusdam illo est"
        },
        {
          "userId": 1,
          "id": 7,
          "title": "quibusdam autem aliquid et et quia"
        },
        {
          "userId": 1,
          "id": 8,
          "title": "qui fuga est a eum"
        },
        {
          "userId": 1,
          "id": 9,
          "title": "saepe unde necessitatibus rem"
        },
        {
          "userId": 1,
          "id": 10,
          "title": "distinctio laborum qui"
        }
      ]
    },
    {
      id:4,
      title:"Survey",
      logo:"https://cdn2.vectorstock.com/i/1000x1000/24/81/survey-check-list-icon-logo-vector-25212481.jpg",
      url:"/survey",
      Data:[
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
        {
          "userId": 1,
          "id": 4,
          "title": "et porro tempora",
          "completed": true
        },
        {
          "userId": 1,
          "id": 5,
          "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
          "completed": false
        },
        {
          "userId": 1,
          "id": 6,
          "title": "qui ullam ratione quibusdam voluptatem quia omnis",
          "completed": false
        },
        {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
          "userId": 1,
          "id": 8,
          "title": "quo adipisci enim quam ut ab",
          "completed": true
        },
        {
          "userId": 1,
          "id": 9,
          "title": "molestiae perspiciatis ipsa",
          "completed": false
        },
        {
          "userId": 1,
          "id": 10,
          "title": "illo est ratione doloremque quia maiores aut",
          "completed": true
        }
      ]
    },
    {
      id:5,
      title:"Project",
      logo:"https://thumbs.dreamstime.com/b/new-project-logo-22067754.jpg",
      url:"/proj",
      Data:[
        {
          "id": 1,
          "name": "Leanne Graham",
          "body": "Bret",
          "title": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Ervin Howell",
          "body": "Antonette",
          "title": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Clementine Bauch",
          "body": "Samantha",
          "title": "Nathan@yesenia.net",
          "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
              "lat": "-68.6102",
              "lng": "-47.0653"
            }
          },
          "phone": "1-463-123-4447",
          "website": "ramiro.info",
          "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
          }
        },
        {
          "id": 4,
          "name": "Patricia Lebsack",
          "body": "Karianne",
          "title": "Julianne.OConner@kory.org",
          "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
              "lat": "29.4572",
              "lng": "-164.2990"
            }
          },
          "phone": "493-170-9623 x156",
          "website": "kale.biz",
          "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
          }
        },
        {
          "id": 5,
          "name": "Chelsey Dietrich",
          "body": "Kamren",
          "title": "Lucio_Hettinger@annie.ca",
          "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
              "lat": "-31.8129",
              "lng": "62.5342"
            }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
          }
        },
        {
          "id": 6,
          "name": "Mrs. Dennis Schulist",
          "body": "Leopoldo_Corkery",
          "title": "Karley_Dach@jasper.info",
          "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
              "lat": "-71.4197",
              "lng": "71.7478"
            }
          },
          "phone": "1-477-935-8478 x6430",
          "website": "ola.org",
          "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
          }
        },
        {
          "id": 7,
          "name": "Kurtis Weissnat",
          "body": "Elwyn.Skiles",
          "title": "Telly.Hoeger@billy.biz",
          "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Howemouth",
            "zipcode": "58804-1099",
            "geo": {
              "lat": "24.8918",
              "lng": "21.8984"
            }
          },
          "phone": "210.067.6132",
          "website": "elvis.io",
          "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
          }
        },
        {
          "id": 8,
          "name": "Nicholas Runolfsdottir V",
          "body": "Maxime_Nienow",
          "title": "Sherwood@rosamond.me",
          "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
              "lat": "-14.3990",
              "lng": "-120.7677"
            }
          },
          "phone": "586.493.6943 x140",
          "website": "jacynthe.com",
          "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
          }
        },
        {
          "id": 9,
          "name": "Glenna Reichert",
          "body": "Delphine",
          "title": "Chaim_McDermott@dana.io",
          "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Bartholomebury",
            "zipcode": "76495-3109",
            "geo": {
              "lat": "24.6463",
              "lng": "-168.8889"
            }
          },
          "phone": "(775)976-6794 x41206",
          "website": "conrad.com",
          "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
          }
        },
        {
          "id": 10,
          "name": "Clementina DuBuque",
          "body": "Moriah.Stanton",
          "title": "Rey.Padberg@karina.biz",
          "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
              "lat": "-38.2386",
              "lng": "57.2232"
            }
          },
          "phone": "024-648-3804",
          "website": "ambrose.net",
          "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
          }
        }
      ]
    }
  ] 
}
  // fetechMobiles(){
  //   this.http.get('http://localhost:5050/mobiles')
  // }
  // taskId:any=3;
  // todoList=[
  //   {
  //     id:1,
  //     'task':'task1'
  //   },
  //   {
  //     id:2,
  //     'task':'task2'
  //   }
  // ]
  // addTodo(taskName:any){
  //   this.todoList.push({
  //     "id":this.taskId++,
  //     'task':taskName
  //   })
  // }
  // deleteTodo(id:any){
  //   this.todoList.splice(id,1);
  // }

  // data = [
  // //   {
  // //     "albumId": 1,
  // //     "id": 1,
  // //     "title": "accusamus beatae ad facilis cum similique qui sunt",
  // //     "url": "https://images.pexels.com/photos/19936782/pexels-photo-19936782/free-photo-of-woman-in-white-dress-walking-on-wet-sea-coast-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 2,
  // //     "title": "reprehenderit est deserunt velit ipsam",
  // //     "url": "https://images.pexels.com/photos/19899301/pexels-photo-19899301/free-photo-of-a-bunch-of-white-lanterns-hanging-from-a-tree.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/771796"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 3,
  // //     "title": "officia porro iure quia iusto qui ipsa ut modi",
  // //     "url": "https://images.pexels.com/photos/18984821/pexels-photo-18984821/free-photo-of-bicycles-by-store-in-amsterdam-netherlands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 4,
  // //     "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  // //     "url": "https://images.pexels.com/photos/16743764/pexels-photo-16743764/free-photo-of-heart-shape-cookies-with-jam.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 5,
  // //     "title": "natus nisi omnis corporis facere molestiae rerum in",
  // //     "url": "https://images.pexels.com/photos/18164727/pexels-photo-18164727/free-photo-of-street-of-valletta-on-malta.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 6,
  // //     "title": "accusamus ea aliquid et amet sequi nemo",
  // //     "url": "https://images.pexels.com/photos/6747320/pexels-photo-6747320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 7,
  // //     "title": "officia delectus consequatur vero aut veniam explicabo molestias",
  // //     "url": "https://images.pexels.com/photos/20035207/pexels-photo-20035207/free-photo-of-red-house-by-the-sea.jpeg",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 8,
  // //     "title": "aut porro officiis laborum odit ea laudantium corporis",
  // //     "url": "https://images.pexels.com/photos/18896623/pexels-photo-18896623/free-photo-of-a-woman-in-a-black-top-and-leather-pants-standing-under-a-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/54176f"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 9,
  // //     "title": "qui eius qui autem sed",
  // //     "url": "https://images.pexels.com/photos/19882073/pexels-photo-19882073/free-photo-of-elderly-man-walking-with-a-rollator-walker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 10,
  // //     "title": "beatae et provident et ut vel",
  // //     "url": "https://images.pexels.com/photos/13817349/pexels-photo-13817349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/810b14"
  // //   },
  // //   {
  // //     "albumId": 1,
  // //     "id": 11,
  // //     "title": "nihil at amet non hic quia qui",
  // //     "url": "https://images.pexels.com/photos/20106909/pexels-photo-20106909/free-photo-of-a-tall-building-with-many-windows-and-balconies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // //     "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
  // //   }
  // ];

