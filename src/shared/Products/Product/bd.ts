import { IProduct } from "./Product";

export const bd: IProduct[] = [
    {
      title: "Чехлы",
      elements: [
        {
          title: "Стеклянные",
          img: "/static/images/products_1.png",
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: 1,
          logo_visible: false,

        },
        {
          title: "Силиконовые",
          img: "/static/images/products_2.png",
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: 2,
          logo_visible: false,

        },
        {
          title: "Кожаные",
          img: "/static/images/products_3.png",
          like: false,
          manufacturer: "apple",
          price: false,
          like_visible: false,
          id: 3,
          logo_visible: false,

        }
      ]
    },
    {
      title: "Наушники",
      elements: [
        {
          title: "Apple EarPods",
          img: "/static/images/products_4.png",
          like: false,
          manufacturer: "apple",
          price: "1 999",
          like_visible: true,
          id: 4,
          logo_visible: false,

        },
        {
          title: "Apple EarPods",
          img: "/static/images/products_5.png",
          like: true,
          manufacturer: "apple",
          price: "1 999",
          like_visible: true,
          id: 5,
          logo_visible: false,

        },
        {
          title: "Apple EarPods",
          img: "/static/images/products_6.png",
          like: false,
          manufacturer: "apple",
          price: "2 999",
          like_visible: true,
          id: 6,
          logo_visible: false,

        }
      ]
    },
    {
      title: "Беспроводные наушники",
      elements: [
        {
          title: "Apple AirPods",
          img: "/static/images/products_7.png",
          like: false,
          manufacturer: "apple",
          price: "12 990",
          like_visible: true,
          id: 7,
          logo_visible: true,

          },
        {
          title: "Apple AirPods Pro",
          img: "/static/images/products_8.png",
          like: false,
          manufacturer: "apple",
          price: "22 999",
          like_visible: true,
          id: 8,
          logo_visible: false,

        },
        {
          title: "Beats",
          img: "/static/images/products_9.png",
          like: false,
          manufacturer: "apple",
          price: "10 000",
          like_visible: true,
          id: 9,
          logo_visible: false,

        }
      ]
    }
  ]