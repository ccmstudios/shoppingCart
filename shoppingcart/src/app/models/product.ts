export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor( 
        id=0,
        name='',
        description='', 
    price=0, 
    imageUrl='https://i.ebayimg.com/images/g/GbgAAOSwUM5Z7gvg/s-l640.jpg',)
        {
this.id = id,
this.name = name,
this.description = description,
this.price = price,
this.imageUrl = imageUrl;
    }
}


